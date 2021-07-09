import React, { useEffect } from "react";
import styled from "styled-components";
import {
  MdKeyboardArrowLeft,
  MdNotificationsNone,
  MdSearch,
  MdFilterList,
  MdMoreVert,
  MdChat,
  MdFavorite,
  MdFavoriteBorder,
} from "react-icons/md";
import { withRouter } from "react-router";
import { TypoLogo, LogoSymbol } from "./IconPack";
import theme from "../Styles/theme";
import { SearchInput } from "./InputBox";
import { HeaderDock } from "./Dock";
import { Link, useHistory } from "react-router-dom";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { LIKE_SERVICE, UNLIKE_SERVICE } from "../gql/Service";
import {
  gql,
  makeReference,
  useApolloClient,
  useMutation,
  useQuery,
} from "@apollo/client";
import {
  GET_HAS_UNREAD_NOTIFICATION,
  NOTIFICATION_UPDATES,
} from "../gql/Notification";

const Container = styled.header`
  width: 100vw;
  max-width: 720px;
  height: 56px;
  padding: 0 16px;
  position: ${(p) => (p.absolute ? "absolute" : "fixed")};
  top: 0;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 990;
  svg {
    cursor: pointer;
  }
`;

const WebContainer = styled.header`
  width: 100vw;
  max-width: 1280px;
  height: 72px;
  padding: 0 20px;
  position: fixed;
  top: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  z-index: 990;
`;

const WebLogoWrap = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 8.8px;
    :last-of-type {
      margin-right: 0;
    }
  }
  margin-right: 34.1px;
`;

const WebHeaderBtnWrap = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const WebHeaderBtn = styled.button`
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: ${(p) => (p.filled ? "#fff" : p.theme.themeColor)};
  border-radius: 8px;
  background: ${(p) => (p.filled ? p.theme.themeColor : "transparent")};
`;

const Title = styled.div`
  ${(props) => props.theme.headLine6};
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotificationWrap = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const NotificationCircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #f00;
  position: absolute;
  top: 0;
  right: 0;
  display: ${(p) => (p.hasAlarm ? "block" : "none")};
`;

const SContainer = styled.div`
  width: 100vw;
  max-width: 720px;
  padding: 4px 16px;
  height: fit-content;
  position: fixed;
  top: 0;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 990;
`;

const FilterWrap = styled.div`
  width: 100%;
  height: 40px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchFilter = styled.div`
  width: fit-content;
  height: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(p) => (p.filterOn ? p.theme.themeColor : "rgba(0, 0, 0, .38)")};
`;

const PlaceFilter = styled.div`
  width: fit-content;
  height: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.span`
  ${(props) => props.theme.caption};
  margin-left: 4px;
  color: ${(props) => (props.filterOn ? "#000" : "rgba(0, 0, 0, 0.38)")};
`;

const SBox = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  background-color: #f4f4f4;
  border-radius: 10px;
  padding-left: 12px;
`;

const SInput = styled.input`
  height: 19px;
  border: none;
  background-color: inherit;
  margin-left: 12px;
  padding: 0;
  ::placeholder {
    color: rgb(0, 0, 0, 0.38);
  }
`;

export const HeaderType1 = withRouter(
  ({ children, history, onClickFunc, absolute }) => {
    const setOnClickFunc = () => {
      if (onClickFunc) {
        onClickFunc();
      } else {
        history.go(-1);
      }
    };

    return (
      <Container absolute={absolute}>
        <MdKeyboardArrowLeft
          onClick={setOnClickFunc}
          size={24}
          style={{ position: "relative", zIndex: 1 }}
        />
        <Title>{children}</Title>
      </Container>
    );
  }
);

export const HeaderType2 = ({
  children,
  onClickFunc,
  absolute,
  onClickFunc2,
}) => {
  const history = useHistory();
  const setOnClickFunc = () => {
    if (onClickFunc) {
      onClickFunc();
    } else {
      history.goBack();
    }
  };

  return (
    <Container absolute={absolute}>
      <MdKeyboardArrowLeft
        onClick={setOnClickFunc}
        size={24}
        style={{ position: "relative", zIndex: 1 }}
      />
      <Title>{children}</Title>
      <MdMoreVert
        size={24}
        style={{ position: "relative", zIndex: 1 }}
        onClick={() => onClickFunc2()}
      />
    </Container>
  );
};

