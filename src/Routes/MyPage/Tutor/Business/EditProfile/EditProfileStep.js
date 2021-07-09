import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import styled from "styled-components";
import { BtnType2, HalfBtnSet } from "../../../../../Components/Buttons";
import { HeaderType3 } from "../../../../../Components/Headers";
import { PopupType1 } from "../../../../../Components/Popup";
import { GET_CATEGORIES } from "../../../../../gql/Category";
import { CREATE_TUTOR_PROFILE } from "../../../../../gql/User";
import useInput from "../../../../../Hooks/UseInput";
import korea from "../../../../../korea";
import AddInfoComponent from "./AddInfoComponent";
import Certificate from "./Certificate";
import JobHistory from "./JobHistory";

const Container = styled.div`
  width: 100vw;
  max-width: 720px;
  min-height: calc(100vh - 56px);
  height: fit-content;
  margin: 0 auto;
  margin-top: 56px;
  position: relative;
  padding-bottom: 56px;
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
  width: ${(p) => `${p.step * 25}%`};
  height: 2px;
  border-bottom: 2px solid #4708ae;
  margin-bottom: 24px;
  transition: all ease-in-out 0.3s;
`;

const Section = styled.div`
  padding: 0 16px;
  margin-bottom: 24px;
`;

const Theme = styled.div`
  ${(p) => p.theme.subTitle2};
  margin-bottom: 8px;
`;

