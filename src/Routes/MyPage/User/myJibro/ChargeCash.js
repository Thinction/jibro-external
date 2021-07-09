import React, { useState } from "react";
import styled from "styled-components";
import { BtnType2 } from "../../../../Components/Buttons";
import { HeaderType1 } from "../../../../Components/Headers";
import { MdCheckBox } from "react-icons/md";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  max-width: 720px;
  width: 100%;
  height: fit-content;
  min-height: calc(100vh - 56px);
  margin: 0 auto;
  background: #fff;
`;

const Container = styled.div`
  width: 100vw;
  max-width: 720px;
  min-height: calc(100vh - 56px);
  height: fit-content;
  margin: 0 auto;
  margin-top: 56px;
  position: relative;
  padding-bottom: 38px;
  padding: 0 16px;
`;

const TextBox = styled.div`
  width: 100%;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  ${(p) => p.theme.subTitle1};
  font-weight: 500;
  margin-bottom: 5px;
`;

const Caption = styled.div`
  ${(p) => p.theme.body2};
  color: rgba(0, 0, 0, 0.6);
`;

const CashButtonBox = styled.div`
  width: 100%;
  justify-content: space-between;
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
`;

const CashBtn = styled.button`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(p) => p.theme.subTitle2};
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  margin-bottom: 16px;
  color: ${(p) => (p.status ? "#fff" : "rgba(0,0,0,.6)")};
  background-color: ${(p) => (p.status ? "#4708AE" : "transparent")};
`;

const Theme = styled.div`
  width: 100%;
  height: 48px;
  ${(p) => p.theme.body1};
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

const PayButtonBox = styled.div`
  width: 100%;
  justify-content: space-between;
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
`;

const PayBtn = styled.button`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(p) => p.theme.subTitle2};
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
`;

const Img = styled.img``;

const CheckBox = styled.div`
  display: flex;
  margin-top: 86px;
  align-items: center;
  svg {
    color: ${(p) => (p.agreeCheck ? p.theme.themeColor : "rgba(0, 0, 0, .6)")};
  }
`;

const TextWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 8px;
`;

const ChargeCash = ({ title }) => {
  const history = useHistory();
  const [status, setStatus] = useState(0);
  const [agreeCheck, setAgreeCheck] = useState(false);

  const CashPrice = [50000, 100000, 300000, 500000, 1000000, 1500000];
  const removeZero = (num) => {
    const split = String(num).split("");
    split.splice(-4, 4);
    const removedNumber = parseInt(split.join(""));
    return removedNumber;
  };

  return (
    <Wrapper>
      <HeaderType1
        onClickFunc={() => {
          history.go(-1);
        }}
      >
        {title}
      </HeaderType1>
      <Container>
        <TextBox>
          <Title>충전금액을 선택하세요.</Title>
          <Caption>*최대 충전 가능캐시: 1,500,000원</Caption>
        </TextBox>
        <CashButtonBox>
          {CashPrice.map((item, index) => (
            <CashBtn
              key={index}
              status={status === index}
              onClick={() => {
                setStatus(index);
              }}
              value={item}
            >
              +{removeZero(item)}만원
            </CashBtn>
          ))}
        </CashButtonBox>
        <Theme>결제 방법</Theme>
        <PayButtonBox>
          <PayBtn>신용카드</PayBtn>
          <PayBtn>
            <Img src="/img/toss.png" />
          </PayBtn>
          <PayBtn>
            <Img src="/img/kakaoPay.png" />
          </PayBtn>
        </PayButtonBox>
        <CheckBox
          agreeCheck={agreeCheck}
          onClick={() => setAgreeCheck(!agreeCheck)}
        >
          <MdCheckBox size={24} />
          <TextWrap>
            <Caption style={{ color: "#000" }}>
              주문 내용을 확인하였으며, 결제에 동의합니다.
            </Caption>
            <Caption style={{ color: "#4708AE" }}>(필수)</Caption>
          </TextWrap>
        </CheckBox>
      </Container>
      <BtnType2
        allWritten={agreeCheck}
        disabled={agreeCheck ? agreeCheck && false : true}
      >
        충전하기
      </BtnType2>
    </Wrapper>
  );
};

export default ChargeCash;
