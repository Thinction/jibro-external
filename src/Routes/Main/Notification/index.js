import { makeReference, useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { HeaderType2 } from "../../../Components/Headers";
import { PopupType2 } from "../../../Components/Popup";
import dateConverter from "../../../Components/Utils/dateConverter";
import {
  DELETE_ALL_NOTIFICATIONS,
  GET_MY_NOTIFICATIONS,
  READ_ALL_NOTIFICATIONS,
} from "../../../gql/Notification";
import DateText from "./DateText";
import Notification from "./Notification";

const Container = styled.div`
  max-width: 720px;
  width: 100%;
  height: 100vh;
  min-height: calc(100vh - 56px);
  margin: 0 auto;
  background: #fff;
`;
const NotificationContainer = styled.div`
  width: 100vw;
  max-width: 720px;
  height: 100%;
  margin: 0 auto;
  padding: 0 16px;
  padding-top: 56px;
  background: #fff;
  overflow-y: scroll;
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0%;
  z-index: 991;
  background: rgba(0, 0, 0, 0.06);
`;

const MoreVertContainer = styled.div`
  width: 128px;
  height: fit-content;
  border-radius: 4px;
  ${(p) => p.theme.ContainerBoxShadow};
  padding: 8px 0;
  background: #fff;
  position: ${(p) => (p.absolute ? "absolute" : "fixed")};
  top: ${(p) => (p.top ? p.top : "40px")};
  right: ${(p) => (p.mobile ? "24px" : "calc(50% - 336px)")};
  z-index: 991;
`;

const MoreVertBtn = styled.button`
  ${(p) => p.theme.body2};
  width: 100%;
  height: 32px;
  padding-left: 16px;
  display: flex;
  align-items: center;
`;

const MoreVertMenu = ({
  text,
  onClickRemove,
  mobile,
  onClickMenu,
  absolute,
  top,
}) => (
  <>
    <Overlay onClick={onClickRemove} />
    <MoreVertContainer mobile={mobile} top={top} absolute={absolute}>
      <MoreVertBtn onClick={onClickMenu}>{text}</MoreVertBtn>
    </MoreVertContainer>
  </>
);

const dayArray = ["일", "월", "화", "수", "목", "금", "토", "일"];
const getDate = (milsec) => {
  const dateObj = new Date(milsec);
  const day = dayArray[dateObj.getDay()];
  const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
  const date = ("0" + dateObj.getDate()).slice(-2);
  return `${month}.${date}(${day})`;
};

const getTime = (createdAt) => {
  const date = dateConverter(createdAt);
  let hour = date.getHours();
  let str;
  if (hour <= 11) {
    str = `오전 ${hour}시 ${date.getMinutes()}분`;
  } else if (hour === 12) {
    str = `오후 ${hour}시 ${date.getMinutes()}분`;
  } else {
    str = `오후 ${hour - 12}시 ${date.getMinutes()}분`;
  }
  return str;
};

const Notifications = ({ notifications }) => {
  let date;
  return (
    <NotificationContainer>
      {notifications.map((item) => {
        let showDate = false;
        const dateStr = getDate(parseInt(item.createdAt));
        if (!date) {
          showDate = true;
        } else {
          if (dateStr !== date) {
            showDate = true;
          }
        }
        date = dateStr;
        return (
          <>
            {showDate && <DateText key={item.id + "-date"} text={date} />}
            <Notification
              key={item.id}
              uri={item.uri}
              text={item.body}
              time={getTime(item.createdAt)}
            />
          </>
        );
      })}
    </NotificationContainer>
  );
};

const NotificationPage = ({ mobile }) => {
  const history = useHistory();
  const [showMore, setShowMore] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const { data, loading } = useQuery(GET_MY_NOTIFICATIONS);

  const [readMutation, { loading: readLoading }] = useMutation(
    READ_ALL_NOTIFICATIONS,
    {
      update: (cache) => {
        cache.modify({
          id: cache.identify(makeReference("ROOT_QUERY")),
          fields: {
            getHasUnreadNotification(prev) {
              return false;
            },
          },
        });
      },
    }
  );

  const [deleteMutation, { loading: deleteLoading }] = useMutation(
    DELETE_ALL_NOTIFICATIONS,
    {
      refetchQueries: [{ query: GET_MY_NOTIFICATIONS }],
      onCompleted: () => setShowAlert(false),
      update: (cache) => {
        cache.modify({
          id: cache.identify(makeReference("ROOT_QUERY")),
          fields: {
            getMyNotifications(prev) {
              return [];
            },
          },
        });
      },
    }
  );

  const deleteAll = () => {
    setShowMore(false);
    if (!deleteLoading) {
      deleteMutation();
    }
  };

  useEffect(() => {
    if (!readLoading) {
      readMutation();
    }
  }, []);
  return (
    <Container>
      <HeaderType2
        onClickFunc={() => history.replace("/")}
        onClickFunc2={() => setShowMore(true)}
        absolute={true}
      >
        알림
      </HeaderType2>
      {!loading && data?.getMyNotifications && (
        <Notifications notifications={data.getMyNotifications} />
      )}
      {showMore && (
        <MoreVertMenu
          text={"삭제하기"}
          onClickRemove={() => setShowMore(false)}
          onClickMenu={() => setShowAlert(true)}
          mobile={mobile}
        />
      )}
      {showAlert && (
        <PopupType2
          children="알림내역을 모두 삭제하시겠습니까?"
          rightBtnText={"삭제하기"}
          cancel={true}
          onClickRemove={() => setShowAlert(false)}
          onClickCancel={() => setShowAlert(false)}
          onClick={deleteAll}
        />
      )}
    </Container>
  );
};

export default NotificationPage;
