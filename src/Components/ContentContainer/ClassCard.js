import React from "react";
import styled from "styled-components";
import { ProfileCircle } from "../IconPack";
import { MdFavorite, MdFavoriteBorder, MdStar } from "react-icons/md";
import { useMutation } from "@apollo/client";
import { LIKE_SERVICE, UNLIKE_SERVICE } from "../../gql/Service";
import { useHistory } from "react-router-dom";

const ClassCardContainer = styled.div`
  ${(props) => props.theme.ContainerBoxShadow};
  width: 328px;
  height: fit-content;
  padding: 12px;
  border-radius: 16px;
  background: #fff;
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom + "px" : "24px")};
`;

const ClassCardTitle = styled.div`
  ${(p) => p.theme.subTitle2};
  line-height: ${(p) => (p.lineHeight ? p.lineHeight + "px" : "")};
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom + "px" : "unset")};
  margin-left: ${(p) => (p.marginLeft ? p.marginLeft + "px" : "unset")};
  cursor: pointer;
`;

const ClassCategoryWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ClassCategory = styled.div`
  width: fit-content;
  height: 22px;
  border-radius: 11px;
  background: ${(props) => props.theme.themeColorSecondary};
  padding: 2px 12px;
  ${(props) => props.theme.body3};
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

const ClassIdCard = styled.div`
  width: 100%;
  height: 98px;
  margin: 12px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ClassIdInfoWrap = styled.div`
  width: 100%;
  max-width: 180px;
  height: 72px;
  cursor: pointer;
`;

const ClassFavoriteWrap = styled.div`
  width: 24px;
  margin-bottom: auto;
  margin-top: 12px;
  cursor: pointer;
  svg {
    width: 24px;
    height: 24px;
  }
`;

const ClassCardNameWrap = styled.div`
  width: 100%;
  height: 16px;
  display: flex;
  align-items: center;
`;

const TutorName = styled.div`
  ${(props) => props.theme.subTitle2};
  padding-right: 8px;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
`;

const TutorStarWrap = styled.div`
  width: 90px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 8px;
`;

const Region = styled.div`
  ${(props) => props.theme.caption};
  color: rgba(0, 0, 0, 0.6);
  margin-top: 6px;
`;

const ProgramInfoWrap = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  align-items: flex-end;
  margin-top: 3px;
`;

const ProgramInfo = styled.div`
  ${(props) => props.theme.body3};
  color: rgba(0, 0, 0, 0.6);
  padding-right: 8px;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
`;

const ProgramPrice = styled.div`
  ${(props) => props.theme.subTitle2};
  padding-left: 8px;
`;

const CertificateWrap = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 12px;
  display: flex;
`;

const CertificateSummary = styled.div`
  width: 69px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const CertSummaryTitle = styled.div`
  ${(props) => props.theme.body2};
  letter-spacing: 0.01em;
  font-weight: 500;
  text-align: center;
`;

const CertCounter = styled.div`
  ${(props) => props.theme.subTitle2};
  color: ${(props) => props.theme.themeColor};
`;

const CertIconWrap = styled.div`
  width: calc(100% - 81px);
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin-left: 12px;
`;

const CertIcon = styled.div`
  ${(props) => props.theme.body3};
  font-weight: 700;
  color: ${(props) => props.theme.themeColor};
  width: fit-content;
  height: 22px;
  border-radius: 11px;
  background: #ede0f7;
  padding: 2px 12px;
  margin-right: 12px;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
