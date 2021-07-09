import React, { useState } from "react";
import styled from "styled-components";
import Dock from "../../Components/Dock";
import { SearchHeader } from "../../Components/Headers";
import ChatBox from "./ChatBox";
import { Link } from "react-router-dom";
import dateBefore from "../../Components/Utils/dateBefore";
import { useQuery } from "@apollo/client";
import { GET_MY_ROOMS } from "../../gql/Message";

const Container = styled.div`
  width: calc(100% - 32px);
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 56px;
`;

const SectionWrapper = styled.section`
  width: calc(100% + 32px);
  height: fit-content;
  margin-top: 12px;
  padding-bottom: 56px;
`;

const Chat = () => {
  const [body, setBody] = useState(undefined);
  const onChangeBody = (e) => {
    setBody(e.target.value);
  };
  const { data, loading } = useQuery(GET_MY_ROOMS, {
    variables: { body },
  });
  return (
    <Container>
      <SearchHeader
        withFilter={false}
        placeholder={"키워드를 검색해보세요."}
        value={body}
        onChange={onChangeBody}
      />
      {!loading && (
        <SectionWrapper>
          {data.getMyRooms?.map((room, index) => {
            return (
              <Link key={index} to={`/chat/${room.id}`}>
                <ChatBox
                  isRead={!room.unread}
                  profileSrc={room.user.avatar}
                  name={room.user.name}
                  date={dateBefore(room.updatedAt)}
                  text={room.firstMessage}
                  statusType={room.roomState}
                />
              </Link>
            );
          })}
        </SectionWrapper>
      )}
      <Dock />
    </Container>
  );
};

export default Chat;
