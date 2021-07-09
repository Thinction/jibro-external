import React, { useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowDown, MdCheckBox } from "react-icons/md";
import { useLocation, withRouter } from "react-router";
import { HeaderType3 } from "../../../../../Components/Headers";
import PurchaseCard from "../../../../../Components/ContentContainer/PurchaseCard";
import { BtnType2 } from "../../../../../Components/Buttons";
import { makeReference, useMutation, useQuery } from "@apollo/client";
import { GET_RESERVATION } from "../../../../../gql/Reservation";
import splitter from "../../../../../Components/Utils/splitter";
import { GET_MY_JIBRO_CASH } from "../../../../../gql/User";
import dateConverter from "../../../../../Components/Utils/dateConverter";
import useInput from "../../../../../Hooks/UseInput";
import { CREATE_PAYMENT } from "../../../../../gql/Payment";
import { PopupType1 } from "../../../../../Components/Popup";

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
  padding: 24px 16px 0 16px;
  position: relative;
  background-color: #fff;
`;

const VerifySection = styled.div`
  margin-top: 8px;
`;

const ThemeRaw = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  svg {
    transition: all ease-in-out 0.2s;
    transform: ${(p) => (p.isOn ? "rotate(180deg)" : "unset")};
  }
`;

const Theme = styled.div`
  ${(p) => p.theme.body1}
`;

const PurchaseContents = styled.div`
  margin-left: 16px;
  color: rgba(0, 0, 0, 0.6);
`;

const PurchaseText = styled.div`
  ${(p) => p.theme.body2};
  color: rgba(0, 0, 0, 0.6);
  padding-top: 8px;
`;

const PriceRaw = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const PriceLeft = styled.div`
  ${(p) => p.theme.subTitle1};
`;

const PriceRight = styled.div`
  ${(p) => p.theme.subTitle1};
  color: ${(p) => p.theme.themeColor};
`;

const PaymentSection = styled.div`
  margin-top: 16px;
`;

const ChargeBtn = styled.button`
  ${(p) => p.theme.btnText};
  color: #4708ae;
`;

const PaymentRaw = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PriceInput = styled.input`
  ${(p) => p.theme.caption};
  width: 228px;
  height: 40px;
  padding: 12px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
`;

const PaymentBtn = styled.button`
  ${(p) => p.theme.subTitle2};
  width: 84px;
  height: 40px;
  text-align: center;
  color: #4708ae;
  border: 1px solid #4708ae;
  border-radius: 8px;
`;

const CheckSection = styled.div`
  display: flex;
  margin-top: 16px;
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

const Caption = styled.div`
  ${(p) => p.theme.body2};
  color: rgba(0, 0, 0, 0.6);
