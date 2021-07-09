import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { MdCheckBox } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logUserIn } from "../../client";
import { BtnType1 } from "../../Components/Buttons";
import { TypoLogo } from "../../Components/IconPack";
import { EmailInput, PasswordInput } from "../../Components/InputBox";
import theme from "../../Styles/theme";

const Container = styled.div`
  width: calc(100% - 32px);
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoWrapper = styled.div`
  margin-top: 64px;
  margin-bottom: 40px;
`;

const InputBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

const AutoLoginCheck = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  svg {
    color: ${(p) => (p.checked ? p.theme.themeColor : "rgba(0, 0, 0, .38)")};
  }
`;

const CheckBox = styled.input`
  width: 18px;
  height: 18px;
  position: absolute;
  opacity: 0;
`;

const CheckBoxLabel = styled.label`
  ${(props) => props.theme.body2};
`;

const FindBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 167px;
`;

const TextBtn = styled.div`
  ${(props) => props.theme.body2};
  color: ${(props) => props.theme.themeColor};
  cursor: pointer;
  &.withBorder {
    padding-left: 8px;
    border-left: 1px solid rgba(0, 0, 0, 0.12);
  }
`;

const SignUpWrapper = styled.div`
  width: 100%;
  max-width: 212px;
  margin: 0 auto;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SignUpText = styled.div`
  ${(props) => props.theme.body2};
  font-weight: 500;
`;

const PageBottom = styled.div`
  width: 100%;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-top: auto;
  margin-bottom: 20px;
  justify-self: flex-end;
`;

const PageBottomTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    margin: 0 4px;
  }
`;

const Copyright = styled.div`
  ${(props) => props.theme.caption};
  margin-top: 8px;
`;

const LoginWrapper = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
`;

const ErrorText = styled.div`
  ${(props) => props.theme.caption};
  color: ${(p) => p.theme.themeColorError};
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 80px;
  text-align: center;
`;

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ok
      token
      error
    }
  }
`;

const Login = () => {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [confirmEamil, setConfirmEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState();
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const [loginMutation] = useMutation(LOGIN, {
    onCompleted: (d) => {
      setPassword("");
      if (d.login.ok) {
        logUserIn(d.login.token);
      } else {
        setErrorText(d.login.error);
      }
    },
  });
  const onClickLogin = () => {
    loginMutation({
      variables: {
        email,
        password,
      },
    });
  };
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (email && confirmEamil && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, confirmEamil, password]);

  return (
    <Container>
      <LogoWrapper>
        <TypoLogo color={theme.themeColor} width={"160px"} height={"40px"} />
      </LogoWrapper>
      <EmailInput
        value={email}
        onChange={onChangeEmail}
        hasErrorText={true}
        setConfirmEmail={setConfirmEmail}
      />
      <PasswordInput
        marginTop={"32px"}
        value={password}
        onChange={onChangePassword}
        type={"password"}
      />
      <InputBottom>
        <AutoLoginCheck checked={checked}>
          <CheckBox
            type={"checkbox"}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
          />
          <MdCheckBox size={24} />
          <CheckBoxLabel>자동 로그인</CheckBoxLabel>
        </AutoLoginCheck>
        <FindBtnWrapper>
          <TextBtn>
            <Link to="/FindId">아이디 찾기</Link>
          </TextBtn>
          <TextBtn className="withBorder">
            <Link to="/FindPw">비밀번호 찾기</Link>
          </TextBtn>
        </FindBtnWrapper>
      </InputBottom>
      <LoginWrapper>
        {errorText && <ErrorText>{errorText}</ErrorText>}
        <BtnType1
          marginTop={"42px"}
          marginBottom={"24px"}
          onClick={onClickLogin}
          disabled={disabled}
        >
          로그인
        </BtnType1>
      </LoginWrapper>
      <SignUpWrapper>
        <SignUpText>아직 회원이 아니신가요?</SignUpText>
        <TextBtn>
          <Link to="/SignUp">회원가입</Link>
        </TextBtn>
      </SignUpWrapper>
      <PageBottom>
        <PageBottomTopWrapper>
          <TextBtn>
            <Link to="/information/terms">개인정보 처리방침</Link>
          </TextBtn>
          <TextBtn>
            <Link to="/information/policy">이용약관</Link>
          </TextBtn>
        </PageBottomTopWrapper>
        <Copyright>Copyright ⓒ Sharit Corp. All Rights Reserved.</Copyright>
      </PageBottom>
    </Container>
  );
};

export default Login;
