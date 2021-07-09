import React from "react";
import styled from "styled-components";
import { HeaderType1 } from "../../../Components/Headers";
import { Guide } from "./SettingUtils";

const Container = styled.div`
  width: 100vw;
  max-width: 720px;
  height: fit-content;
  min-height: 584px;
  margin: 0 auto;
  margin-top: 56px;
  padding: 16px;
`;

const GuideTitle = [
  {
    title: "이용약관",
    path: "policy",
  },
  {
    title: "개인정보 처리방침",
    path: "terms",
  },
];

const TermsAndPolicy = ({ title, history }) => {
  return (
    <>
      <HeaderType1>{title}</HeaderType1>
      <Container>
        {GuideTitle.map((item, index) => (
          <Guide
            key={index}
            tabText={item.title}
            path={item.path}
            history={history}
          />
        ))}
      </Container>
    </>
  );
};

export default TermsAndPolicy;
