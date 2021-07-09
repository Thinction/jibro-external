import React from "react";
import styled from "styled-components";
import dateConverter from "../../../../../Components/Utils/dateConverter";
import dateZeroPlusPrinter from "../../../../../Components/Utils/dateZeroPlusPrinter";
import theme from "../../../../../Styles/theme";

const Container = styled.div`
  width: 100%;
  height: 81px;

  margin: 16px 0;
  :last-child {
    margin-bottom: 0;
  }
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;
const InfoRaw = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  :first-child {
    margin-bottom: 4px;
  }
`;
const OrderNumber = styled.div`
  ${(p) => p.theme.subTitle2};
`;
const Cost = styled.div`
  ${(p) => p.theme.subTitle2};
`;
const GrayText = styled.div`
  ${(p) => p.theme.caption};
  color: rgba(0, 0, 0, 0.38);
`;
const Status = styled.div`
  ${(p) => p.theme.subTitle3};
  color: ${(props) => props.textColor};
`;

const stateDict = {
  처리중: theme.themeColorSecondary,
  입금완료: theme.themeColor,
  환불완료: theme.themeColorError,
};

const ProfitsComponent = ({
  serviceNumber,
  income,
  price,
  state,
  date: dateProp,
}) => {
  const date = dateConverter(dateProp);
  const dateString = `${date
    .getFullYear()
    .toString()
    .slice(-2)}.${dateZeroPlusPrinter(
    date.getMonth() + 1
  )}.${dateZeroPlusPrinter(
    date.getDate()
  )} ${date.getHours()}:${date.getMinutes()}`;
  return (
    <Container>
      <InfoRaw>
        <OrderNumber>{serviceNumber}</OrderNumber>
        <Cost>{income}</Cost>
      </InfoRaw>
      <InfoRaw>
        <GrayText>실 거래금액 {price}</GrayText>
      </InfoRaw>
      <InfoRaw>
        <GrayText>{dateString}</GrayText>
        <Status textColor={stateDict[state]}>{state}</Status>
      </InfoRaw>
    </Container>
  );
};

export default ProfitsComponent;
