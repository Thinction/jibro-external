import { useQuery } from "@apollo/client";
import React from "react";
import styled from "styled-components";
import { HeaderType1 } from "../../../Components/Headers";
import { GET_TERMS } from "../../../gql/TermsAndPolicy";

const MainWrapper = styled.div`
  max-width: 720px;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  margin: 0 auto;
  background: #fff;
`;
const Container = styled.div`
  width: 100vw;
  max-width: 720px;
  height: fit-content;
  margin: 0 auto;
  margin-top: 56px;
  padding: 16px;
  white-space: pre-line;
`;

const Terms = () => {
  const { loading, data } = useQuery(GET_TERMS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
    onCompleted: (d) => {
      if (!d.getTerms.ok) {
        alert(
          "개인정보 처리방침을 가져오는 데 실패했습니다 : " + d.getTerms.error
        );
      }
    },
  });
  return (
    <MainWrapper>
      <HeaderType1>지브로 개인정보 처리방침</HeaderType1>
      {!loading && data?.getTerms?.ok && (
        <Container>
          {data?.getTerms?.terms?.body
            ? data.getTerms.terms.body
            : "개인정보 처리방침이 아직 존재하지 않습니다."}
        </Container>
      )}
    </MainWrapper>
  );
};

export default Terms;
