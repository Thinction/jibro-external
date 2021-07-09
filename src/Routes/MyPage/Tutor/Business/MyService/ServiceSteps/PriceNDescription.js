import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HalfBtnSet } from "../../../../../../Components/Buttons";
import { MdCheckBox } from "react-icons/md";

const Section = styled.div`
  padding: 0 16px;
  margin-bottom: 24px;
  :last-child {
    margin-bottom: 0;
  }
`;

const ThemeWrap = styled.div`
  display: flex;
`;

const Theme = styled.div`
  ${(p) => p.theme.subTitle2};
  margin-bottom: 8px;
`;

const InputWrap = styled.div`
  width: 100%;
  height: 48px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  padding: 12px;
`;

const Input = styled.input`
  min-width: 200px;
  height: 100%;
  border: none;
  :focus {
    outline: none;
  }
  padding: 0;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const IconWrap = styled.div`
  margin-right: 8px;
  svg {
    color: ${(p) => (p.checked ? p.theme.themeColor : "rgba(0, 0, 0, .6)")};
  }
`;

const SelectWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const Text = styled.div`
  width: fit-content;
  ${(p) => p.theme.body2};
`;

const InputBox = styled.textarea`
  width: 100%;
  min-height: 144px;
  resize: none;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  padding: 12px;
  :focus {
    outline: none;
  }
`;

const PriceNDescription = ({
  service,
  serviceId,
  step,
  setStep,
  createServiceMutation,
}) => {
  const [price, setPrice] = useState(
    service?.price ? service.price : undefined
  );
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const [includeSupplies, setIncludeSupplies] = useState(
    service?.includeSupplies ? service.includeSupplies : false
  );
  const onClickIncludeSupplies = () => {
    setIncludeSupplies((prev) => {
      return !prev;
    });
  };
  const [previewPrice, setPreviewPrice] = useState(
    service?.previewPrice ? service.previewPrice : undefined
  );
  const onChangePreviewPrice = (e) => {
    setPreviewPrice(e.target.value);
  };
  const [check, setCheck] = useState(service?.previewPrice ? true : false);
  const onClickCheck = () => {
    if (check) {
      setCheck((prev) => {
        setPreviewPrice(undefined);
        return false;
      });
    } else {
      setCheck(true);
    }
  };
  const [explain, setExplain] = useState(
    service?.explain ? service.explain : undefined
  );
  const onChangeExplain = (e) => {
    setExplain(e.target.value);
  };
  const [allWritten, setAllWritten] = useState(false);
  useEffect(() => {
    if (price && explain?.length >= 100) {
      setAllWritten(true);
    } else {
      setAllWritten(false);
    }
  }, [price, includeSupplies, check, previewPrice, explain]);
  const onClickCreateService = () => {
    setStep((prev) => {
      createServiceMutation({
        variables: {
          price: parseInt(price),
          includeSupplies,
          previewPrice: check ? parseInt(previewPrice) : undefined,
          explain,
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
        <Theme>서비스 금액 (VAT포함)</Theme>
        <InputWrap>
          <Input
            size={"328px"}
            placeholder="0"
            value={price}
            onChange={onChangePrice}
            type="number"
          />
          <Text>원</Text>
        </InputWrap>
        <SelectWrap onClick={onClickIncludeSupplies}>
          <IconWrap checked={includeSupplies}>
            <MdCheckBox size={24} />
          </IconWrap>
          <Text>준비물 제공 포함</Text>
        </SelectWrap>
      </Section>
      <Section>
        <ThemeWrap onClick={onClickCheck}>
          <IconWrap checked={check}>
            <MdCheckBox size={24} />
          </IconWrap>
          <Theme>1회 이용 서비스 금액 (VAT포함)</Theme>
        </ThemeWrap>
        <InputWrap>
          <Input
            size={"328px"}
            placeholder="0"
            value={previewPrice}
            onChange={onChangePreviewPrice}
            disabled={!check}
            type="number"
          />
          <Text>원</Text>
        </InputWrap>
      </Section>
      <Section>
        <Theme>서비스 설명</Theme>
        <InputBox
          placeholder="최소 100글자 이상 입력해주세요."
          value={explain}
          onChange={onChangeExplain}
        />
      </Section>
      <HalfBtnSet
        leftText={"이전"}
        leftBg={"#D7D7D7"}
        leftColor={"rgba(0, 0, 0, .6)"}
        onClickLeft={() => {
          setStep(3);
        }}
        rightText={"저장하고 다음"}
        rightColor={"#fff"}
        onClickRight={() => onClickCreateService()}
        allWritten={allWritten}
        disabled={!allWritten}
      />
    </>
  );
};

export default PriceNDescription;
