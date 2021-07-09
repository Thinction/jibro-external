import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdCameraAlt } from "react-icons/md";
import { BtnType2 } from "../../../../Components/Buttons";
import { HeaderType1 } from "../../../../Components/Headers";
import {
  AddressInput,
  CustomInput,
  EmailInput,
  PasswordInput,
  PhoneCertInput,
  PhoneNumberInput,
} from "../../../../Components/InputBox";
import { PopupType1 } from "../../../../Components/Popup";
import { gql } from "@apollo/client";
import { useMutation, useQuery } from "@apollo/client";
import { UserAuthenticate } from "../../../SignUp/SignUp";
import { ProfileCircle } from "../../../../Components/IconPack";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  max-width: 720px;
  min-height: calc(100vh - 56px);
  height: fit-content;
  margin: 0 auto;
  margin-top: 56px;
  padding: 0 16px;
  padding-bottom: 78px;
`;

const TopText = styled.div`
  ${(p) => p.theme.subTitle2}
  width: 100%;
  height: 54px;
  word-break: keep-all;
  text-align: center;
  color: ${(p) => p.theme.themeColor};
`;

const IconWrap = styled.div`
  margin: 16px 0;
  display: flex;
  justify-content: center;
`;

const CircleWrap = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
`;

const CameraIconWrap = styled.label`
  width: 32px;
  height: 32px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  svg {
    color: #fff;
  }
`;

const Caption = styled.div`
  width: 100%;
  height: fit-content;
  text-align: center;
  ${(p) => p.theme.body3}
  color: ${(props) => props.color};
`;

const GET_MY_NORMAL_INFO = gql`
  query getMyNormalInfo {
    getMyNormalInfo {
      ok
      user {
        id
        userType
        avatar
        name
        email
        password
        phoneNumber
        address
        workingArea
        idCardImage
        homeImage
        licenseImage
        point
        reservationAlarm
        reviewAlarm
        messageAlarm
        selfAuthentication
        idCardAuthentication
        homeAuthentication
        licenseAuthentication
        createdAt
        updatedAt
      }
      error
    }
  }
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
const UPDATE_USER = gql`
  mutation updateUser(
    $avatar: Upload
    $password: String
    $phoneNumber: String
    $address: String
    $workingArea: String
    $idCardImage: Upload
    $homeImage: Upload
    $licenseImage: Upload
  ) {
    updateUser(
      avatar: $avatar
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

const EditUserInfo = ({ title }) => {
  const history = useHistory();
  const { loading: queryLoading, data } = useQuery(GET_MY_NORMAL_INFO, {
    onCompleted: (d) => {
      if (d.getMyNormalInfo.ok) {
        setAvatarPreview(d.getMyNormalInfo.user.avatar);
        setPhoneNumber(d.getMyNormalInfo.user.phoneNumber);
        const splitAddress = d.getMyNormalInfo.user.address.split("||");
        setAddress1(splitAddress[0]);
        setAddress2(splitAddress[1]);
      }
    },
  });

  const [updateUserMutation] = useMutation(UPDATE_USER, {
    onCompleted: (d) => {
      if (d.updateUser.ok) {
        setDone(true);
      }
    },
  });
  const onClickMutation = () => {
    updateUserMutation({
      variables: {
        avatar: avatar,
        password: isCorrect ? password : undefined,
        phoneNumber: compare ? phoneNumber : undefined,
        address: address1 && address2 ? address1 + "||" + address2 : undefined,
        idCardImage: idCardImage ? idCardImage : undefined,
        homeImage: homeImage ? homeImage : undefined,
      },
    });
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

  //IdCard and homeImage and License
  const [idCardImage, setIdCardImage] = useState(undefined);
  const [homeImage, setHomeImage] = useState(undefined);
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

  const [allWritten, setAllWritten] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (
      isCorrect ||
      compare ||
      (address1 && address2) ||
      idCardImage ||
      homeImage
    ) {
      setAllWritten(true);
      setDisabled(false);
    } else {
      setAllWritten(false);
      setDisabled(true);
    }
  }, [
    password,
    rePassword,
    isCorrect,
    phoneNumber,
    certNumber,
    compare,
    address1,
    address2,
    idCardImage,
    homeImage,
    disabled,
  ]);

  const [done, setDone] = useState(false);

  return (
    <>
      {!queryLoading && data?.getMyNormalInfo?.ok && (
        <>
          <HeaderType1>{title}</HeaderType1>
          <Container>
            <TopText>
              입력되는&nbsp;개인정보는&nbsp;절대&nbsp;타인에게
              노출&nbsp;되지&nbsp;않습니다.
            </TopText>
            <IconWrap>
              <CircleWrap>
                <ProfileCircle size={100} src={avatarPreview} />
                <CameraIconWrap htmlFor="avatarInput">
                  <MdCameraAlt size={24} />
                </CameraIconWrap>
                <input
                  id="avatarInput"
                  type="file"
                  accept="image/jpeg, image/jpg, image/png"
                  style={{ display: "none" }}
                  onChange={onChangeAvatar}
                />
              </CircleWrap>
            </IconWrap>
            <Caption color={"rgba(0,0,0,.38)"}>
              프로필 이미지는 본인사진을 등록하시길 권장드립니다.
            </Caption>
            <Caption color={"#4708ae"} style={{ marginBottom: "28px" }}>
              Tip. 실물사진을 넣어야 매칭 확률이 훨씬 높습니다!
            </Caption>
            <CustomInput
              type={"name"}
              name={"이름"}
              value={data.getMyNormalInfo.user.name}
              disabled={true}
            />
            <EmailInput
              marginTop={"32px"}
              value={data.getMyNormalInfo.user.email}
              disabled={true}
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
            <UserAuthenticate
              idCardImage={idCardImage}
              homeImage={homeImage}
              onChangeIdCard={onChangeIdCard}
              onChangeHomeImage={onChangeHomeImage}
              onRemoveIdCard={onRemoveIdCard}
              onRemoveHomeImage={onRemoveHomeImage}
            />
          </Container>
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
          {done && (
            <PopupType1
              onClick={() => {
                setDone(false);
                history.go(-1);
              }}
            >
              회원정보 수정이 완료되었습니다.
            </PopupType1>
          )}
          <BtnType2
            type={"submit"}
            onClick={onClickMutation}
            allWritten={allWritten}
            disabled={allWritten ? allWritten && false : true}
          >
            저장하기
          </BtnType2>
        </>
      )}
    </>
  );
};

export default EditUserInfo;
