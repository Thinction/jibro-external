import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Splash from "../Routes/Splash";
import Main from "../Routes/Main";
import Login from "../Routes/Login";
import SignUp from "../Routes/SignUp";
import FindPassId from "../Routes/FindPassId";
import Search from "../Routes/Search";
import Chat from "../Routes/Chat";
import ChatRoom from "../Routes/Chat/ChatRoomContainer";
import MyPage from "../Routes/MyPage";
import ServiceDetail from "../Routes/ServiceDetail";
import Profile from "../Routes/Profile";
import AlarmSetting from "../Routes/MyPage/GeneralSetting/AlarmSetting";
import UserEditCheckType from "../Routes/MyPage/UserEditCheckType";
import TutorProfileCheck from "../Routes/MyPage/Tutor/Business/EditProfile/TutorProfileCheck";
import FavoriteList from "../Routes/MyPage/User/myJibro/FavoriteList";
import GetNotices from "../Routes/MyPage/GeneralSetting/GetNotices";
import GetTermsAndPolicy from "../Routes/MyPage/GeneralSetting/GetTermsAndPolicy";
import Terms from "../Routes/MyPage/GeneralSetting/Terms";
import Policy from "../Routes/MyPage/GeneralSetting/Policy";
import Inquiry from "../Routes/MyPage/GeneralSetting/Inquiry";
import AppVersion from "../Routes/MyPage/GeneralSetting/AppVersion";
import ReservationPageContainer from "../Routes/MyPage/ReservationPageContainer";
import MyService from "../Routes/MyPage/Tutor/Business/MyService/MyService";
import CreateService from "../Routes/MyPage/Tutor/Business/MyService/CreateService";
import Purchase from "../Routes/MyPage/User/myJibro/Reservation/Purchase";
import SaleHistoryPageContainer from "../Routes/MyPage/SaleHistoryPageContainer";
import ReviewWritePageContainer from "../Routes/MyPage/ReviewWritePageContainer";
import ProfitsRoutes from "../Routes/MyPage/Tutor/Business/ProfitsInfo/ProfitsRoutes";
import EditAccount from "../Routes/MyPage/Tutor/Business/ProfitsInfo/EditAccount";
import { gql, makeReference, useQuery, useSubscription } from "@apollo/client";
import { GET_NUM_OF_UNREADS, MESSAGE_UPDATES } from "../gql/Message";
import ChargeCash from "../Routes/MyPage/User/myJibro/ChargeCash";
import Notification from "../Routes/Main/Notification";
import { NOTIFICATION_UPDATES } from "../gql/Notification";
import QuickSearch from "../Routes/Search/QuickSearch/QuickSearch";

const MyRoute = ({ match }) => (
  <>
    <Route exact path={match.path} component={MyPage} />
    <Route
      path={`${match.path}/favoriteList`}
      render={() => <FavoriteList title="찜 리스트" />}
    />
    <Route path={`${match.path}/edit`} component={UserEditCheckType} />
    <Route path={`${match.path}/alarmSetting`} component={AlarmSetting} />
    <Route
      path={`${match.path}/profileSetting`}
      component={TutorProfileCheck}
    />
    <Route path={`${match.path}/notice`} component={GetNotices} />
    <Route path={`${match.path}/contact`} component={Inquiry} />
    <Route path={`${match.path}/versionInfo`} component={AppVersion} />
    <Route
      path={`${match.path}/reservation`}
      component={ReservationPageContainer}
    />
    <Route
      path={`${match.path}/saleHistory`}
      component={SaleHistoryPageContainer}
    />
    <Route
      path={`${match.path}/reviewWrite`}
      component={ReviewWritePageContainer}
    />
    <Route path={`${match.path}/myService`} component={MyService} />
    <Route path={`${match.path}/setService`} component={CreateService} />
    <Route
      exact
      path={`${match.path}/profits`}
      render={() => <ProfitsRoutes title="수익금 관리" />}
    />
    <Route
      path={`${match.path}/profits/editAccount`}
      render={() => <EditAccount title="출금정보 등록" />}
    />
    <Route
      path={`${match.path}/chargeCash`}
      render={() => <ChargeCash title="지브로 캐쉬 충전" />}
    />
  </>
);

const ChatRoute = ({ match, mobile }) => (
  <>
    <Route exact path={match.path} component={Chat} />
    <Route
      path={`${match.path}/:roomId`}
      render={() => <ChatRoom mobile={mobile} />}
    />
  </>
);

