import React, { useState } from 'react';
import styled from 'styled-components';
import { ProfileSquare } from '../IconPack';
import StarRating from '../../Routes/MyPage/StarRating';
import nameFiltering from '../Utils/nameFiltering';

const SectionMiddle = styled.div`
    display: flex;
    margin-top: 16px;
`;

const CardInfoWrap = styled.div`
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ReviewCardTheme = styled.div`
  ${(p) => p.theme.subTitle2}
  margin-bottom:6px;
`;
const ClientName = styled.div`
  ${(p) => p.theme.body2}
`;
const ReviewWrap = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReviewTheme = styled.div`
  ${(p) => p.theme.subTitle1}
`;
const StarWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const ReviewClassCard = ({title, client, src, rating, setRating}) => {
//   const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const onMouseEnter = (index) => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onSaveRating = (index) => {
    setRating(index);
  };
  return (
    <>
      <SectionMiddle>
        <ProfileSquare
            size={80}
            border={8}
            src={src}
        />
        <CardInfoWrap type="center">
          <ReviewCardTheme>
              {title}
          </ReviewCardTheme>
          <ClientName>
              {nameFiltering(client)} 회원님
          </ClientName>
        </CardInfoWrap>
      </SectionMiddle>
      <ReviewWrap>
        <ReviewTheme>{nameFiltering(client)} 회원님에 대한 별점</ReviewTheme>
        <StarWrap>
          {[1, 2, 3, 4, 5].map((index) => {
            return (
              <StarRating
                key={index}
                index={index}
                rating={rating}
                hoverRating={hoverRating}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onSaveRating={onSaveRating}
              />
            );
          })}
        </StarWrap>
      </ReviewWrap>
    </>
  );
};

export default ReviewClassCard;