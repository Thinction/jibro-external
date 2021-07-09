import React, { useEffect, useState } from "react";
import { useLocation, withRouter } from "react-router-dom";
import styled from "styled-components";
import ClassCard from "../../Components/ContentContainer/ClassCard";
import Dock from "../../Components/Dock";
import { SearchHeader } from "../../Components/Headers";
import SearchFilter from "./SearchFilter";
import { makeVar, useQuery } from "@apollo/client";
import { GET_HOT_SERVICES, SEARCH_SEVICES } from "../../gql/Service";
import useInput from "../../Hooks/UseInput";
import {
  getGeoLocation,
  getGeoLocationPc,
} from "../../Components/Utils/getGeoLocation";
import checkMobile from "../../Components/Utils/checkMobile";

const Container = styled.div`
  width: calc(100% - 32px);
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 96px;
  padding-bottom: 56px;
`;

const SectionTitle = styled.div`
  ${(props) => props.theme.headLine6};
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom + "px" : "unset")};
  margin-top: ${(p) => (p.marginTop ? p.marginTop + "px" : "unset")};
`;

const ClassCardContainer = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
`;

const ClassCardWrapper = styled.div`
  ${(props) => props.theme.body2};
  width: 100%;
  height: fit-content;
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #fff;
  position: relative;
  @media only screen and (max-width: 425px) {
    justify-content: center;
  }
`;

const NoClassCard = styled.div`
  ${(props) => props.theme.body2};
  position: absolute;
  color: rgba(0, 0, 0, 0.38);
`;

const FilterWrap = styled.div`
  overflow: hidden;
  position: fixed;
  top: 0;
  right: ${(p) => (p.filterOn ? "0" : "-100vw")};
  transition: all ease-in-out 0.2s;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f4f4f4;
`;

const Search = () => {
  //Category Icon 선택 후 넘어올 때 자동 검색
  const location = useLocation();
  const getParams = location.state;

  const term = useInput(getParams?.term && getParams.term);
  const max = useInput();
  const min = useInput();
  const [orderBy, setOrderBy] = useState("New");
  const [categoryIds, setCategoryIds] = useState(
    getParams?.category ? [getParams.category] : []
  );
  const [classTypes, setClassTypes] = useState([]);
  const [geoLocation, setGeoLocation] = useState("");
  const [headerFilterCheck, setHeaderFilterCheck] = useState();

  const resetValues = () => {
    max.onChange({ target: { value: "" } });
    min.onChange({ target: { value: "" } });
    setOrderBy("New");
    setCategoryIds([]);
    setClassTypes([]);
  };
  useEffect(() => {
    if (checkMobile() === "other") {
      if (geoLocation === "" || !geoLocation) {
        getGeoLocationPc(setGeoLocation);
      }
    }
    if (checkMobile() === "android") {
      if (!geoLocation || geoLocation === "") {
        if (window?.JibroAndroid) {
          window.JibroAndroid.getLocationFromDevice();
        }
      }
      // 로케이션 받는 리스너
      window.addEventListener("onDeviceSendLocation", ({ detail }) => {
        const { latitude, longitude } = detail;
        getGeoLocation(latitude, longitude).then((location) =>
          setGeoLocation(location)
        );
      });
    }
  }, []);
  const [areaFilter, setAreaFilter] = useState(false);
  const toggleAreaFilter = () => {
    setAreaFilter((prev) => !prev);
  };

  const { data: hotData } = useQuery(GET_HOT_SERVICES, {
    variables: {
      serviceArea: areaFilter
        ? geoLocation
          ? geoLocation.split(" ").join("||")
          : undefined
        : undefined,
    },
  });

  const { data: searchData } = useQuery(SEARCH_SEVICES, {
    variables: {
      term: term.value,
      serviceArea: areaFilter
        ? geoLocation
          ? geoLocation.split(" ").join("||")
          : undefined
        : undefined,
      categoryIds,
      classTypes,
      orderBy,
      min: min.value ? parseInt(min.value) : undefined,
      max: max.value ? parseInt(max.value) : undefined,
    },
  });

  //Filter Component Toggle
  const [filterOn, setFilterOn] = useState(false);

  const setFilterOnFunc = () => {
    setFilterOn(true);
  };

  const setFilterOffFunc = () => {
    setFilterOn(false);
  };

  //Header Filter Check
  // const headerFilterCheck = () => {
  //   let filterCheckBoolean;
  //   if (
  //     categoryIds.length !== 0 ||
  //     classTypes.length !== 0 ||
  //     orderBy !== "New" ||
  //     (min.value && min.value !== "") ||
  //     (max.value && max.value !== "")
  //   ) {
  //     filterCheckBoolean = true;
  //   } else {
  //     filterCheckBoolean = false;
  //   }
  //   return filterCheckBoolean;
  // };

  useEffect(() => {
    if (
      categoryIds.length !== 0 ||
      classTypes.length !== 0 ||
      orderBy !== "New" ||
      (min.value && min.value !== "") ||
      (max.value && max.value !== "")
    ) {
      setHeaderFilterCheck(true);
    } else {
      setHeaderFilterCheck(false);
    }
  }, [categoryIds, classTypes, orderBy, min.value, max.value]);

  return (
    <>
      <Container>
        <SearchHeader
          withFilter={true}
          onClickFilterOn={setFilterOnFunc}
          placeholder={"서비스를 검색해보세요."}
          headerFilterCheck={headerFilterCheck}
          onChange={term.onChange}
          value={term.value}
          areaFilter={areaFilter}
          toggleAreaFilter={toggleAreaFilter}
        />
        {headerFilterCheck || (term.value && term.value !== "") ? (
          <>
            <SectionTitle marginBottom={16}>검색 결과</SectionTitle>
            <ClassCardContainer>
              <NoClassCard>아직 조건과 일치하는 서비스가 없어요.</NoClassCard>
              <ClassCardWrapper>
                {searchData?.searchServices &&
                  searchData.searchServices.map((item, index) => {
                    return (
                      <ClassCard
                        key={index}
                        data={item}
                        isLoggedIn={makeVar(
                          Boolean(localStorage.getItem("token"))
                        )}
                      />
                    );
                  })}
              </ClassCardWrapper>
            </ClassCardContainer>
          </>
        ) : (
          <>
            <SectionTitle marginBottom={16}>인기 서비스</SectionTitle>
            <ClassCardContainer>
              <ClassCardWrapper>
                {hotData?.getHotServices &&
                  hotData.getHotServices.map((item) => {
                    return (
                      <ClassCard
                        key={item.id}
                        data={item}
                        isLoggedIn={makeVar(
                          Boolean(localStorage.getItem("token"))
                        )}
                      />
                    );
                  })}
              </ClassCardWrapper>
            </ClassCardContainer>
          </>
        )}
        <Dock />
      </Container>
      <FilterWrap filterOn={filterOn}>
        <SearchFilter
          onClickFilterOff={setFilterOffFunc}
          setCategoryIds={setCategoryIds}
          categoryIds={categoryIds}
          setClassTypes={setClassTypes}
          classTypes={classTypes}
          setOrderBy={setOrderBy}
          orderBy={orderBy}
          max={max}
          min={min}
          resetValues={resetValues}
        />
      </FilterWrap>
    </>
  );
};

export default withRouter(Search);
