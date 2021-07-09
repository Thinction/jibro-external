import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
import styled from "styled-components";

const ChooseWrap = styled.label`
  width: 152px;
  height: 24px;
  display: flex;
  align-items: center;
  margin-right: 12px;
  margin-bottom: 16px;
  svg {
    color: ${(p) => (p.isClick ? p.theme.themeColor : "rgba(0, 0, 0, .38)")};
  }
`;

const ChooseTitle = styled.div`
  ${(p) => p.theme.body2};
  margin-left: 8px;
  color: ${(p) => (p.isClick ? "#000" : "rgba(0, 0, 0, 0.38)")};
`;

export const FilterListTypeCheck = ({
  value,
  title,
  filterType,
  setList,
  checked,
}) => {
  const addValue = (id) => {
    setList((prev) => [...prev, id]);
  };
  const removeValue = (id) => {
    setList((prev) => prev.filter((prevId) => prevId !== id));
  };
  const onChange = ({ target: { checked, value } }) => {
    if (checked) {
      addValue(value);
    } else {
      removeValue(value);
    }
  };

  return (
    <ChooseWrap isClick={checked}>
      <input
        name={filterType}
        type={"checkbox"}
        hidden={true}
        checked={checked}
        value={value}
        onChange={onChange}
      />
      <IoCheckmarkCircleOutline size={24} />
      <ChooseTitle isClick={checked}>{title}</ChooseTitle>
    </ChooseWrap>
  );
};

export const FilterListTypeCircle = ({ title, value, onClick, checked }) => {
  return (
    <ChooseWrap isClick={checked}>
      <input
        name={"sort"}
        type={"checkbox"}
        hidden={true}
        value={value}
        onClick={onClick}
        onChange={() => ""}
        checked={checked}
      />
      {checked ? (
        <MdRadioButtonChecked size={24} />
      ) : (
        <MdRadioButtonUnchecked size={24} />
      )}

      <ChooseTitle isClick={checked}>{title}</ChooseTitle>
    </ChooseWrap>
  );
};
