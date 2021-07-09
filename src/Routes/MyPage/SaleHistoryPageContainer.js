import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { GET_USER_TYPE } from "../../gql/User";
import TransactionalInfoUser from "./User/myJibro/TransactionalInfo/TransactionalInfoUser";
import TransactionalInfo from "./Tutor/Business/TransactionalInfo/TransactionalInfo";

const Container = styled.div`
  max-width: 720px;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 56px);
  margin: 0 auto;
  background: #fff;
`;

const SaleHistoryPageContainer = () => {
  const { loading, data } = useQuery(GET_USER_TYPE);

  return (
    <Container>
      {!loading &&
        data?.getUserType?.ok &&
        data.getUserType.user.userType === "Normal" && (
          <TransactionalInfoUser title="거래내역" />
        )}
      {!loading &&
        data?.getUserType?.ok &&
        data.getUserType.user.userType === "Tutor" && (
          <TransactionalInfo title="거래내역" />
        )}
    </Container>
  );
};

export default SaleHistoryPageContainer;
