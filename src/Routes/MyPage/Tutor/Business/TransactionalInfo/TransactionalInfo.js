import React, { useState } from "react";
import styled from "styled-components";
import TransactionalClassCard from "../../../../../Components/ContentContainer/TransactionalClassCard";
import { HeaderType1 } from "../../../../../Components/Headers";
import transactionalInfoSample from "../../../../../Components/DataSample/transactionalInfoSample";
import { PopupType1, PopupType2 } from "../../../../../Components/Popup";
import { withRouter } from "react-router";
import { useMutation, useQuery } from "@apollo/client";
import {
  ACCEPT_REFUND,
  CANCEL_PAYMENT,
  DELETE_PAYMENT,
  GET_PAYMENTS,
} from "../../../../../gql/Payment";

const Container = styled.div`
  width: 100vw;
  max-width: 720px;
  height: fit-content;
  margin: 0 auto;
  margin-top: 56px;
  padding: 0 16px;
  padding-top: 16px;
  background-color: #fff;
`;
const popupTextList = [
  "결제를 취소하시겠습니까?",
  "환불 요청을 수락하시겠습니까?",
  "거래 내역을 삭제하면 다시 복구할 수 없습니다. 삭제하시겠습니까?",
];
const TransactionalInfo = ({ history, title }) => {
  const [btnState, setBtnState] = useState("");
  const [selectedId, setSelectedId] = useState();
  const [alertMessage, setAlertMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const { data, loading } = useQuery(GET_PAYMENTS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
  });

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

  const [acceptRefundMutation, { loading: acceptRefundLoading }] = useMutation(
    ACCEPT_REFUND,
    {
      onCompleted: (d) => {
        if (d.acceptRefund.ok) {
          onClickRemove();
          window.location.reload();
        } else if (d.acceptRefund.error) {
          setAlertMessage(d.acceptRefund.error);
          setShowAlert(true);
        }
      },
    }
  );

  const [cancelPaymentMutation, { loading: cancelPaymentLoading }] =
    useMutation(CANCEL_PAYMENT, {
      onCompleted: (d) => {
        if (d.cancelPayment.ok) {
          onClickRemove();
          window.location.reload();
        } else if (d.cancelPayment.error) {
          setAlertMessage(d.cancelPayment.error);
          setShowAlert(true);
        }
      },
    });

  const resetStates = () => {
    setSelectedId(null);
    setAlertMessage(null);
    setShowAlert(false);
  };

  const cancelRefund = () => {
    if (selectedId && selectedId !== "") {
      if (!cancelPaymentLoading) {
        cancelPaymentMutation({
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
  const acceptRefund = () => {
    if (selectedId && selectedId !== "") {
      if (!acceptRefundLoading) {
        acceptRefundMutation({
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
              <TransactionalClassCard
                key={index}
                data={item}
                setBtnState={setBtnState}
                setSelectedId={setSelectedId}
              />
            );
          })}
          {btnState === "payCancel" && (
            <PopupType1
              children={popupTextList[0]}
              cancel={true}
              onClickRemove={onClickRemove}
              onClickCancel={onClickRemove}
              onClick={cancelRefund}
            />
          )}
          {btnState === "refundAccept" && (
            <PopupType2
              children={popupTextList[1]}
              cancel={true}
              rightBtnText={"수락"}
              onClickRemove={onClickRemove}
              onClickCancel={onClickRemove}
              onClick={acceptRefund}
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
        </Container>
      </>
    )
  );
};

export default withRouter(TransactionalInfo);
