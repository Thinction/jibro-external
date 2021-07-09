import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import {
  AuthenticateIDBox,
  AuthenticateHomeBox,
  AuthenticateMeBox,
} from "./AuthenticateBoxes";
import { DetailHeader } from "../../../Components/Headers";
import { ServiceReview } from "../../../Components/ReviewComponents";
import { UserSummary } from "./UserSummary";

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  height: fit-content;
  min-height: 584px;
  margin: 0 auto;
  margin-top: 56px;
  padding-bottom: 70px;
  background-color: #fff;
  padding: 0 16px;
  padding-bottom: 60px;
`;

const Section = styled.div`
  width: 100%;
  height: fit-content;

  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  margin-bottom: 24px;
  padding-bottom: 24px;
  :last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.div`
  width: fit-content;
  height: 56px;
  display: flex;
  align-items: center;
  ${(p) => p.theme.headLine6};
  margin-bottom: 16px;
`;

const Text = styled.div`
  ${(p) => p.theme.body2};
  white-space: pre-line;
`;

const SectionThemeCaption = styled.div`
  ${(p) => p.theme.body1}
  color: rgba(0,0,0,.38);
  border-left: 1px solid rgba(0, 0, 0, 0.12);
  padding-left: 8px;
  margin-left: 8px;
`;

const ProfileUser = ({ user }) => {
  return (
    <>
      <DetailHeader />
      <Container>
        <Section border={true}>
          <UserSummary
            src={user.avatar}
            name={user.name}
            reviews={user?.toReviews?.length || 0}
          />
        </Section>
        <Section>
          <Title>유저 인증 완료</Title>
          {user.selfAuthentication && <AuthenticateMeBox />}
          {user.idCardAuthentication && <AuthenticateIDBox />}
          {user.homeAuthentication && <AuthenticateHomeBox />}
        </Section>
        <Section>
          <Title>
            유저 평가
            <SectionThemeCaption>
              {user?.toReviews?.length || 0}개의 평가
            </SectionThemeCaption>
          </Title>
          {user?.toReviews.length !== 0 ? (
            user?.toReviews?.map((item, index) => {
              return (
                <ServiceReview
                  src={item.from.avatar}
                  name={item.from.name}
                  ratingCount={item.rate}
                  text={item.body}
                  key={index}
                  isMe={item.isMe}
                  reviewDate={item.createdAt}
                />
              );
            })
          ) : (
            <Text style={{ color: "rgba(0, 0, 0, 0.6)", textAlign: "center" }}>
              아직 작성된 평가가 없습니다.
            </Text>
          )}
        </Section>
      </Container>
    </>
  );
};

export default withRouter(ProfileUser);
