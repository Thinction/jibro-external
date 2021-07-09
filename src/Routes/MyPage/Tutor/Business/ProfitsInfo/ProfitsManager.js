import { useQuery } from "@apollo/client";
import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import myServiceDataSample from "../../../../../Components/DataSample/myServiceDateSample";
import { HeaderType1 } from "../../../../../Components/Headers";
import { GET_INCOME } from "../../../../../gql/BankAccount";
import ProfitsComponent from "./ProfitsComponent";

const Container = styled.div`
  width: 100vw;
  max-width: 720px;
  min-height: calc(100vh - 56px);
  height: fit-content;
  margin: 0 auto;
  margin-top: 56px;
  padding: 0 16px;
  padding-top: 24px;
  position: relative;
`;
const Text = styled.div`
  width: 100%;
  ${(p) => p.theme.subTitle2};
  color: ${(p) => p.theme.themeColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  word-break: keep-all;
  text-align: center;
`;
const ThemeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  align-items: center;
`;
const Theme = styled.div`
  ${(p) => p.theme.headLine6};
`;
const EditBtn = styled.button`
  ${(p) => p.theme.btnText};
  color: #6200ee;
  font-weight: 400;
`;
const Account = styled.div`
  margin: 16px 0;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

const AccountInfo = styled.div`
  display: flex;
  margin: 8px 0;
  :last-child {
    margin-bottom: 0;
  }
`;
const InfoTitle = styled.div`
  ${(p) => p.theme.subTitle2};

  margin-right: 8px;
`;
const InfoContents = styled.div`
  ${(p) => p.theme.subTitle2};
  font-weight: 400;
`;

const ProfitsList = styled.div``;

const ProfitsManager = ({ title, history, account }) => {
  const { data, loading } = useQuery(GET_INCOME);

  return (
    <>
      <HeaderType1 onClickFunc={() => history.push("/my")}>{title}</HeaderType1>
      <Container>
        <Text>
          수익금은&nbsp;취소&nbsp;및&nbsp;환불&nbsp;기간인&nbsp;7영업일&nbsp;이후
          신청하신&nbsp;출금정보&nbsp;계좌로&nbsp;입금됩니다.
        </Text>
        <Account>
          <ThemeWrap>
            <Theme>출금정보</Theme>
            <EditBtn
              onClick={() =>
                history.push({
                  pathname: "/my/profits/editAccount",
                  state: {
                    accountInfo: account,
                  },
                })
              }
            >
              수정하기
            </EditBtn>
          </ThemeWrap>
          <AccountInfo>
            <InfoTitle>예금주:</InfoTitle>
            <InfoContents>{account.name}</InfoContents>
          </AccountInfo>
          <AccountInfo>
            <InfoTitle>은행:</InfoTitle>
            <InfoContents>{account.bank}</InfoContents>
          </AccountInfo>
          <AccountInfo>
            <InfoTitle>계좌번호:</InfoTitle>
            <InfoContents>{account.number}</InfoContents>
          </AccountInfo>
        </Account>
        <ProfitsList>
          <ThemeWrap>
            <Theme>수익금 내역</Theme>
          </ThemeWrap>
          {!loading &&
            data?.getIncome.map((item, index) => (
              <ProfitsComponent
                key={index}
                serviceNumber={item.idNumber}
                income={item.income}
                price={item.price}
                state={item.state}
                date={item.createdAt}
              />
            ))}
        </ProfitsList>
      </Container>
    </>
  );
};

export default withRouter(ProfitsManager);