const InputBox = styled.textarea`
  width: 100%;
  min-height: 124px;
  resize: none;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  padding: 12px;
  :focus {
    outline: none;
  }
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

const SelectWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EditProfileStep = ({ history, tutorProfile, refetch }) => {
  const { loading, data } = useQuery(GET_CATEGORIES);
  const [createTutorProfileMutation] = useMutation(CREATE_TUTOR_PROFILE, {
    onCompleted: (d) => {
      if (d.createTutorProfile.ok) {
        refetch();
      } else {
        alert(d.createTutorProfile.error);
      }
    },
  });
  const onClickMutation = (done) => {
    createTutorProfileMutation({
      variables: {
        introduce: introduceText.value,
        categoryId: step2Category.value,
        workingArea:
          step2City && step2CitySection
            ? step2City + "||" + step2CitySection
            : undefined,
        licenses: certificateList,
        careers: jobHistory,
        step: step,
        done: done ? true : undefined,
      },
    });
  };
  const introduceText = useInput(tutorProfile?.introduce);
  const step2Category = useInput(tutorProfile?.category?.id);
  const [step2City, setWorkingCity] = useState(
    tutorProfile?.workingArea?.split("||")[0] || undefined
  );
  const [step2CitySection, setWorkingTown] = useState(
    tutorProfile?.workingArea?.split("||")[1] || undefined
  );
  const onChangeStep2City = (e) => {
    setWorkingCity(e.target.value);
  };
  const onChangeStep2CitySection = (e) => {
    setWorkingTown(e.target.value);
  };

  const getSido = (codeNm) => {
    const getCity = korea.sido.filter((item) => item.codeNm === codeNm);
    return getCity[0].sido;
  };
  const [cityNum, setCityNum] = useState(
    tutorProfile?.workingArea
      ? getSido(tutorProfile.workingArea.split("||")[0])
      : ""
  );
  const onChangeCity = (e) => {
    setCityNum(getSido(e.target.value));
  };

  const [certificateList, setCertificateList] = useState(
    tutorProfile?.licenses || undefined
  );
  const [jobHistory, setJobHistory] = useState(
    tutorProfile?.careers || undefined
  );
  const [achievement, setAchievement] = useState("25%");
  const [step, setStep] = useState(1);
  const [isOn, setIsOn] = useState(false);

  const closeFunc = () => {
    history.go(-1);
  };

  const achievementPercent = ["25%", "50%", "75%", "100%"];
  const onClickPageMove = () => {
    if (achievement !== "" && achievement !== "25%") {
      for (let i = 0; i < achievementPercent.length; i++) {
        if (achievement === achievementPercent[i]) {
          setAchievement(achievementPercent[i - 1]);
        }
      }
    } else {
      history.go(-1);
    }
  };

  const onClickAddArray1 = (partialValues, list, setList, alert1, alert2) => {
    if (
      list?.filter(
        (item) =>
          item ===
          partialValues.certification +
            " / " +
            partialValues.issuingAgency +
            " / " +
            partialValues.issuingDate
      ).length === 0
    ) {
      if (
        Object.values(partialValues).filter((item) => item === "").length !== 0
      ) {
        alert(alert1);
      } else {
        setList(
          list.concat(
            partialValues.certification +
              " / " +
              partialValues.issuingAgency +
              " / " +
              partialValues.issuingDate
          )
        );
      }
    } else {
      alert(alert2);
    }
  };
  const onClickAddArray2 = (partialValues, list, setList, alert1, alert2) => {
    if (
      list?.filter(
        (item) =>
          item ===
          partialValues.company +
            " / " +
            partialValues.grade +
            " / " +
            partialValues.role +
            " / " +
            partialValues.year +
            " " +
            partialValues.month
      ).length === 0
    ) {
      if (
        Object.values(partialValues).filter((item) => item === "").length !== 0
      ) {
        alert(alert1);
      } else {
        setList(
          list.concat(
            partialValues.company +
              " / " +
              partialValues.grade +
              " / " +
              partialValues.role +
              " / " +
              partialValues.year +
              " " +
              partialValues.month
          )
        );
      }
    } else {
      alert(alert2);
    }
  };

  const onClickRemoveArray = (item, list, setList) => {
    if (list?.filter((arr) => arr === item).length !== 0) {
      setList(list.filter((arr) => arr !== item));
    }
  };
  return (
    <>
      <HeaderType3 closeFunc={closeFunc} onClickMove={onClickPageMove}>
        {"전문가 프로필 관리"}
      </HeaderType3>
      <Container>
        <StepText>
          {step === 1 && "1단계: 전문가 소개"}
          {step === 2 && "2단계: 전문 분야 및 활동 지역"}
          {step === 3 && "3단계: 보유한 자격증"}
          {step === 4 && "4단계: 경력사항"}
        </StepText>
        <UnderLine step={step}></UnderLine>
        {step === 1 && (
          <Section>
            <Theme>자기 소개</Theme>
            <InputBox
              placeholder="자기소개는 1자 이상 255자 이하로 입력해주세요."
              {...introduceText}
              maxLength="255"
            />
          </Section>
        )}
        {step === 2 && !loading && data?.getCategories?.ok && (
          <>
            <Section>
              <Theme>전문 분야 선택</Theme>
              <Select size={"100%"} {...step2Category}>
                <Option hidden>전문 분야</Option>
                {data.getCategories.categories.map((item, index) => {
                  return (
                    <Option key={index} value={item.id}>
                      {item.title}
                    </Option>
                  );
                })}
              </Select>
            </Section>
            <Section>
              <Theme>활동 지역 선택</Theme>
              <SelectWrap>
                <Select
                  size={"46%"}
                  defaultValue={tutorProfile?.workingArea ? step2City : "시/도"}
                  onChange={(e) => {
                    onChangeCity(e);
                    onChangeStep2City(e);
                  }}
                >
                  <Option hidden>시/도</Option>
                  {korea.sido.map((item) => {
                    return (
                      <Option key={item.sido} value={item.codeNm}>
                        {item.codeNm}
                      </Option>
                    );
                  })}
                </Select>
                <Select
                  size={"46%"}
                  defaultValue={
                    tutorProfile?.workingArea ? step2CitySection : "시/군/구"
                  }
                  onChange={onChangeStep2CitySection}
                >
                  <Option hidden>시/군/구</Option>
                  {step2City &&
                    korea.sigugun
                      .filter((item) => item.sido === cityNum)
                      .map((item) => {
                        return (
                          <Option key={item.sigugun} value={item.codeNm}>
                            {item.codeNm}
                          </Option>
                        );
                      })}
                </Select>
              </SelectWrap>
            </Section>
          </>
        )}
        {step === 3 && (
          <>
            <Certificate
              onClickAddArray={onClickAddArray1}
              list={certificateList}
              setList={setCertificateList}
            />
            {certificateList &&
              certificateList.length !== 0 &&
              certificateList.map((item, index) => {
                return (
                  <AddInfoComponent
                    key={index}
                    information={item}
                    onClick={onClickRemoveArray}
                    item={item}
                    list={certificateList}
                    setList={setCertificateList}
                  />
                );
              })}
          </>
        )}
        {step === 4 && (
          <>
            <JobHistory
              onClickAddArray={onClickAddArray2}
              list={jobHistory}
              setList={setJobHistory}
            />
            {jobHistory &&
              jobHistory.length !== 0 &&
              jobHistory.map((item, index) => {
                return (
                  <AddInfoComponent
                    key={index}
                    information={item}
                    onClick={onClickRemoveArray}
                    item={item}
                    list={jobHistory}
                    setList={setJobHistory}
                  />
                );
              })}
          </>
        )}
      </Container>
      {step === 1 && (
        <BtnType2
          allWritten={Boolean(introduceText.value)}
          disabled={!Boolean(introduceText.value)}
          onClick={() => {
            onClickMutation();
            setStep(2);
          }}
        >
          저장하고 다음
        </BtnType2>
      )}
      {step === 2 && (
        <HalfBtnSet
          leftText={"이전"}
          leftColor={"rgba(0, 0, 0, .6)"}
          leftBg={"#d7d7d7"}
          onClickLeft={() => {
            setStep(1);
            onClickMutation();
          }}
          rightText={"저장하고 다음"}
          rightColor={"#fff"}
          onClickRight={() => {
            setStep(3);
            onClickMutation();
          }}
          allWritten={
            Boolean(step2City) &&
            Boolean(step2CitySection) &&
            Boolean(step2Category)
          }
          disabled={
            !Boolean(
              Boolean(step2City) &&
                Boolean(step2CitySection) &&
                Boolean(step2Category)
            )
          }
          absolute={true}
        />
      )}
      {step === 3 && (
        <HalfBtnSet
          leftText={"이전"}
          leftColor={"rgba(0, 0, 0, .6)"}
          leftBg={"#d7d7d7"}
          onClickLeft={() => {
            setStep(2);
            onClickMutation();
          }}
          rightText={"저장하고 다음"}
          rightColor={"#fff"}
          allWritten={true}
          disabled={false}
          onClickRight={() => {
            setStep(4);
            onClickMutation();
          }}
        />
      )}
      {step === 4 && (
        <HalfBtnSet
          leftText={"이전"}
          leftColor={"rgba(0, 0, 0, .6)"}
          leftBg={"#d7d7d7"}
          onClickLeft={() => {
            setStep(3);
            onClickMutation();
          }}
          rightText={"완료"}
          rightColor={"#fff"}
          allWritten={true}
          disabled={false}
          onClickRight={async () => {
            setStep(4);
            await onClickMutation(true);
            setIsOn(true);
          }}
        />
      )}
      {isOn && (
        <PopupType1
          children={"프로필 등록 및 수정이 완료되었습니다."}
          onClickRemove={() => setIsOn(false)}
          onClick={() => history.go(-1)}
        />
      )}
    </>
  );
};

export default EditProfileStep;
