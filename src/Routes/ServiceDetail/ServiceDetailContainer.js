import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { CREATE_RESERVATION } from "../../gql/Reservation";
import { GET_SERVICE } from "../../gql/Service";
import ServiceDetail from "./ServiceDetail";

const Container = styled.div`
  max-width: 720px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background: #fff;
`;

const ServiceDetailContainer = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data, loading } = useQuery(GET_SERVICE, {
    variables: { serviceId: id },
    onCompleted: (d) => {
      if (d?.getService.error) {
        alert("서비스가 존재하지 않습니다!");
      }
    },
  });

  const [mutation, { loading: mutationLoading }] = useMutation(
    CREATE_RESERVATION,
    {
      onCompleted: (d) => {
        if (d.createReservation.ok) {
          const reservationId = d.createReservation.reservation.id;
          history.push({
            pathname: `/serviceDetail/${id}/reservationComplete`,
            state: {
              id: reservationId, // 여기에 예약 id 달아야하듯
            },
          });
        } else {
          alert("네트워크 오류입니다. 잠시 후 다시 이용해주세요");
        }
      },
    }
  );
  // 데이트 피커 먼저 달고,
  // 온컴플리티드에
  // 예약이 완료 되엇습니다.
  // 오류가 발쌩햇습니다. 해야됨

  return (
    <Container>
      <ServiceDetail
        id={id}
        data={data}
        loading={loading}
        mutation={mutation}
        mutationLoading={mutationLoading}
      />
    </Container>
  );
};

export default ServiceDetailContainer;
