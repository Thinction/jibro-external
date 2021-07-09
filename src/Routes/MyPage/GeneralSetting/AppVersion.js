import React from "react";
import styled from "styled-components";
import { HeaderType1 } from "../../../Components/Headers";
import { LogoSymbol, TypoLogo } from "../../../Components/IconPack";

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
  padding: 20px 16px;
`;

const LogoWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

const SymbolWrap = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4708ae;
  border-radius: 24px;
  margin-bottom: 22px;
`;

const VersionInfoWrap = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  margin-bottom: 30px;
`;

const VersionTheme = styled.div`
  ${(p) => p.theme.subTitle2}
`;

const Version = styled.div`
  ${(p) => p.theme.body2}
  color: rgba(0, 0, 0, 0.6);
`;

const Text = styled.div`
  ${(p) => p.theme.caption}
  margin-bottom: 26px;
`;

const CompanyInfoWrap = styled.div``;

const CompanyInfo = styled.div`
  ${(p) => p.theme.caption}
  color: rgba(0,0,0,.6);
`;

const AppVersion = () => {
  return (
    <MainWrapper>
      <HeaderType1>앱 버전</HeaderType1>
      <Container>
        <LogoWrap>
          <SymbolWrap>
            <LogoSymbol size={80} color={"#fff"} />
          </SymbolWrap>
          <TypoLogo color={"#4708ae"} width={"160"} height={"40px"} />
        </LogoWrap>
        <VersionInfoWrap>
          <VersionTheme>앱 버전</VersionTheme>
          <Version>0.1</Version>
        </VersionInfoWrap>
        <Text>
          (주)쉐릿은 통신판매중개자로서 통신판매의 당사자가 아니며 개별 판매자가
          제공하는 서비스에 대한 이행, 계약사항 등과 관련한 의무와 책임은 거래
          당사자에게 있습니다.
        </Text>
        <CompanyInfoWrap>
          <CompanyInfo>상호명 : (주)쉐릿 ﹒대표이사 : 김세영</CompanyInfo>
          <CompanyInfo>개인정보책임관리자 : 김세영</CompanyInfo>
          <CompanyInfo>주소:경기도 화성시</CompanyInfo>
          <CompanyInfo>사업자등록번호 : 000-00-00000</CompanyInfo>
          <CompanyInfo style={{ marginBottom: "16px" }}>
            통신판매업신고증:제 2021-경기화성-00000호
          </CompanyInfo>
          <CompanyInfo>
            고객센터:0000-0000﹒이메일:support@jibro.com
          </CompanyInfo>
          <CompanyInfo>Copyright ©Thinction. All Rights Reserved</CompanyInfo>
        </CompanyInfoWrap>
      </Container>
    </MainWrapper>
  );
};

export default AppVersion;
