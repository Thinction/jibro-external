import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";

const ItemWrapper = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

const ItemTitle = styled.div`
  ${(p) => p.theme.body1}
  display: flex;
  align-items: center;
`;

const RecomandItem = ({ text, onClick }) => {
  return (
    <ItemWrapper onClick={onClick}>
      <ItemTitle>{text}</ItemTitle>
      <MdKeyboardArrowRight size={24} />
    </ItemWrapper>
  );
};

export default RecomandItem;
