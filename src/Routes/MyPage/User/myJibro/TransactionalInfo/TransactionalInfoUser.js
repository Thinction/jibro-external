import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import TransactionalClassCardUser from "../../../../../Components/ContentContainer/TransactionalClassCardUser";
import { HeaderType1 } from "../../../../../Components/Headers";
import { PopupType1, PopupType2 } from "../../../../../Components/Popup";
import {
  CANCEL_REFUND,
  DELETE_PAYMENT,
  GET_PAYMENTS,
  REQUEST_REFUND,
} from "../../../../../gql/Payment";

const Container = styled.div`
  width: 100vw;
  max-width: 720px;
  height: fit-content;
  min-height: 584px;
  margin: 0 auto;
  margin-top: 56px;
  padding: 16px 16px 0 16px;
  background-color: #fff;
`;

const popupTextList = [
  "전문가에게 환불을 요청하시겠습니까?",
  "환불 요청을 취소하시겠습니까?",
  "거래 내역을 삭제하시겠습니까?",
];
const TransactionalInfoUser = ({ title, history }) => {
  const [btnState, setBtnState] = useState("");
  const [selectedId, setSelectedId] = useState();
  const [alertMessage, setAlertMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const { data, loading } = useQuery(GET_PAYMENTS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
  });

  const [requestRefundMutation, { loading: requestRefundLoading }] =
    useMutation(REQUEST_REFUND, {
      onCompleted: (d) => {
        if (d.requestRefund.ok) {
          onClickRemove();
          window.location.reload();
        } else if (d.requestRefund.error) {
          setAlertMessage(d.requestRefund.error);
          setShowAlert(true);
        }
      },
    });
  const [cancelRefundMutation, { loading: cancelRefundLoading }] = useMutation(
    CANCEL_REFUND,
    {
      onCompleted: (d) => {
        if (d.cancelRefund.ok) {
          onClickRemove();
          window.location.reload();
        } else if (d.cancelRefund.error) {
          setAlertMessage(d.cancelRefund.error);
          setShowAlert(true);
        }
      },
    }
  );
  const [deletePaymentMutation, { loading: deletePaymentLoading }] =
    useMutation(DELETE_PAYMENT, {
      onCompleted: (d) => {
        if (d.deletePayment.ok) {
          onClickRemove();
          window.location.reload();
        } else if (d.deletePayment.error) {
          setAlertMessage(d.deletePayment.error);
          setShowAlert(true);
        }
      },
    });

  const resetStates = () => {
    setSelectedId(null);
    setAlertMessage(null);
    setShowAlert(false);
  };

  const requestRefund = () => {
    if (selectedId && selectedId !== "") {
      if (!requestRefundLoading) {
        requestRefundMutation({
          variables: {
            paymentId: selectedId,
          },
        });
      }
    }
  };
  const cancelRefund = () => {
    if (selectedId && selectedId !== "") {
      if (!cancelRefundLoading) {
        cancelRefundMutation({
          variables: {
            paymentId: selectedId,
          },
        });
      }
    }
  };
  const deletePayment = () => {
    if (selectedId && selectedId !== "") {
      if (!deletePaymentLoading) {
        deletePaymentMutation({
          variables: {
            paymentId: selectedId,
          },
        });
      }
    }
  };
  const onClickRemove = () => {
    resetStates();
    setBtnState("");
  };

  const onClickFunc = () => {
    history.go(-1);
  };

  return (
    !loading && (
      <>
        <HeaderType1 onClickFunc={onClickFunc}>{title}</HeaderType1>
        <Container>
          {data?.getPayments.map((item, index) => {
            return (
              <TransactionalClassCardUser
                key={index}
                data={item}
                setSelectedId={setSelectedId}
                setBtnState={setBtnState}
              />
            );
          })}
        </Container>
        {btnState === "requestRefund" && (
          <PopupType1
            children={popupTextList[0]}
            cancel={true}
            onClickRemove={onClickRemove}
            onClickCancel={onClickRemove}
            onClick={requestRefund}
          />
        )}
        {btnState === "refundCancel" && (
          <PopupType2
            children={popupTextList[1]}
            cancel={true}
            rightBtnText={"확인"}
            onClickRemove={onClickRemove}
            onClickCancel={onClickRemove}
            onClick={cancelRefund}
          />
        )}
        {btnState === "removeHistory" && (
          <PopupType2
            children={popupTextList[2]}
            cancel={true}
            rightBtnText={"삭제"}
            onClickRemove={onClickRemove}
            onClickCancel={onClickRemove}
            onClick={deletePayment}
          />
        )}
        {showAlert && (
          <PopupType1
            children={alertMessage}
            onClickRemove={onClickRemove}
            onClick={onClickRemove}
          />
        )}
      </>
    )
  );
};

export default withRouter(TransactionalInfoUser);
