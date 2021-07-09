import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
import styled from "styled-components";
import { MdGpsFixed } from "react-icons/md";
import CategoryContainer from "../../Components/ContentContainer/CategoryContainer";
import ClassCard from "../../Components/ContentContainer/ClassCard";
import { WebMainHeader } from "../../Components/Headers";
import { MainHeadingContentL } from "../../Components/IconPack";
import { StoreBtn } from "../../Components/Buttons";
import { Link, useHistory } from "react-router-dom";
import { getGeoLocationPc } from "../../Components/Utils/getGeoLocation";
import { GET_CATEGORIES } from "../../gql/Category";
import { GET_SERVICES } from "../../gql/Service";
import { useQuery } from "@apollo/client";
import { PopupType2 } from "../../Components/Popup";

const Container = styled.div`
  width: 100%;
  padding: 0 70px;
  padding-top: 72px;
  height: auto;
  min-height: min-content;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex: 0 0;
  align-items: center;
  background: #fff;
`;

const SectionTitle = styled.div`
  ${(props) => props.theme.headLine6};
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom + "px" : "unset")};
  margin-top: ${(p) => (p.marginTop ? p.marginTop + "px" : "unset")};
`;

const CategorySection = styled.section`
  width: calc(100% + 32px);
  height: fit-content;
  margin-bottom: 25px;
`;

const CategoryIconWrapper = styled.div`
  width: ${(p) => (p.width ? p.width + "px" : "fit-content")};
  height: 420px;
  margin: 0 16px;
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 auto;
  justify-content: space-between;
`;

const LocationCheck = styled.div`
  ${(props) => props.theme.caption};
  width: 100%;
  height: 18px;
  margin-bottom: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: rgba(0, 0, 0, 0.38);
  svg {
    margin-right: 4px;
  }
`;

const ClassCardWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media only screen and (max-width: 425px) {
    justify-content: center;
  }
`;

const Footer = styled.div`
  width: calc(100vw - 16.2px);
  height: 415px;
  padding: 0 calc(50vw - 570px);
  background: #f4f4f4;
`;

const FooterBtnWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 32px;
`;

const FooterMainText = styled.div`
  ${(props) => props.theme.subTitle1};
  font-weight: 500;
  margin-bottom: 32px;
`;

const FooterTextBtn = styled(Link)`
  ${(props) => props.theme.subTitle1};
  font-weight: 700;
  color: ${(props) => props.theme.themeColor};
  margin-right: 32px;
`;

const TextBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const BottomWrapper = styled.div`
  ${(props) => props.theme.body1};
`;

const BottomTextContainer = styled.div`
  margin-bottom: 24px;
`;

const MainWeb = ({ isLoggedIn }) => {
  const history = useHistory();
  const [geoLocation, setGeoLocation] = useState("");
  useEffect(() => {
    if (geoLocation === "" || !geoLocation) {
      getGeoLocationPc(setGeoLocation);
    }
  }, []);

  const { data: categoriesData } = useQuery(GET_CATEGORIES);
  const { data: servicesData } = useQuery(GET_SERVICES, {
    variables: {
      serviceArea: geoLocation ? geoLocation.split(" ").join("||") : undefined,
    },
  });
  const [loginAlert, setLoginAlert] = useState(false);
  const [term, setTerm] = useState(undefined);
  const onChangeTerm = (e) => {
    setTerm(e.target.value);
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      if (isLoggedIn) {
        history.push({ pathname: "/search", state: { term } });
      } else {
        setLoginAlert(true);
      }
    }
  };
  return (
    <Container>
      <WebMainHeader
        isLoggedIn={isLoggedIn}
        value={term}
        onChange={onChangeTerm}
        onKeyPress={onKeyPress}
      />
      <MainHeadingContentL width={"calc(100% + 140px)"} height={"23.6%"} />
      <SectionTitle marginBottom={15} marginTop={24}>
        카테고리
      </SectionTitle>
      <CategorySection>
        <CategoryIconWrapper width={1140}>
          {categoriesData?.getCategories.ok &&
            categoriesData.getCategories.categories.map((item, index) => (
              <CategoryContainer
                key={index}
                id={item.id}
                title={item.title}
                counter={item.serviceCount}
                imgSource={item.image}
                width={170}
                height={194}
                isLoggedIn={isLoggedIn}
                setLoginAlert={setLoginAlert}
              />
            ))}
        </CategoryIconWrapper>
      </CategorySection>
      <SectionTitle>우리 동네 주변</SectionTitle>
      <LocationCheck>
        <MdGpsFixed />
        {geoLocation}
      </LocationCheck>
      <ClassCardWrapper>
        {servicesData?.getServices &&
          servicesData.getServices.map((item) => {
            return (
              <ClassCard
                key={item.id}
                marginBottom={73}
                data={item}
                isLoggedIn={isLoggedIn}
                setLoginAlert={setLoginAlert}
              />
            );
          })}
      </ClassCardWrapper>
      <Footer>
        <FooterBtnWrap>
          <StoreBtn platform={"apple"} />
          <StoreBtn platform={"google"} />
        </FooterBtnWrap>
        <FooterMainText>
          (주)쉐릿은 통신판매중개자로서 통신판매의 당사자가 아니며 개별 판매자가
          제공하는 서비스에 대한 이행, 계약사항 등과 관련한 의무와 책임은 거래
          당사자에게 있습니다.
        </FooterMainText>
        <TextBtnWrapper>
          <FooterTextBtn to="/information/policy">이용약관</FooterTextBtn>
          <FooterTextBtn to="/information/terms">
            개인정보처리방침
          </FooterTextBtn>
        </TextBtnWrapper>
        <BottomWrapper>
          <BottomTextContainer>
            <p>
              상호명 : (주)쉐릿 ﹒대표이사 : 김세영﹒개인정보책임관리자 : 김세영
              ﹒주소:경기도 화성시
            </p>
            <p>
              사업자등록번호 : 000-00-00000﹒통신판매업신고증:제
              2021-경기화성-00000호
            </p>
          </BottomTextContainer>
          <BottomTextContainer>
            <p>고객센터:0000-0000﹒이메일:support@jibro.com</p>
            <p>Copyright ©Thinction. All Rights Reserved</p>
          </BottomTextContainer>
        </BottomWrapper>
      </Footer>
      {loginAlert && (
        <PopupType2
          cancel={true}
          onClickRemove={() => setLoginAlert(false)}
          onClickCancel={() => setLoginAlert(false)}
          rightBtnText={"로그인"}
          onClick={() => history.push("/login")}
        >
          로그인이 필요합니다.
          <br /> 로그인 하시겠습니까?
        </PopupType2>
      )}
    </Container>
  );
};

export default MainWeb;
