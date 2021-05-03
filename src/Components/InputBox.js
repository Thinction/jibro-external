import React, { useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

const Container = styled.div`
    width: 100%;
    height: fit-content;
    margin-top: ${ p => p.marginTop ? p.marginTop : 'unset'};
    position: relative;
`;

const Label = styled.label`
    ${ props => props.theme.subTitle2 };
`;

const InputBox = styled.input`
    ${ props => props.theme.body2 };
    width: 100%;
    height: 44px;
    border: 1px solid rgba(0, 0, 0, .12);
    border-radius: 8px;
    margin-top: 8px;
    padding: 12px;
`;

const OnInputBtn = styled.button`
    width: 48px;
    height: 30px;
    border-radius: 4px;
    background: ${ props => props.theme.themeColorViolet };
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 8px;
    bottom: 7px;
`;

const OnInputSearch = styled.button`
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 8px;
    bottom: 10px;
`;

const ErrorText = styled.div`
    ${ props => props.theme.caption };
    color: ${ p => p.checkTrue ? p.theme.themeColorSecondary : p.theme.themeColorError };
    position: absolute;
    left: 0;
    top: 105%;
`;

export const EmailInput = ({marginTop, values, onChange}) => {
    //Check Email
    const [ email, setEmail ] = useState(values);

    const chkEmail = (e) => {
        const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    
        if (regExp.test(e)) {
            return true;
        } else {
            return false;
        };
    };

    const errorText = () => {
        if ( email === '' ) {
            return '이메일을 입력해주세요.';
        } else if ( chkEmail(email) === false ) {
            return '올바른 이메일 형식을 입력해주세요.';
        } else {
            return '이메일 입력이 완료되었습니다.';
        };
    };

    return (
        <Container
            marginTop={marginTop}
        >
            <Label>이메일</Label>
            <InputBox
                name={'email'}
                type={'email'}
                placeholder={'이메일을 입력해주세요.'}
                value={email || ''}
                onChange={(e) => {
                    setEmail(e.target.value)
                    onChange && onChange(e)
                }}
            />
            {
                values && email !== '' &&
                <ErrorText
                    checkTrue={chkEmail(email) === true}
                >{errorText()}</ErrorText>
            }
        </Container>
    );
};

export const PasswordInput = ({confirm, marginTop, password, setPassword, isCorrect, hasErrorText, isSetValues, type}) => {
    const AllPass = '모든 조건이 충족되었습니다.';
    const AllCorrect = '비밀번호가 일치합니다!';

    //Check Password
    function chkPass(password) {
        const regExp = /^(?=.*[a-z])(?=.*[0-9]).{8,}$/i;
        if (!(regExp.test(password))) {
            return false;
        };
        return true;
    };

    const errorText = () => {
        if ( !confirm ) {
            return chkPass(password) === true ?
            AllPass
            :
            '영문+숫자 조합 8자리 이상 입력해주세요.'
        } else if ( confirm ) {
            if ( !isCorrect ) {
                return '위와 동일한 비밀번호를 입력해주세요.'
            } else if ( isCorrect) {
                return chkPass(password) === true ?
                AllCorrect
                :
                '비밀번호는 일치하지만, 조건이 맞지 않아요.'
            };
        };
    };

    return (
        <Container
            marginTop={marginTop}
        >
            <Label>
                {
                    ( confirm && '비밀번호 확인' )
                    ||
                    ( !confirm && '비밀번호' )
                }
            </Label>
            <InputBox
                name={type}
                type={'password'}
                placeholder={
                    (confirm && '비밀번호를 한번 더 입력해주세요.') 
                    ||
                    (!confirm && '영문+숫자 조합 8자리 이상 입력해주세요.')
                }
                value={password || ''}
                onChange={e => {
                    setPassword(e.target.value)
                    isSetValues && isSetValues(e)
                }}
                hasErrorText={hasErrorText}
            />
            {
                hasErrorText && password !== '' &&
                <ErrorText
                    checkTrue={(
                        errorText() === AllPass || 
                        errorText() === AllCorrect
                    ) === true}
                >{errorText()}</ErrorText>
            }
        </Container>
    );
};

export const CustomInput = ({marginTop, name, placeholder, values, onChange, type}) => {
    const [ value, setValue ] = useState(values);

    return (
        <Container
            marginTop={marginTop}
        >
            <Label>{name}</Label>
            <InputBox
                name={type}
                type={'text'}
                placeholder={placeholder}
                value={value || ''}
                onChange={(e) => {
                    setValue(e.target.value)
                    onChange(e)
                }}
            />
        </Container>
    );
};

export const PhoneNumberInput = ({marginTop, btnText, values, onChange}) => {
    return (
        <Container
            marginTop={marginTop}
        >
            <Label>휴대폰 인증</Label>
            <InputBox
                name={'phoneNumber'}
                type={'text'}
                placeholder={'예) 010-1234-5678'}
                value={values || ''}
                onChange={(e) => {
                    onChange(e)
                }}
            />
            <OnInputBtn
                onClick={e => e.preventDefault()}
            >{btnText}</OnInputBtn>
        </Container>
    );
};

export const PhoneCertInput = ({marginTop, btnText, values, onChange}) => {
    return (
        <Container
            marginTop={marginTop}
        >
            <Label>인증번호 확인</Label>
            <InputBox
                name={'certNumber'}
                type={'text'}
                placeholder={'SMS 인증번호를 입력해주세요.'}
                value={values || ''}
                onChange={(e) => {
                    onChange(e)
                }}
            />
            <OnInputBtn
                onClick={e => e.preventDefault()}
            >{btnText}</OnInputBtn>
        </Container>
    );
};

export const AddressInput = ({marginTop, values, onChange}) => {
    return (
        <Container
            marginTop={marginTop}
        >
            <Label>거주지 입력</Label>
            <InputBox
                name={'address1'}
                type={'text'}
                placeholder={'서비스를 제공받으실 주소를 입력해주세요.'}
                value={values || ''}
                onChange={(e) => {
                    onChange(e)
                }}
            />
            <OnInputSearch
                onClick={e => e.preventDefault()}
            >
                <MdSearch
                    size={24}
                    color={'rgba(0, 0, 0, .38)'}
                />
            </OnInputSearch>
        </Container>
    );
};