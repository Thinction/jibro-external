import React, { useState } from "react";
import styled from "styled-components";
import { MdStar, MdMoreVert } from "react-icons/md";
import getDate from "./Utils/getDate";
import nameFiltering from "./Utils/nameFiltering";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 24px;
  :last-child {
    margin-bottom: 0;
  }
`;

const ProfileWrap = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 16px;
  position: relative;
`;

const ServiceReviewProfileImg = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 50%;
  margin-right: 16px;
`;

const ServiceReviewProfileInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NameWrap = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
`;

const ServiceReviewName = styled.div`
  ${(p) => p.theme.subTitle2}
  border-right: 1px solid rgba(0,0,0,.12);
  padding-right: 8px;
`;

const ServiceReviewRate = styled.div`
  width: 90px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 8px;
`;

const ServiceReviewDate = styled.div`
  ${(p) => p.theme.body2}
  color: rgba(0,0,0,.6);
`;

const ServiceReviewText = styled.div`
  width: 100%;
  ${(p) => p.theme.body2}
`;

const ServiceReviewIconWrap = styled.div`
  position: absolute;
  right: 0;
`;

const DeleteBtn = styled.button`
  width: 128px;
  height: 48px;
  border-radius: 8px;
  ${(p) => p.theme.body2}
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const UserRatings = ({ ratingCount }) => {
  const totalRate = [1, 2, 3, 4, 5];
  const emptyGrayColor = "rgba(0, 0, 0, .38)";
  const coloredYellow = "#FFEE21";

  const ratingStars = () => {
    const fill = (index) => {
      if (ratingCount >= index) {
        return coloredYellow;
      } else {
        return emptyGrayColor;
      }
    };
    return totalRate.map((index) => {
      return <MdStar color={fill(index)} size={18} key={index} />;
    });
  };

  return ratingStars();
};

export const ServiceReview = ({
  src,
  name,
  ratingCount,
  text,
  isMe,
  reviewDate,
}) => {
  const [more, setMore] = useState(false);

  const moreBtnClick = () => {
    setMore(!more);
  };
  return (
    <Container>
      <ProfileWrap>
        <ServiceReviewProfileImg src={src} />
        <ServiceReviewProfileInfoWrap>
          <NameWrap>
            <ServiceReviewName>{nameFiltering(name)}</ServiceReviewName>
            <ServiceReviewRate>
              {<UserRatings ratingCount={ratingCount} />}
            </ServiceReviewRate>
            {isMe && (
              <ServiceReviewIconWrap onClick={moreBtnClick}>
                <MdMoreVert size={24} />
              </ServiceReviewIconWrap>
            )}
            {more && <DeleteBtn>삭제하기</DeleteBtn>}
          </NameWrap>
          <ServiceReviewDate>{getDate(parseInt(reviewDate))}</ServiceReviewDate>
        </ServiceReviewProfileInfoWrap>
      </ProfileWrap>
      <ServiceReviewText>{text}</ServiceReviewText>
    </Container>
  );
};
