// ReadMe :  Components/Headers에 TinySearchHeader가 없어서 추가해야함! export const SearchHeader 오브젝트 밑에 추가 하면 됨
// export const TinySearchHeader = () => {
//     return (
//       <SContainer>
//         <SBox>
//           <MdSearch size={24} color={theme.defaultTextBlack} />
//           <SInput placeholder="키워드를 검색해보세요." />
//         </SBox>
//       </SContainer>
//     );
//   };

import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Dock from "../../../Components/Dock";
import { TinySearchHeader } from "../../../Components/Headers";
import { GET_CATEGORIES } from "../../../gql/Category";
import RecomandItem from "./RecomandItem";

const Wrapper = styled.div`
  max-width: 720px;
  width: 100%;
  height: fit-content;
  min-height: calc(100vh - 56px);
  margin: 0 auto;
  background: #fff;
`;

const Container = styled.div`
  width: calc(100% - 32px);
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 68px;
`;

const RecomandTitle = styled.div`
  width: 100%;
  ${(p) => p.theme.subTitle2}
  margin-bottom: 16px;
`;

const QuickSearch = ({ history }) => {
  const { loading, data } = useQuery(GET_CATEGORIES);
  const [term, setTerm] = useState();
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      history.push({
        pathname: "/search",
        state: {
          term,
        },
      });
    }
  };
  return (
    <Wrapper>
      <Container>
        <TinySearchHeader
          value={term}
          setValue={setTerm}
          onKeyPress={onKeyPress}
        />
        <RecomandTitle>추천 검색어</RecomandTitle>
        {!loading &&
          data?.getCategories?.ok &&
          data.getCategories.categories.map((item, index) => (
            <RecomandItem
              key={index}
              text={item.title}
              onClick={() => {
                history.push({
                  pathname: "/search",
                  state: {
                    category: item.id,
                  },
                });
              }}
            />
          ))}
        <Dock />
      </Container>
    </Wrapper>
  );
};

export default withRouter(QuickSearch);
