import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import {
  AsSomeBtn,
  BtnType2,
  AuthenticateFileUpload,
} from "../../Components/Buttons";
import { HeaderType1 } from "../../Components/Headers";
import { IconCustomSignIn, ProfileCircle } from "../../Components/IconPack";
import { MdCameraAlt, MdCheckBox } from "react-icons/md";
import {
  EmailInput,
  PasswordInput,
  CustomInput,
  PhoneNumberInput,
  PhoneCertInput,
  AddressInput,
} from "../../Components/InputBox";
import korea from "../../korea";
import { PopupType1 } from "../../Components/Popup";
import { gql, useMutation, useQuery } from "@apollo/client";
import JibroUsePopup from "../../Components/JibroUsePopup";
import { GET_POLICY, GET_TERMS } from "../../gql/TermsAndPolicy";

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
  ${(props) => props.theme.subTitle2};
  width: 100%;
  height: 54px;
  text-align: center;
  color: ${(props) => props.theme.themeColor};
  word-break: keep-all;
  margin-top: 16px;
`;

const ProfileCircleWrapper = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  margin-top: 16px;
`;

const CamBtnWrapper = styled.label`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileCircleText = styled.div`
  ${(props) => props.theme.body2};
  color: rgba(0, 0, 0, 0.38);
  text-align: center;
  margin-top: 16px;
  .emphasis {
    color: ${(props) => props.theme.themeColor};
  }
`;

const FileUploadWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  @media only screen and (min-width: 425px) {
    justify-content: space-around;
  }
`;

const AgreeTextWrapper = styled.div`
  ${(props) => props.theme.caption};
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 32px;
  svg {
    color: ${(p) => (p.checked ? p.theme.themeColor : "rgba(0, 0, 0, .38)")};
  }
  a {
    text-decoration: underline;
    color: ${(p) => p.theme.themeColor};
  }
  strong {
    color: ${(p) => p.theme.themeColor};
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
  ${(props) => props.theme.subTitle2};
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
  ${(props) => props.theme.body2};
  width: 43%;
  height: 48px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 12px;
  :focus {
    outline: none;
  }
`;

const RegionSelect = styled.select`
  ${(props) => props.theme.body2};
  width: 43%;
  height: 48px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 12px;
  :focus {
    outline: none;
  }
`;

const SignUpEndMainText = styled.div`
  ${(props) => props.theme.headLine6};
  color: ${(props) => props.theme.themeColor};
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
  ${(props) => props.theme.subTitle1};
  text-align: center;
  word-break: keep-all;
`;

const btnList = [
  {
    text: "고객으로 가입",
    description: "전문가에게 도움을 받고싶어요",
  },
  {
    text: "전문가로 가입",
    description: "비즈니스에 맞는 고객을 만나고 싶어요",
  },
];

const SEND_SMS = gql`
  mutation sendSMS($phoneNumber: String!) {
    sendSMS(phoneNumber: $phoneNumber) {
      ok
      number
      error
    }
  }
`;
const CREATE_USER = gql`
  mutation createUser(
    $userType: UserType!
    $avatar: Upload
    $name: String!
    $email: String!
    $password: String!
    $phoneNumber: String!
    $address: String!
    $workingArea: String
    $idCardImage: Upload!
    $homeImage: Upload
    $licenseImage: Upload
  ) {
    createUser(
      userType: $userType
      avatar: $avatar
      name: $name
      email: $email
      password: $password
      phoneNumber: $phoneNumber
      address: $address
      workingArea: $workingArea
      idCardImage: $idCardImage
      homeImage: $homeImage
      licenseImage: $licenseImage
    ) {
      ok
      error
    }
  }
`;

export const UserAuthenticate = ({
  idCardImage,
  homeImage,
  onChangeIdCard,
  onChangeHomeImage,
  onRemoveIdCard,
  onRemoveHomeImage,
}) => {
  return (
    <FileUploadWrapper>
      <AuthenticateFileUpload
        id={"idCardImageInput"}
        title={"신분증 인증 (필수)"}
        value={idCardImage}
        onChange={onChangeIdCard}
        onRemove={onRemoveIdCard}
      />
      <AuthenticateFileUpload
        id={"homeImageInput"}
        title={"거주지 사진 인증 (필수)"}
        value={homeImage}
        onChange={onChangeHomeImage}
        onRemove={onRemoveHomeImage}
      />
    </FileUploadWrapper>
  );
};

