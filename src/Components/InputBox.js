import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";
import { MdSearch, MdSend } from "react-icons/md";
import theme from "../Styles/theme";
import { useMutation } from "@apollo/client";
import { SEND_MESSAGE } from "../gql/Message";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: ${(p) => (p.marginTop ? p.marginTop : "unset")};
  position: relative;
`;

const Label = styled.label`
  ${(props) => props.theme.subTitle2};
`;

const InputBox = styled.input`
  ${(props) => props.theme.body2};
  width: 100%;
  height: 44px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  margin-top: 8px;
  padding: 12px;
  color: ${(p) =>
    p.disabled ? "rgba(0, 0, 0, .6)" : p.theme.defaultTextBlack};
  background: ${(p) => (p.disabled ? "rgba(0, 0, 0, .05)" : "transparent")};
`;

const OnInputBtn = styled.button`
  width: 48px;
  height: 30px;
  border-radius: 4px;
  background: ${(p) =>
    p.disabled ? p.theme.themeBackgroundGray : p.theme.themeColorViolet};
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
  ${(props) => props.theme.caption};
  color: ${(p) =>
    p.checkTrue ? p.theme.themeColorSecondary : p.theme.themeColorError};
  position: absolute;
  left: 0;
  top: 105%;
`;

const SearchContainer = styled.div`
  width: ${(p) =>
    p.width
      ? p.width === ("fit-content" || "auto" || "100%")
        ? p.width
        : p.width + "px"
      : "100%"};
  height: 48px;
  border-radius: 8px;
  background: #f4f4f4;
  display: flex;
  align-items: center;
  padding-left: ${(p) => (p.paddingLeft ? p.paddingLeft + "px" : "unset")};
`;

const SearchInputBox = styled.input`
  border: none;
  background: transparent;
  width: 100%;
  font-weight: 500;
  font-size: 17px;
  line-height: 25px;
  letter-spacing: -0.02em;
  color: rgba(153, 153, 153, 0.89);
  ${(p) => p.searchHeader && p.theme.body2};
  padding-left: ${(p) => (p.inputLeft ? p.inputLeft + "px" : "unset")};
`;

const SendMessageContainer = styled.footer`
  width: 100vw;
  max-width: 720px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 0 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  background-color: #fff;
`;

const MessageInput = styled.input`
  ${(p) => p.theme.body2};
  width: 100%;
  height: 40px;
  margin-right: 16px;
  padding-left: 12px;
  background-color: #f4f4f4;
  ::placeholder {
    color: rgba(0, 0, 0, 0.38);
  }
  border: none;
  border-radius: 8px;
