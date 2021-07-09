import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0%;
  z-index: 991;
  background: rgba(0, 0, 0, 0.06);
`;

const Container = styled.div`
  width: 88vw;
  height: 70vh;
  border-radius: 8px;
  background: #fff;
  position: fixed;
  z-index: 992;
  bottom: 16vh;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

const Header = styled.header`
  width: 100%;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 16px;
`;
const HeaderText = styled.div`
  ${(p) => p.theme.subTitle2}
`;
const IconWrapper = styled.div`
  position: absolute;
  right: 0;
  svg {
    cursor: "pointer";
  }
`;
const TextSection = styled.div`
  ${(p) => p.theme.caption}
  width: 100%;
  height: 90%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  white-space: pre-line;
`;

const JibroUsePopup = ({ title, text, onRemove }) => {
  return (
    <>
      <Overlay onClick={onRemove} />
      <Container>
        <Header>
          <HeaderText>{title}</HeaderText>
          <IconWrapper onClick={onRemove}>
            <MdClose size={24} />
          </IconWrapper>
        </Header>
        <TextSection>{text}</TextSection>
      </Container>
    </>
  );
};

export default JibroUsePopup;
