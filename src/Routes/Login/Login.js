import React, { useState } from 'react';
import { MdCheckBox } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BtnType1 } from '../../Components/Buttons';
import { TypoLogo } from '../../Components/IconPack';
import { EmailInput, PasswordInput } from '../../Components/InputBox';
import theme from '../../Styles/theme';

const Container = styled.div`
    width: calc(100% - 32px);
    height: 100%;
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
        color: ${ p => p.checked ? p.theme.themeColor : 'rgba(0, 0, 0, .38)' };
    }
`;

const CheckBox = styled.input`
    width: 18px;
    height: 18px;
    position: absolute;
    opacity: 0;
`;

const CheckBoxLabel = styled.label`
    ${ props => props.theme.body2 };
`;

const FindBtnWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 167px;
`;

const TextBtn = styled.div`
    ${ props => props.theme.body2 };
    color: ${ props => props.theme.themeColor };
    cursor: pointer;
    &.withBorder {
        padding-left: 8px;
        border-left: 1px solid rgba(0, 0, 0, .12);
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
    ${ props => props.theme.body2 };
    font-weight: 500;
`;

const PageBottom = styled.div`
    position: fixed;
    width: 100%;
    bottom: 20px;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PageBottomTopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    >div {
        margin: 0 4px;
    }
`;

const Copyright = styled.div`
    ${ props => props.theme.caption };
    margin-top: 8px;
`;

const LoginWrapper = styled.div`
    width: 100%;
    height: fit-content;
    position: relative;
`;

const ErrorText = styled.div`
    ${ props => props.theme.caption };
    color: ${ p => p.theme.themeColorError };
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 80px;
    text-align: center;
`;

const Login = () => {
    const [ checked, setChecked ] = useState(false);
    const [ password, setPassword ] = useState('');

    const hasError = false;

    return (
        <Container>
            <LogoWrapper>
                <TypoLogo
                    color={theme.themeColor}
                    width={'160px'}
                    height={'40px'}
                />
            </LogoWrapper>
            <EmailInput />
            <PasswordInput
                marginTop={'32px'}
                password={password}
                setPassword={setPassword}
            />
            <InputBottom>
                <AutoLoginCheck
                    checked={checked}
                >
                    <CheckBox
                        type={'checkbox'}
                        onChange={e => {
                            setChecked(e.target.checked)
                        }}
                    />
                    <MdCheckBox
                        size={24}
                    />
                    <CheckBoxLabel>자동 로그인</CheckBoxLabel>
                </AutoLoginCheck>
                <FindBtnWrapper>
                    <TextBtn>
                        <Link to="/FindId">
                            아이디 찾기
                        </Link>
                    </TextBtn>
                    <TextBtn className='withBorder'>
                        <Link to="/FindPw">
                            비밀번호 찾기
                        </Link>
                    </TextBtn>
                </FindBtnWrapper>
            </InputBottom>
            <LoginWrapper>
                {
                    hasError &&
                    <ErrorText>
                        입력하신 이메일 또는 비밀번호가 일치하지 않습니다.
                    </ErrorText>
                }
                <BtnType1
                    marginTop={'42px'}
                    marginBottom={'24px'}
                >
                    로그인
                </BtnType1>
            </LoginWrapper>
            <SignUpWrapper>
                <SignUpText>아직 회원이 아니신가요?</SignUpText>
                <TextBtn>
                    <Link to="/SignUp">
                        회원가입
                    </Link>
                </TextBtn>
            </SignUpWrapper>
            <PageBottom>
                <PageBottomTopWrapper>
                    <TextBtn>개인정보 처리방침</TextBtn>
                    <TextBtn>이용약관</TextBtn>
                </PageBottomTopWrapper>
                <Copyright>
                    Copyright ⓒ Sharit Corp. All Rights Reserved.
                </Copyright>
            </PageBottom>
        </Container>
    );
}

export default Login;