export const TutorAuthenticate = ({
  onChangeWorkingCity,
  onChangeWorkingTown,
  idCardImage,
  licenseImage,
  onChangeIdCard,
  onChangeLicenseImage,
  onRemoveIdCard,
  onRemoveLicenseImage,
}) => {
  //City Check
  const [cityNum, setCityNum] = useState("");
  const onChangeCity = (e) => {
    setCityNum(getSido(e.target.value));
  };
  const getSido = (codeNm) => {
    const getCity = korea.sido.filter((item) => item.codeNm === codeNm);
    return getCity[0].sido;
  };

  return (
    <>
      <CitySelectContainer>
        <CitySelectLabel>활동 지역 선택</CitySelectLabel>
        <CitySelectWrapper>
          <CitySelect
            defaultValue={"시/도"}
            onChange={(e) => {
              onChangeCity(e);
              onChangeWorkingCity(e);
            }}
          >
            <option hidden>시/도</option>
            {
              //샘플입니다.
              korea.sido.map((data, index) => (
                <option key={index} value={data.codeNm}>
                  {data.codeNm}
                </option>
              ))
            }
          </CitySelect>
          <RegionSelect
            defaultValue={"시/군/구"}
            onChange={onChangeWorkingTown}
          >
            <option hidden>시/군/구</option>
            {
              //샘플입니다.
              cityNum &&
                korea.sigugun
                  .filter((data) => data.sido === cityNum)
                  .map((data, index) => (
                    <option key={index} value={data.codeNm}>
                      {data.codeNm}
                    </option>
                  ))
            }
          </RegionSelect>
        </CitySelectWrapper>
      </CitySelectContainer>
      <FileUploadWrapper>
        <AuthenticateFileUpload
          id={"idCardImageInput"}
          title={"신분증 인증 (필수)"}
          value={idCardImage}
          onChange={onChangeIdCard}
          onRemove={onRemoveIdCard}
        />
        <AuthenticateFileUpload
          id={"licenseImageInput"}
          title={"자격증 인증 (선택)"}
          value={licenseImage}
          onChange={onChangeLicenseImage}
          onRemove={onRemoveLicenseImage}
        />
      </FileUploadWrapper>
    </>
  );
};

