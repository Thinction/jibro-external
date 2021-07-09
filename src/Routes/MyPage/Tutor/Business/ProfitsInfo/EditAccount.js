import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { BtnType2 } from "../../../../../Components/Buttons";
import bankList from "../../../../../Components/DataSample/bankList";
import { HeaderType1 } from "../../../../../Components/Headers";
import { PopupType2 } from "../../../../../Components/Popup";
import isNumeric from "../../../../../Components/Utils/isNumeric";
import {
  GET_MY_BANK_ACCOUNT,
  UPSERT_MY_BANK_ACCOUNT,
} from "../../../../../gql/BankAccount";
import useInput from "../../../../../Hooks/UseInput";

const Wrapper = styled.div`
  max-width: 720px;
  width: 100%;
  height: fit-content;
  min-height: calc(100vh - 56px);
  margin: 0 auto;
  background: #fff;
`;

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
  background-color: #fff;
`;

const Section = styled.div`
  margin-bottom: 32px;
`;

const Theme = styled.div`
  ${(p) => p.theme.subTitle2}
  margin-bottom:8px;
`;

const InputBox = styled.input`
  width: 100%;
  height: 44px;
  ${(p) => p.theme.body2}
  border:1px solid rgba(0,0,0,.12);
  border-radius: 8px;
  padding: 12px;
  ::placeholder {
    color: rgba(0, 0, 0, 0.6);
  }
`;

const SelectBox = styled.select`
  width: 100%;
  height: 44px;
  ${(p) => p.theme.body2}
  border:1px solid rgba(0,0,0,.12);
  border-radius: 8px;
  padding: 12px;
`;

const Option = styled.option`
  width: 100%;
  height: 100%;
`;
const validator = (input) => {
  return input === "" || isNumeric(input);
};

const EditAccount = ({ title, history }) => {
  const location = useLocation();
  const getParams = location.state;
  const accountHolder = useInput(getParams?.accountInfo?.name ?? "");
  const accountBank = useInput(getParams?.accountInfo?.bank ?? "은행 선택");
  const accountNumber = useInput(
    getParams?.accountInfo?.number ?? "",
    validator
  );

  const [isActive, setIsActive] = useState(false);
  const [isOn, setIsOn] = useState(false);

  const [mutation, { loading }] = useMutation(UPSERT_MY_BANK_ACCOUNT, {
    onCompleted: (d) => {
      if (d.upsertMyBankAccount.ok) {
        history.push("/my/profits");
      }
    },
    refetchQueries: [{ query: GET_MY_BANK_ACCOUNT }],
  });

  const upsertBankAccount = () => {
    if (!loading && isActive) {
      mutation({
        variables: {
          bank: accountBank.value,
          number: accountNumber.value,
          name: accountHolder.value,
        },
      });
    }
  };

  useEffect(() => {
    if (
      accountHolder.value !== "" &&
      accountBank.value !== "은행 선택" &&
      accountNumber.value?.length >= 9
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [
    accountHolder.value,
    accountBank.value,
    accountNumber.value,
    setIsActive,
  ]);

  return (
    <Wrapper>
      <HeaderType1>{title}</HeaderType1>
      <Container>
        <Section>
          <Theme>예금주</Theme>
          <InputBox placeholder="예금주 성명" {...accountHolder} />
        </Section>
        <Section>
          <Theme>은행</Theme>
          <SelectBox {...accountBank}>
            <Option>은행 선택</Option>
            {bankList.map((item, index) => (
              <Option key={index}>{item}</Option>
            ))}
          </SelectBox>
        </Section>
        <Section>
          <Theme>계좌번호</Theme>
          <InputBox
            placeholder="계좌번호의 '-'를 제외하고 입력해주세요."
            type="number"
            {...accountNumber}
          />
        </Section>
      </Container>
      <BtnType2
        allWritten={isActive}
        disabled={isActive ? isActive && false : true}
        onClick={() => setIsOn(true)}
        children={"저장하기"}
      />
      {isOn && (
        <PopupType2
          cancel={true}
          rightBtnText={"저장"}
          children={
            "입력하신 출금 정보를 기준으로 수익금에 대한 정산이 이루어지며, 입력 정보가 부정확할 경우 정산 지연 등의 불이익이 발생할 수 있습니다. 출금정보가 정확하며, 저장하시겠습니까?"
          }
          onClickCancel={() => setIsOn(false)}
          onClickRemove={() => setIsOn(false)}
          onClick={upsertBankAccount}
        />
      )}
    </Wrapper>
  );
};

export default withRouter(EditAccount);
