import { gql, useLazyQuery, useMutation } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router";
import styled from "styled-components";
import { BtnType2 } from "../../Components/Buttons";
import { HeaderType1 } from "../../Components/Headers";
import {
  EmailInput,
  PasswordInput,
  PhoneCertInput,
  PhoneNumberInput,
} from "../../Components/InputBox";
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
const GET_USER_WHEN_FIND_PASSWORD = gql`
  query getUserWhenFindPassword($email: String!, $phoneNumber: String!) {
    getUserWhenFindPassword(email: $email, phoneNumber: $phoneNumber) {
      ok
      user {
        id
      }
      error
    }
  }
`;
const CHANGE_PASSWORD = gql`
  mutation changePassword($id: String!, $password: String!) {
    changePassword(id: $id, password: $password) {
      ok
      error
    }
  }
`;

const FindPw = ({ location }) => {
  const history = useHistory();
  // cert
  const [email, setEmail] = useState("");
  const [confirmEamil, setConfirmEmail] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phonePopUp, setPhonePopUp] = useState(false);
  const [randomNumber, setRandomNumber] = useState();
  const [certNumber, setCertNumber] = useState("");
  const [certPopUp, setCertPopUp] = useState(false);
  const [compare, setCompare] = useState(false);
  const [didCompare, setDidCompare] = useState(false);
  const [confirmPopUp, setConfirmPopUp] = useState(false);
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
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
  const onClickConfirmPopUp = () => {
    setConfirmPopUp(false);
  };
  const [queryError, setQeuryError] = useState();
  const [getUserQuery] = useLazyQuery(GET_USER_WHEN_FIND_PASSWORD, {
    onCompleted: (d) => {
      if (d.getUserWhenFindPassword.ok) {
        history.push("?resetPw", d.getUserWhenFindPassword.user.id);
      } else {
        setQeuryError(d.getUserWhenFindPassword.error);
        setConfirmPopUp(true);
      }
    },
  });
  const onClickToChangePassword = () => {
    getUserQuery({
      variables: {
        email,
        phoneNumber,
      },
    });
  };

  // password
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [passwordPopUp, setPasswordPopUp] = useState(false);
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeRePassword = (e) => {
    setRePassword(e.target.value);
  };
  const [changePasswordMutation, { changeLoading }] = useMutation(
    CHANGE_PASSWORD,
    {
      onCompleted: (d) => {
        if (d.changePassword.ok) {
          setPasswordPopUp(true);
        } else {
          alert(d.changePassword.error);
        }
      },
    }
  );
  const onClickChangePassword = () => {
    if (!changeLoading) {
      changePasswordMutation({
        variables: {
          id: location.state,
          password,
        },
      });
    }
  };
  const onClickPasswordPopUp = () => {
    setPasswordPopUp(false);
    history.push("/");
  };
  useEffect(() => {
    if (password === rePassword) {
      if (password === "" || rePassword === "") {
        setIsCorrect(false);
      } else {
        setIsCorrect(true);
      }
    } else {
      setIsCorrect(false);
    }
  }, [password, rePassword]);

  const [allWritten, setAllWritten] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (history.location.search === "") {
      if (confirmEamil && compare) {
        setAllWritten(true);
        setDisabled(false);
      } else {
        setAllWritten(false);
        setDisabled(true);
      }
    }
    if (history.location.search === "?resetPw") {
      if (isCorrect && password !== "") {
        setAllWritten(true);
        setDisabled(false);
      } else {
        setAllWritten(false);
        setDisabled(true);
      }
    }
  }, [confirmEamil, compare, password, isCorrect, history.location.search]);

  return (
    (history.location.search === "" && (
      <Container>
        <HeaderType1>비밀번호 찾기</HeaderType1>
        <TextTitle>비밀번호를 잊으셨나요?</TextTitle>
        <TextSub>
          내&nbsp;정보에&nbsp;등록된 휴대전화&nbsp;인증으로
          비밀번호를&nbsp;재설정&nbsp;해드릴게요.
        </TextSub>
        <EmailInput
          marginTop={"24px"}
          value={email}
          onChange={onChangeEmail}
          setConfirmEmail={setConfirmEmail}
          hasErrorText={true}
        />
        <PhoneNumberInput
          btnText="전송"
          value={phoneNumber}
          onChange={onChangePhoneNumber}
          marginTop={"24px"}
          onClick={onClickSendSMS}
          compare={compare}
        />
        <PhoneCertInput
          btnText="인증"
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
          onClick={onClickToChangePassword}
        >
          비밀번호 재설정
        </BtnType2>
        {phonePopUp && (
          <PopupType1 onClick={onClickPhonePopUp}>
            인증번호가 입력하신 휴대전화로 전송되었습니다.
          </PopupType1>
        )}
        {certPopUp && (
          <PopupType1 onClick={onClickCertPopUp}>
            인증번호 확인이 완료되었습니다.
          </PopupType1>
        )}
        {confirmPopUp && (
          <PopupType1 onClick={onClickConfirmPopUp}>{queryError}</PopupType1>
        )}
      </Container>
    )) ||
    (history.location.search === "?resetPw" && (
      <>
        <Container>
          <HeaderType1>비밀번호 재설정</HeaderType1>
          <PasswordInput
            marginTop={"16px"}
            value={password}
            onChange={onChangePassword}
            isCorrect={isCorrect}
            hasErrorText={true}
            type={"password"}
          />
          <PasswordInput
            marginTop={"32px"}
            confirm={true}
            value={rePassword}
            onChange={onChangeRePassword}
            isCorrect={isCorrect}
            hasErrorText={true}
            type={"rePassword"}
          />
          <BtnType2
            allWritten={allWritten}
            disabled={disabled}
            onClick={onClickChangePassword}
          >
            비밀번호 변경하기
          </BtnType2>
        </Container>
        {passwordPopUp && (
          <PopupType1 onClick={onClickPasswordPopUp}>
            비밀번호가&nbsp;재설정되었습니다.
            새&nbsp;비밀번호로&nbsp;로그인해주세요.
          </PopupType1>
        )}
      </>
    ))
  );
};

export default withRouter(FindPw);
