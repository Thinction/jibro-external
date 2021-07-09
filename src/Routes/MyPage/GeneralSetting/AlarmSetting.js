import { useMutation, useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import React, { useState } from "react";
import styled from "styled-components";
import { HeaderType1 } from "../../../Components/Headers";
import { Alarm } from "./SettingUtils";

const MainContainer = styled.div`
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
  padding: 16px;
`;

const Theme = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  ${(p) => p.theme.headLine6}
  margin-bottom: 16px;
`;

const Caption = styled.div`
  ${(p) => p.theme.caption}
  color: rgba(0,0,0,.6);
  margin-top: 24px;
`;

const GET_USER_TYPE = gql`
  query getUserType {
    getUserType {
      ok
      user {
        id
        reservationAlarm
        reviewAlarm
        messageAlarm
        noticeAlarm
      }
      error
    }
  }
`;

const UPDATE_USER_ALARM = gql`
  mutation updateUserAlarm($allAlarms: Boolean, $alarmType: String) {
    updateUserAlarm(allAlarms: $allAlarms, alarmType: $alarmType) {
      ok
      error
    }
  }
`;

const AlarmSetting = () => {
  const [allAlarm, setAllAlarm] = useState(true);
  const [reservationAlarm, setReservationAlarm] = useState(false);
  const [reviewAlarm, setReviewAlarm] = useState(false);
  const [messageAlarm, setMessageAlarm] = useState(false);
  const [noticeAlarm, setNoticeAlarm] = useState(false);
  const { refetch } = useQuery(GET_USER_TYPE, {
    fetchPolicy: "cache-and-network",
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      if (data.getUserType.ok) {
        setReservationAlarm(data.getUserType.user.reservationAlarm);
        setReviewAlarm(data.getUserType.user.reviewAlarm);
        setMessageAlarm(data.getUserType.user.messageAlarm);
        setNoticeAlarm(data.getUserType.user.noticeAlarm);
      }
    },
  });
  const [updateUserAlarmMutation] = useMutation(UPDATE_USER_ALARM);
  const onClickAll = () => {
    updateUserAlarmMutation({
      variables: { allAlarms: !allAlarm },
    }).then((res) => {
      if (res.data.updateUserAlarm.ok) {
        setAllAlarm(!allAlarm);
        refetch();
      }
    });
  };
  const onClickChange = (name) => {
    updateUserAlarmMutation({
      variables: { alarmType: name },
    }).then((res) => {
      if (res.data.updateUserAlarm.ok) {
        refetch();
      }
    });
  };
  return (
    <>
      <MainContainer>
        <HeaderType1>알림 설정</HeaderType1>
        <Container>
          <Theme>푸시 알림 설정</Theme>
          {
            <>
              <Alarm key={0} preset={allAlarm} onClick={onClickAll}>
                {"어플 푸시 알림 전체 수신여부"}
              </Alarm>
              <Alarm
                key={1}
                preset={reservationAlarm}
                name="reservationAlarm"
                onClick={onClickChange}
              >
                {"예약 확정/취소 알림"}
              </Alarm>
              <Alarm
                key={2}
                preset={reviewAlarm}
                name="reviewAlarm"
                onClick={onClickChange}
              >
                {"평가 작성 알림"}
              </Alarm>
              <Alarm
                key={3}
                preset={messageAlarm}
                name="messageAlarm"
                onClick={onClickChange}
              >
                {"채팅 수신 알림"}
              </Alarm>
              <Alarm
                key={4}
                preset={noticeAlarm}
                name="noticeAlarm"
                onClick={onClickChange}
              >
                {"공지사항 알림"}
              </Alarm>
            </>
          }
          <Caption>
            계정보안, 주문, 약관변경 등과 관련된 중요 정보는 알람 수신 동의와
            상관없이 발송됩니다.
          </Caption>
        </Container>
      </MainContainer>
    </>
  );
};

export default AlarmSetting;
