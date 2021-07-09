import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import { BtnType2 } from "../../../../../Components/Buttons";
import { HeaderType1 } from "../../../../../Components/Headers";
import { ProfitsIcon } from "../../../../../Components/IconPack";

const Container = styled.div`
  width: 100vw;
  max-width: 720px;
  min-height: calc(100vh - 56px);
  height: fit-content;
  margin: 0 auto;
  margin-top: 56px;
  padding: 0 16px;
  padding-top: 24px;
  position: relative;
`;

const IconWrap = styled.div`
  margin-top: 112px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

const Text = styled.div`
  width: 100%;
  ${(p) => p.theme.subTitle1}
  display: flex;
  flex-direction: column;
  justify-content: center;
  word-break: keep-all;
  text-align: center;
`;
const NoAccount = ({ title, history }) => {
  return (
    <>
      <HeaderType1>{title}</HeaderType1>
      <Container>
        <IconWrap>
          <ProfitsIcon />
        </IconWrap>
        <Text>
          출금&nbsp;정보가&nbsp;아직&nbsp;등록되지&nbsp;않았습니다.
          수익금&nbsp;정산을&nbsp;위한&nbsp;출금계좌를&nbsp; 등록해주세요.
        </Text>
      </Container>
      <BtnType2
        allWritten={true}
        disabled={false}
        onClick={() => history.push("/my/profits/editAccount")}
      >
        출금정보 등록하기
      </BtnType2>
    </>
  );
};

export default withRouter(NoAccount);
