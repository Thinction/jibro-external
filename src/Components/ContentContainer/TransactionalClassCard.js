import React, { useState } from "react";
import styled from "styled-components";
import { ProfileSquare, StatusIcon } from "../IconPack";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { withRouter } from "react-router";
import theme from "../../Styles/theme";
import dateConverter from "../Utils/dateConverter";

const SectionMiddle = styled.div`
  display: flex;
  margin-top: 16px;
`;

const CardInfoWrap = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CardInfoText = styled.div`
  ${(p) => p.theme.body2}
  font-weight:500;
`;

const UnderLinedText = styled.span`
  color: rgba(0, 78, 255, 0.87);
  text-decoration: underline;
`;

const SectionBottom = styled.div`
  width: 100%;
  display: flex;
  margin-top: 16px;
  justify-content: ${(p) =>
    p.status === "결제 완료" ? "space-between" : "flex-end"};
`;

const CardButton = styled.div`
  ${(p) => p.theme.subTitle2}
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(p) => (p.coloredBtn ? "none" : "1px solid rgba(0, 0, 0, .12)")};
  border-radius: 8px;
  background: ${(p) => (p.coloredBtn ? p.coloredBtn : "#fff")};
  color: ${(p) => (p.coloredBtn ? "#fff" : "rgba(0, 0, 0, 0.6)")};
  margin-right: ${(props) => props.status === "결제 대기" && "14px"};
`;

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 26px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  &:first-child {
    padding-top: unset;
  }
`;

const CardTop = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
`;

const CardTheme = styled.div`
  ${(p) => p.theme.subTitle2};
  margin-left: 8px;
`;

const ProfitsWrap = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

const ProfitsTheme = styled.div`
  ${(p) => p.theme.body1}
`;

const ProfitsContents = styled.div`
  margin-top: 8px;
  margin-left: 16px;
  color: rgba(0, 0, 0, 0.6);
`;

const ChargeRaw = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChargeText = styled.div`
  ${(p) => p.theme.body2};
  color: rgba(0, 0, 0, 0.6);
`;

const ProfitsRaw = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const ProfitsText = styled.div`
  ${(p) => p.theme.subTitle1};
  font-weight: 500;
`;

const stateDict = {
  PaymentFinished: { text: "결제 완료", color: theme.themeColor },
  RefundWaiting: { text: "환불 요청", color: theme.themeColorError },
  RefundFinished: { text: "환불 완료", color: theme.themeColorSecondary },
};

const TransactionalClassCard = ({
  data,
  setBtnState,
  history,
  setSelectedId,
}) => {
  const paymentState = stateDict[data.paymentState];
  const hopeDate = dateConverter(data.reservation.hopeDate);
  const [isOn, setIsOn] = useState(false);
  const isOnClick = () => {
    setIsOn(!isOn);
  };
  return (
    <CardWrapper>
      <CardTop>
        <StatusIcon type={paymentState} />
        <CardTheme>
          <a href={`/serviceDetail/${data.service.id}`}>{data.service.title}</a>
        </CardTheme>
      </CardTop>
      <SectionMiddle>
        <ProfileSquare size={96} border={8} src={data.from.avatar} />
        <CardInfoWrap>
          <CardInfoText>주문번호: {data.displayIdNumber}</CardInfoText>
          <CardInfoText>
            의뢰인:{" "}
            <UnderLinedText>
              <a href={`/profile/${data.from.id}`}>{data.from.name}</a>
            </UnderLinedText>
          </CardInfoText>
          <CardInfoText>{`희망일: ${
            hopeDate.getMonth() + 1
          }월 ${hopeDate.getDate()}일`}</CardInfoText>
        </CardInfoWrap>
      </SectionMiddle>
      {paymentState.text === "결제 완료" && (
        <>
          <ProfitsWrap>
            <ProfitsTheme>수익금 확인</ProfitsTheme>
            {isOn ? (
              <MdKeyboardArrowUp size={24} onClick={isOnClick} />
            ) : (
              <MdKeyboardArrowDown size={24} onClick={isOnClick} />
            )}
          </ProfitsWrap>
          {isOn && (
            <ProfitsContents>
              <ChargeRaw>
                <ChargeText>서비스 이용료 (5%)</ChargeText>
                <ChargeText>-{data.displayTax}</ChargeText>
              </ChargeRaw>
              <ProfitsRaw>
                <ProfitsText>최종 수익금</ProfitsText>
                <ProfitsText style={{ color: theme.themeColor }}>
                  {data.displayIncome}
                </ProfitsText>
              </ProfitsRaw>
            </ProfitsContents>
          )}
        </>
      )}
      <SectionBottom status={paymentState.text}>
        {paymentState.text === "결제 완료" && (
          <>
            <CardButton
              onClick={() => {
                setBtnState("payCancel");
                setSelectedId(data.id);
              }}
            >
              결제 취소
            </CardButton>
            {!data.amIwortedReview && (
              <CardButton
                onClick={() =>
                  history.push({
                    pathname: "/my/reviewWrite",
                    state: {
                      title: data.service.title,
                      avatar: data.from.avatar,
                      name: data.from.name,
                      paymentId: data.id,
                      // 전문가 입장에서 리뷰로 넘어가는 사람은 유저임
                    },
                  })
                }
              >
                리뷰 작성
              </CardButton>
            )}
            <CardButton
              onClick={() => {
                setBtnState("removeHistory");
                setSelectedId(data.id);
              }}
              coloredBtn={theme.themeColorError}
            >
              삭제
            </CardButton>
          </>
        )}
        {paymentState.text === "환불 요청" && (
          <CardButton
            onClick={() => {
              setBtnState("refundAccept");
              setSelectedId(data.id);
            }}
          >
            환불 수락
          </CardButton>
        )}
        {paymentState.text === "환불 완료" && (
          <CardButton
            onClick={() => {
              setBtnState("removeHistory");
              setSelectedId(data.id);
            }}
            coloredBtn={theme.themeColorError}
          >
            삭제
          </CardButton>
        )}
      </SectionBottom>
    </CardWrapper>
  );
};

export default withRouter(TransactionalClassCard);
