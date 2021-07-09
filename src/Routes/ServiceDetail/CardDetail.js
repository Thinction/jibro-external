import React from "react";
import styled from "styled-components";
import { MdCheck, MdStar, MdChevronRight } from "react-icons/md";
import { ProfileSquare } from "../../Components/IconPack";
import dateZeroPlusPrinter from "../../Components/Utils/dateZeroPlusPrinter";
import splitter from "../../Components/Utils/splitter";
import getDate from "../../Components/Utils/getDate";
import { useRef } from "react";
import useResizeObserver from "../../Hooks/useResizeObserver";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  max-width: 720px;
  height: fit-content;
  background-color: #fff;
  padding-bottom: 16px;
`;
const ProfileImgWrap = styled.div`
  width: 100%;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.38);
  position: relative;
  margin-bottom: 12px;
  @media only screen and ( min-width: 425px ) {
    height: 500px;
  }
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const TitleWrap = styled.div`
  width: fit-content;
  position: absolute;
  left: 16px;
  bottom: 12px;
  display: flex;
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  min-width: 46px;
  width: fit-content;
  height: 22px;
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(p) => p.theme.body3};
  font-weight: 500;
  margin-right: 8px;
  background-color: #00cc91;
  border-radius: 16px;
  color: #fff;
`;

const CardInfoWrap = styled.div`
  padding: 0 16px;
`;

const Name = styled.div`
  ${(p) => p.theme.subTitle2};
  margin-bottom: 4px;
`;

const ClassTheme = styled.div`
  ${(p) => p.theme.subTitle1};
  font-weight: 500;
  margin-bottom: 6px;
`;
const Region = styled.div`
  ${(p) => p.theme.body2};
  color: rgba(0, 0, 0, 0.6);
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  padding-right: 8px;
  margin-right: 8px;
`;

const ServiceStarWrap = styled.div`
  width: 90px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardDetail = ({
  src,
  category,
  type,
  name,
  title,
  region,
  rate,
}) => {
  const [city, town] = splitter(region);
  return (
    <>
      <Container>
        <ProfileImgWrap>
          <ProfileImg src={src} />
          <TitleWrap>
            <Title>{category}</Title>
            <Title>{type}</Title>
          </TitleWrap>
        </ProfileImgWrap>
        <CardInfoWrap>
          <Name>{name}</Name>
          <ClassTheme>{title}</ClassTheme>
          <Wrap>
            <Region>{`${city} ${town}`}</Region>
            <ServiceStarWrap>
              <Ratings ratingCount={rate} />
            </ServiceStarWrap>
          </Wrap>
        </CardInfoWrap>
      </Container>
    </>
  );
};

const Container1 = styled.div`
  width: 100%;
  /* min-height: 338px; */
  height: fit-content;
  border: 2px solid #4708ae;
  border-radius: 8px;
  padding: 16px;
`;

const CardDetailWrap = styled.div`
  margin-bottom: 24px;
`;

const CardDetailTheme = styled.div`
  ${(p) => p.theme.subTitle2};
  margin-bottom: 4px;
`;

const InfoText = styled.div`
  ${(p) => p.theme.body2};
  color: rgba(0, 0, 0, 0.6);
`;

const TextRaw = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  :last-child {
    margin-bottom: 0;
  }
`;

const IconWrap = styled.div`
  margin-right: 8px;
`;

const AvailableDate = ({ day, time }) => {
  const [start, end] = splitter(time);
  return (
    <TextRaw>
      <IconWrap>
        <MdCheck size={24} color={"#4708ae"} />
      </IconWrap>
      <InfoText style={{ color: "#000" }}>{day}</InfoText> :
      <InfoText style={{ marginLeft: "8px" }}>{`${start} ~ ${end}`}</InfoText>
    </TextRaw>
  );
};

export const CardDetailInfo = ({
  classType,
  includeSupplies,
  recruitType,
  availableDate,
  numOfClass,
  timePerClass,
}) => {
  const captionInfo = [
    `이 수업은 ${recruitType}입니다.`,
    includeSupplies && "준비물은 수업료에 포함됩니다.",
  ];
  const [many, period, count] = splitter(numOfClass);
  const [time, hour] = splitter(timePerClass);
  return (
    <Container1>
      <CardDetailWrap>
        <CardDetailTheme>
          {classType} {`${many}${period} ${count}회`}
        </CardDetailTheme>
        <InfoText style={{ marginBottom: "16px" }}>
          회당 {`${time} ${hour}`}, 총 {count}회 과정입니다.
        </InfoText>
        {captionInfo.map((item, index) => {
          return (
            item && (
              <TextRaw key={index}>
                <IconWrap>
                  <MdCheck size={24} color={"#4708ae"} />
                </IconWrap>
                <InfoText>{item}</InfoText>
              </TextRaw>
            )
          );
        })}
      </CardDetailWrap>
      <CardDetailTheme style={{ marginBottom: "8px" }}>가능일</CardDetailTheme>
      {availableDate.mon && (
        <AvailableDate day={"월요일"} time={availableDate.mon} />
      )}
      {availableDate.tue && (
        <AvailableDate day={"화요일"} time={availableDate.tue} />
      )}
      {availableDate.wed && (
        <AvailableDate day={"수요일"} time={availableDate.wed} />
      )}
      {availableDate.thu && (
        <AvailableDate day={"목요일"} time={availableDate.thu} />
      )}
      {availableDate.fri && (
        <AvailableDate day={"금요일"} time={availableDate.fri} />
      )}
      {availableDate.sat && (
        <AvailableDate day={"토요일"} time={availableDate.sat} />
      )}
      {availableDate.sun && (
        <AvailableDate day={"일요일"} time={availableDate.sun} />
      )}
    </Container1>
  );
};