const LoggedInRoutes = ({ mobile, isLoggedIn }) => {
  useQuery(GET_NUM_OF_UNREADS);
  useSubscription(NOTIFICATION_UPDATES, {
    onSubscriptionData: ({ client, subscriptionData }) => {
      const {
        data: { notificationUpdates: notification },
      } = subscriptionData;
      if (notification.id) {
        const incommingNotification = client.cache.writeFragment({
          fragment: gql`
            fragment NewNotification on Notification {
              id
              body
              createdAt
              uri
            }
          `,
          data: notification,
        });
        client.cache.modify({
          id: client.cache.identify(makeReference("ROOT_QUERY")),
          fields: {
            getMyNotifications(prev) {
              const existingNotification = prev.find((aNotification) => {
                return aNotification.__ref === incommingNotification.__ref;
              });
              if (existingNotification) {
                return prev;
              }
              return [incommingNotification, ...prev];
            },
            getHasUnreadNotification(prev) {
              return true;
            },
          },
        });
      }
    },
  });
  useSubscription(MESSAGE_UPDATES, {
    onSubscriptionData: ({ client, subscriptionData }) => {
      const {
        data: { messageUpdates: message },
      } = subscriptionData;
      if (message.id) {
        const incomingMessage = client.cache.writeFragment({
          fragment: gql`
            fragment NewMessage on Message {
              id
              body
              createdAt
              roomId
              from {
                id
                name
                avatar
              }
              to {
                id
                name
                avatar
              }
              isMine
            }
          `,
          data: message,
        });
        client.cache.modify({
          id: client.cache.identify(makeReference("ROOT_QUERY")),
          fields: {
            getMyRooms(prev) {
              const existingRoom = prev.find((aRoom) => {
                return (
                  aRoom.__ref === `Room:${message.roomId}` ||
                  aRoom.id === message.roomId
                );
              });
              if (existingRoom) {
                client.cache.modify({
                  id: client.cache.identify({
                    __typename: "Room",
                    id: message.roomId,
                  }),
                  fields: {
                    messages(prev) {
                      const existingMessage = prev.find((aMessage) => {
                        return aMessage.__ref === incomingMessage.__ref;
                      });
                      if (existingMessage) {
                        return prev;
                      }
                      return [incomingMessage, ...prev];
                    },
                    firstMessage(prev) {
                      return message.body;
                    },
                    unread(prev) {
                      return !message.isMine;
                    },
                    updatedAt(prev) {
                      return message.createdAt;
                    },
                  },
                });
                return prev;
              }
              //없을 경우
              return [message.room, ...prev];
            },
            getNumOfUnreads(prev) {
              return prev + 1;
            },
          },
        });
      }
    },
  });
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Main mobile={mobile} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/search"
          render={() => <Search isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/chat"
          render={(props) => <ChatRoute mobile={mobile} {...props} />}
        />
        <Route path="/my" component={MyRoute} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/serviceDetail/:id" component={ServiceDetail} />
        <Route
          path={"/purchase"}
          render={() => <Purchase title={"구매하기"} />}
        />
        <Route
          path="/notification"
          render={() => <Notification mobile={mobile} />}
        />
        <Route exact path={`/information`} component={GetTermsAndPolicy} />
        <Route path={`/information/terms`} component={Terms} />
        <Route path={`/information/policy`} component={Policy} />
        <Route path="/quickSearch" component={QuickSearch} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

const LoggedOutRoutes = ({ mobile, isLoggedIn }) => {
  return (
    <Router>
      <Switch>
        {mobile && <Route exact path="/" render={() => <Login />} />}
        {!mobile && (
          <Route
            exact
            path="/"
            render={() => <Main mobile={mobile} isLoggedIn={isLoggedIn} />}
          />
        )}
        <Route
          path="/search"
          render={() => <Search isLoggedIn={isLoggedIn} />}
        />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/FindId" component={FindPassId} />
        <Route path="/FindPw" component={FindPassId} />
        <Route exact path={`/information`} component={GetTermsAndPolicy} />
        <Route path={`/information/terms`} component={Terms} />
        <Route path={`/information/policy`} component={Policy} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

const AppRouter = ({ isLoggedIn }) => {
  //mobile Check
  const isMobile = window.innerWidth <= 1280;

  //Enter App
  const [isSplash, setIsSplash] = useState(false);
  useEffect(() => {
    if (isLoggedIn) {
      if (window?.JibroAndroid) {
        window.JibroAndroid.getFCMToken();
      }
    }
  }, [isLoggedIn]);

  setTimeout(() => {
    setIsSplash(false);
  }, 2000);

  return isMobile && isSplash ? (
    <Splash />
  ) : (
    (isLoggedIn && (
      <LoggedInRoutes mobile={isMobile} isLoggedIn={isLoggedIn} />
    )) ||
      (!isLoggedIn && (
        <LoggedOutRoutes mobile={isMobile} isLoggedIn={isLoggedIn} />
      ))
  );
};

export default AppRouter;
