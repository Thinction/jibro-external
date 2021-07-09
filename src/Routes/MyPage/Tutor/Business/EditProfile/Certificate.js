import React, { useState } from "react";
import styled from "styled-components";
import { AddBtn } from "../../../../../Components/Buttons";

const Section = styled.div`
  padding: 0 16px;
  margin-bottom: 24px;
`;

const Theme = styled.div`
  ${(p) => p.theme.subTitle2};
  margin-bottom: 8px;
`;

const OneLineInput = styled.input`
  width: 100%;
  min-height: 48px;
  resize: none;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  padding: 12px;
  :focus {
    outline: none;
  }
`;

const BtnWrap = styled.div`
  padding: 0 16px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
`;

const Certificate = ({ onClickAddArray, list, setList }) => {
  const [partialValues, setPartialValues] = useState({
    certification: "",
    issuingAgency: "",
    issuingDate: "",
  });

  const isSetValues = (e) => {
    const { name, value } = e.target;
    setPartialValues({ ...partialValues, [name]: value });
  };

  const onClickRemove = () => {
    setPartialValues({
      certification: "",
      issuingAgency: "",
      issuingDate: "",
    });
  };

  return (
    <>
      <Section>
        <Theme>자격증명</Theme>
        <OneLineInput
          size={"100%"}
          name={"certification"}
          value={partialValues.certification}
          onChange={isSetValues}
          placeholder="○○ 관리사 1급"
        />
      </Section>
      <Section>
        <Theme>발급기관</Theme>
        <OneLineInput
          size={"100%"}
          name={"issuingAgency"}
          value={partialValues.issuingAgency}
          onChange={isSetValues}
          placeholder="○○ 진흥원"
        />
      </Section>
      <Section>
        <Theme>발급일</Theme>
        <OneLineInput
          size={"100%"}
          name={"issuingDate"}
          value={partialValues.issuingDate}
          onChange={isSetValues}
          placeholder="2021-01-01"
        />
      </Section>
      <BtnWrap>
        <AddBtn
          onClick={() => {
            onClickAddArray(
              partialValues,
              list,
              setList,
              "자격증 내용을 작성해주세요.",
              "이미 추가된 자격증입니다."
            );
            onClickRemove();
          }}
        />
      </BtnWrap>
    </>
  );
};

export default Certificate;