const Container2 = styled.div`
  width: 100%;
  height: 97px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  display: flex;
  padding-bottom: 16px;
`;

const TutorInfoWrap = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 80px);
`;

const TutorName = styled.div`
  ${(p) => p.theme.subTitle2};
`;

const TutorRegion = styled.div`
  ${(p) => p.theme.body2};
  max-width: 90px;
  color: rgba(0, 0, 0, 0.6);
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  padding-right: 8px;
  margin-right: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: keep-all;
`;

const TutorStarWrap = styled.div`
  width: 90px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconWrap1 = styled.div`
  margin-left: auto;
`;

const Ratings = ({ ratingCount }) => {
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

export const TutorInfo = ({
  name,
  region,
  src,
  ratingCount,
  category,
  onClickMoveProfile,
}) => {
  const [city, town] = splitter(region);
  return (
    <Container2>
      <ProfileSquare size={80} src={src} />
      <TutorInfoWrap>
        <TutorName>{name}</TutorName>
        <Wrap>
          <TutorRegion>{`${city} ${town}`}</TutorRegion>
          <TutorStarWrap>
            <Ratings ratingCount={ratingCount} />
          </TutorStarWrap>
          <IconWrap1 onClick={onClickMoveProfile}>
            <MdChevronRight size={24} />
          </IconWrap1>
        </Wrap>
        <Title>{category ? category : "미정"}</Title>
      </TutorInfoWrap>
    </Container2>
  );
};

const Container3 = styled.div`
  width: 100%;
`;

const ServiceExplainText = styled.div`
  ${(p) => p.theme.body3};
  overflow: hidden;
  height: fit-content;
  white-space: pre-line;
  text-overflow: ellipsis;
  display: ${(p) => (p.open ? "block" : "-webkit-box")};
  -webkit-line-clamp: 15;
  -webkit-box-orient: vertical;
  word-break: break-all;
`;

const OpenBtn = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.12);
  ${(p) => p.theme.subTitle2}
  margin-top: 16px;
`;

export const ServiceExplain = ({ children, open, onClick }) => {
  const contentRef = useRef(null);
  const [isShowReadMore, setIsShowReadMore] = useState(null);
  const observeCallback = (entries) => {
    for (let entry of entries) {
      setIsShowReadMore(entry.contentRect.height);
    }
  };

  useResizeObserver({ callback: observeCallback, element: contentRef });

  return (
    <Container3>
      <ServiceExplainText open={open} ref={contentRef}>
        {children}
      </ServiceExplainText>
      {isShowReadMore >= 300 && (
        <OpenBtn onClick={onClick}>{open ? "접기" : "펼치기"}</OpenBtn>
      )}
    </Container3>
  );
};

const DetailImgSample = styled.div`
  width: 242px;
  height: 134px;
  margin-right: 16px;
  border-radius: 8px;
  background: ${(p) => (p.src ? `url("${p.src}")` : `#000`)};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  flex: 0 0 auto;
`;

export const DetailImg = ({ url }) => {
  return <DetailImgSample src={url} />;
};

const Container4 = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 24px;
  :last-child {
    margin-bottom: 0;
  }
`;

const ProfileWrap = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 16px;
  position: relative;
`;

const ServiceReviewProfileImg = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 50%;
  /* background: ${(p) => (p.src ? `url(${p.src})` : `#000`)};
  background-repeat: no-repeat;
  background-size: cover; */
  margin-right: 16px;
`;

const ServiceReviewProfileInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 51px);
`;

const NameWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const ServiceReviewName = styled.div`
  ${(p) => p.theme.subTitle2}
  border-right: 1px solid rgba(0,0,0,.12);
  padding-right: 8px;
`;

const ServiceReviewRate = styled.div`
  width: 90px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 8px;
`;

const ServiceReviewDate = styled.div`
  ${(p) => p.theme.body2}
  color: rgba(0,0,0,.6);
`;

const ServiceReviewText = styled.div`
  width: 100%;
  ${(p) => p.theme.body2}
`;

// const ServiceReviewIconWrap = styled.div`
//   margin-left: auto;
// `;

export const ServiceReview = ({
  url,
  name,
  ratingCount,
  text,
  isMine,
  date,
}) => {
  // const [more, setMore] = useState(false);

  // const moreBtnClick = () => {
  //   setMore(!more);
  // };

  return (
    <Container4>
      <ProfileWrap>
        <ServiceReviewProfileImg src={url ? url : "/img/defaultProfile.png"} />
        <ServiceReviewProfileInfoWrap>
          <NameWrap>
            <ServiceReviewName>{name}</ServiceReviewName>
            <ServiceReviewRate>
              {<Ratings ratingCount={ratingCount} />}
            </ServiceReviewRate>
            {/* {isMine && (
              <ServiceReviewIconWrap onClick={moreBtnClick}>
                <MdMoreVert size={24} />
              </ServiceReviewIconWrap>
            )}
            {more && (
              <MoreVertMenu
                textList={["삭제하기"]}
                mobile={true}
                onClick={() => setMore(false)}
                onClickRemove={() => setMore(false)}
                top={"0"}
                absolute={true}
              />
            )} */}
          </NameWrap>
          <ServiceReviewDate>{getDate(parseInt(date))}</ServiceReviewDate>
        </ServiceReviewProfileInfoWrap>
      </ProfileWrap>
      <ServiceReviewText>{text}</ServiceReviewText>
    </Container4>
  );
};
