import { useQuery } from "@apollo/client";
import React from "react";
import { withRouter } from "react-router";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { GET_USER } from "../../gql/User";
import ProfileTutor from "./tutor/ProfileTutor";
import ProfileUser from "./user/ProfileUser";

const Container = styled.div`
  max-width: 720px;
  width: 100%;
  height: fit-content;
  min-height: calc(100vh - 56px);
  margin: 0 auto;
  background: #fff;
`;

const ProfileContainer = ({ location }) => {
  const { id } = useParams();
  const { loading, data, refetch } = useQuery(GET_USER, {
    variables: { id },
    onCompleted: (d) => {
      if (!d.getUser.ok) {
        refetch();
      }
    },
  });
  return (
    !loading &&
    data?.getUser?.ok && (
      <Container>
        {data.getUser.user.userType === "Tutor" && (
          <ProfileTutor user={data.getUser.user} />
        )}
        {data.getUser.user.userType === "Normal" && (
          <ProfileUser user={data.getUser.user} />
        )}
      </Container>
    )
  );
};

export default withRouter(ProfileContainer);