const SignUp = ({ history, location }) => {
  const { loading: termsLoading, data: termsData } = useQuery(GET_TERMS);
  const { loading: policyLoading, data: policyData } = useQuery(GET_POLICY);

  //Register Type Toggle
  const [isActive, setIsActive] = useState(
    location?.state?.from === "Tutor" ? 1 : 0
  );
  const [userType, setUserType] = useState(location?.state?.from || "Normal");
  const isActiveFunc = (index) => {
    setIsActive(index);
    if (index === 0) {
      setUserType("Normal");
      setWorkingCity(undefined);
      setWorkingTown(undefined);
    } else if (index === 1) {
      setUserType("Tutor");
    }
  };

  //Avatar
  const [avatar, setAvatar] = useState(undefined);
  const [avatarPreview, setAvatarPreview] = useState();
  const readFileSync = (file) => {
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        res(reader.result);
      };
      reader.onerror = rej;
      reader.readAsDataURL(file);
    });
  };
  const onChangeAvatar = async ({ target: { files } }) => {
    setAvatar(files[0]);
    await readFileSync(files[0])
      .then((res) => {
        setAvatarPreview(res);
      })
      .catch((e) => alert(e));
  };

  //Name
  const [name, setName] = useState("");
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  //Email
  const [email, setEmail] = useState("");
  const [confirmEamil, setConfirmEmail] = useState(false);
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  //Password Check
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeRePassword = (e) => {
    setRePassword(e.target.value);
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

  //Phonenumber
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phonePopUp, setPhonePopUp] = useState(false);
  const [randomNumber, setRandomNumber] = useState();
  const onChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
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
  const onClickPhonePopUp = () => {
    setPhonePopUp(false);
  };

  //PhoneCert Check
  const [certNumber, setCertNumber] = useState("");
  const [certPopUp, setCertPopUp] = useState(false);
  const [compare, setCompare] = useState(false);
  const [didCompare, setDidCompare] = useState(false);
  const onChangeCertNumber = (e) => {
    setCertNumber(e.target.value);
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

  //Adress1 and Adress2
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const onChangeAddress1 = (e) => {
    setAddress1(e.target.value);
  };
  const onChangeAddress2 = (e) => {
    setAddress2(e.target.value);
  };

  //WorkingArea
  const [workingCity, setWorkingCity] = useState(undefined);
  const [workingTown, setWorkingTown] = useState(undefined);
  const onChangeWorkingCity = (e) => {
    setWorkingCity(e.target.value);
  };
  const onChangeWorkingTown = (e) => {
    setWorkingTown(e.target.value);
  };

  //IdCard and homeImage and License
  const [idCardImage, setIdCardImage] = useState(undefined);
  const [homeImage, setHomeImage] = useState(undefined);
  const [licenseImage, setLicenseImage] = useState(undefined);
  const onChangeIdCard = ({ target: { files } }) => {
    setIdCardImage(files[0]);
  };
  const onRemoveIdCard = () => {
    setIdCardImage(undefined);
  };
  const onChangeHomeImage = ({ target: { files } }) => {
    setHomeImage(files[0]);
  };
  const onRemoveHomeImage = () => {
    setHomeImage(undefined);
  };
  const onChangeLicenseImage = ({ target: { files } }) => {
    setLicenseImage(files[0]);
  };
  const onRemoveLicenseImage = () => {
    setLicenseImage(undefined);
  };

  //Agree Check
  const [checked, setChecked] = useState(false);

  const [allWritten, setAllWritten] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (isActive === 0) {
      if (
        name &&
        email &&
        confirmEamil &&
        password &&
        isCorrect &&
        phoneNumber &&
        compare &&
        address1 &&
        address2 &&
        checked &&
        idCardImage &&
        homeImage
      ) {
        setAllWritten(true);
        setDisabled(false);
      } else {
        setAllWritten(false);
        setDisabled(true);
      }
    } else {
      if (
        name &&
        email &&
        confirmEamil &&
        password &&
        isCorrect &&
        phoneNumber &&
        compare &&
        address1 &&
        address2 &&
        checked &&
        idCardImage
      ) {
        setAllWritten(true);
        setDisabled(false);
      } else {
        setAllWritten(false);
        setDisabled(true);
      }
    }
  }, [
    isActive,
    name,
    email,
    confirmEamil,
    password,
    isCorrect,
    phoneNumber,
    compare,
    address1,
    address2,
    idCardImage,
    homeImage,
    checked,
    disabled,
  ]);

  //CreateUserMutation
  const [createUserMutation] = useMutation(CREATE_USER, {
    onCompleted: (d) => {
      if (d.createUser.ok) {
        history.push("?end");
      } else {
        if (d.createUser.error === "exist email") {
          alert("이미 존재하는 회원의 이메일입니다.");
          setEmail("");
        } else {
          alert(d.createUser.error);
        }
      }
    },
  });
  const onClickCreateUser = () => {
    createUserMutation({
      variables: {
        userType,
        avatar,
        name,
        email,
        password,
        phoneNumber,
        address: address1 + "||" + address2,
        workingArea:
          workingCity && workingTown
            ? workingCity + "||" + workingTown
            : undefined,
        idCardImage,
        homeImage,
        licenseImage,
      },
    });
  };
  const [termsOn, setTermsOn] = useState(false);
  const [policyOn, setPolicyOn] = useState(false);

  return (
    (history.location.search === "" && (
      <Container method={"post"}>
        <HeaderType1>회원가입</HeaderType1>
        <InfoText>
          입력되는&nbsp;개인정보는&nbsp;절대&nbsp;타인에게
          노출되지&nbsp;않습니다.
        </InfoText>
        {btnList.map((data, index) => (
          <AsSomeBtn
            key={index}
            text={data.text}
            description={data.description}
            isClick={isActive === index}
            onClick={() => isActiveFunc(index)}
          />
        ))}
        <ProfileCircleWrapper>
          <ProfileCircle size={100} src={avatarPreview} />
          <CamBtnWrapper htmlFor="avatarInput">
            <MdCameraAlt size={20} color={"#fff"} />
          </CamBtnWrapper>
          <input
            id="avatarInput"
            type="file"
            accept="image/jpeg, image/jpg, image/png"
            style={{ display: "none" }}
            onChange={onChangeAvatar}
          />
        </ProfileCircleWrapper>
        <ProfileCircleText>
          <p>프로필 이미지는 본인 사진을 등록하시길 권장드립니다.</p>
          <p className="emphasis">
            Tip. 실물사진을 넣어야 매칭 확률이 훨씬 높습니다!
          </p>
        </ProfileCircleText>
        <CustomInput
          marginTop={"32px"}
          name={"이름"}
          type={"name"}
          placeholder={"이름(실명)을 입력해주세요."}
          value={name}
          onChange={onChangeName}
        />
        <EmailInput
          marginTop={"32px"}
          value={email}
          onChange={onChangeEmail}
          setConfirmEmail={setConfirmEmail}
          hasErrorText={true}
        />
        <PasswordInput
          marginTop={"32px"}
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
        <PhoneNumberInput
          marginTop={"32px"}
          btnText={"전송"}
          value={phoneNumber}
          onChange={onChangePhoneNumber}
          onClick={onClickSendSMS}
          compare={compare}
        />
        <PhoneCertInput
          marginTop={"32px"}
          btnText={"인증"}
          value={certNumber}
          onChange={onChangeCertNumber}
          compare={compare}
          didCompare={didCompare}
          onClick={onClickCompare}
        />
        <AddressInput
          marginTop={"32px"}
          value={address1}
          onChange={onChangeAddress1}
        />
        <CustomInput
          marginTop={"32px"}
          name={"상세주소 입력"}
          type={"address2"}
          placeholder={"거주지 상세주소를 입력해주세요."}
          value={address2}
          onChange={onChangeAddress2}
        />
        {isActive === 0 && (
          <UserAuthenticate
            idCardImage={idCardImage}
            homeImage={homeImage}
            onChangeIdCard={onChangeIdCard}
            onChangeHomeImage={onChangeHomeImage}
            onRemoveIdCard={onRemoveIdCard}
            onRemoveHomeImage={onRemoveHomeImage}
          />
        )}
        {isActive === 1 && (
          <TutorAuthenticate
            onChangeWorkingCity={onChangeWorkingCity}
            onChangeWorkingTown={onChangeWorkingTown}
            idCardImage={idCardImage}
            licenseImage={licenseImage}
            onChangeIdCard={onChangeIdCard}
            onChangeLicenseImage={onChangeLicenseImage}
            onRemoveIdCard={onRemoveIdCard}
            onRemoveLicenseImage={onRemoveLicenseImage}
          />
        )}
        <AgreeTextWrapper checked={checked}>
          <input
            type={"checkbox"}
            style={{ opacity: 0, position: "absolute" }}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
          />
          <MdCheckBox size={24} />
          <div
            style={{
              borderBottom: "1px solid #4708AE",
              color: "#4708AE",
              marginLeft: "6px",
              cursor: "pointer",
            }}
            onClick={() => {
              setPolicyOn(true);
            }}
          >
            이용약관
          </div>
          &nbsp;및&nbsp;
          <div
            style={{
              borderBottom: "1px solid #4708AE",
              color: "#4708AE",
              cursor: "pointer",
            }}
            onClick={() => {
              setTermsOn(true);
            }}
          >
            개인정보 처리방침
          </div>
          에 동의합니다.&nbsp;
          <strong>(필수)</strong>
        </AgreeTextWrapper>
        <BtnType2
          type={"submit"}
          allWritten={allWritten}
          disabled={disabled}
          onClick={onClickCreateUser}
        >
          회원가입
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
        {termsOn && !termsLoading && termsData?.getTerms?.ok && (
          <JibroUsePopup
            title="개인정보 처리방침"
            text={
              termsData?.terms?.body
                ? termsData.terms.body
                : "개인정보 처리방침은 준비 중입니다."
            }
            onRemove={() => setTermsOn(false)}
          ></JibroUsePopup>
        )}
        {policyOn && !policyLoading && policyData?.getPolicy?.ok && (
          <JibroUsePopup
            title="이용약관"
            text={
              policyData?.policy?.body
                ? policyData.policy.body
                : "이용약관은 준비 중입니다."
            }
            onRemove={() => setPolicyOn(false)}
          ></JibroUsePopup>
        )}
      </Container>
    )) ||
    (history.location.search === "?end" && (
      <Container className={"signUpEnd"}>
        <SignUpEndMainText>회원가입이 완료되었습니다.</SignUpEndMainText>
        <SignUpEndIconWrapper>
          <IconCustomSignIn width={"60px"} height={"55px"} />
        </SignUpEndIconWrapper>
        <SignUpEndSubText>
          더욱&nbsp;안전한&nbsp;사용을&nbsp;위해
          관리자가&nbsp;확인&nbsp;후&nbsp;승인&nbsp;예정입니다.
        </SignUpEndSubText>
        <BtnType2 type={"submit"} allWritten={true} disabled={false}>
          <Link to="/">로그인 하기</Link>
        </BtnType2>
      </Container>
    ))
  );
};

export default withRouter(SignUp);
