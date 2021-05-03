import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BtnType2 } from '../../Components/Buttons';
import { HeaderType1 } from '../../Components/Headers';
import { PhoneCertInput, PhoneNumberInput } from '../../Components/InputBox';
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

const FindId = () => {
    //inputBox
    const [ values, setValues ] = useState({
        phoneNumber: '',
        certNumber: '',
    });
    
    const isSetValues = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value});
    }

    const [ allWritten, setAllWritten ] = useState(false);
    const [ disabled, setDisabled ] = useState(true);

    useEffect(() => {
        if ( values.certNumber && values.phoneNumber !== '' ) {
            setAllWritten(true);
            setDisabled(false);
        } else {
            setAllWritten(false);
            setDisabled(true);
        }
    }, [values, disabled]);

    //AlertPopup
    const [ popOn, setPopOn ] = useState(false);

    const isSetPopOn = () => {
        setPopOn(true);
    }

    const onClickRemove = () => {
        setPopOn(false);
    }

    return (
        <>
        <Container>
            <HeaderType1>아이디 찾기</HeaderType1>
            <TextTitle>아이디를 잊으셨나요?</TextTitle>
            <TextSub>
                내&nbsp;정보에&nbsp;등록된 휴대전화&nbsp;인증으로
                아이디를&nbsp;찾아드릴꼐요.
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
                onClick={isSetPopOn}
            >아이디 찾기</BtnType2>
        </Container>
        {
            popOn &&
            <PopupType1
                onClickRemove={onClickRemove}
                onClick={onClickRemove}
            >
                회원님의 아이디는 abc@jibro.com입니다.
            </PopupType1>
        }
        </>
    );
}

export default FindId;