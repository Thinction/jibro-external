import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { logUserOut } from "../../client";
import Dock from "../../Components/Dock";
import { ProfileSquare } from "../../Components/IconPack";
import { PopupType2 } from "../../Components/Popup";
import numberWithCommas from "../../Components/Utils/numberWithCommas";

const Container = styled.div`
  width: calc(100% - 32px);
  height: fit-content;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 56px;
`;

const InduceButtonWrapper = styled.div`
  width: 100%;
  height: fit-content;
  max-height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f4f4f4;
  margin-bottom: 24px;
  padding: 8px 16px;
`;

const InduceText = styled.div`
  ${(p) => p.theme.body3};
  font-weight: 500;
  color: ${(p) => p.theme.themeColor};
  max-width: 51.4%;
  word-break: keep-all;
`;

const InduceButton = styled.button`
  ${(p) => p.theme.subTitle2};
  background: ${(p) => p.theme.themeColor};
  color: #fff;
  padding: 8px 12px;
  border-radius: 8px;
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

const CashBox = styled.div`
  width: 100%;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CashWrap = styled.div``;

const Caption = styled.div`
  ${(p) => p.theme.body2}
  color: rgba(0,0,0,.6);
`;

const Cash = styled.div`
  ${(p) => p.theme.subTitle2}
  color: #4708ae;
`;

const FillingInBtn = styled.button`
  width: 136px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #4708ae;
  border-radius: 8px;
  ${(p) => p.theme.subTitle2}
  color: #4708ae;
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

const MyPageUser = ({ settingMenuList, jibroList }) => {
  const history = useHistory();
  const { loading, data } = useQuery(GET_MY_NORMAL_INFO, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
  });
  const [isOn, setIsOn] = useState(false);
  const onClickCancel = () => {
    setIsOn(false);
  };
  const onClickToTutor = () => {
    logUserOut();
    history.push("/SignUp", { from: "Tutor" });
  };
  return (
    <>
      {!loading && data?.getMyNormalInfo?.ok && (
        <>
          <InduceButtonWrapper>
            <InduceText>
              지금, 지브로에서 비즈니스에 맞는 고객을 만나보세요.
            </InduceText>
            <InduceButton
              onClick={() => {
                setIsOn(true);
              }}
            >
              전문가 가입하기
            </InduceButton>
          </InduceButtonWrapper>
          <Container>
            <ProfileBox>
              <ProfileSquare size={72} src={data.getMyNormalInfo.user.avatar} />
              <Profile>
                <Name>{data.getMyNormalInfo.user.name} 회원님</Name>
                <Email>{data.getMyNormalInfo.user.email}</Email>
              </Profile>
              <IconWrap
                onClick={() =>
                  history.push({
                    pathname: `/profile/${data.getMyNormalInfo.user.id}`,
                  })
                }
              >
                <MdKeyboardArrowRight size={24} color={"rgba(0,0,0,0.6)"} />
              </IconWrap>
            </ProfileBox>
            <CashBox>
              <CashWrap>
                <Caption>사용 가능 캐쉬</Caption>
                <Cash>
                  ₩ {numberWithCommas(data.getMyNormalInfo.user.point)}원
                </Cash>
              </CashWrap>
              <FillingInBtn onClick={() => history.push("./my/chargeCash")}>
                지브로 캐쉬 충전
              </FillingInBtn>
            </CashBox>
            <Section>
              <SectionTheme>나의 지브로</SectionTheme>
              {jibroList.map((item, index) => {
                return (
                  <MyPageMenu
                    key={index}
                    title={item.text}
                    path={item.path}
                    user={data.getMyNormalInfo.user}
                  />
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
                    user={data.getMyNormalInfo.user}
                  />
                );
              })}
            </Section>
            <Dock />
            {isOn && (
              <PopupType2
                cancel={true}
                onClickCancel={onClickCancel}
                rightBtnText={"확인"}
                onClick={onClickToTutor}
              >
                전문가로 가입하기 위해서 현재 계정은 로그아웃됩니다.
                <br />
                전문가로 가입하시겠습니까?
              </PopupType2>
            )}
          </Container>
        </>
      )}
    </>
  );
};

export default MyPageUser;
