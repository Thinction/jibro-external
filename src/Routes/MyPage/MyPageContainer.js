import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import {
  myJibroList,
  tutorBusinessMenuList,
  tutorSettingMenuList,
  userSettingMenuList,
} from "../../Components/DataSample/myPageMenuList";
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

const businessTabMenuList = tutorBusinessMenuList.slice(0, 5);
const tutorGeneralTabMenuList = tutorSettingMenuList.slice(0, 7);
const userSpecificList = myJibroList.slice(0, 3);
const userGeneralTabMenuList = userSettingMenuList.slice(0, 7);

const GET_MY_NORMAL_INFO = gql`
  query getMyNormalInfo {
    getMyNormalInfo {
      ok
      user {
        id
        userType
        avatar
        name
        email
        password
        phoneNumber
        address
        workingArea
        idCardImage
        homeImage
        licenseImage
        point
        reservationAlarm
        reviewAlarm
        messageAlarm
        selfAuthentication
        idCardAuthentication
        homeAuthentication
        licenseAuthentication
        services {
          id
          title
        }
        fromServiceReviews {
          id
          to {
            id
            name
            avatar
          }
          rate
          body
          createdAt
        }
        createdAt
        updatedAt
      }
      error
    }
  }
`;

const MyPageContainer = ({ history, isLoggedIn, userType }) => {
  const { loading, data } = useQuery(GET_MY_NORMAL_INFO);
  return (
    <>
      {!loading && data?.getMyNormalInfo?.ok && (
        <Container>
          {data?.getMyNormalInfo?.user?.userType === "Tutor" && (
            <MyPageTutor
              user={data.getMyNormalInfo.user}
              businessMenuList={businessTabMenuList}
              settingMenuList={tutorGeneralTabMenuList}
            />
          )}
          {/* {tutorBusinessMenuList.map((item, index) => {
            return (
              path === `/my/tutor/${item.path}` && (
                <item.component key={index} title={item.text} />
              )
            );
          })} */}
          {/* {tutorSettingMenuList.map((item, index) => {
            if (item.path === "alarmSetting") {
              return (
                path === `/my/tutor/${item.path}` && (
                  <item.component
                    key={index}
                    title={item.text}
                    alertPreset={tutorAlertPreset}
                  />
                )
              );
            } else {
              return (
                path === `/my/tutor/${item.path}` && (
                  <item.component key={index} title={item.text} />
                )
              );
            }
          })} */}
          {data?.getMyNormalInfo?.user?.userType === "Normal" && (
            <>
              <MyPageUser
                user={data.getMyNormalInfo.user}
                settingMenuList={userGeneralTabMenuList}
                jibroList={userSpecificList}
              />
              {/* {myJibroList.map((item, index) => {
                return (
                  <item.component
                    key={index}
                    title={item.text}
                    isLoggedIn={true}
                  />
                );
              })} */}
              {/* {userSettingMenuList.map((item, index) => {
                if (item.path === "alarmSetting") {
                  return (
                    <item.component
                      key={index}
                      title={item.text}
                      alertPreset={userAlertPreset}
                    />
                  );
                } else {
                  return <item.component key={index} title={item.text} />;
                }
              })} */}
            </>
          )}
        </Container>
      )}
    </>
  );
};

export default withRouter(MyPageContainer);
