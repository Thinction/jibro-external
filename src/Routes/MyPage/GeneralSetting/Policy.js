import { useQuery } from "@apollo/client";
import React from "react";
import styled from "styled-components";
import { HeaderType1 } from "../../../Components/Headers";
import { GET_POLICY } from "../../../gql/TermsAndPolicy";

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

const Policy = () => {
  const { loading, data } = useQuery(GET_POLICY, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
    onCompleted: (d) => {
      if (!d.getPolicy.ok) {
        alert("이용약관을 가져오는 데 실패했습니다 : " + d.getPolicy.error);
      }
    },
  });
  return (
    <MainWrapper>
      <HeaderType1>지브로 이용약관</HeaderType1>
      {!loading && data?.getPolicy?.ok && (
        <Container>
          {data?.getPolicy?.policy?.body
            ? data.getPolicy.policy.body
            : "이용약관이 아직 존재하지 않습니다."}
        </Container>
      )}
    </MainWrapper>
  );
};

export default Policy;
