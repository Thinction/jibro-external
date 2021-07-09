import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HalfBtnSet } from "../../../../../../Components/Buttons";
import { GET_CATEGORY } from "../../../../../../gql/Category";
import { GET_CANCEL_POLICY } from "../../../../../../gql/TermsAndPolicy";

const Section = styled.div`
  padding: 0 16px;
  margin-bottom: 24px;
  :last-child {
    margin-bottom: 0;
  }
`;

const Theme = styled.div`
  ${(p) => p.theme.subTitle2};
  margin-bottom: 8px;
`;
const InputBox = styled.textarea`
  width: 100%;
  min-height: 144px;
  resize: none;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 8px;
  :focus {
    outline: none;
  }
  ::placeholder {
    word-break: keep-all;
  }
`;

const Caption = styled.div`
  ${(p) => p.theme.caption}
  color: rgba(0,0,0,.6);
  margin-bottom: 32px;
`;

const ServiceGuide = ({
  service,
  serviceId,
  step,
  setStep,
  categoryId,
  createServiceMutation,
}) => {
  const [guide, setGuide] = useState(
    service?.guide ? service.guide : undefined
  );
  const onChangeGuide = (e) => {
    setGuide(e.target.value);
  };
  const { loading: categoryLoading, data: categoryData } = useQuery(
    GET_CATEGORY,
    {
      variables: { categoryId },
      onCompleted: (d) => {
        if (!service?.guide && d.getCategory.ok) {
          setGuide(d.getCategory.category.rule);
        }
      },
    }
  );
  const [cancelPolicy, setCancelPolicy] = useState(
    service?.cancelPolicy ? service.cancelPolicy : undefined
  );
  const onChangeCancelPolicy = (e) => {
    setCancelPolicy(e.target.value);
  };
  const { loading: policyLoading, data: policyData } = useQuery(
    GET_CANCEL_POLICY,
    {
      onCompleted: (d) => {
        if (!service?.cancelPolicy && d.getCancelPolicy.ok) {
          setCancelPolicy(d.getCancelPolicy.cancelPolicy.body);
        }
      },
    }
  );
  const [allWritten, setAllWritten] = useState(false);
  useEffect(() => {
    if ((guide, cancelPolicy)) {
      setAllWritten(true);
    } else {
      setAllWritten(false);
    }
  }, [guide, cancelPolicy]);
  const onClickCreateService = () => {
    setStep((prev) => {
      createServiceMutation({
        variables: {
          guide,
          cancelPolicy,
          step: prev + 1,
          serviceId,
        },
      });
      return prev + 1;
    });
  };
  return (
    <>
      <Section>
        {!categoryLoading && categoryData?.getCategory?.ok && (
          <>
            <Theme>서비스 이용규칙</Theme>
            <InputBox value={guide} onChange={onChangeGuide} />
            <Caption>
              기본 양식에 필요한 규칙을 직접 추가하여 저장할 수 있습니다.
            </Caption>
          </>
        )}
        {!policyLoading && policyData?.getCancelPolicy?.ok && (
          <>
            <Theme>취소 및 환불규정</Theme>
            <InputBox value={cancelPolicy} onChange={onChangeCancelPolicy} />
            <Caption>
              기본 양식에 필요한 규칙을 직접 추가하여 저장할 수 있습니다.
            </Caption>
          </>
        )}
      </Section>
      <HalfBtnSet
        leftText={"이전"}
        leftBg={"#D7D7D7"}
        leftColor={"rgba(0, 0, 0, .6)"}
        onClickLeft={() => {
          setStep(4);
        }}
        rightText={"저장하고 다음"}
        rightColor={"#fff"}
        onClickRight={() => {
          onClickCreateService();
        }}
        allWritten={allWritten}
        disabled={!allWritten}
      />
    </>
  );
};

export default ServiceGuide;
