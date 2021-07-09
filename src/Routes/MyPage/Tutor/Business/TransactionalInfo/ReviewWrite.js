import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import { BtnType2 } from "../../../../../Components/Buttons";
import ReviewClassCard from "../../../../../Components/ContentContainer/ReviewClassCard";
import { HeaderType1 } from "../../../../../Components/Headers";
import { PopupType1, PopupType2 } from "../../../../../Components/Popup";
import { CREATE_REVIEW } from "../../../../../gql/Review";

const Container = styled.div`
  width: 100vw;
  max-width: 720px;
  height: calc(100vh - 56px);
  margin: 0 auto;
  margin-top: 56px;
  padding: 0 16px;
  padding-top: 24px;
  position: relative;
`;

const BottomSection = styled.div`
  margin-top: 32px;
`;
const Theme = styled.div`
  ${(p) => p.theme.subTitle2};
  margin-bottom: 8px;
`;
const TextBox = styled.textarea`
  width: 100%;
  min-height: 64px;
  height: fit-content;
  padding: 12px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  margin-bottom: 8px;
  resize: none;
  ::placeholder {
    ${(p) => p.theme.body2}
    color:rgba(0,0,0,.6)
  }
  :focus {
    outline: 0;
  }
`;

const Subscription = styled.div`
  width: 100%;
  ${(p) => p.theme.caption};
  color: rgba(0, 0, 0, 0.6);
`;

const ReviewWrite = ({ history, title: headerTitle }) => {
  const { title, avatar, name, paymentId } = history.location.state;

  const [reviewText, setReviewText] = useState("");
  const [allWritten, setAllWritten] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [rating, setRating] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [alertMessage, setAlertMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [showComplete, setShowComplete] = useState(false);

  const [mutation, { loading }] = useMutation(CREATE_REVIEW, {
    onCompleted: (d) => {
      if (d.createReview.ok) {
        setShowComplete(true);
      } else if (d.createReview.error) {
        setAlertMessage(d.createReview.error);
        setShowAlert(true);
      }
    },
  });
  const createReview = () => {
    if (allWritten && !loading) {
      mutation({ variables: { paymentId, body: reviewText, rate: rating } });
    }
  };

  const closeAll = () => {
    setShowAlert(false);
    setShowComplete(false);
    setIsOn(false);
    setAlertMessage(null);
  };

  useEffect(() => {
    if (reviewText.length >= 10 && rating !== 0) {
      setAllWritten(true);
      setDisabled(false);
    } else {
      setAllWritten(false);
      setDisabled(true);
    }
  }, [reviewText, rating]);

  return (
    <>
      <HeaderType1>{headerTitle}</HeaderType1>
      <Container>
        <ReviewClassCard
          title={title}
          client={name}
          src={avatar}
          rating={rating}
          setRating={setRating}
        />
        <BottomSection>
          <Theme>회원님은 어떠셨나요?</Theme>
          <TextBox
            placeholder="최소 10글자 이상 입력해주세요."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          <Subscription>
            건전한 서비스 이용을 위하여 부적절한 표현은 운영정책에 따라 비공개될
            수 있습니다.
          </Subscription>
        </BottomSection>
      </Container>
      <BtnType2
        allWritten={allWritten}
        disabled={disabled}
        onClick={() => setIsOn(true)}
      >
        저장하기
      </BtnType2>
      {isOn && (
        <PopupType2
          children={
            "작성하신 리뷰는 저장 후 수정이 불가능합니다. 저장하시겠습니까?"
          }
          rightBtnText={"저장하기"}
          cancel={true}
          onClickRemove={() => setIsOn(false)}
          onClickCancel={() => setIsOn(false)}
          onClick={createReview}
        />
      )}
      {showAlert && (
        <PopupType1
          children={alertMessage}
          onClickRemove={closeAll}
          onClick={closeAll}
        />
      )}
      {showComplete && (
        <PopupType1
          children={"리뷰가 저장되었습니다."}
          onClickRemove={closeAll}
          onClick={() => {
            closeAll();
            history.replace("/my/saleHistory");
          }}
        />
      )}
    </>
  );
};

export default withRouter(ReviewWrite);
