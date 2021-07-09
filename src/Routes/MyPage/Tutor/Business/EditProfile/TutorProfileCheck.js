import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import EditProfileStep from "./EditProfileStep";

const Container = styled.div`
  max-width: 720px;
  width: 100%;
  height: fit-content;
  min-height: calc(100vh - 56px);
  margin: 0 auto;
  background: #fff;
`;

const GET_MY_TUTOR_PROFILE = gql`
  query getMyTutorProfile {
    getMyTutorProfile {
      ok
      tutorProfile {
        user {
          id
        }
        step
        introduce
        category {
          id
          title
        }
        workingArea
        licenses
        careers
      }
    }
  }
`;

const TutorProfileCheck = () => {
  const { loading, data, refetch } = useQuery(GET_MY_TUTOR_PROFILE, {});
  const history = useHistory();
  return (
    <>
      {!loading && data?.getMyTutorProfile?.ok && (
        <Container>
          <EditProfileStep
            tutorProfile={data.getMyTutorProfile.tutorProfile}
            refetch={refetch}
            history={history}
          />
        </Container>
      )}
    </>
  );
};

export default TutorProfileCheck;
