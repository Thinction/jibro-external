import React, { useState } from "react";
import styled from "styled-components";
import { ProfileSquare, StatusIcon } from "../IconPack";
import { MdKeyboardArrowDown } from "react-icons/md";
import { withRouter } from "react-router";
import theme from "../../Styles/theme";
import dateConverter from "../Utils/dateConverter";
import splitter from "../Utils/splitter";

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

const PaymentsWrap = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  svg {
    transition: all ease-in-out 0.2s;
    transform: ${(p) => (p.isOn ? "rotate(180deg)" : "unset")};
  }
`;

const ProfitsTheme = styled.div`
  ${(p) => p.theme.body1}
`;

const ProfitsContents = styled.div`
  margin-top: 8px;
  margin-left: 16px;
  color: rgba(0, 0, 0, 0.6);
`;

const PurchaseContents = styled.div`
  color: rgba(0, 0, 0, 0.6);
`;

const PurchaseText = styled.div`
  ${(p) => p.theme.body2};
  color: rgba(0, 0, 0, 0.6);
  padding-top: 8px;
`;

const PurchaseRaw = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const PurchaseLeft = styled.div`
  ${(p) => p.theme.subTitle1};
`;

const PurchaseRight = styled.div`
  ${(p) => p.theme.subTitle1};
  color: ${(p) => p.theme.themeColor};
`;
const stateDict = {
  PaymentFinished: { text: "결제 완료", color: theme.themeColor },
  RefundWaiting: { text: "환불 요청", color: "rgba(0, 0, 0, .38)" },
  RefundFinished: { text: "환불 완료", color: theme.themeColorSecondary },
};

const TransactionalClassCard = ({
  history,
  data,
  setBtnState,
  setSelectedId,
}) => {
  const paymentState = stateDict[data.paymentState];
  const hopeDate = dateConverter(data.reservation.hopeDate);
  const [many, period, count] = splitter(data.service.numOfClass);
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
        <ProfileSquare size={96} border={8} src={data.to.avatar} />
        <CardInfoWrap>
          <CardInfoText>주문번호: {data.displayIdNumber}</CardInfoText>
          <CardInfoText>
            전문가:{" "}
            <UnderLinedText>
              <a href={`/profile/${data.to.id}`}>{data.to.name}</a>
            </UnderLinedText>
          </CardInfoText>
          <CardInfoText>
            희망일: {hopeDate.getMonth() + 1}월 {hopeDate.getDate()}일
          </CardInfoText>
        </CardInfoWrap>
      </SectionMiddle>
      <PaymentsWrap isOn={isOn}>
        <ProfitsTheme>결제 금액 확인</ProfitsTheme>
        <MdKeyboardArrowDown size={24} onClick={isOnClick} />
      </PaymentsWrap>
      {isOn && (
        <ProfitsContents>
          <PurchaseContents>
            <PurchaseText>
              {`${data.service.displayClassType} ${many}${period}`}
            </PurchaseText>
            <PurchaseText>
              {`회당 교육 시간 : 
                  ${data.service.timePerClass.replace("||", "")}
                  `}
            </PurchaseText>
            <PurchaseText>
              교육 횟수 : {`${many}${period} ${count}회`}
            </PurchaseText>
          </PurchaseContents>
          <PurchaseRaw>
            <PurchaseLeft>총 결제금액</PurchaseLeft>
            <PurchaseRight>{data.displayPrice}</PurchaseRight>
          </PurchaseRaw>
        </ProfitsContents>
      )}
      <SectionBottom status={paymentState.text}>
        {paymentState.text === "결제 완료" && (
          <>
            <CardButton
              onClick={() => {
                setBtnState("requestRefund");
                setSelectedId(data.id);
              }}
            >
              환불 요청
            </CardButton>
            {!data.amIwortedReview && (
              <CardButton
                onClick={() =>
                  history.push({
                    pathname: "/my/reviewWrite",
                    state: {
                      title: data.service.title,
                      avatar: data.to.avatar,
                      name: data.to.name,
                      paymentId: data.id,
                      // 유저 입장에서 리뷰로 넘어가는 사람은 전문가임
                    },
                  })
                }
              >
                리뷰 작성
              </CardButton>
            )}
            <CardButton coloredBtn={theme.themeColorError}>삭제</CardButton>
          </>
        )}
        {paymentState.text === "환불 요청" && (
          <CardButton
            onClick={() => {
              setBtnState("refundCancel");
              setSelectedId(data.id);
            }}
          >
            요청 취소
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
