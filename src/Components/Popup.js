import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0%;
  z-index: 991;
  background: rgba(0, 0, 0, 0.06);
`;

const Popup1Container = styled.div`
  width: 280px;
  min-height: 136px;
  border-radius: 4px;
  background: #fff;
  position: fixed;
  top: calc(50vh - 68px);
  left: calc(50vw - 140px);
  z-index: 992;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 24px 24px 0 24px;
`;

const PopupText = styled.div`
  ${(props) => props.theme.body2};
  width: 100%;
  word-break: keep-all;
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom + "px" : "32px")};
`;

const BtnWrapper = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  right: 8px;
  bottom: 0;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
`;

const EnterBtn = styled.button`
  ${(props) => props.theme.btnText};
  color: ${(props) => props.theme.themeColor};
  width: fit-content;
  height: 37px;
  padding: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupType1 = ({
  children,
  onClick,
  onClickRemove,
  cancel,
  onClickCancel,
}) => {
  return (
    <>
      <Overlay
        onClick={(e) => {
          e.preventDefault();
          onClickRemove && onClickRemove();
        }}
      />
      <Popup1Container>
        <PopupText>{children}</PopupText>
        <BtnWrapper>
          {cancel && <EnterBtn onClick={() => onClickCancel()}>취소</EnterBtn>}
          <EnterBtn
            onClick={(e) => {
              e.preventDefault();
              onClick && onClick();
            }}
          >
            확인
          </EnterBtn>
        </BtnWrapper>
      </Popup1Container>
    </>
  );
};

export const PopupType2 = ({
  children,
  onClick,
  onClickRemove,
  cancel,
  onClickCancel,
  rightBtnText,
}) => {
  return (
    <>
      <Overlay
        onClick={(e) => {
          e.preventDefault();
          onClickRemove && onClickRemove();
        }}
      />
      <Popup1Container>
        <PopupText>{children}</PopupText>
        <BtnWrapper>
          {cancel && <EnterBtn onClick={() => onClickCancel()}>취소</EnterBtn>}
          <EnterBtn
            onClick={(e) => {
              e.preventDefault();
              onClick && onClick();
            }}
          >
            {rightBtnText}
          </EnterBtn>
        </BtnWrapper>
      </Popup1Container>
    </>
  );
};

export const PopupType3 = ({
  title,
  onClick,
  onClickRemove,
  cancel,
  onClickCancel,
  rightBtnText,
  contents,
}) => {
  return (
    <>
      <Overlay
        onClick={(e) => {
          e.preventDefault();
          onClickRemove && onClickRemove();
        }}
      />
      <Popup1Container style={{ justifyContent: "flex-start" }}>
        <PopupText marginBottom={"0"}>{title}</PopupText>
        <PopupText style={{ color: "rgba(0, 0, 0, .38)" }}>
          {contents}
        </PopupText>
        <BtnWrapper>
          {cancel && <EnterBtn onClick={() => onClickCancel()}>취소</EnterBtn>}
          <EnterBtn
            onClick={(e) => {
              e.preventDefault();
              // onClickState();
              onClick && onClick();
            }}
          >
            {rightBtnText}
          </EnterBtn>
        </BtnWrapper>
      </Popup1Container>
    </>
  );
};

const MoreVertContainer = styled.div`
  width: 128px;
  height: fit-content;
  border-radius: 4px;
  ${(p) => p.theme.ContainerBoxShadow};
  padding: 8px 0;
  background: #fff;
  position: ${(p) => (p.absolute ? "absolute" : "fixed")};
  top: ${(p) => (p.top ? p.top : "40px")};
  right: ${(p) => (p.mobile ? "24px" : "calc(50% - 336px)")};
  z-index: 991;
`;

const MoreVertBtn = styled.button`
  ${(p) => p.theme.body2};
  width: 100%;
  height: 32px;
  padding-left: 16px;
  display: flex;
  align-items: center;
`;

export const MoreVertMenu = withRouter(
  ({
    textList,
    onClickRemove,
    mobile,
    onClick,
    absolute,
    top,
    onClickQuit,
  }) => {
    const MenuFunc = (e) => {
      if (e.target.innerText === "나가기") {
        return onClickQuit();
      } else {
        return onClick();
      }
    };
    return (
      <>
        <Overlay onClick={() => onClickRemove()} />
        <MoreVertContainer mobile={mobile} top={top} absolute={absolute}>
          {textList.map((item, index) => {
            return (
              <MoreVertBtn key={index} onClick={MenuFunc}>
                {item}
              </MoreVertBtn>
            );
          })}
        </MoreVertContainer>
      </>
    );
  }
);

const TextAreaPopupContainer = styled.div`
  width: 280px;
  height: ${(p) => (p.height ? p.height + "px" : "320px")};
  ${(p) => p.theme.ContainerBoxShadow};
  padding-top: 24px;
  border-radius: 4px;
  position: fixed;
  top: calc(50% - 160px);
  left: calc(50% - 140px);
  z-index: 992;
  background: #fff;
`;

const TextAreaPopupTitle = styled.div`
  width: 100%;
  height: 24px;
  margin: 0 24px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const TextPopupBox = styled.textarea`
  width: 232px;
  height: ${(p) => (p.height ? p.height + "px" : "185px")};
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  margin: 0 24px;
  padding: 8px;
  resize: none;
  :focus {
    outline: 0;
  }
`;

const BottomArea = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const CancelBtn = styled.button`
  width: 48px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6200ee;
  margin-right: 8px;
  font-size: 14px;
`;

const SendBtn = styled.button`
  width: 56px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6200ee;
  margin-right: 8px;
  font-size: 14px;
`;

export const TextAreaPopup = ({
  text,
  onClickRemove,
  onClickSend,
  boxHeight,
  containerHeight,
  value,
  setValue,
}) => {
  return (
    <>
      <Overlay onClick={() => onClickRemove()} />
      <TextAreaPopupContainer height={containerHeight}>
        <TextAreaPopupTitle>{text}</TextAreaPopupTitle>
        <TextPopupBox height={boxHeight} value={value} onChange={setValue} />
        <BottomArea>
          <CancelBtn onClick={() => onClickRemove()}>취소</CancelBtn>
          <SendBtn onClick={() => onClickSend()}>보내기</SendBtn>
        </BottomArea>
      </TextAreaPopupContainer>
    </>
  );
};
