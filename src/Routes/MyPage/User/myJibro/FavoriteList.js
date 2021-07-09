import { makeVar, useQuery } from "@apollo/client";
import React from "react";
import styled from "styled-components";
import ClassCard from "../../../../Components/ContentContainer/ClassCard";
import { HeaderType1 } from "../../../../Components/Headers";
import { GET_LIKED_SERVICES } from "../../../../gql/Service";

const Wrapper = styled.div`
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
  padding: 24px 16px;
`;

const ClassCardWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media only screen and (max-width: 425px) {
    justify-content: center;
  }
`;
const TOKEN = "token";
const FavoriteList = ({ title }) => {
  const { data } = useQuery(GET_LIKED_SERVICES, {
    fetchPolicy: "network-only",
    notifyOnNetworkStatusChange: true,
  });

  return (
    <Wrapper>
      <HeaderType1>{title}</HeaderType1>
      <Container>
        <ClassCardWrapper>
          {data?.getLikedServices &&
            data.getLikedServices.map((item) => {
              return (
                <ClassCard
                  key={item.id}
                  data={item}
                  isLoggedIn={makeVar(Boolean(localStorage.getItem(TOKEN)))}
                />
              );
            })}
        </ClassCardWrapper>
      </Container>
    </Wrapper>
  );
};

export default FavoriteList;
