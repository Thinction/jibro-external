import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { HeaderType1 } from "../../../Components/Headers";
import { Notice } from "./SettingUtils";

const Container = styled.div`
  width: 100vw;
  max-width: 720px;
  height: fit-content;
  min-height: 584px;
  margin: 0 auto;
  margin-top: 56px;
  padding: 16px;
`;

const Notices = ({ title, notices }) => {
  const history = useHistory();
  return (
    <>
      <HeaderType1 onClickFunc={() => history.replace("/my")}>
        {title}
      </HeaderType1>
      <Container>
        {notices.map((item, index) => (
          <Notice
            key={index}
            titleText={item.title}
            content={item.body}
            date={item.createdAt}
          />
        ))}
      </Container>
    </>
  );
};

export default Notices;
