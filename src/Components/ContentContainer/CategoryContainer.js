import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";

const CategoryContainerWrap = styled.div`
  width: ${(p) => (p.width ? p.width + "px" : "140px")};
  height: ${(p) => (p.height ? p.height + "px" : "144px")};
  border-radius: 8px;
  background: ${(p) => (p.src ? `url(${p.src})` : "#fff")};
  ${(props) => props.theme.ContainerBoxShadow};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom + "px" : "24px")};
  cursor: pointer;
`;

const CategoryContainerTextWrap = styled.div`
  width: 100%;
  height: 37%;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.77);
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 6px 8px;
`;

const CategoryContainerTitle = styled.div`
  ${(props) => props.theme.subTitle2};
  margin-bottom: 4px;
`;

const CategoryContainerArticle = styled.div`
  ${(props) => props.theme.overline};
`;

const CategoryTutorCounter = styled.strong`
  color: ${(props) => props.theme.themeColor};
`;

const CategoryContainer = ({
  width,
  height,
  id,
  title,
  imgSource,
  counter,
  history,
  isLoggedIn,
  setLoginAlert,
}) => {
  //onClick Link to Search
  const onClickPush = () => {
    if (!isLoggedIn) {
      setLoginAlert(true);
    } else {
      history.push({
        pathname: "/search",
        state: {
          category: id,
        },
      });
    }
  };

  return (
    <CategoryContainerWrap
      width={width}
      height={height}
      src={imgSource}
      onClick={onClickPush}
    >
      <CategoryContainerTextWrap>
        <CategoryContainerTitle>{title}</CategoryContainerTitle>
        <CategoryContainerArticle>
          <CategoryTutorCounter>{counter}명</CategoryTutorCounter>의 전문가 활동
          중
        </CategoryContainerArticle>
      </CategoryContainerTextWrap>
    </CategoryContainerWrap>
  );
};

export default withRouter(CategoryContainer);
