import React from "react";
import styled from "styled-components";
import MyServiceClassCard from "../../../../../Components/ContentContainer/MyServiceClassCard";
import { HeaderType1 } from "../../../../../Components/Headers";
import { MdAdd } from "react-icons/md";
import { useMutation, useQuery } from "@apollo/client";
import {
  DELETE_MY_SERVICE,
  GET_MY_SERVICES,
  STOP_SERVICE,
} from "../../../../../gql/Service";

const MainWrapper = styled.div`
  max-width: 720px;
  width: 100%;
  height: fit-content;
  min-height: calc(100vh - 56px);
  margin: 0 auto;
  background: #fff;
`;

const Container = styled.div`
  width: 100vw;
  max-width: 720px;
  min-height: calc(100vh - 56px);
  margin: 0 auto;
  margin-top: 56px;
  padding: 0 16px;
  padding-top: 24px;
  position: relative;
`;

const RegistrationBtn = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(p) => p.theme.subTitle2};
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  svg {
    margin-right: 8px;
  }
`;

const MyService = ({ history, title }) => {
  const { loading, data, refetch } = useQuery(GET_MY_SERVICES, {
    onCompleted: (d) => {
      if (!d.getMyServices.ok) {
        alert("서비스를 가져오는 데 실패했습니다 : " + d.error);
      }
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
  });
  const [deleteMyServiceMutation] = useMutation(DELETE_MY_SERVICE, {
    onCompleted: (d) => {
      if (d.deleteMyService.ok) {
        refetch();
      } else {
        alert("서비스를 삭제하는 데 실패했습니다 : " + d.error);
      }
    },
  });
  const onDeleteMyService = (serviceId) => {
    deleteMyServiceMutation({ variables: { serviceId } });
  };
  const [stopServiceMutation] = useMutation(STOP_SERVICE, {
    onCompleted: (d) => {
      if (d.stopService.ok) {
        refetch();
      } else {
        alert("서비스를 중지하는 데 실패했습니다 : " + d.error);
      }
    },
  });
  const onStopService = (serviceId) => {
    stopServiceMutation({ variables: { serviceId } });
  };
  const leftArrowOnClickMove = () => {
    history.go(-1);
  };

  return (
    <MainWrapper>
      <HeaderType1 onClickFunc={leftArrowOnClickMove}>
        나의 서비스 관리
      </HeaderType1>
      <Container>
        <RegistrationBtn onClick={() => history.push("./setService")}>
          <MdAdd size={24} color={"#000"} />
          서비스 등록하기
        </RegistrationBtn>
        {!loading &&
          data?.getMyServices?.services &&
          data.getMyServices.services.map((item) => {
            return (
              <MyServiceClassCard
                key={item.id}
                service={item}
                onDeleteMyService={onDeleteMyService}
                onStopService={onStopService}
                history={history}
              />
            );
          })}
      </Container>
    </MainWrapper>
  );
};

export default MyService;
