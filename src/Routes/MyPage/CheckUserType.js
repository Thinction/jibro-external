import { useQuery } from "@apollo/client";
import React from "react";
import styled from "styled-components";
import {
  myJibroList,
  tutorBusinessMenuList,
  tutorSettingMenuList,
  userSettingMenuList,
} from "../../Components/DataSample/myPageMenuList";
import Dock from "../../Components/Dock";
import { GET_USER_TYPE } from "../../gql/User";
import MyPageTutor from "./MyPageTutor";
import MyPageUser from "./MyPageUser";

const Container = styled.div`
  max-width: 720px;
  width: 100%;
  height: fit-content;
  min-height: calc(100vh - 56px);
  margin: 0 auto;
  background: #fff;
`;

const userSpecificList = myJibroList.slice(0, 3);
const userGeneralTabMenuList = userSettingMenuList.slice(0, 7);
const businessTabMenuList = tutorBusinessMenuList.slice(0, 5);
const tutorGeneralTabMenuList = tutorSettingMenuList.slice(0, 7);

const CheckUserType = () => {
  const { loading, data } = useQuery(GET_USER_TYPE, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
  });

  return (
    <>
      <Container>
        {!loading &&
          data?.getUserType?.ok &&
          data.getUserType.user.userType === "Normal" && (
            <MyPageUser
              settingMenuList={userGeneralTabMenuList}
              jibroList={userSpecificList}
            />
          )}
        {!loading &&
          data?.getUserType?.ok &&
          data.getUserType.user.userType === "Tutor" && (
            <MyPageTutor
              settingMenuList={tutorGeneralTabMenuList}
              businessMenuList={businessTabMenuList}
            />
          )}
        <Dock />
      </Container>
    </>
  );
};

export default CheckUserType;
