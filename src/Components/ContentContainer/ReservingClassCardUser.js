import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import { ProfileSquare, StatusIcon } from "../IconPack";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PopupType1, TextAreaPopup } from "../Popup";
import dateConverter from "../Utils/dateConverter";
import useInput from "../../Hooks/UseInput";
import { withRouter } from "react-router";
import theme from "../../Styles/theme";
import { makeReference, useApolloClient, useMutation } from "@apollo/client";
import { CANCEL_RESERVATION, UPDATE_RESERVATION } from "../../gql/Reservation";

import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import { GET_OR_CREATE_ROOM, GET_MY_ROOMS } from "../../gql/Message";
registerLocale("ko", ko);
setDefaultLocale("ko");

const ReservingClassCardContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 16px 0 24px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding-bottom: ${(props) => props.status === "예약 취소" && "0"};
`;

const SectionTop = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
`;

const CardTheme = styled.div`
  ${(p) => p.theme.subTitle2}
  margin-left: 8px;
`;

const SectionMiddle = styled.div`
  display: flex;
  margin-top: 16px;
`;

const CardInfoWrap = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CardInfoText = styled.div`
  ${(p) => p.theme.body2}
  font-weight:500;
`;

const UnderLinedText = styled.span`
  color: rgba(0, 78, 255, 0.87);
  text-decoration: underline;
`;

const SectionBottom = styled.div`
  width: 100%;
  display: flex;
  margin-top: 16px;
  justify-content: space-between;
`;

const CardButton = styled.button`
  width: 100px;
  height: 40px;
  ${(p) => p.theme.subTitle2}
  display:flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  color: rgba(0, 0, 0, 0.6);
`;

const CancelWrap = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  svg {
    transition: all ease-in-out 0.2s;
    transform: ${(p) => (p.isOn ? "rotate(180deg)" : "unset")};
  }
`;

const CancelTitle = styled.div`
  ${(p) => p.theme.body1}
`;

const CancelContents = styled.div`
  ${(p) => p.theme.body2}
  margin-top: 8px;
  margin-left: 16px;
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.6);
`;

const stateDict = {
  Waiting: { text: "예약 중", color: "rgba(0, 0, 0, .38)" },
  Confirmed: { text: "예약 확정", color: theme.themeColorSecondary },
  Cancelled: { text: "예약 취소", color: theme.themeColorError },
};

const ReservingClassCardUser = ({ data, history, user }) => {
  const reservationState = stateDict[data.reservationState];
  const hopeDate = dateConverter(data.hopeDate);

  const [alertMessage, setAlertMessage] =
    useState("예약 취소 신청이 완료되었습니다.");
  const [isOn, setIsOn] = useState(false);
  const [isCancelOn, setIsCancelOn] = useState(false);
  const [cancelConfirm, setCancelConfirm] = useState(false);
  const cancelTextInput = useInput("");

  const isOnClick = () => {
    setIsOn(!isOn);
  };

  const isCancelOnClick = () => {
    setIsCancelOn(!isCancelOn);
  };

  const [cancelReservationMutation, { loading }] = useMutation(
    CANCEL_RESERVATION,
    {
      onCompleted: (d) => {
        if (d.cancelReservation.ok) {
          setCancelConfirm(true);
          setIsCancelOn(false);
          setAlertMessage("예약 취소 신청이 완료되었습니다.");
          window.location.reload();
        }
      },
    }
  );

  const cancelReservation = () => {
    if (!loading && cancelTextInput.value && cancelTextInput.value !== "") {
      cancelReservationMutation({
        variables: {
          reservationId: data.id,
          cancelReason: cancelTextInput.value,
        },
      });
    }
  };

  const [updateReservationMutation, { loading: updateReservationLoading }] =
    useMutation(UPDATE_RESERVATION, {
      onCompleted: (d) => {
        if (d.updateReservation.ok) {
          window.location.reload();
        } else if (d.updateReservation.error) {
          setAlertMessage(d.updateReservation.error);
          setCancelConfirm(true);
        }
      },
    });

  const updateHopeDate = (date) => {
    if (!updateReservationLoading) {
      updateReservationMutation({
        variables: {
          reservationId: data.id,
          hopeDate: date.getTime().toString(),
        },
      });
    }
  };

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
      getOrCreateRoomMutation({ variables: { serverId: data.to.id } }).then(
        ({ data }) => {
          if (data?.getOrCreateRoom.ok) {
            const room = data.getOrCreateRoom.room;
            history.push(`/chat/${room.id}`);
          }
        }
      );
    }
  };

  const movePurchasePage = () => {
    history.push({
      pathname: "/purchase",
      state: {
        reservationId: data.id,
      },
    });
  };

  const DateInput = forwardRef(({ value, onClick }, ref) => (
    <CardButton
      onClick={onClick}
      ref={ref}
      style={{ backgroundColor: "#4708AE", color: "#fff" }}
    >
      날짜 변경
    </CardButton>
  ));
  return (
    <ReservingClassCardContainer status={reservationState.text}>
      <SectionTop>
        <StatusIcon type={reservationState} />
        <CardTheme>{data.service.title}</CardTheme>
      </SectionTop>
      <SectionMiddle>
        <ProfileSquare size={96} border={8} src={data.to.avatar} />
        <CardInfoWrap>
          <CardInfoText>주문번호: {data.displayIdNumber}</CardInfoText>
          <CardInfoText>
            전문가:{" "}
            <UnderLinedText>
              <a href={`/profile/${data.to.id}`}>{data.to.name}</a>
            </UnderLinedText>
          </CardInfoText>
          <CardInfoText>
            희망일: {hopeDate.getMonth() + 1}월 {hopeDate.getDate()}일
          </CardInfoText>
        </CardInfoWrap>
      </SectionMiddle>
      {reservationState.text !== "예약 취소" ? (
        <>
          <SectionBottom>
            <CardButton onClick={getOrCreateRoom}>1:1 채팅</CardButton>
            <CardButton onClick={isCancelOnClick}>예약 취소</CardButton>
            {isCancelOn && (
              <TextAreaPopup
                text={"예약 취소 사유를 입력해주세요."}
                onClickRemove={() => setIsCancelOn(false)}
                onClickSend={cancelReservation}
                value={cancelTextInput.value}
                setValue={cancelTextInput.onChange}
              />
            )}
            {cancelConfirm && (
              <PopupType1
                children={alertMessage}
                onClickRemove={() => setCancelConfirm(false)}
                onClick={() => setCancelConfirm(false)}
              />
            )}
            {reservationState.text === "예약 중" ? (
              <DatePicker
                locale="ko"
                selected={hopeDate}
                onChange={updateHopeDate}
                minDate={new Date()}
                popperPlacement="auto"
                customInput={<DateInput />}
              />
            ) : (
              <CardButton
                style={{ backgroundColor: "#4708AE", color: "#fff" }}
                onClick={movePurchasePage}
              >
                구매하기
              </CardButton>
            )}
          </SectionBottom>
        </>
      ) : (
        <>
          <CancelWrap isOn={isOn}>
            <CancelTitle>예약 취소 사유</CancelTitle>
            <MdKeyboardArrowDown size={24} onClick={isOnClick} />
          </CancelWrap>
          {isOn && (
            <CancelContents>
              {`${data.isTutorCancelled ? "전문가" : "의뢰인"} 취소 : ${
                data.cancelReason
              }`}
            </CancelContents>
          )}
        </>
      )}
    </ReservingClassCardContainer>
  );
};

export default withRouter(ReservingClassCardUser);
