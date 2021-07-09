import React from "react";
import styled from "styled-components";
import { MdHome } from "react-icons/md";
import { TutorSummary } from "./TutorSummary";
import {
  AuthenticateIDBox,
  AuthenticateLicenseBox,
  AuthenticateMeBox,
  PurpleJobInfoBox,
  PurpleLicenseInfoBox,
} from "./AuthenticateBoxes";
import { DetailHeader } from "../../../Components/Headers";
import ClassCard from "../../../Components/ContentContainer/ClassCard";
import {
  makeReference,
  makeVar,
  useApolloClient,
  useMutation,
  useQuery,
} from "@apollo/client";
import { GET_TUTOR_SERVICES } from "../../../gql/Service";
import { GET_TUTOR_SERVICES_REVIEWS } from "../../../gql/Review";
import { ServiceReview } from "../../ServiceDetail/CardDetail";
import { GET_MY_ROOMS, GET_OR_CREATE_ROOM } from "../../../gql/Message";
import { withRouter } from "react-router-dom";
import { GET_USER_TYPE } from "../../../gql/User";

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

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media only screen and (max-width: 425px) {
    justify-content: center;
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

const PlaceWrap = styled.div`
  display: flex;
  margin-top: 16px;
  align-items: center;
`;

const SectionThemeCaption = styled.div`
  ${(p) => p.theme.body1}
  color: rgba(0,0,0,.38);
  border-left: 1px solid rgba(0, 0, 0, 0.12);
  padding-left: 8px;
  margin-left: 8px;
`;

const ProfileTutor = ({ user, history }) => {
  const { loading: typeLoading, data: typeData } = useQuery(GET_USER_TYPE);
  const { loading, data } = useQuery(GET_TUTOR_SERVICES, {
    variables: { userId: user.id },
  });
  const { loading: reviewLoading, data: reviewData } = useQuery(
    GET_TUTOR_SERVICES_REVIEWS,
    {
      variables: { id: user.id },
      onCompleted: (d) => {
        if (!d.getTutorServicesReviews.ok) {
          alert(d.getTutorServicesReviews.error);
        }
      },
    }
  );
  const client = useApolloClient();
  const [getOrCreateRoomMutation, { loading: getOrCreateRoomLoading }] =
    useMutation(GET_OR_CREATE_ROOM, {
      update: async (cache, mutationResult) => {
        const {
          data: {
            getOrCreateRoom: { ok, room },
          },
        } = mutationResult;
        if (ok) {
          const queryCalled = cache.readQuery({ query: GET_MY_ROOMS });
          if (!queryCalled) {
            await client.query({ query: GET_MY_ROOMS });
          }
          cache.modify({
            id: cache.identify(makeReference("ROOT_QUERY")),
            fields: {
              getMyRooms(prev) {
                if (!prev || prev.length === 0) {
                  return [{ ...room, __ref: `Room:${room.id}` }];
                }
                const exist = prev.find((aRoom) => {
                  return aRoom.id === room.id;
                });
                if (exist) {
                  return prev;
                }
                return [room, ...prev];
              },
            },
          });
        }
      },
    });

  const getOrCreateRoom = () => {
    if (!getOrCreateRoomLoading) {
      getOrCreateRoomMutation({ variables: { serverId: user.id } }).then(
        ({ data }) => {
          if (data?.getOrCreateRoom.ok) {
            const room = data.getOrCreateRoom.room;
            history.push(`/chat/${room.id}`);
          }
        }
      );
    }
  };
  return (
    <>
      {!typeLoading && (
        <DetailHeader
          type={"tutor"}
          onClickChat={getOrCreateRoom}
          userType={typeData?.getUserType?.user.userType}
        />
      )}
      <Container>
        <Section>
          <TutorSummary
            img={user.avatar}
            name={user.name}
            professionalField={user?.tutorProfile?.category?.title}
            reviews={user.reviewCount}
          />
        </Section>
        <Section>
          <Title>소개</Title>
          <Text>{user?.tutorProfile?.introduce}</Text>
          <PlaceWrap>
            <MdHome size={24} color={"rgba(0,0,0,.6)"} />
            <Text style={{ color: "rgba(0, 0, 0, 0.6)", marginLeft: "8px" }}>
              {"활동지역 : " +
                user.workingArea.split("||")[0] +
                ", " +
                user.workingArea.split("||")[1]}
            </Text>
          </PlaceWrap>
        </Section>
        <Section>
          <Title>전문가 인증 완료</Title>
          {user.selfAuthentication && <AuthenticateMeBox />}
          {user.idCardAuthentication && <AuthenticateIDBox />}
          {user.licenseAuthentication && <AuthenticateLicenseBox />}
        </Section>
        <Section>
          <Title>전문가 경력</Title>
          <PurpleJobInfoBox
            title="경력사항"
            jobHistory={user?.tutorProfile?.careers}
          />
          <PurpleLicenseInfoBox
            title="보유 자격증"
            licenseList={user?.tutorProfile?.licenses}
          />
        </Section>
        <Section>
          <Title>전문가 서비스</Title>
          <CardWrapper>
            {!loading &&
            data?.getTutorServices?.ok &&
            data.getTutorServices.services.length !== 0 ? (
              data.getTutorServices.services.map((item) => {
                if (item.serviceState === "ForSale") {
                  return (
                    <ClassCard
                      key={item.id}
                      data={item}
                      name={user.name}
                      workRegion={user.workingArea}
                      certType={user.certType}
                      profileImg={user.avatar}
                      ratingCount={user.ratingCount}
                      isLoggedIn={makeVar(
                        Boolean(localStorage.getItem("token"))
                      )}
                    />
                  );
                }
                return null;
              })
            ) : (
              <Text style={{ color: "rgba(0, 0, 0, 0.6)" }}>
                아직 개설된 서비스가 없습니다.
              </Text>
            )}
          </CardWrapper>
        </Section>
        <Section>
          <Title>
            전문가 평가
            <SectionThemeCaption>
              {user.reviewCount}개의 평가
            </SectionThemeCaption>
          </Title>
          {!reviewLoading &&
          reviewData?.getTutorServicesReviews?.ok &&
          reviewData.getTutorServicesReviews.serviceReviews.length !== 0 ? (
            reviewData.getTutorServicesReviews.serviceReviews.map(
              (item, index) => {
                return (
                  <ServiceReview
                    key={index}
                    url={item.from.avatar}
                    name={item.from.name}
                    ratingCount={item.rate}
                    text={item.body}
                    isMine={item.isMe}
                    date={item.createdAt}
                  />
                );
              }
            )
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

export default withRouter(ProfileTutor);
