import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useHistory, withRouter } from "react-router-dom";
import styled from "styled-components";
import { logUserOut } from "../../client";
import Dock from "../../Components/Dock";
import { ProfileSquare } from "../../Components/IconPack";

const Container = styled.div`
  width: calc(100% - 32px);
  height: fit-content;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
  margin-bottom: 56px;
`;

const ProfileBox = styled.div`
  width: 100%;
  height: 88px;
  display: flex;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

const Profile = styled.div`
  margin-left: 16px;
  height: 100%;
  width: fit-content;
  max-width: 200px;
`;

const Name = styled.div`
  ${(p) => p.theme.headLine6};
  margin-top: 8px;
`;

const Email = styled.div`
  ${(p) => p.theme.caption};
  margin-top: 8px;
`;

const IconWrap = styled.div`
  position: absolute;
  right: 0;
  top: 30%;
`;
const SectionTheme = styled.div`
  ${(p) => p.theme.headLine6};
  margin: 14px 0;
`;

const Section = styled.div`
  width: 100%;
  margin-top: 24px;
`;

const BusinessMenu = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

const MenuTheme = styled.div`
  ${(p) => p.theme.body1};
`;

const GET_MY_TUTOR_INFO = gql`
  query getMyTutorInfo {
    getMyTutorInfo {
      ok
      user {
        id
        userType
        tutorProfile {
          id
          introduce
          careers
          licenses
          category {
            title
          }
        }
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
        reviewCount
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

const MyPageMenu = ({ title, path, user }) => {
  return path === "logout" ? (
    <BusinessMenu style={{ cursor: "pointer" }} onClick={() => logUserOut()}>
      <MenuTheme>{title}</MenuTheme>
      <MdKeyboardArrowRight size={24} color={"rgba(0,0,0,0.6)"} />
    </BusinessMenu>
  ) : (
    <Link
      to={{
        pathname: path === "information" ? `information` : `/my/${path}`,
        state: { user },
      }}
    >
      <BusinessMenu>
        <MenuTheme>{title}</MenuTheme>
        <MdKeyboardArrowRight size={24} color={"rgba(0,0,0,0.6)"} />
      </BusinessMenu>
    </Link>
  );
};

const MyPageTutor = ({ businessMenuList, settingMenuList }) => {
  const history = useHistory();
  const { loading, data } = useQuery(GET_MY_TUTOR_INFO, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
  });
  return (
    <>
      <Container>
        {!loading && data?.getMyTutorInfo?.ok && (
          <>
            <ProfileBox>
              <ProfileSquare size={72} src={data.getMyTutorInfo.user.avatar} />
              <Profile>
                <Name>{data.getMyTutorInfo.user.name} 전문가님</Name>
                <Email>{data.getMyTutorInfo.user.email}</Email>
              </Profile>
              <IconWrap
                onClick={() =>
                  history.push({
                    pathname: `/profile/${data.getMyTutorInfo.user.id}`,
                  })
                }
              >
                <MdKeyboardArrowRight size={24} color={"rgba(0,0,0,0.6)"} />
              </IconWrap>
            </ProfileBox>
            <Section>
              <SectionTheme>지브로 비즈니스</SectionTheme>
              {businessMenuList.map((item, index) => {
                return (
                  <MyPageMenu key={index} title={item.text} path={item.path} />
                );
              })}
            </Section>
            <Section>
              <SectionTheme>설정</SectionTheme>
              {settingMenuList.map((item, index) => {
                return (
                  <MyPageMenu
                    key={index}
                    title={item.text}
                    path={item.path}
                    user={data.getMyTutorInfo.user}
                  />
                );
              })}
            </Section>
          </>
        )}
        <Dock />
      </Container>
    </>
  );
};

export default withRouter(MyPageTutor);
