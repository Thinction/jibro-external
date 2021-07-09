import React from "react";
import styled from "styled-components";
import EditTutorInfo from "./Tutor/General/EditTutorInfo";
import EditUserInfo from "./User/General/EditUserInfo";

const Container = styled.div`
  max-width: 720px;
  width: 100%;
  height: fit-content;
  min-height: calc(100vh - 56px);
  margin: 0 auto;
  background: #fff;
`;

const UserEditCheckType = ({ location }) => {
  return (
    <Container>
      {location.state.user.userType === "Normal" && (
        <EditUserInfo title={"회원정보 수정"} />
      )}
      {location.state.user.userType === "Tutor" && (
        <EditTutorInfo title={"회원정보 수정"} />
      )}
    </Container>
  );
};

export default UserEditCheckType;
