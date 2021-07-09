import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { GET_USER_TYPE } from "../../gql/User";
import ReviewWriteUser from "./User/myJibro/TransactionalInfo/ReviewWriteUser";
import ReviewWrite from "./Tutor/Business/TransactionalInfo/ReviewWrite";

const Container = styled.div`
  max-width: 720px;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 56px);
  margin: 0 auto;
  background: #fff;
`;

const ReviewWritePageContainer = () => {
  const { loading, data } = useQuery(GET_USER_TYPE);
  return (
    <Container>
      {!loading &&
        data?.getUserType?.ok &&
        data.getUserType.user.userType === "Normal" && (
          <ReviewWriteUser title="리뷰 작성" />
        )}
      {!loading &&
        data?.getUserType?.ok &&
        data.getUserType.user.userType === "Tutor" && (
          <ReviewWrite title="리뷰 작성" />
        )}
    </Container>
  );
};

export default ReviewWritePageContainer;
