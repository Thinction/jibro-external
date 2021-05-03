import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { AsSomeBtn, BtnType2, AuthenticateFileUpload } from '../../Components/Buttons';
import { HeaderType1 } from '../../Components/Headers';
import { IconCustomSignIn, ProfileCircle } from '../../Components/IconPack';
import { MdCameraAlt, MdCheckBox } from 'react-icons/md';
import { EmailInput, PasswordInput, CustomInput, PhoneNumberInput, PhoneCertInput, AddressInput } from '../../Components/InputBox';
import korea from '../../korea';

const Container = styled.form`
    width: calc(100% - 32px);
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 56px;
    &.signUpEnd {
        min-height: 100vh;
    }
`;

const InfoText = styled.div`
    ${ props => props.theme.subTitle2 };
    width: 100%;
    height: 54px;
    text-align: center;
    color: ${ props => props.theme.themeColor };
    word-break: keep-all;
    margin-top: 16px;
`;

const ProfileCircleWrapper = styled.div`
    width: 100px;
    height: 100px;
    position: relative;
    margin-top: 16px;
`;

const CamBtnWrapper = styled.button`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(0, 0, 0, .6);
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProfileCircleText = styled.div`
    ${ props => props.theme.body2 };
    color: rgba(0, 0, 0, .38);
    text-align: center;
    margin-top: 16px;
    .emphasis {
        color: ${ props => props.theme.themeColor };
    }
`;

const FileUploadWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
    @media only screen and ( min-width: 425px ) {
        justify-content: space-around;
    }
`;

const AgreeTextWrapper = styled.div`
    ${ props => props.theme.caption };
    width: 100%;
    height: 24px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 32px;
    svg {
        color: ${ p => p.checked ? p.theme.themeColor : 'rgba(0, 0, 0, .38)' };
    }
    a {
        text-decoration: underline;
        color: ${ p => p.theme.themeColor };
    }
    strong {
        color: ${ p => p.theme.themeColor };
    }
`;

const CitySelectContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 32px;
`;

const CitySelectLabel = styled.label`
    ${ props => props.theme.subTitle2 };
    margin-bottom: 7px;
`;

const CitySelectWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CitySelect = styled.select`
    ${ props => props.theme.body2 };
    width: 43%;
    height: 48px;
    border-radius: 8px;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, .12);
    padding: 12px;
    :focus {
        outline: none;
    }
`;

const RegionSelect = styled.select`
    ${ props => props.theme.body2 };
    width: 43%;
    height: 48px;
    border-radius: 8px;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, .12);
    padding: 12px;
    :focus {
        outline: none;
    }
`;

const SignUpEndMainText = styled.div`
    ${ props => props.theme.headLine6 };
    color: ${ props => props.theme.themeColor };
    text-align: center;
    margin-bottom: 24px;
    margin-top: 18%;
`;

const SignUpEndIconWrapper = styled.div`
    width: 160px;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #ede0f7;
    margin-bottom: 24px;
`;

const SignUpEndSubText = styled.div`
    ${ props => props.theme.subTitle1 };
    text-align: center;
    word-break: keep-all;