`;

const TutorRatings = ({ ratingCount }) => {
  const totalRate = [1, 2, 3, 4, 5];
  const emptyGrayColor = "rgba(0, 0, 0, .38)";
  const coloredYellow = "#FFEE21";

  const ratingStars = () => {
    const fill = (index) => {
      if (ratingCount >= index) {
        return coloredYellow;
      } else {
        return emptyGrayColor;
      }
    };
    return totalRate.map((index) => {
      return <MdStar color={fill(index)} size={18} key={index} />;
    });
  };

  return ratingStars();
};

const ClassCard = ({
  data,
  marginBottom,
  workRegion,
  certType,
  isLoggedIn,
  setLoginAlert,
}) => {
  const history = useHistory();
  //onClick Link to Profile
  const onClickPush = () => {
    if (isLoggedIn) {
      history.push(`/serviceDetail/${data.id.toString()}`);
    } else {
      if (setLoginAlert) {
        setLoginAlert(true);
      }
    }
  };

  const likeUpdate = (cache, result) => {
    const {
      data: {
        likeService: { ok },
      },
    } = result;
    if (!ok) {
      return;
    }
    cache.modify({
      id: `Service:${data.id}`,
      fields: {
        liking(prev) {
          return true;
        },
      },
    });
  };
  const unlikeUpdate = (cache, result) => {
    const {
      data: {
        unlikeService: { ok },
      },
    } = result;
    if (!ok) {
      return;
    }
    cache.modify({
      id: `Service:${data.id}`,
      fields: {
        liking(prev) {
          return false;
        },
      },
    });
  };

  const [likeMutation, { loading: likeLoading }] = useMutation(LIKE_SERVICE, {
    variables: { serviceId: data.id },
    update: likeUpdate,
  });
  const [unlikeMutation, { loading: unlikeLoading }] = useMutation(
    UNLIKE_SERVICE,
    { variables: { serviceId: data.id }, update: unlikeUpdate }
  );

  const toggleLike = () => {
    if (data.liking) {
      if (!unlikeLoading) {
        unlikeMutation();
      }
    } else {
      if (!likeLoading) {
        likeMutation();
      }
    }
  };

  return (
    <ClassCardContainer marginBottom={marginBottom}>
      <ClassCardTitle marginBottom={8} lineHeight={26} onClick={onClickPush}>
        {data.title}
      </ClassCardTitle>
      <ClassCategoryWrapper>
        <ClassCategory>{data.category.title}</ClassCategory>
        <ClassCategory>{data.displayClassType}</ClassCategory>
      </ClassCategoryWrapper>
      <ClassIdCard>
        <ProfileCircle size={72} src={data.server.avatar} />
        <ClassIdInfoWrap onClick={onClickPush}>
          <ClassCardNameWrap>
            <TutorName>{data.server.name}</TutorName>
            <TutorStarWrap>
              <TutorRatings ratingCount={data.rate} />
            </TutorStarWrap>
          </ClassCardNameWrap>
          <Region>{`${data.serviceArea.split("||")[0]}, ${
            data.serviceArea.split("||")[1]
          }`}</Region>
          <ProgramInfoWrap>
            <ProgramInfo>{`${data.timePerClass.split("||")[0]}${
              data.timePerClass.split("||")[1]
            }`}</ProgramInfo>
            <ProgramPrice>{data.displayPrice}</ProgramPrice>
          </ProgramInfoWrap>
        </ClassIdInfoWrap>
        <ClassFavoriteWrap onClick={toggleLike}>
          {data.liking ? (
            <MdFavorite color={"#ff0000"} />
          ) : (
            <MdFavoriteBorder color={"rgba(0, 0, 0, .6)"} />
          )}
        </ClassFavoriteWrap>
      </ClassIdCard>
      <CertificateWrap>
        <CertificateSummary>
          <CertSummaryTitle>전문가 인증</CertSummaryTitle>
          <CertCounter>{data.server.authCount}개</CertCounter>
        </CertificateSummary>
        <CertIconWrap>
          {data.server.selfAuthentication && <CertIcon>휴대폰 인증</CertIcon>}
          {data.server.idCardAuthentication && <CertIcon>신분증 인증</CertIcon>}
          {data.server.licenseAuthentication && (
            <CertIcon>자격증 인증</CertIcon>
          )}
        </CertIconWrap>
      </CertificateWrap>
    </ClassCardContainer>
  );
};

export default ClassCard;
