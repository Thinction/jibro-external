import React from "react";
import styled from "styled-components";
import { HeaderType1 } from "../../../Components/Headers";

const MainWrapper = styled.div`
  max-width: 720px;
  width: 100%;
  height: fit-content;
  min-height: calc(100vh - 56px);
  margin: 0 auto;
  background: #fff;
`;

const Container = styled.div`
  width: 100vw;
  max-width: 720px;
  height: fit-content;
  min-height: 584px;
  margin: 0 auto;
  margin-top: 56px;
  padding: 16px;
`;

const InquiryWrap = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

const InquiryTheme = styled.div`
  ${(p) => p.theme.body1}
`;

const InquiryLink = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

const Caption = styled.a`
  display: block;
  ${(p) => p.theme.caption}
  color: rgba(0,0,0,.6);
`;

const Inquiry = () => {
  const onClickBack = () => {
    window.history.go(-1);
  };

  return (
    <MainWrapper>
      <HeaderType1 onClickFunc={onClickBack}>문의하기</HeaderType1>
      <Container>
        <InquiryLink>
          <InquiryTheme>이메일 문의</InquiryTheme>
          <Caption href="mailto:connect@jibro.com">connet@jibro.com</Caption>
        </InquiryLink>
        <InquiryWrap>
          <InquiryTheme>카카오톡 채팅 문의 (10시 ~ 18시)</InquiryTheme>
          <Caption>jibro_offical</Caption>
        </InquiryWrap>
      </Container>
    </MainWrapper>
  );
};

export default Inquiry;