`;

const Purchase = ({ title, history }) => {
  const location = useLocation();
  const getParams = location.state;
  const reservationId = getParams.reservationId;
  const [many, setMany] = useState();
  const [period, setPeriod] = useState();
  const [count, setCount] = useState();
  const [price, setPrice] = useState();
  const [displayPrice, setDisplayPrice] = useState();
  const cash = useInput();

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const resetAlert = () => {
    setShowAlert(false);
    setAlertMessage("네트워크 문제입니다. 잠시 후 다시 시도해주세요");
  };

  const { data: cashData } = useQuery(GET_MY_JIBRO_CASH, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
  });

  const { data, loading } = useQuery(GET_RESERVATION, {
    variables: { reservationId },
    onCompleted: (d) => {
      if (d.getReservation.ok) {
        const [many, period, count] = splitter(
          d?.getReservation?.reservation.service.numOfClass
        );
        setDisplayPrice(
          d?.getReservation?.reservation.isPreview
            ? d?.getReservation?.reservation.service.displayPreviewPrice
            : d?.getReservation?.reservation.service.displayPrice
        );
        setPrice(
          d?.getReservation?.reservation.isPreview
            ? d?.getReservation?.reservation.service.previewPrice
            : d?.getReservation?.reservation.service.price
        );
        setMany(many);
        setPeriod(period);
        setCount(count);
      }
    },
  });

  const [mutation, { loading: mutationLoading }] = useMutation(CREATE_PAYMENT, {
    onCompleted: (d) => {
      if (d.createPayment.ok) {
        history.replace("/my/saleHistory");
      } else if (d.createPayment.error) {
        setShowAlert(true);
        setAlertMessage(d.createPayment.error);
      } else {
        setShowAlert(true);
        setAlertMessage("네트워크 문제입니다. 잠시 후 다시 시도해주세요.");
      }
    },
  });

  const createPayment = () => {
    if (!mutationLoading) {
      mutation({
        variables: { reservationId },
      });
    }
  };

  const [agreeCheck, setAgreeCheck] = useState(false);
  const [isOn, setIsOn] = useState(true);
  const isOnClick = () => {
    setIsOn(!isOn);
  };

  const onClickClose = () => {
    history.go(-1);
  };

  return (
    !loading && (
      <Wrapper>
        <HeaderType3 closeFunc={onClickClose}>{title}</HeaderType3>
        <Container>
          <PurchaseCard
            imgSrc={data?.getReservation?.reservation.to.avatar}
            title={data?.getReservation?.reservation.service.title}
            tutor={data?.getReservation?.reservation.to.name}
            date={dateConverter(data?.getReservation?.reservation.hopeDate)}
          />
          <VerifySection>
            <ThemeRaw isOn={isOn}>
              <Theme>결제 금액 확인</Theme>
              <MdKeyboardArrowDown size={24} onClick={isOnClick} />
            </ThemeRaw>
            {isOn && (
              <PurchaseContents>
                <PurchaseText>
                  {`${data?.getReservation?.reservation.service.displayClassType} ${many} ${period}`}
                </PurchaseText>
                <PurchaseText>
                  {`회당 교육 시간 : 
                  ${data?.getReservation?.reservation.service.timePerClass.replace(
                    "||",
                    ""
                  )}
                  `}
                </PurchaseText>
                <PurchaseText>교육 횟수 : {count}회</PurchaseText>
                <PriceRaw>
                  <PriceLeft>총 결제금액</PriceLeft>
                  <PriceRight>{displayPrice}</PriceRight>
                </PriceRaw>
              </PurchaseContents>
            )}
          </VerifySection>
          <PaymentSection>
            <ThemeRaw>
              <Theme>지브로 캐시 결제</Theme>
              <ChargeBtn>충전하기</ChargeBtn>
            </ThemeRaw>
            <PaymentRaw>
              <PriceInput
                placeholder={`보유캐시: ${cashData?.getMyJibroCash.displayCash}`}
                value={cash.value}
                onChange={cash.onChange}
                readOnly
              />
              <PaymentBtn
                onClick={() => {
                  if (price <= cashData?.getMyJibroCash.cash) {
                    cash.onChange({ target: { value: displayPrice } });
                  } else {
                    cash.onChange({
                      target: { value: cashData?.getMyJibroCash.displayCash },
                    });
                  }
                }}
              >
                사용하기
              </PaymentBtn>
            </PaymentRaw>
          </PaymentSection>
          <CheckSection
            onClick={() => setAgreeCheck(!agreeCheck)}
            agreeCheck={agreeCheck}
          >
            <MdCheckBox size={24} />
            <TextWrap>
              <Caption style={{ color: "#000" }}>
                주문 내용을 확인하였으며, 결제에 동의합니다.
              </Caption>
              <Caption style={{ color: "#4708AE" }}>(필수)</Caption>
            </TextWrap>
          </CheckSection>
        </Container>
        <BtnType2
          allWritten={
            agreeCheck && cash.value && price <= cashData?.getMyJibroCash.cash
          }
          disabled={
            !(
              agreeCheck &&
              cash.value &&
              price <= cashData?.getMyJibroCash.cash
            )
          }
          onClick={createPayment}
        >
          구매하기
        </BtnType2>
        {showAlert && (
          <PopupType1
            children={alertMessage}
            onClickRemove={resetAlert}
            onClick={resetAlert}
          />
        )}
      </Wrapper>
    )
  );
};

export default withRouter(Purchase);
