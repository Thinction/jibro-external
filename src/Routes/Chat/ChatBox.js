import React from "react";
import styled from "styled-components";
import { StatusIcon, ProfileCircle } from "../../Components/IconPack";
import theme from "../../Styles/theme";

const ChatSummaryContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 16px;
  background-color: ${(props) => (props.isRead ? "#fff" : "#DFF8E8")};
  position: relative;
`;

const SummaryUnderLine = styled.div`
  width: calc(100% - 32px);
  height: 1px;
  background: rgba(0, 0, 0, 0.12);
  position: absolute;
  bottom: 0;
`;

const UserInfoBox = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  position: relative;
`;

const UserName = styled.div`
  font-size: 18px;
  margin-left: 8px;
`;

const Time = styled.div`
  font-size: 14px;
  margin-left: 7px;
  border-left: 1px solid rgba(0, 0, 0, 0.12);
  padding-left: 8px;
`;

const Contents = styled.div`
  ${(p) => p.theme.body2};
  font-weight: ${(p) => (p.isRead ? 400 : 500)};
  width: 100%;
  height: fit-content;
  margin-top: 8px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
`;

const colorDict = {
  "결제 완료": { text: "결제 완료", color: theme.themeColorSecondary },
  "예약 중": { text: "예약 중", color: "rgba(0, 0, 0, 0.38)" },
};

const ChatBox = ({ name, date, text, profileSrc, isRead, statusType }) => {
  return (
    <ChatSummaryContainer isRead={isRead}>
      <SummaryUnderLine />
      <UserInfoBox>
        <ProfileCircle size={40} src={profileSrc} />
        <UserName>{name}</UserName>
        <Time>{date}</Time>
        {statusType && (
          <StatusIcon type={colorDict[statusType]} marginLeft={true} />
        )}
      </UserInfoBox>
      <Contents isRead={isRead}>{text}</Contents>
    </ChatSummaryContainer>
  );
};

export default ChatBox;
