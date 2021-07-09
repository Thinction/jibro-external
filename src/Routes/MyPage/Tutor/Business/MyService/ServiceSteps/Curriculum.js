import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router";
import styled from "styled-components";
import { AddBtn, HalfBtnSet } from "../../../../../../Components/Buttons";
import AddEditInfoComponent from "./AddEditInfoComponent";

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

const Select = styled.textarea`
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

//SampleText : 회원마다 타고난 체형을 분석후 본인에게 알맞는 식단&운동 설계 및 설명, 건강한 식단과 생활습관지도와 함께 운동 시작!

const Curriculum = ({
  service,
  serviceId,
  step,
  setStep,
  createServiceMutation,
}) => {
  const [loop, setLoop] = useState(
    service?.curriculum ? service.curriculum.length + 1 : 1
  );
  const [curriculumText, setCurriculumText] = useState("");
  const onChangeCurriculumText = (e) => {
    setCurriculumText(e.target.value);
  };
  const [curriculum, setCurriculum] = useState(
    service?.curriculum ? service.curriculum : []
  );
  const onClickAddCurriculum = () => {
    if (curriculumText?.length >= 10) {
      setCurriculum((prev) => {
        const nextState = prev.concat(`${loop}||${curriculumText}`);
        setCurriculumText("");
        setLoop(loop + 1);
        return nextState;
      });
    } else {
      alert("10글자 이상 입력해주세요");
    }
  };
  const onRemoveCurriculum = (item) => {
    setCurriculum((prev) => {
      let nextState = [];
      const removedPrev = prev.filter((x) => x !== item);
      removedPrev.map((y, index) =>
        nextState.push(`${index + 1}||${y.split("||")[1]}`)
      );
      setLoop(loop - 1);
      return nextState;
    });
  };
  const [allWritten, setAllWritten] = useState(false);
  useEffect(() => {
    if (curriculum?.length !== 0) {
      setAllWritten(true);
    } else {
      setAllWritten(false);
    }
  }, [curriculum, curriculumText]);
  const onClickCreateService = () => {
    setStep((prev) => {
      createServiceMutation({
        variables: {
          curriculum,
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
        <Theme>{`${loop} 회차`}</Theme>
        <Select
          size={"100%"}
          name={"text"}
          placeholder="최소 10글자 이상 입력해주세요."
          value={curriculumText}
          onChange={onChangeCurriculumText}
        />
      </Section>
      <BtnWrap>
        <AddBtn onClick={onClickAddCurriculum} />
      </BtnWrap>
      {curriculum.map((item, index) => {
        return (
          <AddEditInfoComponent
            key={index}
            item={item}
            onRemoveCurriculum={onRemoveCurriculum}
          />
        );
      })}
      <HalfBtnSet
        leftText={"이전"}
        leftBg={"#D7D7D7"}
        leftColor={"rgba(0, 0, 0, .6)"}
        onClickLeft={() => {
          setStep(5);
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

export default Curriculum;
