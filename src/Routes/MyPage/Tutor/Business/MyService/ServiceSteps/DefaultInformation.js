import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BtnType2 } from "../../../../../../Components/Buttons";
import { GET_CATEGORIES } from "../../../../../../gql/Category";
import korea from "../../../../../../korea";

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
  min-height: 64px;
  resize: none;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 8px;
  :focus {
    outline: none;
  }
`;

const Caption = styled.div`
  ${(p) => p.theme.caption}
  color: rgba(0,0,0,.6);
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

const DefaultInformation = ({
  location,
  service,
  serviceId,
  step,
  setStep,
  categoryId,
  onChangeCategoryId,
  createServiceMutation,
}) => {
  const { loading, data } = useQuery(GET_CATEGORIES);
  // title
  const [title, setTitle] = useState(
    service?.title ? service.title : undefined
  );
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  // //category
  // const [categoryId, setCategoryId] = useState(
  //   service?.category?.id ? service.category.id : undefined
  // );
  // const onChangeCategoryId = (e) => {
  //   setCategoryId(e.target.value);
  // };
  //workingArea
  const [serviceCity, setServiceCity] = useState(
    service?.serviceArea ? service.serviceArea.split("||")[0] : undefined
  );
  const [serviceTown, setServiceTown] = useState(
    service?.serviceArea ? service.serviceArea.split("||")[1] : undefined
  );
  const onChangeServiceCity = (e) => {
    setServiceCity(e.target.value);
  };
  const onChangeServiceTown = (e) => {
    setServiceTown(e.target.value);
  };
  const getSido = (codeNm) => {
    const getCity = korea.sido.filter((item) => item.codeNm === codeNm);
    return getCity[0].sido;
  };
  const [cityNum, setCityNum] = useState(
    service?.serviceArea ? getSido(service.serviceArea.split("||")[0]) : ""
  );
  const onChangeCityNum = (e) => {
    setCityNum(getSido(e.target.value));
  };
  const [titleDone, setTitleDone] = useState(false);
  const [serviceAreaDone, setServiceAreaDone] = useState(false);
  useEffect(() => {
    if (title?.length >= 10) {
      setTitleDone(true);
    } else {
      setTitleDone(false);
    }
    if (serviceCity && serviceTown) {
      setServiceAreaDone(true);
    } else {
      setServiceAreaDone(false);
    }
  }, [title, serviceCity, serviceTown]);
  const onClickCreateService = () => {
    setStep((prev) => {
      createServiceMutation({
        variables: {
          title,
          categoryId,
          serviceArea:
            serviceCity && serviceTown
              ? serviceCity + "||" + serviceTown
              : undefined,
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
        <Theme>????????? ??????</Theme>
        <InputBox
          placeholder="?????? 10?????? ??????, 30?????? ????????? ??????????????????."
          value={title}
          onChange={onChangeTitle}
          minLength="10"
          maxLength="30"
        />
        <Caption>?????? ????????? ???????????? ???????????? ??? ????????????.</Caption>
      </Section>
      <Section>
        <Theme>????????????</Theme>
        {!loading && data?.getCategories?.ok && (
          <Select
            size={"100%"}
            onChange={onChangeCategoryId}
            value={categoryId || undefined}
          >
            <Option hidden>?????? ??????</Option>
            {data.getCategories.categories.map((item, index) => {
              return (
                <Option key={index} value={item.id}>
                  {item.title}
                </Option>
              );
            })}
          </Select>
        )}
      </Section>
      <Section>
        <Theme>????????? ?????? ??????</Theme>
        <SelectWrap>
          <Select
            size={"46%"}
            defaultValue={service?.serviceArea ? serviceCity : "???/???"}
            onChange={(e) => {
              onChangeCityNum(e);
              onChangeServiceCity(e);
            }}
          >
            <Option hidden>???/???</Option>
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
            defaultValue={service?.serviceArea ? serviceTown : "???/???/???"}
            onChange={onChangeServiceTown}
          >
            <Option hidden>???/???/???</Option>
            {serviceCity &&
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
      <BtnType2
        allWritten={titleDone && serviceAreaDone && Boolean(categoryId)}
        disabled={!Boolean(titleDone && serviceAreaDone && Boolean(categoryId))}
        onClick={onClickCreateService}
      >
        ???????????? ??????
      </BtnType2>
    </>
  );
};

export default DefaultInformation;
