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
  flex-direction: column;
  justify-content: space-between;
`;

const Name = styled.div`
  ${(p) => p.theme.headLine5}
`;
const FiledWrap = styled.div`
  display: flex;
`;

const Theme = styled.div`
  ${(p) => p.theme.subTitle2}
  margin-right: 4px;
`;

const Filed = styled.div`
  width: fit-content;
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  ${(p) => p.theme.body3}
  background-color: #00CC91;
  color: #fff;
  font-weight: 700;
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

export const TutorSummary = ({ img, name, professionalField, reviews }) => {
  return (
    <Container>
      <ProfileWrap>
        <ProfileImg src={img ? img : "/img/defaultProfile.png"} />
        <ProfileTextWrap>
          <Name>{name}</Name>
          <FiledWrap>
            <Theme>전문분야 :</Theme>
            <Filed>{professionalField ? professionalField : "미정"}</Filed>
          </FiledWrap>
        </ProfileTextWrap>
      </ProfileWrap>
      <ReviewCountWrap>
        <MdStars size={32} color={"#4708AE"} />
        <ReviewCount>평가 {reviews}개 </ReviewCount>
      </ReviewCountWrap>
    </Container>
  );
};
