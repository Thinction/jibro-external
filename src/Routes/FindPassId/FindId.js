import { gql, useMutation } from "@apollo/client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BtnType2 } from "../../Components/Buttons";
import { HeaderType1 } from "../../Components/Headers";
import { PhoneCertInput, PhoneNumberInput } from "../../Components/InputBox";
import { PopupType1 } from "../../Components/Popup";

const Container = styled.div`
  width: calc(100% - 32px);
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 56px;
`;

const TextTitle = styled.div`
  ${(props) => props.theme.subTitle2};
  margin-top: 16px;
  width: 100%;
`;

const TextSub = styled.div`
  ${(props) => props.theme.body2};
  margin-top: 16px;
  word-break: keep-all;
`;

const SEND_SMS = gql`
  mutation sendSMS($phoneNumber: String!) {
    sendSMS(phoneNumber: $phoneNumber) {
      ok
      number
      error
    }
  }
`;
const FIND_USER_EMAIL = gql`
  mutation findUserEmail($phoneNumber: String!) {
    findUserEmail(phoneNumber: $phoneNumber) {
      ok
      email
      error
    }
  }
`;

const FindId = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phonePopUp, setPhonePopUp] = useState(false);
  const [randomNumber, setRandomNumber] = useState();
  const [certNumber, setCertNumber] = useState("");
  const [certPopUp, setCertPopUp] = useState(false);
  const [compare, setCompare] = useState(false);
  const [didCompare, setDidCompare] = useState(false);
  const onChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const onChangeCertNumber = (e) => {
    setCertNumber(e.target.value);
  };
  const onClickPhonePopUp = () => {
    setPhonePopUp(false);
  };
  const [sendSmsMutation, { loading }] = useMutation(SEND_SMS, {
    onCompleted: (d) => {
      if (d.sendSMS.ok) {
        setPhonePopUp(!phonePopUp);
        setRandomNumber(d.sendSMS.number);
      }
    },
  });
  const onClickSendSMS = (phoneNumber) => {
    if (!loading) {
      sendSmsMutation({
        variables: {
          phoneNumber,
        },
      });
    }
  };
  const onClickCertPopUp = () => {
    setCertPopUp(false);
  };
  const onClickCompare = () => {
    if (randomNumber === certNumber) {
      setDidCompare(true);
      setCompare(true);
      setCertPopUp(true);
    } else {
      setDidCompare(true);
    }
  };

  const [allWritten, setAllWritten] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (compare) {
      setAllWritten(true);
      setDisabled(false);
    } else {
      setAllWritten(false);
      setDisabled(true);
    }
  }, [phoneNumber, certNumber, disabled, compare]);

  const [email, setEmail] = useState();
  const [resultPopUp, setResultPopUp] = useState(false);
  const onClickResultPopUp = () => {
    setResultPopUp(false);
  };
  const [findUserEmailMutation, { findLoading }] = useMutation(
    FIND_USER_EMAIL,
    {
      onCompleted: (d) => {
        if (d.findUserEmail.ok) {
          setEmail(d.findUserEmail.email);
          setResultPopUp(true);
        }
      },
    }
  );
  const onClickFindEmail = () => {
    if (!findLoading) {
      findUserEmailMutation({
        variables: {
          phoneNumber,
        },
      });
    }
  };
  return (
    <>
      <Container>
        <HeaderType1>????????? ??????</HeaderType1>
        <TextTitle>???????????? ????????????????</TextTitle>
        <TextSub>
          ???&nbsp;?????????&nbsp;????????? ????????????&nbsp;????????????
          ????????????&nbsp;??????????????????.
        </TextSub>
        <PhoneNumberInput
          btnText="??????"
          value={phoneNumber}
          onChange={onChangePhoneNumber}
          marginTop={"24px"}
          onClick={onClickSendSMS}
          compare={compare}
        />
        <PhoneCertInput
          btnText="??????"
          value={certNumber}
          onChange={onChangeCertNumber}
          marginTop={"32px"}
          compare={compare}
          didCompare={didCompare}
          onClick={onClickCompare}
        />
        <BtnType2
          allWritten={allWritten}
          disabled={disabled}
          onClick={onClickFindEmail}
        >
          ????????? ??????
        </BtnType2>
      </Container>
      {resultPopUp && (
        <PopupType1 onClick={onClickResultPopUp}>
          ???????????? ????????????{" "}
          {email.length !== 0
            ? email.map((item) => `${item} `)
            : "???????????? ?????? "}
          ?????????.
        </PopupType1>
      )}
      {phonePopUp && (
        <PopupType1 onClick={onClickPhonePopUp}>
          ??????????????? ???????????? ??????????????? ?????????????????????.
        </PopupType1>
      )}
      {certPopUp && (
        <PopupType1 onClick={onClickCertPopUp}>
          ???????????? ????????? ?????????????????????.
        </PopupType1>
      )}
    </>
  );
};

export default FindId;
