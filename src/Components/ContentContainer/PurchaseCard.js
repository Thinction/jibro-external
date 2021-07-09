import React from "react";
import styled from "styled-components";
import { ProfileSquare } from "../IconPack";

const SectionMiddle = styled.div`
  display: flex;
  margin-top: 16px;
`;

const CardInfoWrap = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.type === "center" ? "center" : "space-around"};
`;

const PurchaseCardTheme = styled.div`
  ${(p) => p.theme.subTitle2}
`;

const PurchaseCardText = styled.div`
  ${(p) => p.theme.body2}
  color: rgba(0,0,0,.6);
`;

const PurchaseCard = ({ imgSrc, title, tutor, date }) => {
  return (
    <>
      <SectionMiddle>
        <ProfileSquare size={80} border={8} src={imgSrc} />
        <CardInfoWrap type="space-around">
          <PurchaseCardTheme>{title}</PurchaseCardTheme>
          <PurchaseCardText>{tutor} 전문가님</PurchaseCardText>
          <PurchaseCardText>
            시작 희망일: {date.getMonth() + 1}월 {date.getDate()}일
          </PurchaseCardText>
        </CardInfoWrap>
      </SectionMiddle>
    </>
  );
};

export default PurchaseCard;
