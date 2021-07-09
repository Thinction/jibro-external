import {
  gql,
  makeReference,
  useApolloClient,
  useMutation,
  useQuery,
} from "@apollo/client";
import React, { useEffect, useRef, useState } from "react";
import { withRouter } from "react-router";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import chatDataSample from "../../Components/DataSample/ChatDataSample";
import { HeaderType2 } from "../../Components/Headers";
import { SendMessage } from "../../Components/InputBox";
import {
  MoreVertMenu,
  PopupType1,
  TextAreaPopup,
} from "../../Components/Popup";
import getDate from "../../Components/Utils/getDate";
import { QUIT_ROOM } from "../../gql/Message";
import { GET_ROOM, MESSAGE_UPDATES } from "../../gql/Message";
import { CREATE_SUE } from "../../gql/Sue";
import ChatMessage from "./ChatMessage";

const Container = styled.div`
  width: 100vw;
  max-width: 720px;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 16px;
  padding-top: 56px;
  background: #fff;
  position: relative;
`;
const MessageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 16px;
  padding-bottom: 56px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Date = styled.div`
  flex-shrink: 0;
  width: 124px;
  height: 24px;
  background-color: #f4f4f4;
  border-radius: 30px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-bottom: 16px;
`;

const AlwaysScrollToBottom = ({ messages }) => {
  const elementRef = useRef();
  useEffect(() => {
    elementRef.current.scrollIntoView({ behavor: "smooth" });
  }, [messages]);
  return <div ref={elementRef} />;
};

let date;

const Messages = ({ messages: messagesProp, history }) => {
  const messages = [...(messagesProp ?? [])];
  messages.reverse();
  return (
    <MessageContainer>
      {messages.length !== 0 &&
        messages.map((item, index) => {
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
              {showDate && <Date key={index}>{dateStr}</Date>}
              <ChatMessage
                key={item.id}
                id={item?.from.id}
                isMe={item.isMine}
                text={item.body}
                date={item.createdAt}
                src={item?.from?.avatar}
                history={history}
              />
            </>
          );
        })}
      <AlwaysScrollToBottom messages={messages} />
    </MessageContainer>
  );
};

const ChatRoom = ({ mobile, readMessage }) => {
  const history = useHistory();
  const { roomId } = useParams();
  const { data, loading } = useQuery(GET_ROOM, {
    variables: { roomId },
    notifyOnNetworkStatusChange: true,
  });

  const readMessageUpdate = (cache, result) => {
    const {
      data: {
        readMessages: { ok, number },
      },
    } = result;
    if (!ok) {
      return;
    }
    cache.modify({
      id: `Room:${roomId}`,
      fields: {
        unread(prev) {
          return false;
        },
      },
    });
    cache.modify({
      id: cache.identify(makeReference("ROOT_QUERY")),
      fields: {
        getNumOfUnreads(prev) {
          return prev - number;
        },
      },
    });
  };
  useEffect(() => {
    if (roomId) {
      readMessage(roomId, readMessageUpdate);
    }
  }, []);

  // const searchParam = (key) => {
  //     return new URLSearchParams(history.location.search).get(key);
  // };

  // const roomId = searchParam('id');
  const selectedChatData = chatDataSample.filter(
    (item) => item.id === roomId
  )[0];

  //moverVerticalMenu
  const moreVertText = ["신고하기", "나가기"];
  const [isMoreOn, setIsMoreOn] = useState(false);

  const setIsMoreOnFunc = () => {
    setIsMoreOn(true);
  };

  //declare Popup On
  const [isDecOn, setIsDecOn] = useState(false);

  const setIsDecOnFunc = () => {
    setIsDecOn(true);
  };

  //declare Confirm PopUp
  const [isConfirm, setIsConfirm] = useState(false);

  const setIsConfirmFunc = () => {
    setIsConfirm(true);
  };

  //popup remove
  const onClickRemove = () => {
    setIsMoreOn(false);
    setIsDecOn(false);
    setIsConfirm(false);
  };

  // 기본은 트루
  // 일단 보여줌
  // 크리에이트엣의 겟 이어 겟 먼뜨 겟 데이트가 저장된 겟 이어 겟 먼드 겟 데이트와 같으면 폴스
  const [body, setBody] = useState(undefined);
  const onChangeBody = (e) => {
    setBody(e.target.value);
    console.log(body);
  };

  const [createSueMutation] = useMutation(CREATE_SUE, {
    onCompleted: (d) => {
      if (d.createSue.ok) {
        setBody("");
        setIsConfirm(true);
      } else {
        alert("신고하기 실패하였습니다 : " + d.createSue.error);
      }
    },
  });
  const onClickSue = () => {
    createSueMutation({
      variables: {
        toId: data?.getRoom?.room?.user.id,
        body,
      },
    });
  };

  const [quitRoomMutation, { loading: quitRoomLoading }] = useMutation(
    QUIT_ROOM,
    {
      onCompleted: (d) => {
        if (d?.quitRoom.ok) {
          history.replace("/chat");
        } else {
          alert(d.quitRoom.error);
        }
      },
    }
  );

  const onClickQuitRoom = () => {
    if (!quitRoomLoading) {
      quitRoomMutation({
        variables: { roomId },
        update: (cache, options) => {
          cache.evict({
            id: `Room:${roomId}`,
          });
        },
      });
    }
  };
  return (
    !loading && (
      <>
        <HeaderType2
          onClickFunc={() => history.replace("/chat")}
          onClickFunc2={setIsMoreOnFunc}
          absolute={true}
        >
          {data?.getRoom?.room?.user.name}
        </HeaderType2>
        <Container>
          <Messages
            messages={data?.getRoom?.room?.messages}
            history={history}
          />
          <SendMessage toId={data?.getRoom?.room?.user.id} />
          {isMoreOn && (
            <MoreVertMenu
              textList={moreVertText}
              onClickRemove={onClickRemove}
              onClick={setIsDecOnFunc}
              onClickQuit={onClickQuitRoom}
              mobile={mobile}
            />
          )}
          {isDecOn && (
            <TextAreaPopup
              text={"신고 사유를 입력해주세요."}
              onClickRemove={onClickRemove}
              onClickSend={onClickSue}
              value={body}
              setValue={onChangeBody}
            />
          )}
          {isConfirm && (
            <PopupType1 onClick={onClickRemove}>
              신고 접수가 완료되었습니다. 지브로 고객관리팀에서 확인 후,
              조치하도록 하겠습니다.
            </PopupType1>
          )}
        </Container>
      </>
    )
  );
};

export default withRouter(ChatRoom);
