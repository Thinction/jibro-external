import { useQuery } from "@apollo/client";
import React from "react";
import styled from "styled-components";
import { GET_MY_BANK_ACCOUNT } from "../../../../../gql/BankAccount";
import NoAccount from "./NoAccount";
import ProfitsManager from "./ProfitsManager";

const Container = styled.div`
  max-width: 720px;
  width: 100%;
  height: fit-content;
  min-height: calc(100vh - 56px);
  margin: 0 auto;
  background: #fff;
`;

const ProfitsRoutes = ({ title }) => {
  const { data: accountData, loading } = useQuery(GET_MY_BANK_ACCOUNT);

  return (
    !loading && (
      <Container>
        {accountData?.getMyBankAccount?.isExist ? (
          <ProfitsManager
            title={title}
            account={accountData?.getMyBankAccount?.bankAccount}
          />
        ) : (
          <NoAccount title={title} />
        )}
      </Container>
    )
  );
};

export default ProfitsRoutes;
