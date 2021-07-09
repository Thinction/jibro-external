import React from "react";
import styled from "styled-components";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdFileUpload, MdCancel, MdAddCircle } from "react-icons/md";
import { SiAppstore, SiGoogleplay } from "react-icons/si";

const Type1Button = styled.button`
  ${(props) => props.theme.subTitle1};
  border: none;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  background: ${(p) =>
    p.disabled ? p.theme.themeBackgroundGray : p.theme.themeColor};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  margin-top: ${(p) => (p.marginTop ? p.marginTop : "unset")};
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom : "unset")};
`;

const Type2Button = styled.button`
  ${(props) => props.theme.headLine6};
  border: none;
  width: 100vw;
  max-width: 720px;
  height: 48px;
  background: ${(p) =>
    p.allWritten ? p.theme.themeColor : p.theme.themeBackgroundGray};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  margin-top: ${(p) => (p.marginTop ? p.marginTop : "unset")};
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom : "unset")};
  position: fixed;
  bottom: 0;
`;

const AsBtnWrapper = styled.button`
  width: 100%;
  height: 80px;
  border-radius: 8px;
  border: 2px solid;
  padding-left: 16px;
  display: flex;
  align-items: center;
  margin-top: 16px;
  border-color: ${(p) =>
    p.isClick ? p.theme.themeColor : "rgba(0, 0, 0, .38)"};
  > svg {
    stroke: ${(p) => (p.isClick ? p.theme.themeColor : "rgba(0, 0, 0, .38)")};
  }
`;

const AsTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 16px;
`;

const AsText = styled.div`
  ${(props) => props.theme.headLine6};
`;

const AsDescription = styled.div`
  ${(props) => props.theme.body2};
`;

const BtnWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const BtnLabel = styled.label`
  ${(props) => props.theme.subTitle2};
  margin-bottom: 8px;
`;

const UploadFile = styled.label`
  ${(props) => props.theme.subTitle2};
  width: 149px;
  height: 40px;
  border-radius: 20px;
  background: #fff;
  border: 1px solid;
  border-color: ${(props) => props.theme.themeColor};
  color: ${(props) => props.theme.themeColor};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: ${(props) => props.theme.themeColor};
    margin-right: 8px;
  }
`;

const UploadComplete = styled.div`
  ${(props) => props.theme.subTitle2};
  width: 149px;
  height: 40px;
  border-radius: 20px;
  background: #fff;
  border: 1px solid;
  border-color: rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: rgba(0, 0, 0, 0.6);
    margin-left: 8px;
  }
`;

const StoreBtnContainer = styled.button`
  width: fit-content;
  height: 48px;
  padding: 12px 30px;
  border-radius: 24px;
  background: #793bce;
  color: #fff;
  display: flex;
  align-items: center;
  margin-right: 18px;
`;

const StoreBtnText = styled.div`
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.01em;
  line-height: 16px;
  margin-left: 12px;
`;

const HalfBtnWrapper = styled.div`
  border: none;
  width: 100vw;
  max-width: 720px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: ${(p) => (p.absolute ? "absolute" : "fixed")};
  bottom: 0;
`;

const HalfBtn = styled.button`
  ${(props) => props.theme.headLine6};
  width: 50%;
  height: 100%;
  color: ${(p) => p.color};
  background: ${(p) => {
    if (p.right && p.allWritten !== null) {
      return p.allWritten ? p.theme.themeColor : p.theme.themeBackgroundGray;
    } else {
      return p.background;
    }
  }};
  /* background: ${(p) => p.background}; */
`;

export const BtnType1 = ({
  children,
  onClick,
  marginTop,
  marginBottom,
  disabled,
}) => {
  const onClickFunc = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Type1Button
      onClick={onClickFunc}
      marginTop={marginTop}
      marginBottom={marginBottom}
      disabled={disabled}
    >
      {children}
    </Type1Button>
  );
};

export const AsSomeBtn = ({ isClick, text, description, onClick }) => {
  return (
    <AsBtnWrapper
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      isClick={isClick}
    >
      <IoCheckmarkCircleOutline size={24} />
      <AsTextWrapper>
        <AsText>{text}</AsText>
        <AsDescription>{description}</AsDescription>
      </AsTextWrapper>
    </AsBtnWrapper>
  );
};

export const BtnType2 = ({
  children,
  marginTop,
  marginBottom,
  disabled,
  type,
  allWritten,
  onClick,
}) => {
  return (
    <Type2Button
      type={type}
      marginTop={marginTop}
      marginBottom={marginBottom}
      disabled={disabled}
      allWritten={allWritten}
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick();
      }}
    >
      {children}
    </Type2Button>
  );
};

export const AuthenticateFileUpload = ({
  id,
  title,
  value,
  onChange,
  onRemove,
}) => {
  return (
    <BtnWrapper>
      <BtnLabel>{title}</BtnLabel>
      {value && (
        <UploadComplete>
          파일 첨부완료
          <MdCancel size={24} onClick={onRemove} />
        </UploadComplete>
      )}
      {!value && (
        <UploadFile htmlFor={id}>
          <MdFileUpload size={24} />
          파일 첨부하기
        </UploadFile>
      )}
      <input
        id={id}
        type="file"
        accept="image/jpeg, image/jpg, image/png, image/gif"
        style={{ display: "none" }}
        onChange={onChange}
      />
    </BtnWrapper>
  );
};

export const StoreBtn = ({ platform }) => {
  return (
    <StoreBtnContainer>
      {platform === "apple" && (
        <>
          <SiAppstore size={24} />
          <StoreBtnText>APP STORE</StoreBtnText>
        </>
      )}
      {platform === "google" && (
        <>
          <SiGoogleplay size={24} />
          <StoreBtnText>PLAY STORE</StoreBtnText>
        </>
      )}
    </StoreBtnContainer>
  );
};

export const HalfBtnSet = ({
  leftText,
  rightText,
  onClickLeft,
  onClickRight,
  leftColor,
  leftBg,
  rightColor,
  rightBg,
  absolute,
  allWritten,
  disabled,
}) => {
  return (
    <HalfBtnWrapper absolute={absolute}>
      <HalfBtn
        onClick={(e) => {
          e.preventDefault();
          onClickLeft && onClickLeft();
        }}
        color={leftColor}
        background={leftBg}
      >
        {leftText}
      </HalfBtn>
      <HalfBtn
        onClick={(e) => {
          e.preventDefault();
          onClickRight && onClickRight();
        }}
        color={rightColor}
        background={rightBg}
        allWritten={allWritten}
        disabled={disabled ? disabled : false}
        right={true}
      >
        {rightText}
      </HalfBtn>
    </HalfBtnWrapper>
  );
};

const AddBtnWrap = styled.button`
  width: 115px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(p) => p.theme.themeColor};
  border: 2px solid #4708ae;
  border-radius: 26px;
`;

const AddBtnText = styled.div`
  ${(p) => p.theme.subTitle2}
  color: ${(p) => p.theme.themeColor};
  margin-left: 8px;
`;

export const AddBtn = ({ onClick }) => {
  return (
    <AddBtnWrap
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick();
      }}
    >
      <MdAddCircle size={24} color={"#4708AE"} />
      <AddBtnText>추가하기</AddBtnText>
    </AddBtnWrap>
  );
};
