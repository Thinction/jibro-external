import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdSearch, MdHome, MdChat, MdPerson } from "react-icons/md";
import { withRouter } from "react-router";
// import theme from '../Styles/theme';
import { Link } from "react-router-dom";
import { useApolloClient } from "@apollo/client";
import { GET_NUM_OF_UNREADS } from "../gql/Message";

const Container = styled.footer`
  width: 100vw;
  max-width: 720px;
  height: 56px;
  position: fixed;
  bottom: 0;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 990;
`;

const HeaderDockContainer = styled.div`
  width: 528px;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 990;
  margin-left: ${(p) =>
    p.marginLeft
      ? p.marginLeft === "auto"
        ? p.marginLeft
        : p.marginLeft + "px"
      : "unset"};
`;

const ButtonWrapper = styled.div`
  width: 25%;
  height: 100%;
`;

const DockBtn = styled.button`
  ${(props) => props.theme.overline};
  width: 100%;
  height: 100%;
  color: ${(p) =>
    p.focusedTab ? p.theme.themeColor : p.theme.unFocusThemeColor};
  position: relative;
  a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ChatCounter = styled.div`
  ${(p) => p.theme.overline};
  color: #fff;
  width: 14px;
  height: 14px;
  background: #ff0000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${(p) => (p.headerDock ? "calc(50% - 24px)" : "3px")};
  right: ${(p) => (p.headerDock ? "65%" : "calc(50% - 19px)")};
`;

const HeaderDockBtn = styled.button`
  ${(props) => props.theme.body1};
  width: 100%;
  height: 100%;
  color: ${(p) =>
    p.focusedTab ? p.theme.themeColor : p.theme.unFocusThemeColor};
  border-bottom: ${(p) =>
    p.focusedTab ? `2px solid ${p.theme.themeColor}` : "none"};
  position: relative;
  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      width: 84px;
    }
  }
`;

const Dock = ({ history }) => {
  const client = useApolloClient();
  const unreads = client.readQuery({
    query: GET_NUM_OF_UNREADS,
  })?.getNumOfUnreads;

  const [focus, setFocus] = useState("");

  useEffect(() => {
    if (history.location.pathname === "/") {
      setFocus("main");
    } else if (history.location.pathname.includes("/search")) {
      setFocus("search");
    } else if (history.location.pathname.includes("/chat")) {
      setFocus("chat");
    } else if (history.location.pathname.includes("/my")) {
      setFocus("my");
    } else {
      setFocus("");
    }
  }, [history, focus]);

  return (
    <Container>
      <ButtonWrapper>
        <DockBtn focusedTab={focus === "main"}>
          <Link to="/">
            <MdHome size={24} />
            메인
          </Link>
        </DockBtn>
      </ButtonWrapper>
      <ButtonWrapper>
        <DockBtn focusedTab={focus === "search"}>
          <Link to="/search">
            <MdSearch size={24} />
            찾기
          </Link>
        </DockBtn>
      </ButtonWrapper>
      <ButtonWrapper>
        <DockBtn focusedTab={focus === "chat"}>
          <Link to="/chat">
            <MdChat size={24} />
            {unreads > 0 && <ChatCounter>{unreads}</ChatCounter>}
            채팅
          </Link>
        </DockBtn>
      </ButtonWrapper>
      <ButtonWrapper>
        <DockBtn focusedTab={focus === "my"}>
          <Link to="/my">
            <MdPerson size={24} />
            마이페이지
          </Link>
        </DockBtn>
      </ButtonWrapper>
    </Container>
  );
};

export const HeaderDock = withRouter(({ history, marginLeft }) => {
  const client = useApolloClient();
  const unreads = client.readQuery({
    query: GET_NUM_OF_UNREADS,
  })?.getNumOfUnreads;
  const [focus, setFocus] = useState("");

  useEffect(() => {
    if (history.location.pathname === "/") {
      setFocus("main");
    } else if (history.location.pathname === "/search") {
      setFocus("search");
    } else if (history.location.pathname === "/chat") {
      setFocus("chat");
    } else if (history.location.pathname === "/my") {
      setFocus("my");
    } else {
      setFocus("");
    }
  }, [history, focus]);

  return (
    <HeaderDockContainer marginLeft={marginLeft}>
      <ButtonWrapper>
        <HeaderDockBtn focusedTab={focus === "main"}>
          <Link to="/">
            <MdHome size={24} />
            <span>메인</span>
          </Link>
        </HeaderDockBtn>
      </ButtonWrapper>
      <ButtonWrapper>
        <HeaderDockBtn focusedTab={focus === "search"}>
          <Link to="/search">
            <MdSearch size={24} />
            <span>찾기</span>
          </Link>
        </HeaderDockBtn>
      </ButtonWrapper>
      <ButtonWrapper>
        <HeaderDockBtn focusedTab={focus === "chat"}>
          <Link to="/chat">
            <MdChat size={24} />
            {unreads > 0 && (
              <ChatCounter headerDock={true}>{unreads}</ChatCounter>
            )}
            <span>채팅</span>
          </Link>
        </HeaderDockBtn>
      </ButtonWrapper>
      <ButtonWrapper>
        <HeaderDockBtn focusedTab={focus === "my"}>
          <Link to="/my">
            <MdPerson size={24} />
            <span>마이페이지</span>
          </Link>
        </HeaderDockBtn>
      </ButtonWrapper>
    </HeaderDockContainer>
  );
});

export default withRouter(Dock);
