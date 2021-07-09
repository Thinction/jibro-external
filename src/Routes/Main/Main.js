import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
import styled from "styled-components";
import { MdGpsFixed } from "react-icons/md";
import CategoryContainer from "../../Components/ContentContainer/CategoryContainer";
import ClassCard from "../../Components/ContentContainer/ClassCard";
import Dock from "../../Components/Dock";
import { MainHeader } from "../../Components/Headers";
import { MainHeadingContent } from "../../Components/IconPack";
import { getGeoLocation } from "../../Components/Utils/getGeoLocation";
import { useApolloClient, useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../../gql/Category";
import { GET_SERVICES } from "../../gql/Service";
import { SEND_FCM_TOKEN } from "../../gql/User";
import checkMobile from "../../Components/Utils/checkMobile";
import { withRouter } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  padding: 56px 16px;
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
  overflow-x: scroll;
  margin-bottom: 25px;
`;

const CategoryIconWrapper = styled.div`
  width: ${(p) => (p.width ? p.width + "px" : "fit-content")};
  height: 325px;
  margin: 0 16px;
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 auto;
  justify-content: space-between;
  padding-right: 18px;
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

const Main = ({ isLoggedIn, history }) => {
  // 지오로케이션이 Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak ... 이런 워닝을 내는거 같은데.. ?
  const client = useApolloClient();
  const [geoLocation, setGeoLocation] = useState();
  useEffect(() => {
    if (checkMobile() === "android") {
      if (!geoLocation || geoLocation === "") {
        if (window?.JibroAndroid) {
          window.JibroAndroid.getLocationFromDevice();
        }
      }
      // 로케이션 받는 리스너
      window.addEventListener("onDeviceSendLocation", ({ detail }) => {
        const { latitude, longitude } = detail;
        getGeoLocation(latitude, longitude).then((location) =>
          setGeoLocation(location)
        );
      });

      // fcm토큰 받는 리스너
      window.addEventListener("registrationToken", ({ detail }) => {
        client.mutate({
          mutation: SEND_FCM_TOKEN,
          variables: { token: detail?.token },
        });
      });
    }
  }, []);

  const { data: categoriesData } = useQuery(GET_CATEGORIES);
  const { data: servicesData } = useQuery(GET_SERVICES, {
    variables: {
      serviceArea: geoLocation ? geoLocation.split(" ").join("||") : undefined,
    },
  });

  return (
    <Container>
      <MainHeader history={history} />
      <MainHeadingContent width={"calc(100% + 32px)"} height={"23.6%"} />
      <SectionTitle marginBottom={15} marginTop={24}>
        카테고리
      </SectionTitle>
      <CategorySection>
        <CategoryIconWrapper width={960}>
          {categoriesData?.getCategories.ok &&
            categoriesData.getCategories.categories.map((item, index) => (
              <CategoryContainer
                key={index}
                id={item.id}
                title={item.title}
                counter={item.serviceCount}
                imgSource={item.image}
                isLoggedIn={isLoggedIn}
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
              <ClassCard key={item.id} data={item} isLoggedIn={isLoggedIn} />
            );
          })}
      </ClassCardWrapper>
      <Dock />
    </Container>
  );
};

export default withRouter(Main);
