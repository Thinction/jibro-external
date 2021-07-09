import React from "react";
import styled from "styled-components";
import { FilterListTypeCheck, FilterListTypeCircle } from "./FilterList";
import { HeaderType1 } from "../../Components/Headers";
import { HalfBtnSet } from "../../Components/Buttons";
import theme from "../../Styles/theme";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../../gql/Category";

const FilterWrapper = styled.div`
  height: fit-content;
  overflow: auto;
  background: #fff;
`;

const Container = styled.div`
  width: 100vw;
  max-width: 720px;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 16px;
  padding-top: 56px;
  padding-bottom: 48px;
  background: #fff;
  position: relative;
`;

const Section = styled.section`
  width: 100%;
  height: fit-content;
  padding-top: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  :last-of-type {
    border: none;
    padding-bottom: 65px;
  }
`;

const SectionTitle = styled.div`
  ${(props) => props.theme.subTitle2};
  margin-bottom: 16px;
`;

const ChooseBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PriceBox = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PriceInput = styled.input`
  width: 42.68%;
  height: 36px;
  border-style: none;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  ::placeholder {
    color: rgba(0, 0, 0, 0.38);
  }
  padding: 8px 16px;
`;

const hopeClass = [
  {
    value: "OneDay",
    title: "원데이 클래스",
  },
  {
    value: "Regular",
    title: "정규 클래스",
  },
  {
    value: "Certificate",
    title: "자격증/창업 클래스",
  },
];
const sort = [
  {
    value: "New",
    title: "최신순",
  },
  {
    value: "Acc",
    title: "정확도순",
  },
  {
    value: "Rate",
    title: "별점 높은 순",
  },
];

const SearchFilter = ({
  onClickFilterOff,
  setCategoryIds,
  categoryIds,
  setClassTypes,
  classTypes,
  setOrderBy,
  orderBy,
  max,
  min,
  resetValues,
}) => {
  const { data } = useQuery(GET_CATEGORIES);

  return (
    <FilterWrapper>
      <HeaderType1 onClickFunc={onClickFilterOff} absolute={true}>
        검색필터
      </HeaderType1>
      <Container>
        <Section>
          <SectionTitle>카테고리</SectionTitle>
          <ChooseBox>
            {data?.getCategories.ok &&
              data.getCategories.categories.map((item, index) => (
                <FilterListTypeCheck
                  filterType={"category"}
                  key={index}
                  value={item.id}
                  title={item.title}
                  type={item.title}
                  setList={setCategoryIds}
                  checked={categoryIds.includes(item.id)}
                />
              ))}
          </ChooseBox>
        </Section>
        <Section>
          <SectionTitle>희망 과정</SectionTitle>
          <ChooseBox>
            {hopeClass.map((item, index) => {
              return (
                <FilterListTypeCheck
                  filterType={"hope"}
                  key={index}
                  value={item.value}
                  title={item.title}
                  setList={setClassTypes}
                  checked={classTypes.includes(item.value)}
                />
              );
            })}
          </ChooseBox>
        </Section>
        <Section>
          <SectionTitle>정렬</SectionTitle>
          <ChooseBox>
            {sort.map((item, index) => {
              return (
                <FilterListTypeCircle
                  key={index}
                  title={item.title}
                  value={item.value}
                  checked={orderBy === item.value}
                  onClick={() => setOrderBy(item.value)}
                />
              );
            })}
          </ChooseBox>
        </Section>
        <Section>
          <SectionTitle>가격 범위</SectionTitle>
          <PriceBox>
            <PriceInput
              placeholder="0원"
              value={min.value}
              name={"lowerPrice"}
              onChange={min.onChange}
              type={"number"}
            />
            ~
            <PriceInput
              placeholder="제한없음"
              value={max.value}
              name={"higherPrice"}
              onChange={max.onChange}
              type={"number"}
            />
          </PriceBox>
        </Section>
      </Container>
      <HalfBtnSet
        leftText={"초기화"}
        leftColor={"rgba(0, 0, 0, .6)"}
        leftBg={"#d7d7d7"}
        onClickLeft={resetValues}
        rightText={"필터 적용"}
        rightColor={"#fff"}
        rightBg={theme.themeColor}
        onClickRight={onClickFilterOff}
        absolute={true}
        allWritten={true}
        disabled={false}
      />
    </FilterWrapper>
  );
};

export default SearchFilter;
