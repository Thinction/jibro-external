import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { BtnType2 } from '../../Components/Buttons';
import { HeaderType1 } from '../../Components/Headers';
import { PasswordInput, PhoneCertInput, PhoneNumberInput } from '../../Components/InputBox';
import { PopupType1 } from '../../Components/Popup';

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
    ${ props => props.theme.subTitle2 };
    margin-top: 16px;
    width: 100%;
`;

const TextSub = styled.div`
    ${ props => props.theme.body2 };
    margin-top: 16px;
    word-break: keep-all;
`;

const FindPw = ({ history }) => {
    //about Password
    const [ password, setPassword ] = useState('');
    const [ rePassword, setRePassword ] = useState('');
    const [ isCorrect, setIsCorrect ] = useState(false);
    useEffect(() => {
        if (password === rePassword) {
            if ( password === "" || rePassword === "" ) {
                setIsCorrect(false)
            } else {
                setIsCorrect(true)
            }
        } else {
            setIsCorrect(false)
        }
    }, [password, rePassword]);

    //allWritten
    const [ values, setValues ] = useState({
        phoneNumber: '',
        certNumber: '',
        password: password,
        rePassword: rePassword,
    });
    
    const isSetValues = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value});
    }

    const [ allWritten, setAllWritten ] = useState(false);
    const [ disabled, setDisabled ] = useState(true);

    useEffect(() => {
        if ( history.location.search === '' ) {
            if ( values.certNumber && values.phoneNumber !== '' ) {
                setAllWritten(true);
                setDisabled(false);
            } else {
                setAllWritten(false);
                setDisabled(true);
            }
        }
        if ( history.location.search === '?resetPw' ) {
            if ( ( values.password === values.rePassword ) && 
                values.password !== '' ) {
                setAllWritten(true);
                setDisabled(false);
            } else {
                setAllWritten(false);
                setDisabled(true);
            }
        }
    }, [values, disabled, history.location.search]);

    //AlertPopup
    const [ popOn, setPopOn ] = useState(false);

    const isSetPopOn = () => {
        setPopOn(true);
    }

    const onClickGoLogin = () => {
        setPopOn(false);
        history.push('/');
    }

    const ResetPwRoute = () => {
        history.push('?resetPw');
    }

    return (
        (
        history.location.search === '' &&
        <Container>
            <HeaderType1>비밀번호 찾기</HeaderType1>
            <TextTitle>비밀번호를 잊으셨나요?</TextTitle>
            <TextSub>
                내&nbsp;정보에&nbsp;등록된 휴대전화&nbsp;인증으로
                비밀번호를&nbsp;재설정&nbsp;해드릴께요.
            </TextSub>
            <PhoneNumberInput
                btnText="전송"
                values={values.phoneNumber}
                onChange={isSetValues}
                marginTop={'24px'}
            />
            <PhoneCertInput
                btnText="인증"
                values={values.certNumber}
                onChange={isSetValues}
                marginTop={'32px'}
            />
            <BtnType2
                allWritten={allWritten}
                disabled={disabled}
                onClick={ResetPwRoute}
            >비밀번호 재설정</BtnType2>
        </Container>
        ) || (
        history.location.search === '?resetPw' &&
        <>
        <Container>
            <HeaderType1>비밀번호 재설정</HeaderType1>
            <PasswordInput
                marginTop={'16px'}
                password={password}
                setPassword={setPassword}
                isCorrect={isCorrect}
                hasErrorText={true}
                isSetValues={isSetValues}
                type={'password'}
            />
            <PasswordInput
                confirm={true}
                marginTop={'32px'}
                password={rePassword}
                setPassword={setRePassword}
                isCorrect={isCorrect}
                hasErrorText={true}
                isSetValues={isSetValues}
                type={'rePassword'}
            />
            <BtnType2
                allWritten={allWritten}
                disabled={disabled}
                onClick={isSetPopOn}
            >비밀번호 변경하기</BtnType2>
        </Container>
        {
            popOn &&
            <PopupType1
                onClick={onClickGoLogin}
            >
                비밀번호가&nbsp;재설정되었습니다.
                새&nbsp;비밀번호로&nbsp;로그인해주세요.
            </PopupType1>
        }
        </>
        )
    );
}

export default withRouter(FindPw);