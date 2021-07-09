import React, { useState } from "react";
import styled from "styled-components";
import { ProfileSquare, StatusIcon } from "../IconPack";
import { PopupType2 } from "../Popup";
import theme from "../../Styles/theme";

const CardTheme = styled.div`
  ${(p) => p.theme.subTitle2};
  margin-left: 8px;
`;

const SectionTop = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
`;

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

const CardInfoText = styled.div`
  ${(p) => p.theme.body2}
  font-weight:500;
`;

const MyServiceClassCardWrap = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

const CardInfoRaw = styled.div`
  display: flex;
`;

const CardInfoValue = styled.div`
  ${(p) => p.theme.body2};
  font-weight: 500;
  margin-left: 8px;
`;
const SectionBottomMS = styled.div`
  width: 100%;
  display: flex;
  margin-top: 16px;
  justify-content: space-between;
`;
const CardButtonMS = styled.div`
  width: 100px;
  height: 40px;
  ${(p) => p.theme.subTitle2}
  display:flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  color: ${(props) =>
    props.type === "delete" ? "#fff" : "rgba(0, 0, 0, 0.6)"};
  background-color: ${(props) =>
    props.type === "delete" ? "#B00020" : "transparent"};
  cursor: pointer;
`;

const MyServiceClassCard = ({
  service,
  onDeleteMyService,
  onStopService,
  history,
}) => {
  const [isStop, setIsStop] = useState(false);
  const [isRestart, setIsRestart] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const CancelBtn = () => {
    if (isStop) {
      setIsStop(false);
    }
    if (isRestart) {
      setIsRestart(false);
    }
  };
  const SaleStopBtn = () => {
    setIsStop(!isStop);
  };

  const SaleRestartBtn = () => {
    setIsRestart(!isRestart);
  };

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const stateDict = {
    Writing: {
      text: "작성 중",
      color: "rgba(0, 0, 0, .38)",
    },
    ForSale: {
      text: "판매 중",
      color: theme.themeColorSecondary,
    },
    StopSale: {
      text: "판매 중지",
      color: theme.themeColorError,
    },
  };
  return (
    <MyServiceClassCardWrap>
      <SectionTop>
        <StatusIcon type={stateDict[service.serviceState]} />
        <CardTheme>
          {service.serviceState === "ForSale" ? (
            <a href={`/serviceDetail/${service.id}`}>{service.title}</a>
          ) : (
            <>{service.title}</>
          )}
        </CardTheme>
      </SectionTop>
      <SectionMiddle>
        <ProfileSquare size={96} border={8} src={service.server.avatar} />
        <CardInfoWrap>
          <CardInfoRaw>
            <CardInfoText>서비스 번호: </CardInfoText>
            <CardInfoValue>{service.displayIdNumber}</CardInfoValue>
          </CardInfoRaw>
          <CardInfoRaw>
            <CardInfoText>수익금: </CardInfoText>
            <CardInfoValue>
              {service.totalSell ? numberWithCommas(service.totalSell) : 0}원
            </CardInfoValue>
          </CardInfoRaw>
          <CardInfoRaw>
            <CardInfoText>판매완료: </CardInfoText>
            <CardInfoValue>
              {service.sellCount ? service.sellCount : 0}건
            </CardInfoValue>
          </CardInfoRaw>
        </CardInfoWrap>
      </SectionMiddle>
      <SectionBottomMS>
        {service.serviceState !== "StopSale" ? (
          <CardButtonMS onClick={SaleStopBtn}>판매 중지</CardButtonMS>
        ) : (
          <CardButtonMS onClick={SaleRestartBtn}>판매 재개</CardButtonMS>
        )}
        <CardButtonMS
          onClick={() => {
            history.push({
              pathname: "./setService",
              state: { service },
            });
          }}
        >
          수정
        </CardButtonMS>
        <CardButtonMS type={"delete"} onClick={() => setIsDelete(true)}>
          삭제
        </CardButtonMS>
      </SectionBottomMS>
      {isStop && (
        <PopupType2
          children={"서비스 판매를 중지하시겠습니까?"}
          cancel={true}
          onClickCancel={CancelBtn}
          onClick={() => onStopService(service.id)}
          onClickRemove={CancelBtn}
          rightBtnText={"중지"}
        />
      )}
      {isRestart && (
        <PopupType2
          children={"서비스 판매를 재개하시겠습니까?"}
          cancel={true}
          onClickCancel={CancelBtn}
          onClickRemove={CancelBtn}
          onClick={() => onStopService(service.id)}
          rightBtnText={"재개"}
        />
      )}
      {isDelete && (
        <PopupType2
          children={
            "서비스를 삭제하면 다시 복구할 수 없습니다. 삭제하시겠습니까?"
          }
          cancel={true}
          onClickCancel={() => setIsDelete(false)}
          onClickRemove={() => setIsDelete(false)}
          onClick={() => onDeleteMyService(service.id)}
          rightBtnText={"삭제"}
        />
      )}
    </MyServiceClassCardWrap>
  );
};

export default MyServiceClassCard;
