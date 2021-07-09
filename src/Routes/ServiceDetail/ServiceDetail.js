import React, { forwardRef, useState } from "react";
import { useHistory, useLocation, withRouter } from "react-router-dom";
import styled from "styled-components";
import { DetailHeader } from "../../Components/Headers";
import { PopupType3, PopupType1 } from "../../Components/Popup";
import {
  AuthenticateIDBox,
  AuthenticateLicenseBox,
  AuthenticateMeBox,
  PurpleInfoBox,
} from "./AuthenticateBoxes";
import {
  CardDetail,
  CardDetailInfo,
  DetailImg,
  ServiceExplain,
  ServiceReview,
  TutorInfo,
} from "./CardDetail";
import CompleteReservation from "./CompleteReservation";

import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import { isAvailableDate } from "../../Components/Utils/isAvailableDate";
import {
  makeReference,
  useApolloClient,
  useMutation,
  useQuery,
} from "@apollo/client";
import { GET_MY_ROOMS, GET_OR_CREATE_ROOM } from "../../gql/Message";
import { GET_USER_TYPE } from "../../gql/User";
registerLocale("ko", ko);
setDefaultLocale("ko");

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  height: fit-content;
  min-height: 584px;
  margin: 0 auto;
  margin-top: 56px;
  padding-bottom: 120px;
  background-color: #fff;
`;

const ExperienceWrap = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  margin-bottom: 16px;
`;

const TextWrap = styled.div``;

const Text = styled.div`
  ${(p) => p.theme.body2};
  color: #000;
`;

const ExperienceBtn = styled.button`
  width: 86px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #4708ae;
  ${(p) => p.theme.subTitle2};
  color: #4708ae;
  border-radius: 8px;
`;

const CardDetailInfoWrap = styled.div`
  width: 100%;
  padding: 0 16px;
`;

const Section = styled.div`
  width: 100%;
  margin-top: 32px;
  padding: 0 16px;
`;

const SectionThemeWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const SectionTheme = styled.div`
  ${(p) => p.theme.headLine6}
  width: fit-content;
  height: 56px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  margin-right: 8px;
`;

const SectionThemeCaption = styled.div`
  ${(p) => p.theme.body1}
  color: rgba(0,0,0,.38);
  border-left: 1px solid rgba(0, 0, 0, 0.12);
  padding-left: 8px;
`;

const OpenBtn = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.12);
  ${(p) => p.theme.subTitle2}
  margin-top: 16px;
`;

const DetailImgWrap = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  overflow-x: scroll;
  /* ::-webkit-scrollbar {
    display: none;
  } */
`;

const Footer = styled.div`
  border: none;
  width: 100vw;
  max-width: 720px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  padding: 12px 16px;
  background-color: #fff;
`;

const FooterLeftWrap = styled.div``;

const Price = styled.div`
  ${(p) => p.theme.subTitle2};
`;

const HopeDate = styled.div`
  ${(p) => p.theme.overline};
  color: #4708ae;
  border-bottom: 1px solid #4708ae;
`;

const FooterRightWrap = styled.div`
  display: flex;
  align-items: center;
`;

const PurpleButton = styled.button`
  width: 86px;
  height: 40px;
  background-color: #4708ae;
  border-radius: 8px;
  ${(p) => p.theme.subTitle2};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  :first-child {
    margin-right: 16px;
  }
`;

const NoImgText = styled.div`
  ${(p) => p.theme.body3};
  width: 100%;
  text-align: center;
`;

