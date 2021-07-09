import React from "react";
import styled from "styled-components";
import { MdStars } from "react-icons/md";
const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding-top: 16px;
`;

const ProfileWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
`;

const ProfileImg = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  margin-right: 16px;
  object-fit: cover;
  object-position: center;
`;

const ProfileTextWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  ${(p) => p.theme.headLine5}
`;

const ReviewCountWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;

const ReviewCount = styled.div`
  ${(p) => p.theme.body1}
  color: rgba(0,0,0,.6);
  margin-left: 16px;
`;

export const UserSummary = ({ src, name, reviews }) => {
  return (
    <Container>
      <ProfileWrap>
        <ProfileImg src={src ? src : "/img/defaultProfile.png"} />
        <ProfileTextWrap>
          <Name>{name}</Name>
        </ProfileTextWrap>
      </ProfileWrap>
      <ReviewCountWrap>
        <MdStars size={32} color={"#4708AE"} />
        <ReviewCount>평가 {reviews}개 </ReviewCount>
      </ReviewCountWrap>
    </Container>
  );
};
