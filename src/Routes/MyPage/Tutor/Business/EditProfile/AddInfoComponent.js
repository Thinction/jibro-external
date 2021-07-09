import React from "react";
import styled from "styled-components";
import { MdCancel } from "react-icons/md";
const MyLicenseWrap = styled.div`
  margin: 0 16px;
  width: 328px;
  height: 64px;
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 8px;
  padding-left: 16px;
  border-radius: 32px;
  margin-bottom: 24px;
`;

const MyLicenseText = styled.div`
  ${(p) => p.theme.subTitle2}
  margin-right:8px;
`;

const CancelBtn = styled.button`
  width: fit-content;
  height: fit-content;
  margin-left: auto;
`;

const AddInfoComponent = ({ information, onClick, item, list, setList }) => {
  return (
    <MyLicenseWrap>
      <MyLicenseText>{information}</MyLicenseText>
      <CancelBtn
        onClick={() => onClick(item, list, setList)}
      >
        <MdCancel
          size={24}
          color={"rgba(0, 0, 0, 0.6)"}
        />
      </CancelBtn>
    </MyLicenseWrap>
  );
};

export default AddInfoComponent;
