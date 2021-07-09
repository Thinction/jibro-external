import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { GET_USER_TYPE } from "../../gql/User";
import ReservingService from "./Tutor/Business/ReservingService/ReservingService";
import ReservingServiceUser from "./User/myJibro/Reservation/ReservingServiceUser";
const Container = styled.div`
  max-width: 720px;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 56px);
  margin: 0 auto;
  background: #fff;
`;

const ReservationPageContainer = () => {
  const { loading, data } = useQuery(GET_USER_TYPE);

  return (
    <Container>
      {!loading &&
        data?.getUserType?.ok &&
        data.getUserType.user.userType === "Normal" && (
          <ReservingServiceUser title="예약 중인 서비스 관리" />
        )}
      {!loading &&
        data?.getUserType?.ok &&
        data.getUserType.user.userType === "Tutor" && (
          <ReservingService title="예약 중인 서비스 관리" />
        )}
    </Container>
  );
};

export default ReservationPageContainer;
