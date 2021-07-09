import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import styled from "styled-components";
import { HeaderType3 } from "../../../../../Components/Headers";
import { CREATE_SERVICE } from "../../../../../gql/Service";
import Curriculum from "./ServiceSteps/Curriculum";
import DefaultInformation from "./ServiceSteps/DefaultInformation";
import PriceNDescription from "./ServiceSteps/PriceNDescription";
import ServiceDateSetting from "./ServiceSteps/ServiceDateSetting";
import ServiceGuide from "./ServiceSteps/ServiceGuide";
import ServiceImage from "./ServiceSteps/ServiceImage";
import ServiceInfo from "./ServiceSteps/ServiceInfo";

const Container = styled.div`
  width: 100vw;
  max-width: 720px;
  min-height: calc(100vh - 56px);
  height: fit-content;
  margin: 0 auto;
  margin-top: 56px;
  position: relative;
`;

const StepText = styled.div`
  ${(p) => p.theme.headLine6};
  color: ${(p) => p.theme.themeColor};
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

const UnderLine = styled.div`
  width: ${(p) => p.width};
  height: 2px;
  border-bottom: 2px solid #4708ae;
  margin-bottom: 24px;
  transition: all ease-in-out 0.3s;
`;

const stepTitle = [
  {
    percent: "14.29%",
    title: "1단계: 기본정보",
    component: DefaultInformation,
  },
  {
    percent: "28.6%",
    title: "2단계: 서비스 정보",
    component: ServiceInfo,
  },
  {
    percent: "42.89%",
    title: "3단계: 서비스 가능일",
    component: ServiceDateSetting,
  },
  {
    percent: "57.18%",
    title: "4단계: 서비스 가격 및 설명",
    component: PriceNDescription,
  },
  {
    percent: "71.47%",
    title: "5단계: 서비스 가이드",
    component: ServiceGuide,
  },
  {
    percent: "85.76%",
    title: "6단계: 커리큘럼",
    component: Curriculum,
  },
  {
    percent: "100%",
    title: "7단계: 이미지",
    component: ServiceImage,
  },
];
const stepTitles = [
  "1단계: 기본정보",
  "2단계: 서비스 정보",
  "3단계: 서비스 가능일",
  "4단계: 서비스 가격 및 설명",
  "5단계: 서비스 가이드",
  "6단계: 커리큘럼",
  "7단계: 이미지",
];

const AddEditStep = ({ history }) => {
  const [createServiceMutation] = useMutation(CREATE_SERVICE, {
    onCompleted: (d) => {
      if (d.createService.ok) {
        setServiceId(d.createService.service.id);
      } else {
        alert(d.createService.error);
      }
    },
  });
  const [serviceId, setServiceId] = useState(
    history?.location?.state?.service
      ? history.location.state.service.id
      : undefined
  );

  //category
  const [categoryId, setCategoryId] = useState(
    history?.location?.state?.service
      ? history.location.state.service.category.id
      : undefined
  );
  const onChangeCategoryId = (e) => {
    setCategoryId(e.target.value);
  };

  const [achievement, setAchievement] = useState("14.29%");
  const [step, setStep] = useState(1);

  const closeFunc = () => {
    history.go(-1);
  };

  const onClickPageMove = () => {
    if (achievement !== "" && achievement !== stepTitle[0].percent) {
      for (let i = 1; i < 7; i++) {
        if (achievement === stepTitle[i].percent) {
          setAchievement(stepTitle[i - 1].percent);
        }
      }
    } else {
      history.go(-1);
    }
  };

  return (
    <>
      <HeaderType3 closeFunc={closeFunc} onClickMove={onClickPageMove}>
        {"서비스 등록하기"}
      </HeaderType3>
      <Container>
        <StepText>{stepTitles[step - 1]}</StepText>
        <UnderLine width={`${(step / 7) * 100}%`} />
        {stepTitle.map((item, index) => {
          if (index === 5) {
            return (
              step === index + 1 && (
                <item.component
                  key={index}
                  service={history?.location?.state?.service}
                  serviceId={serviceId}
                  step={step}
                  setStep={setStep}
                  createServiceMutation={createServiceMutation}
                />
              )
            );
          } else {
            return (
              step === index + 1 && (
                <item.component
                  key={index}
                  service={history?.location?.state?.service}
                  serviceId={serviceId}
                  step={step}
                  setStep={setStep}
                  categoryId={categoryId}
                  onChangeCategoryId={onChangeCategoryId}
                  createServiceMutation={createServiceMutation}
                  history={history}
                />
              )
            );
          }
        })}
      </Container>
    </>
  );
};

export default AddEditStep;
