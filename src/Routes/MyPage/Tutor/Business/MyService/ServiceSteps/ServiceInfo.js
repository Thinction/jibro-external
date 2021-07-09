import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HalfBtnSet } from "../../../../../../Components/Buttons";

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

const Select = styled.select`
  width: ${(props) => props.size};
  min-height: 48px;
  resize: none;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  padding: 0 12px;
  :focus {
    outline: none;
  }
`;

const Option = styled.option`
  width: 100%;
  height: 100%;
`;

const Input = styled.input`
  width: ${(props) => props.size};
  height: 48px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  padding: 12px;
  :focus {
    outline: none;
  }
  margin-right: 8px;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const SelectWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  width: fit-content;
  ${(p) => p.theme.body1};
  font-weight: 500;
  margin: 0 16px 0 8px;
  :last-child {
    margin-right: 0;
  }
`;

const hopeClass = [
  { title: "원데이 클래스", value: "OneDay" },
  { title: "정규 클래스", value: "Regular" },
  { title: "자격증/창업 클래스", value: "Certificate" },
];
const recruitType = [
  { title: "개인 레슨", value: "Personal" },
  { title: "그룹 레슨", value: "Group" },
  { title: "온라인/화상 레슨", value: "Online" },
];
const periodUnit = ["일", "주", "개월"];
const perTimeUnit = ["분", "시간"];

const ServiceInfo = ({
  service,
  serviceId,
  step,
  setStep,
  createServiceMutation,
}) => {
  //classType
  const [classType, setClassType] = useState(
    service?.classType ? service.classType : undefined
  );
  const onChangeClassType = (e) => {
    setClassType(e.target.value);
  };
  //lessonType
  const [lessonType, setLessonType] = useState(
    service?.lessonType ? service.lessonType : undefined
  );
  const onChangeLessonType = (e) => {
    setLessonType(e.target.value);
  };

  const [period, setPeriod] = useState(
    service?.numOfClass ? service.numOfClass.split("||")[0] : undefined
  );
  const onChangePeriod = (e) => {
    setPeriod(e.target.value);
  };
  const [day, setDay] = useState(
    service?.numOfClass ? service.numOfClass.split("||")[1] : undefined
  );
  const onChangeDay = (e) => {
    setDay(e.target.value);
  };
  const [many, setMany] = useState(
    service?.numOfClass ? service.numOfClass.split("||")[2] : undefined
  );
  const onChangeMany = (e) => {
    setMany(e.target.value);
  };
  const [time, setTime] = useState(
    service?.timePerClass ? service.timePerClass.split("||")[0] : undefined
  );
  const onChangeTime = (e) => {
    setTime(e.target.value);
  };
  const [hour, setHour] = useState(
    service?.timePerClass ? service.timePerClass.split("||")[1] : undefined
  );
  const onChangeHour = (e) => {
    setHour(e.target.value);
  };
  const [allWritten, setAllWritten] = useState(false);
  useEffect(() => {
    if (classType && lessonType && period && day && many && time && hour) {
      setAllWritten(true);
    } else {
      setAllWritten(false);
    }
  }, [classType, lessonType, period, day, many, time, hour]);
  const onClickCreateService = () => {
    setStep((prev) => {
      createServiceMutation({
        variables: {
          classType,
          lessonType,
          numOfClass:
            period && day && many
              ? period + "||" + day + "||" + many
              : undefined,
          timePerClass: time && hour ? time + "||" + hour : undefined,
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
        <Theme>희망 과정</Theme>
        <Select
          size={"100%"}
          onChange={onChangeClassType}
          defaultValue={classType}
        >
          <Option hidden>선택해주세요.</Option>
          {hopeClass.map((item, index) => (
            <Option key={index} value={item.value}>
              {item.title}
            </Option>
          ))}
        </Select>
      </Section>
      <Section>
        <Theme>모집 형태</Theme>
        <Select
          size={"100%"}
          onChange={onChangeLessonType}
          defaultValue={lessonType}
        >
          <Option hidden>선택해주세요.</Option>
          {recruitType.map((item, index) => (
            <Option key={index} value={item.value}>
              {item.title}
            </Option>
          ))}
        </Select>
      </Section>
      <Section>
        <Theme>교육 횟수</Theme>
        <SelectWrap>
          <Input
            size={"58px"}
            placeholder="기간"
            value={period}
            onChange={onChangePeriod}
            type="number"
          />
          <Select size={"88px"} onChange={onChangeDay} defaultValue={day}>
            <Option hidden>단위</Option>
            {periodUnit.map((item, index) => {
              return (
                <Option key={index} value={item}>
                  {item}
                </Option>
              );
            })}
          </Select>
          <Text>동안</Text>
          <Input
            size={"58px"}
            placeholder="횟수"
            value={many}
            onChange={onChangeMany}
            type="number"
          />
          <Text>회 진행</Text>
        </SelectWrap>
      </Section>
      <Section>
        <Theme>회당 교육 시간</Theme>
        <SelectWrap>
          <Input
            size={"58px"}
            placeholder="단위"
            value={time}
            onChange={onChangeTime}
            type="number"
          />
          <Select size={"88px"} onChange={onChangeHour} defaultValue={hour}>
            <Option hidden>단위</Option>
            {perTimeUnit.map((item, index) => {
              return (
                <Option key={index} value={item}>
                  {item}
                </Option>
              );
            })}
          </Select>
        </SelectWrap>
      </Section>
      <HalfBtnSet
        leftText={"이전"}
        leftBg={"#D7D7D7"}
        leftColor={"rgba(0, 0, 0, .6)"}
        onClickLeft={() => setStep(1)}
        rightText={"저장하고 다음"}
        rightColor={"#fff"}
        onClickRight={() => onClickCreateService()}
        allWritten={allWritten}
        disabled={!allWritten}
      />
    </>
  );
};

export default ServiceInfo;
