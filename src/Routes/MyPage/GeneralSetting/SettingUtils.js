import React, { useState } from "react";
import styled from "styled-components";
import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
} from "react-icons/md";
import Switch from "react-switch";
import getDate from "../../../Components/Utils/getDate";

const NoticeWrap = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

const NoticeThemeWrap = styled.div``;

const Date = styled.div`
  ${(p) => p.theme.body2}
  color: rgba(0,0,0,.6);
`;

const NoticeTheme = styled.div`
  ${(p) => p.theme.subTitle2}
`;

const NoticeContents = styled.div`
  margin-left: 16px;
  color: rgba(0, 0, 0, 0.6);
`;

const NoticeText = styled.div`
  ${(p) => p.theme.body2};
  color: rgba(0, 0, 0, 0.6);
  padding-top: 16px;
  word-break: break-all;
`;

export const Notice = ({ titleText, content, date }) => {
  const [isOn, setIsOn] = useState(false);
  const isOnClick = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <NoticeWrap onClick={isOnClick}>
        <NoticeThemeWrap>
          <NoticeTheme>{titleText}</NoticeTheme>
          <Date>{getDate(parseInt(date))}</Date>
        </NoticeThemeWrap>
        {isOn ? (
          <MdKeyboardArrowUp size={24} color={"rgba(0,0,0,.6)"} />
        ) : (
          <MdKeyboardArrowDown size={24} color={"rgba(0,0,0,.6)"} />
        )}
      </NoticeWrap>
      {isOn && (
        <NoticeContents>
          <NoticeText>{content}</NoticeText>
        </NoticeContents>
      )}
    </>
  );
};

const GuideWrap = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

const GuideTheme = styled.div`
  ${(p) => p.theme.body1}
`;

export const Guide = ({ tabText, path, history }) => {
  return (
    <>
      <GuideWrap onClick={() => history.push(`/information/${path}`)}>
        <GuideTheme>{tabText}</GuideTheme>
        <MdKeyboardArrowRight size={24} color={"rgba(0,0,0,.6)"} />
      </GuideWrap>
    </>
  );
};

const AlarmWarp = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

const AlarmTheme = styled.div`
  ${(p) => p.theme.subTitle2}
`;

export const Alarm = ({ children, preset, onClick, name }) => {
  // const [on, setOn] = useState(preset);
  const onBtn = () => {
    onClick(name);
    // setOn(!on);
  };
  return (
    <>
      <AlarmWarp>
        <AlarmTheme>{children}</AlarmTheme>
        <Switch
          onChange={onBtn}
          checked={preset}
          onHandleColor="#6200EE"
          onColor="#C39EF9"
          checkedIcon={true}
          uncheckedIcon={true}
        />
      </AlarmWarp>
    </>
  );
};
