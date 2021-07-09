import React from "react";
import { useLocation, withRouter } from "react-router-dom";
import styled from "styled-components";
import { BtnType2 } from "../../Components/Buttons";
import { CompleteReservationIcon } from "../../Components/IconPack";

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  height: fit-content;
  min-height: 600px;
  margin: 0 auto;
  padding: 0 16px;
  background-color: #fff;
  padding-top: 120px;
`;

const Theme = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(p) => p.theme.headLine6}
  color: #4708ae;
`;

const IconWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 24px 0;
`;

const Text = styled.div`
  ${(p) => p.theme.subTitle1}
  word-break: keep-all;
  text-align: center;
`;

const CompleteReservation = ({ history }) => {
  const location = useLocation();
  const { id } = location.state;
  console.log(id);
  return (
    <>
      <Container>
        <Theme>서비스 예약이 완료되었습니다.</Theme>
        <IconWrap>
          <CompleteReservationIcon />
        </IconWrap>
        <Text>
          전문가가&nbsp;24시간&nbsp;내로&nbsp;예약을&nbsp;확인하고&nbsp;연락
          드릴&nbsp;예정입니다.&nbsp;예약&nbsp;확정&nbsp;전까지는&nbsp;요금이
          청구되지&nbsp;않습니다.
        </Text>
      </Container>
      <BtnType2
        allWritten={true}
        disabled={false}
        onClick={() => history.replace("/my/reservation")}
      >
        예약 내역 확인하기
      </BtnType2>
    </>
  );
};

export default withRouter(CompleteReservation);