`;

const btnList = [
    {
        text: '고객으로 가입',
        description: '전문가에게 도움을 받고싶어요',
    },
    {
        text: '전문가로 가입',
        description: '비즈니스에 맞는 고객을 만나고 싶어요',
    }
];

const UserAuthenticate = () => (
    <FileUploadWrapper>
        <AuthenticateFileUpload title={'신분증 인증'} />
        <AuthenticateFileUpload title={'거주지 사진 인증'} />
    </FileUploadWrapper>
)

const TutorAuthenticate = () => {
    //City Check
    const [ city, setCity ] = useState('');

    return (
        <>
        <CitySelectContainer>
            <CitySelectLabel>활동 지역 선택</CitySelectLabel>
            <CitySelectWrapper
                city={city}
            >
                <CitySelect
                    defaultValue={'시/도'}
                    onChange={e => {
                        setCity(e.target.value)
                    }}
                >
                    <option hidden>시/도</option>
                    {
                        //샘플입니다.
                        korea.sido.map((data) => (
                            <option key={data.sido} value={data.sido}>{data.codeNm}</option>
                        ))
                    }
                </CitySelect>
                <RegionSelect
                    defaultValue={'시/군/구'}
                >
                    <option hidden>시/군/구</option>
                    {
                        //샘플입니다.
                        city &&
                        (korea.sigugun.filter(data => data.sido === city )).map((data, index) => (
                            <option key={index}>
                                {data.codeNm}
                            </option>
                        ))
                    }
                </RegionSelect>
            </CitySelectWrapper>
        </CitySelectContainer>
        <FileUploadWrapper>
            <AuthenticateFileUpload title={'신분증 인증'} />
            <AuthenticateFileUpload title={'자격증 인증 (선택)'} />
        </FileUploadWrapper>
        </>
    );
};

const SignUp = ({ history }) => {
    //Register Type Toggle
    const [ isActive, setIsActive ] = useState(0);
    const isActiveFunc = (index) => {
        setIsActive(index)
    };

    //Agree Check
    const [ checked, setChecked ] = useState(false);

    //Password Check
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

    //All Text Written Check
    const [ values, setValues ] = useState({
        name: '',
        email: '',
        password: password,
        rePassword: rePassword,
        phoneNumber: '',
        certNumber: '',
        address1: '',
        address2: '',
    });
    
    const isSetValues = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value});
        // console.log(values)
    }

    const [ allWritten, setAllWritten ] = useState(false);
    const [ disabled, setDisabled ] = useState(true);

    useEffect(() => {
        if ( values.name.length >= 2 &&
            (values.email && values.phoneNumber &&
            values.certNumber && values.address2) !== '' &&
            values.address1.length >= 6 &&
            values.password === values.rePassword
        ) {
            setAllWritten(true);
            setDisabled(false);
        } else {
            setAllWritten(false);
            setDisabled(true);
        }
    }, [values, disabled]);

    //Route Change
    const RouteChange = () => {
        history.push('?end')
    }

    return (
        (
        history.location.search === '' &&
        <Container
            method={'post'}
        >
            <HeaderType1>회원가입</HeaderType1>
            <InfoText>입력되는&nbsp;개인정보는&nbsp;절대&nbsp;타인에게 노출되지&nbsp;않습니다.</InfoText>
            {
                btnList.map((data, index) => (
                    <AsSomeBtn
                        key={index}
                        text={data.text}
                        description={data.description}
                        isClick={isActive === index}
                        onClick={() => isActiveFunc(index)}
                    />
                ))
            }
            <ProfileCircleWrapper>
                <ProfileCircle
                    size={'100px'}
                />
                <CamBtnWrapper
                    onClick={e => e.preventDefault()}
                >
                    <MdCameraAlt
                        size={20}
                        color={'#fff'}
                    />
                </CamBtnWrapper>
            </ProfileCircleWrapper>
            <ProfileCircleText>
                <p>프로필 이미지는 본인 사진을 등록하시길 권장드립니다.</p>
                <p className="emphasis">Tip. 실물사진을 넣어야 매칭 확률이 훨씬 높습니다!</p>
            </ProfileCircleText>
            <CustomInput
                marginTop={'32px'}
                name={'이름'}
                type={'name'}
                placeholder={'이름(실명)을 입력해주세요.'}
                values={values.name}
                onChange={isSetValues}
            />
            <EmailInput
                marginTop={'32px'}
                values={values.email}
                onChange={isSetValues}
            />
            <PasswordInput
                marginTop={'32px'}
                password={password}
                setPassword={setPassword}
                isCorrect={isCorrect}
                hasErrorText={true}
                isSetValues={isSetValues}
                type={'password'}
            />
            <PasswordInput
                marginTop={'32px'}
                confirm={true}
                password={rePassword}
                setPassword={setRePassword}
                isCorrect={isCorrect}
                hasErrorText={true}
                isSetValues={isSetValues}
                type={'rePassword'}
            />
            <PhoneNumberInput
                marginTop={'32px'}
                btnText={'전송'}
                values={values.phoneNumber}
                onChange={isSetValues}
            />
            <PhoneCertInput
                marginTop={'32px'}
                btnText={'인증'}
                values={values.certNumber}
                onChange={isSetValues}
            />
            <AddressInput
                marginTop={'32px'}
                values={values.address1}
                onChange={isSetValues}
            />
            <CustomInput
                marginTop={'32px'}
                name={'상세주소 입력'}
                type={'address2'}
                placeholder={'거주지 상세주소를 입력해주세요.'}
                values={values.address2}
                onChange={isSetValues}
            />
            { isActive === 0 && <UserAuthenticate /> }
            { isActive === 1 && <TutorAuthenticate /> }
            <AgreeTextWrapper
                checked={checked}
            >
                <input
                    type={'checkbox'}
                    style={{opacity: 0, position: 'absolute'}}
                    onChange={e => {
                        setChecked(e.target.checked)
                    }}
                />
                <MdCheckBox
                    size={24}
                />
                <Link to="/">이용약관</Link>&nbsp;및&nbsp;<Link to="/">개인정보 처리방침</Link>에 동의합니다.&nbsp;<strong>(필수)</strong>
            </AgreeTextWrapper>
            <BtnType2
                type={'submit'}
                allWritten={allWritten}
                disabled={disabled}
                onClick={RouteChange}
            >회원가입</BtnType2>
        </Container>
        )
        ||
        (
            history.location.search === '?end' &&
            <Container className={'signUpEnd'}>
                <SignUpEndMainText>
                    회원가입이 완료되었습니다.
                </SignUpEndMainText>
                <SignUpEndIconWrapper>
                    <IconCustomSignIn
                        width={'60px'}
                        height={'55px'}
                    />
                </SignUpEndIconWrapper>
                <SignUpEndSubText>
                    더욱&nbsp;안전한&nbsp;사용을&nbsp;위해
                    관리자가&nbsp;확인&nbsp;후&nbsp;승인&nbsp;예정입니다.
                </SignUpEndSubText>
                <BtnType2
                    type={'submit'}
                    allWritten={true}
                    disabled={false}
                >
                    <Link to="/">
                        로그인 하기
                    </Link>
                </BtnType2>
            </Container>
        )
    );
}

export default withRouter(SignUp);