const ServiceDetail = ({ id, data, loading, mutation, mutationLoading }) => {
  const { loading: typeLoading, data: typeData } = useQuery(GET_USER_TYPE);
  const history = useHistory();
  const location = useLocation();
  const [serviceExplainOpen, setServiceExplainOpen] = useState(false);
  const [curriculumOpen, setCurriculumOpen] = useState(false);
  const [cancelRefundRuleOpen, setCancelRefundRuleOpen] = useState(false);
  const [reservePop, setReservePop] = useState(false);
  const [reservePopPreview, setReservePopPreview] = useState(false);

  const [hopeDate, setHopeDate] = useState(new Date());
  const [showInvalidAlert, setShowInvalidAlert] = useState(false);

  const serviceExplainOpenClick = () => {
    setServiceExplainOpen(!serviceExplainOpen);
  };
  const curriculumOpenClick = () => {
    setCurriculumOpen(!curriculumOpen);
  };
  const cancelRefundRuleOpenClick = () => {
    setCancelRefundRuleOpen(!cancelRefundRuleOpen);
  };
  const reservePopBtn = () => {
    if (isAvailableDate(data?.getService?.service.availableDate, hopeDate)) {
      setReservePop(!reservePop);
    } else {
      setShowInvalidAlert(true);
    }
  };
  const reservePopBtnPreview = () => {
    if (isAvailableDate(data?.getService?.service.availableDate, hopeDate)) {
      setReservePopPreview(!reservePop);
    } else {
      setShowInvalidAlert(true);
    }
  };
  const cancelBtn = () => {
    setReservePop(false);
  };

  const createReservation = () => {
    if (isAvailableDate(data?.getService?.service.availableDate, hopeDate)) {
      if (!mutationLoading) {
        mutation({
          variables: { hopeDate: hopeDate.getTime().toString(), serviceId: id },
        });
      }
    } else {
      setShowInvalidAlert(true);
    }
    setReservePop(false);
  };
  const createReservationPreview = () => {
    if (isAvailableDate(data?.getService?.service.availableDate, hopeDate)) {
      if (!mutationLoading) {
        mutation({
          variables: {
            hopeDate: hopeDate.getTime().toString(),
            serviceId: id,
            isPreview: true,
          },
        });
      }
    } else {
      setShowInvalidAlert(true);
    }
    setReservePop(false);
  };

  const onClickMoveProfile = (id) => {
    history.push({
      pathname: `/profile/${id}`,
    });
  };
  const DateInput = forwardRef(({ value, onClick }, ref) => (
    <PurpleButton onClick={onClick} ref={ref}>
      날짜 선택
    </PurpleButton>
  ));
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
      getOrCreateRoomMutation({
        variables: { serverId: data?.getService?.service.server.id },
      }).then(({ data }) => {
        if (data?.getOrCreateRoom.ok) {
          const room = data.getOrCreateRoom.room;
          history.push(`/chat/${room.id}`);
        }
      });
    }
  };
  return (
    <>
      {!location.pathname.includes("/reservationComplete") && !loading && (
        <>
          {!typeLoading && (
            <DetailHeader
              type={"service"}
              like={data?.getService?.service.liking}
              serviceId={id}
              onClickChat={getOrCreateRoom}
              userType={typeData?.getUserType?.user.userType}
            />
          )}
          <Container>
            <CardDetail
              src={data?.getService?.service.server.avatar}
              category={data?.getService?.service.category.title}
              type={data?.getService?.service.displayClassType}
              name={data?.getService?.service.server.name}
              title={data?.getService?.service.title}
              region={data?.getService?.service.serviceArea}
              rate={data?.getService?.service.rate}
            />
            {data?.getService?.service?.previewPrice?.toString() && (
              <ExperienceWrap>
                <TextWrap>
                  <Text style={{ color: "rgba(0,0,0,.6)" }}>
                    서비스 사전 체험 후 결정해보세요!
                  </Text>
                  <Text>
                    1회 이용권 : {data?.getService?.service.displayPreviewPrice}
                  </Text>
                </TextWrap>
                <ExperienceBtn onClick={reservePopBtnPreview}>
                  체험 예약
                </ExperienceBtn>
              </ExperienceWrap>
            )}
            <CardDetailInfoWrap>
              <CardDetailInfo
                classType={data?.getService?.service.displayClassType}
                recruitType={data?.getService?.service.displayLessonType}
                includeSupplies={data?.getService?.service.includeSupplies}
                availableDate={data?.getService?.service.availableDate}
                numOfClass={data?.getService?.service.numOfClass}
                timePerClass={data?.getService?.service.timePerClass}
              />
            </CardDetailInfoWrap>
            <Section>
              <SectionTheme>전문가 정보</SectionTheme>
              <TutorInfo
                name={data?.getService?.service.server.name}
                src={data?.getService?.service.server.avatar}
                region={data?.getService?.service.server.workingArea}
                ratingCount={data?.getService?.service.server.rate}
                category={
                  data?.getService?.service?.server?.tutorProfile?.category
                    ?.title
                }
                onClickMoveProfile={() =>
                  onClickMoveProfile(data?.getService?.service.server.id)
                }
              />

              {data?.getService?.service.server.selfAuthentication && (
                <AuthenticateMeBox />
              )}
              {data?.getService?.service.server.idCardAuthentication && (
                <AuthenticateIDBox />
              )}
              {data?.getService?.service.server.licenseAuthentication && (
                <AuthenticateLicenseBox />
              )}
            </Section>
            <Section>
              <SectionTheme>서비스 설명</SectionTheme>
              <ServiceExplain
                open={serviceExplainOpen}
                onClick={serviceExplainOpenClick}
              >
                {data?.getService?.service.explain}
              </ServiceExplain>
            </Section>
            <Section>
              <SectionTheme>서비스 가이드</SectionTheme>
              <PurpleInfoBox
                title={`${data?.getService?.service.category.title} 서비스 이용 규칙`}
                contents={data?.getService?.service.guide}
              />
            </Section>
            <Section>
              <SectionTheme>커리큘럼</SectionTheme>
              {curriculumOpen &&
                data?.getService?.service.curriculum.map((item, index) => {
                  const [loop, body] = item.split("||");
                  return (
                    <PurpleInfoBox
                      key={loop}
                      title={`${loop}회차`}
                      contents={body}
                    />
                  );
                })}
              {!curriculumOpen &&
                data?.getService?.service.curriculum
                  .slice(undefined, 2)
                  .map((item, index) => {
                    const [loop, body] = item.split("||");
                    return (
                      <PurpleInfoBox
                        key={loop}
                        title={`${loop}회차`}
                        contents={body}
                      />
                    );
                  })}
              {data?.getService?.service.curriculum.length > 2 && (
                <OpenBtn onClick={curriculumOpenClick}>
                  {curriculumOpen ? "접기" : "펼치기"}
                </OpenBtn>
              )}
            </Section>
            <Section>
              <SectionTheme>상세 이미지</SectionTheme>
              <DetailImgWrap>
                {data?.getService?.service.images?.length > 0 ? (
                  data.getService.service.images.map((item, index) => (
                    <DetailImg url={item} key={index} />
                  ))
                ) : (
                  <NoImgText>이미지가 준비중입니다. 기다려주세요!</NoImgText>
                )}
              </DetailImgWrap>
            </Section>
            <Section>
              <SectionTheme>취소 및 환불 규정</SectionTheme>
              <ServiceExplain
                open={cancelRefundRuleOpen}
                onClick={cancelRefundRuleOpenClick}
              >
                {data?.getService?.service.cancelPolicy}
              </ServiceExplain>
            </Section>
            <Section>
              <SectionThemeWrap>
                <SectionTheme style={{ marginBottom: "0" }}>
                  서비스 평가
                </SectionTheme>
                <SectionThemeCaption>
                  {data?.getService?.service.reviewCount}개의 평가
                </SectionThemeCaption>
              </SectionThemeWrap>
              {data?.getService?.service.reviews.length !== 0 ? (
                data?.getService?.service.reviews.map((item, index) => (
                  <ServiceReview
                    url={item.from.avatar}
                    name={item.from.name}
                    ratingCount={item.rate}
                    text={item.body}
                    key={index}
                    isMine={item.isMine}
                    date={item.createdAt}
                  />
                ))
              ) : (
                <Text
                  style={{
                    color: "rgba(0, 0, 0, 0.6)",
                    textAlign: "center",
                    paddingBottom: "8px",
                  }}
                >
                  아직 작성된 평가가 없습니다.
                </Text>
              )}
            </Section>
            {data?.getService?.isNormal && (
              <Footer>
                <FooterLeftWrap>
                  <Price>{data?.getService?.service.displayPrice}</Price>
                  <HopeDate>
                    희망일 : {hopeDate.getMonth() + 1}월 {hopeDate.getDate()}일
                  </HopeDate>
                </FooterLeftWrap>
                <FooterRightWrap>
                  <DatePicker
                    locale="ko"
                    selected={hopeDate}
                    onChange={(date) => setHopeDate(date)}
                    minDate={new Date()}
                    //   popperModifiers={{ preventOverflow: { enabled: true } }}
                    popperPlacement="auto"
                    customInput={<DateInput />}
                  />
                  <PurpleButton onClick={reservePopBtn}>예약 하기</PurpleButton>
                </FooterRightWrap>
              </Footer>
            )}
            {reservePop && (
              <PopupType3
                title={"서비스를 예약하시겠습니까?"}
                contents={"*예약 일정은 전문가와 채팅을 통해 조율 가능합니다."}
                cancel={true}
                rightBtnText={"예약하기"}
                onClickCancel={cancelBtn}
                onClickRemove={cancelBtn}
                onClick={createReservation}
              />
            )}
            {reservePopPreview && (
              <PopupType3
                title={"서비스를 예약하시겠습니까?"}
                contents={"*예약 일정은 전문가와 채팅을 통해 조율 가능합니다."}
                cancel={true}
                rightBtnText={"예약하기"}
                onClickCancel={() => setReservePopPreview(false)}
                onClickRemove={() => setReservePopPreview(false)}
                onClick={createReservationPreview}
              />
            )}
            {showInvalidAlert && (
              <PopupType1
                children={
                  "전문가가 서비스를 제공하지 않는 요일입니다. 서비스 가능한 요일을 선택해주세요."
                }
                rightBtnText={"확인"}
                onClickRemove={() => setShowInvalidAlert(false)}
                onClick={() => setShowInvalidAlert(false)}
              />
            )}
          </Container>
        </>
      )}
      {location.pathname.includes("/reservationComplete") && (
        <CompleteReservation />
      )}
    </>
  );
};

export default withRouter(ServiceDetail);