export const HeaderType3 = withRouter(
  ({ children, history, closeFunc, onClickMove }) => {
    const onClickClose = () => {
      if (closeFunc) {
        closeFunc();
      } else {
        history.go(-1);
      }
    };

    const onClickLeft = () => {
      if (onClickMove) {
        onClickMove();
      } else {
        history.go(-1);
      }
    };

    return (
      <Container>
        <MdKeyboardArrowLeft
          onClick={() => onClickLeft()}
          size={24}
          style={{ position: "relative", zIndex: 1 }}
        />
        <Title>{children}</Title>
        <MdClose
          size={24}
          style={{ position: "relative", zIndex: 1 }}
          onClick={() => onClickClose()}
        />
      </Container>
    );
  }
);

export const MainHeader = ({ history }) => {
  const { data } = useQuery(GET_HAS_UNREAD_NOTIFICATION);

  return (
    <Container>
      <NotificationWrap onClick={() => history.push("/notification")}>
        <MdNotificationsNone size={24} color={theme.defaultTextBlack} />
        <NotificationCircle hasAlarm={data?.getHasUnreadNotification} />
      </NotificationWrap>
      <TypoLogo width={104} height={26} color={theme.themeColor} />
      <MdSearch
        size={24}
        color={theme.defaultTextBlack}
        onClick={() => history.push("/quickSearch")}
      />
    </Container>
  );
};

export const WebMainHeader = ({ isLoggedIn, value, onChange, onKeyPress }) => {
  const history = useHistory();
  const { data, subscribeToMore } = useQuery(GET_HAS_UNREAD_NOTIFICATION);
  const client = useApolloClient();
  const updateQuery = (prevQuery, options) => {
    const {
      subscriptionData: {
        data: { notificationUpdates: notification },
      },
    } = options;
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
  };
  const subscribeToMoreNotification = () => {
    if (subscribeToMore)
      subscribeToMore({
        document: NOTIFICATION_UPDATES,
        updateQuery,
      });
  };

  useEffect(() => {
    subscribeToMoreNotification();
  }, []);

  return (
    <WebContainer>
      <WebLogoWrap>
        <LogoSymbol size={37.34} color={theme.themeColor} />
        <TypoLogo width={94.7} height={23.58} color={theme.themeColor} />
      </WebLogoWrap>
      <SearchInput
        iconSize={30.91}
        iconColor={"#666"}
        paddingLeft={15.5}
        inputLeft={15.6}
        placeholder={"집에서 배우고 싶은 서비스를 검색해보세요."}
        width={462}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      {isLoggedIn && (
        <>
          <HeaderDock marginLeft={23} />
          <NotificationWrap
            onClick={() => history.push("/notification")}
            style={{
              marginLeft: "auto",
            }}
          >
            <MdNotificationsNone size={24} color={theme.defaultTextBlack} />
            <NotificationCircle hasAlarm={data?.getHasUnreadNotification} />
          </NotificationWrap>
        </>
      )}
      {!isLoggedIn && (
        <WebHeaderBtnWrap>
          <WebHeaderBtn filled={true}>
            <Link to={{ pathname: "/SignUp", state: { from: "Tutor" } }}>
              튜터가입
            </Link>
          </WebHeaderBtn>
          <WebHeaderBtn>
            <Link to={{ pathname: "/SignUp", state: { from: "Normal" } }}>
              회원가입
            </Link>
          </WebHeaderBtn>
          <WebHeaderBtn>
            <Link to="/login">로그인</Link>
          </WebHeaderBtn>
        </WebHeaderBtnWrap>
      )}
    </WebContainer>
  );
};

