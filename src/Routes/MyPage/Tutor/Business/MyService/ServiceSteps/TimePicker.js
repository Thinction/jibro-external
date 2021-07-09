import React from "react";
import styled from "styled-components";
import { MdCheckBox } from "react-icons/md";

const Section = styled.div`
  padding: 0 16px;
  margin-bottom: 24px;
  :last-child {
    margin-bottom: 0;
  }
`;

const ThemeWrap = styled.div`
  display: flex;
  svg {
    color: ${(p) => (p.dayPick ? p.theme.themeColor : "rgba(0, 0, 0, .6)")};
  }
`;

const Theme = styled.div`
  ${(p) => p.theme.subTitle2};
  margin-bottom: 8px;
  margin-left: 12px;
`;

const Select = styled.select`
  width: ${(props) => props.size};
  min-height: 48px;
  resize: none;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  padding: 0 12px;
  :focus {
    outline: none;
  }
`;

const Option = styled.option`
  width: 100%;
  height: 100%;
`;

const SelectWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 14px;
`;

const Text = styled.div`
  width: fit-content;
  ${(p) => p.theme.body1};
  font-weight: 500;
  margin: 0 8px;
  :last-child {
    margin-right: 0;
  }
`;

const timeOption = () => {
  let timeArray = [];
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 6; j++) {
      let hour = i < 10 ? "0" + i.toString() : i.toString();
      let tenMinute = j * 10;
      let minute =
        tenMinute < 10 ? "0" + tenMinute.toString() : tenMinute.toString();
      timeArray.push(hour + ":" + minute);
    }
  }
  return timeArray;
};

const TimePicker = ({ day, value, availableDate, setAvailableDate }) => {
  // const location = useLocation();
  // const date = new Date();
  // const getParams = location.state;
  // const hour = date.getHours();
  // const minute = date.getMinutes();
  // const timeSetting = (obj, type) => {
  //   if (type === "minute") {
  //     return (Math.ceil(obj / 10) * 10).toString();
  //   }
  //   if (obj < 10) {
  //     return "0" + obj.toString();
  //   } else {
  //     return obj.toString();
  //   }
  // };

  // const fromTimePick = useInput(
  //   (getParams && getParams.time) ||
  //     `${timeSetting(hour)}:${timeSetting(minute, "minute")}`
  // );
  // const toTimePick = useInput(
  //   (getParams && getParams.time) ||
  //     `${timeSetting(hour + 1)}:${timeSetting(minute, "minute")}`
  // );
  const onChangeAvailableDateStart = (e) => {
    setAvailableDate((prev) => {
      const nextState = {
        ...prev,
        [value]: {
          check: true,
          state: { start: e.target.value, end: prev[value].state.end },
        },
      };
      return nextState;
    });
  };
  const onChangeAvailableDateEnd = (e) => {
    setAvailableDate((prev) => {
      const nextState = {
        ...prev,
        [value]: {
          check: true,
          state: { end: e.target.value, start: prev[value].state.start },
        },
      };
      return nextState;
    });
  };
  const onClickCheck = () => {
    if (availableDate[value].check) {
      setAvailableDate((prev) => {
        const nextState = {
          ...prev,
          [value]: { check: false, state: { ...prev[value].state } },
        };
        return nextState;
      });
    } else {
      setAvailableDate((prev) => {
        const nextState = {
          ...prev,
          [value]: { check: true, state: { ...prev[value].state } },
        };
        return nextState;
      });
    }
  };
  return (
    <>
      <Section>
        <ThemeWrap dayPick={availableDate[value].check} onClick={onClickCheck}>
          <MdCheckBox size={24} />
          <Theme>{day}</Theme>
        </ThemeWrap>
        <SelectWrap>
          <Select
            size={"35%"}
            disabled={!availableDate[value].check}
            defaultValue={availableDate[value].state.start}
            onChange={onChangeAvailableDateStart}
          >
            <Option hidden>시작</Option>
            {timeOption().map((item, index) => {
              return (
                <Option key={index} value={item}>
                  {item}
                </Option>
              );
            })}
          </Select>
          <Text>부터</Text>
          <Select
            size={"98px"}
            disabled={!availableDate[value].check}
            defaultValue={availableDate[value].state.end}
            onChange={onChangeAvailableDateEnd}
          >
            <Option hidden value={undefined}>
              종료
            </Option>
            {timeOption().map((item, index) => {
              return (
                <Option key={index} value={item}>
                  {item}
                </Option>
              );
            })}
          </Select>
          <Text>까지</Text>
        </SelectWrap>
      </Section>
    </>
  );
};

export default TimePicker;
