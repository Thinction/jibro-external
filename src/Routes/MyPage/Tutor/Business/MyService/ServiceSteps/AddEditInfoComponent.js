import React from "react";
import styled from "styled-components";
import { MdCancel } from "react-icons/md";
const MyLicenseWrap = styled.div`
  margin: 0 16px;
  width: calc(100% - 32px);
  min-height: 116px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  border-radius: 8px;
  margin-bottom: 24px;
`;
const ThemeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px; ;
`;

const NthNumber = styled.div`
  ${(p) => p.theme.subTitle2}
`;
const MyLicenseText = styled.div`
  ${(p) => p.theme.body2}
  white-space: pre-line;
`;

const AddEditInfoComponent = ({ item, onRemoveCurriculum }) => {
  return (
    <MyLicenseWrap>
      <ThemeWrap>
        <NthNumber>{`${item.split("||")[0]} 회차`}</NthNumber>
        <MdCancel
          size={24}
          color={"rgba(0, 0, 0, 0.6)"}
          onClick={() => onRemoveCurriculum(item)}
        />
      </ThemeWrap>
      <MyLicenseText>{item.split("||")[1]}</MyLicenseText>
    </MyLicenseWrap>
  );
};

export default AddEditInfoComponent;