export const SearchHeader = ({
  withFilter,
  onClickFilterOn,
  placeholder,
  headerFilterCheck,
  value,
  onChange,
  toggleAreaFilter,
  areaFilter,
}) => {
  return (
    <SContainer>
      <SearchInput
        width={"100%"}
        iconSize={24}
        iconColor={"rgba(0, 0, 0, .6)"}
        placeholder={placeholder}
        searchHeader={true}
        paddingLeft={12}
        inputLeft={12}
        value={value}
        onChange={onChange}
      />
      {withFilter && (
        <FilterWrap>
          <PlaceFilter onClick={toggleAreaFilter}>
            <IoCheckmarkCircleOutline
              size={24}
              color={areaFilter ? theme.themeColor : "rgba(0, 0, 0, .38)"}
            />
            <Text filterOn={areaFilter}>내 주변만 보기</Text>
          </PlaceFilter>
          <SearchFilter
            onClick={() => {
              onClickFilterOn();
            }}
            filterOn={headerFilterCheck}
          >
            <MdFilterList size={24} />
            <Text filterOn={headerFilterCheck}>검색 필터</Text>
          </SearchFilter>
        </FilterWrap>
      )}
    </SContainer>
  );
};

const DetailHeaderWrap = styled.header`
  width: 100vw;
  max-width: 720px;
  height: 56px;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 990;
`;

const IconWrap = styled.div`
  width: 80px;
  ${(props) => props.theme.headLine6};
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  svg {
    margin-left: 16px;
  }
`;

export const DetailHeader = withRouter(
  ({ history, type, onClickChat, onClickBack, like, serviceId, userType }) => {
    const likeUpdate = (cache, result) => {
      const {
        data: {
          likeService: { ok },
        },
      } = result;
      if (!ok) {
        return;
      }
      cache.modify({
        id: `Service:${serviceId}`,
        fields: {
          liking(prev) {
            return true;
          },
        },
      });
    };
    const unlikeUpdate = (cache, result) => {
      const {
        data: {
          unlikeService: { ok },
        },
      } = result;
      if (!ok) {
        return;
      }
      cache.modify({
        id: `Service:${serviceId}`,
        fields: {
          liking(prev) {
            return false;
          },
        },
      });
    };

    const [likeMutation, { loading: likeLoading }] = useMutation(LIKE_SERVICE, {
      variables: { serviceId: serviceId },
      update: likeUpdate,
    });
    const [unlikeMutation, { loading: unlikeLoading }] = useMutation(
      UNLIKE_SERVICE,
      { variables: { serviceId: serviceId }, update: unlikeUpdate }
    );

    const toggleLike = () => {
      if (like) {
        if (!unlikeLoading) {
          unlikeMutation();
        }
      } else {
        if (!likeLoading) {
          likeMutation();
        }
      }
    };
    return (
      <DetailHeaderWrap>
        <MdKeyboardArrowLeft
          onClick={() => {
            if (onClickBack) {
              onClickBack();
            } else {
              history.go(-1);
            }
          }}
          size={24}
        />
        {type === "service" && (
          <IconWrap>
            {userType !== "Tutor" && (
              <MdChat
                size={24}
                color={"rgba(0,0,0,.38)"}
                onClick={(e) => {
                  e.preventDefault();
                  onClickChat && onClickChat();
                }}
              />
            )}
            {like ? (
              <MdFavorite onClick={toggleLike} size={24} color={"#FF0000"} />
            ) : (
              <MdFavoriteBorder
                onClick={toggleLike}
                size={24}
                color={"rgba(0,0,0,.38)"}
              />
            )}
          </IconWrap>
        )}
        {type === "tutor" && userType !== "Tutor" && (
          <IconWrap type={type}>
            <MdChat
              size={24}
              color={"rgba(0,0,0,.38)"}
              onClick={(e) => {
                e.preventDefault();
                onClickChat && onClickChat();
              }}
            />
          </IconWrap>
        )}
      </DetailHeaderWrap>
    );
  }
);

export const TinySearchHeader = ({ value, setValue, onKeyPress }) => {
  return (
    <SContainer>
      <SBox>
        <MdSearch size={24} color={theme.defaultTextBlack} />
        <SInput
          placeholder="키워드를 검색해보세요."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={onKeyPress}
        />
      </SBox>
    </SContainer>
  );
};