`;

export const EmailInput = ({
  marginTop,
  value,
  onChange,
  hasErrorText,
  disabled,
  setConfirmEmail,
}) => {
  //Check Email
  const chkEmail = (e) => {
    const regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if (regExp.test(e)) {
      return true;
    } else {
      return false;
    }
  };

  const errorText = () => {
    if (value === "") {
      return "이메일을 입력해주세요.";
    } else if (chkEmail(value) === false) {
      return "올바른 이메일 형식을 입력해주세요.";
    } else {
      return "이메일 입력이 완료되었습니다.";
    }
  };

  return (
    <Container marginTop={marginTop}>
      <Label>이메일</Label>
      <InputBox
        name={"email"}
        type={"email"}
        placeholder={"이메일을 입력해주세요."}
        value={value || ""}
        onChange={(e) => {
          onChange(e);
          setConfirmEmail(chkEmail(e.target.value));
        }}
        disabled={(disabled && true) || false}
      />
      {hasErrorText && value !== "" && (
        <ErrorText checkTrue={chkEmail(value) === true}>
          {errorText()}
        </ErrorText>
      )}
    </Container>
  );
};

export const PasswordInput = ({
  confirm,
  marginTop,
  value,
  onChange,
  isCorrect,
  hasErrorText,
  isSetValues,
  type,
}) => {
  const AllPass = "모든 조건이 충족되었습니다.";
  const AllCorrect = "비밀번호가 일치합니다!";

  //Check Password
  function chkPass(password) {
    const regExp = /^(?=.*[a-z])(?=.*[0-9]).{8,}$/i;
    if (!regExp.test(password)) {
      return false;
    }
    return true;
  }

  const errorText = () => {
    if (!confirm) {
      return chkPass(value) === true
        ? AllPass
        : "영문+숫자 조합 8자리 이상 입력해주세요.";
    } else if (confirm) {
      if (!isCorrect) {
        return "위와 동일한 비밀번호를 입력해주세요.";
      } else if (isCorrect) {
        return chkPass(value) === true
          ? AllCorrect
          : "비밀번호는 일치하지만, 조건이 맞지 않아요.";
      }
    }
  };

  return (
    <Container marginTop={marginTop}>
      <Label>{(confirm && "비밀번호 확인") || (!confirm && "비밀번호")}</Label>
      <InputBox
        name={type}
        type={"password"}
        placeholder={
          (confirm && "비밀번호를 한번 더 입력해주세요.") ||
          (!confirm && "영문+숫자 조합 8자리 이상 입력해주세요.")
        }
        value={value}
        onChange={(e) => {
          onChange(e);
          isSetValues && isSetValues(e);
        }}
        hasErrorText={hasErrorText}
      />
      {hasErrorText && value !== "" && (
        <ErrorText
          checkTrue={
            (errorText() === AllPass || errorText() === AllCorrect) === true
          }
        >
          {errorText()}
        </ErrorText>
      )}
    </Container>
  );
};

export const CustomInput = ({
  marginTop,
  name,
  placeholder,
  value,
  type,
  disabled,
  onChange,
}) => {
  return (
    <Container marginTop={marginTop}>
      <Label>{name}</Label>
      <InputBox
        name={type}
        type={"text"}
        placeholder={placeholder}
        value={value}
        disabled={disabled || false}
        onChange={onChange}
      />
    </Container>
  );
};

export const PhoneNumberInput = ({
  marginTop,
  btnText,
  value,
  onChange,
  setState,
  onClickBtn,
  onClick,
  compare,
}) => {
  const chkPhoneNumber = (p) => {
    p = p.split("-").join("");
    const regPhone = /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/;
    return regPhone.test(p);
  };
  // const onClickState = () => {
  //   if (setState) {
  //     onClickBtn(setState);
  //   }
  // };

  //btnDisabled
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (chkPhoneNumber(value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [disabled, value]);

  const errorText = () => {
    if (value === "") {
      return "휴대폰 번호를 입력해주세요.";
    } else if (chkPhoneNumber(value) === false) {
      return "올바른 휴대폰 번호 형식을 입력해주세요.";
    } else {
      return "휴대폰 번호 입력이 완료되었습니다.";
    }
  };
  return (
    <Container marginTop={marginTop}>
      <Label>휴대폰 인증</Label>
      <InputBox
        name={"phoneNumber"}
        type={"number"}
        placeholder={"'-'를 제외하고 입력해주세요."}
        value={value}
        onChange={onChange}
        disabled={compare}
      />
      {value !== "" && (
        <ErrorText checkTrue={chkPhoneNumber(value) === true}>
          {errorText()}
        </ErrorText>
      )}
      <OnInputBtn
        onClick={(e) => {
          e.preventDefault();
          onClick(value.replace(/-/gi, ""));
        }}
        disabled={disabled}
      >
        {btnText}
      </OnInputBtn>
    </Container>
  );
};

export const PhoneCertInput = ({
  marginTop,
  btnText,
  value,
  onChange,
  onClick,
  setState,
  onClickBtn,
  compare,
  didCompare,
}) => {
  // const onClickState = () => {
  //   if (setState) {
  //     onClickBtn(setState);
  //   }
  // };

  //btnDisabled
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (value !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [disabled, value]);

  return (
    <Container marginTop={marginTop}>
      <Label>인증번호 확인</Label>
      <InputBox
        name={"certNumber"}
        type={"number"}
        placeholder={"SMS 인증번호를 입력해주세요."}
        value={value}
        onChange={onChange}
      />
      {didCompare && (
        <>
          {compare ? (
            <ErrorText checkTrue={compare}>{"인증되었습니다."}</ErrorText>
          ) : (
            <ErrorText checkTrue={compare}>
              {"인증번호가 일치하지 않습니다."}
            </ErrorText>
          )}
        </>
      )}
      <OnInputBtn
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
        disabled={disabled}
      >
        {btnText}
      </OnInputBtn>
    </Container>
  );
};

export const AddressInput = ({ marginTop, value, onChange, placeholder }) => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    // 인풋 밸류 바꾸기
    ref.current.value = fullAddress; // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    // 스테이트 도 바꾸기
    onChange({ target: { value: fullAddress } });
    setShow(false);
  };
  return (
    <>
      <Container marginTop={marginTop}>
        <Label>거주지 입력</Label>
        <InputBox
          ref={ref}
          name={"address1"}
          type={"text"}
          placeholder={
            placeholder || "서비스를 제공받으실 주소를 입력해주세요."
          }
          value={value}
          onChange={onChange}
          onClick={() => setShow((prev) => !prev)}
          readOnly
        />
        <OnInputSearch onClick={(e) => e.preventDefault()}>
          <MdSearch size={24} color={"rgba(0, 0, 0, .38)"} />
        </OnInputSearch>
      </Container>
      {show && (
        <DaumPostcode
          onComplete={handleComplete}
          style={{ marginTop: "10px", border: "1px solid black" }}
        />
      )}
    </>
  );
};

export const SearchInput = ({
  width,
  placeholder,
  iconSize,
  searchHeader,
  paddingLeft,
  inputLeft,
  iconColor,
  value,
  onChange,
  onKeyPress,
}) => {
  return (
    <SearchContainer width={width} paddingLeft={paddingLeft}>
      <MdSearch size={iconSize} color={iconColor} />
      <SearchInputBox
        searchHeader={searchHeader}
        placeholder={placeholder}
        inputLeft={inputLeft}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </SearchContainer>
  );
};

export const SendMessage = ({ toId }) => {
  const [value, setValue] = useState("");
  const [mutation, { loading }] = useMutation(SEND_MESSAGE, {
    onCompleted: () => setValue(""),
  });
  const sendMessage = () => {
    if (!loading && value !== "" && value) {
      mutation({ variables: { toId, body: value } });
    }
  };
  const onChangeValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <SendMessageContainer>
      <MessageInput
        placeholder={"보낼 메시지를 입력해주세요."}
        value={value}
        onChange={onChangeValue}
      />
      <MdSend size={24} color={theme.themeColor} onClick={sendMessage} />
    </SendMessageContainer>
  );
};
