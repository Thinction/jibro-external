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
      text: "?????? ???",
      color: "rgba(0, 0, 0, .38)",
    },
    ForSale: {
      text: "?????? ???",
      color: theme.themeColorSecondary,
    },
    StopSale: {
      text: "?????? ??????",
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
            <CardInfoText>????????? ??????: </CardInfoText>
            <CardInfoValue>{service.displayIdNumber}</CardInfoValue>
          </CardInfoRaw>
          <CardInfoRaw>
            <CardInfoText>?????????: </CardInfoText>
            <CardInfoValue>
              {service.totalSell ? numberWithCommas(service.totalSell) : 0}???
            </CardInfoValue>
          </CardInfoRaw>
          <CardInfoRaw>
            <CardInfoText>????????????: </CardInfoText>
            <CardInfoValue>
              {service.sellCount ? service.sellCount : 0}???
            </CardInfoValue>
          </CardInfoRaw>
        </CardInfoWrap>
      </SectionMiddle>
      <SectionBottomMS>
        {service.serviceState !== "StopSale" ? (
          <CardButtonMS onClick={SaleStopBtn}>?????? ??????</CardButtonMS>
        ) : (
          <CardButtonMS onClick={SaleRestartBtn}>?????? ??????</CardButtonMS>
        )}
        <CardButtonMS
          onClick={() => {
            history.push({
              pathname: "./setService",
              state: { service },
            });
          }}
        >
          ??????
        </CardButtonMS>
        <CardButtonMS type={"delete"} onClick={() => setIsDelete(true)}>
          ??????
        </CardButtonMS>
      </SectionBottomMS>
      {isStop && (
        <PopupType2
          children={"????????? ????????? ?????????????????????????"}
          cancel={true}
          onClickCancel={CancelBtn}
          onClick={() => onStopService(service.id)}
          onClickRemove={CancelBtn}
          rightBtnText={"??????"}
        />
      )}
      {isRestart && (
        <PopupType2
          children={"????????? ????????? ?????????????????????????"}
          cancel={true}
          onClickCancel={CancelBtn}
          onClickRemove={CancelBtn}
          onClick={() => onStopService(service.id)}
          rightBtnText={"??????"}
        />
      )}
      {isDelete && (
        <PopupType2
          children={
            "???????????? ???????????? ?????? ????????? ??? ????????????. ?????????????????????????"
          }
          cancel={true}
          onClickCancel={() => setIsDelete(false)}
          onClickRemove={() => setIsDelete(false)}
          onClick={() => onDeleteMyService(service.id)}
          rightBtnText={"??????"}
        />
      )}
    </MyServiceClassCardWrap>
  );
};

export default MyServiceClassCard;
