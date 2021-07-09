import { useQuery } from "@apollo/client";
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import ReservingClassCard from "../../../../../Components/ContentContainer/ReservingClassCard";

import { HeaderType1 } from "../../../../../Components/Headers";
import { GET_RESERVATIONS } from "../../../../../gql/Reservation";

const Container = styled.div`
  width: 100vw;
  max-width: 720px;
  height: fit-content;
  margin: 0 auto;
  margin-top: 56px;
  padding: 0 16px;
`;

const ReservingService = ({ title }) => {
  const history = useHistory();
  const { data, loading } = useQuery(GET_RESERVATIONS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
  });

  return (
    !loading && (
      <>
        <HeaderType1 onClickFunc={() => history.replace("/my")}>
          {title}
        </HeaderType1>
        <Container>
          {data?.getReservations.map((item, index) => {
            return <ReservingClassCard key={index} data={item} />;
          })}
        </Container>
      </>
    )
  );
};

export default ReservingService;
