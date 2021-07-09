import React, { useEffect } from "react";
import styled from "styled-components";
import { ProfileCircle } from "../../Components/IconPack";
import dateConverter from "../../Components/Utils/dateConverter";

const ChatWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: ${(props) => (props.isMe ? "row-reverse" : "initial")};
  font-size: 12px;
  position: relative;
  margin-bottom: 24px;
  line-height: 20px;
`;

const ChatBox = styled.div`
  width: fit-content;
  max-width: 230px;
  min-height: 28px;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  margin-left: 12px;
  padding: 8px;
  background-color: ${(props) =>
    props.isMe ? "#95F8BF" : "rgba(0, 0, 0, 0.12)"};
  border-radius: 5px;
  word-break: break-all;
`;

const UpdatedDate = styled.div`
  margin-left: 8px;
  color: rgba(0, 0, 0, 0.38);
  align-self: flex-end;
  bottom: 0;
`;

const ChatMessage = ({ isMe, text, date: dateProp, src, id, history }) => {
  const date = dateConverter(dateProp);
  const dateString =
    ("0" + date.getHours()).slice(-2) +
    ":" +
    ("0" + date.getMinutes()).slice(-2);

  return (
    <ChatWrap isMe={isMe}>
      {!isMe && <ProfileCircle size={40} src={src} id={id} history={history} />}
      <ChatBox isMe={isMe}>{text}</ChatBox>
      <UpdatedDate>{dateString}</UpdatedDate>
    </ChatWrap>
  );
};

export default ChatMessage;
