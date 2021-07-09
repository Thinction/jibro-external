import React, { useState } from "react";
import styled from "styled-components";
import { ProfileSquare, StatusIcon } from "../IconPack";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PopupType1, TextAreaPopup } from "../Popup";
import theme from "../../Styles/theme";
import dateConverter from "../Utils/dateConverter";
import { makeReference, useApolloClient, useMutation } from "@apollo/client";
import { CANCEL_RESERVATION, CONFIRM_RESERVATION } from "../../gql/Reservation";
import useInput from "../../Hooks/UseInput";
import { GET_OR_CREATE_ROOM } from "../../gql/Message";
import { useHistory } from "react-router-dom";
import { GET_MY_ROOMS } from "../../gql/Message";

const ClassCardTitle = styled.div`
  ${(p) => p.theme.subTitle2};
  line-height: ${(p) => (p.lineHeight ? p.lineHeight + "px" : "")};
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom + "px" : "unset")};
  margin-left: ${(p) => (p.marginLeft ? p.marginLeft + "px" : "unset")};
  cursor: pointer;
`;

const NoBoxShadowCardContainer = styled.div`
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
  justify-content: ${(p) => (p.status ? "space-between" : "flex-end")};
`;

const CardButton = styled.div`
  ${(p) => p.theme.subTitle2}
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(p) => (p.coloredBtn ? "none" : "1px solid rgba(0, 0, 0, .12)")};
  border-radius: 8px;
  background: ${(p) => (p.coloredBtn ? p.coloredBtn : "#fff")};
  color: ${(p) => (p.coloredBtn ? "#fff" : "rgba(0, 0, 0, 0.6)")};
  margin-right: ${(props) => props.status === "결제 대기" && "14px"};
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
  Confirmed: { text: "결제 대기", color: "rgba(0, 0, 0, .38)" },
  Cancelled: { text: "예약 취소", color: theme.themeColorError },
};

const ReservingClassCard = ({ data }) => {
  const [isOn, setIsOn] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [isCancelOn, setIsCancelOn] = useState(false);
  const [cancelConfirm, setCancelConfirm] = useState(false);
  const cancelTextInput = useInput("");
  const isOnClick = () => {
    setIsOn(!isOn);
  };
  const isConfirmClick = () => {
    setIsConfirm(true);
  };

  const isCancelOnClick = () => {
    setIsCancelOn(!isCancelOn);
  };
  const cancelBtn = () => {
    setIsConfirm(false);
  };

  const [cancelMutation, { loading: cancelLoading }] = useMutation(
    CANCEL_RESERVATION,
    {
      onCompleted: (d) => {
        if (d.cancelReservation.ok) {
          setCancelConfirm(true);
          setIsCancelOn(false);
          window.location.reload();
        }
      },
    }
  );

  const [confirmMutation, { loading: confirmLoading }] = useMutation(
    CONFIRM_RESERVATION,
    {
      onCompleted: (d) => {
        if (d.confirmReservation.ok) {
          cancelBtn();
          window.location.reload();
        }
      },
    }
  );

  const cancelReservation = () => {
    if (
      !cancelLoading &&
      cancelTextInput.value &&
      cancelTextInput.value !== ""
    ) {
      cancelMutation({
        variables: {
          reservationId: data.id,
          cancelReason: cancelTextInput.value,
        },
      });
    }
  };
  const confirmReservation = () => {
    if (!confirmLoading) {
      confirmMutation({
        variables: {
          reservationId: data.id,
        },
      });
    }
  };

  const history = useHistory();
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

  const reservationState = stateDict[data.reservationState];
  const hopeDate = dateConverter(data.hopeDate);
  return (
    <NoBoxShadowCardContainer status={reservationState.text}>
      <SectionTop>
        <StatusIcon type={reservationState} />
        <ClassCardTitle marginLeft={8}>{data.service.title}</ClassCardTitle>
      </SectionTop>
      <SectionMiddle>
        <ProfileSquare size={96} border={8} src={data.from.avatar} />
        <CardInfoWrap>
          <CardInfoText>주문번호: {data.displayIdNumber}</CardInfoText>
          <CardInfoText>
            의뢰인:{" "}
            <UnderLinedText>
              <a href={`/profile/${data.from.id}`}>{data.from.name}</a>
            </UnderLinedText>
          </CardInfoText>
          <CardInfoText>
            희망일: {hopeDate.getMonth() + 1}월 {hopeDate.getDate()}일
          </CardInfoText>
        </CardInfoWrap>
      </SectionMiddle>
      {reservationState.text !== "예약 취소" ? (
        <>
          <SectionBottom status={reservationState.text === "예약 중"}>
            <CardButton
              onClick={getOrCreateRoom}
              status={reservationState.text}
            >
              1:1 채팅
            </CardButton>
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
                children={"예약 취소 신청이 완료되었습니다."}
                onClickRemove={() => setCancelConfirm(false)}
                onClick={() => setCancelConfirm(false)}
              />
            )}
            <CardButton onClick={isCancelOnClick}>예약 취소</CardButton>
            {reservationState.text === "예약 중" && (
              <CardButton
                onClick={isConfirmClick}
                coloredBtn={theme.themeColor}
              >
                예약 확정
              </CardButton>
            )}
          </SectionBottom>
          {isConfirm && (
            <PopupType1
              cancel={true}
              onClickCancel={cancelBtn}
              onClick={confirmReservation}
            >
              예약을 확정하고 의뢰인에게 결제 요청을 보내시겠습니까?
            </PopupType1>
          )}
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
    </NoBoxShadowCardContainer>
  );
};

export default ReservingClassCard;
