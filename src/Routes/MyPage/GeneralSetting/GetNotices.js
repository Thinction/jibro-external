import { useQuery } from "@apollo/client";
import React from "react";
import styled from "styled-components";
import { GET_NOTICES } from "../../../gql/Notice";
import Notices from "./Notices";

const Container = styled.div`
  max-width: 720px;
  width: 100%;
  height: fit-content;
  min-height: calc(100vh - 56px);
  margin: 0 auto;
  background: #fff;
`;

const GetNotices = () => {
  const { loading, data } = useQuery(GET_NOTICES, {
    onCompleted: (d) => {
      if (!d.getNotices.ok) {
        alert("공지사항을 가져오는 데 실패했습니다 : " + d.getNotices.error);
      }
    },
  });
  return (
    <Container>
      {!loading && (
        <Notices title="공지사항" notices={data?.getNotices.notices} />
      )}
    </Container>
  );
};
export default GetNotices;
