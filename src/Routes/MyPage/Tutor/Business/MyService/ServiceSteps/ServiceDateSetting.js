import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { useLocation } from "react-router";
import { HalfBtnSet } from "../../../../../../Components/Buttons";
import usePrevious from "../../../../../../Hooks/usePrevious";
import TimePicker from "./TimePicker";
import _ from "lodash";

const Container = styled.div`
  height: fit-content;
  padding-bottom: 56px;
`;

const day = [
  { title: "월요일", value: "mon" },
  { title: "화요일", value: "tue" },
  { title: "수요일", value: "wed" },
  { title: "목요일", value: "thu" },
  { title: "금요일", value: "fri" },
  { title: "토요일", value: "sat" },
  { title: "일요일", value: "sun" },
];

const ServiceDateSetting = ({
  service,
  serviceId,
  step,
  setStep,
  createServiceMutation,
}) => {
  //availableDate
  const [availableDate, setAvailableDate] = useState(
    service?.availableDate
      ? {
          mon: {
            check: Boolean(service.availableDate.mon),
            state: {
              start: Boolean(service.availableDate.mon)
                ? service.availableDate.mon.split("||")[0]
                : undefined,
              end: Boolean(service.availableDate.mon)
                ? service.availableDate.mon.split("||")[1]
                : undefined,
            },
          },
          tue: {
            check: Boolean(service.availableDate.tue),
            state: {
              start: Boolean(service.availableDate.tue)
                ? service.availableDate.tue.split("||")[0]
                : undefined,
              end: Boolean(service.availableDate.tue)
                ? service.availableDate.tue.split("||")[1]
                : undefined,
            },
          },
          wed: {
            check: Boolean(service.availableDate.wed),
            state: {
              start: Boolean(service.availableDate.wed)
                ? service.availableDate.wed.split("||")[0]
                : undefined,
              end: Boolean(service.availableDate.wed)
                ? service.availableDate.wed.split("||")[1]
                : undefined,
            },
          },
          thu: {
            check: Boolean(service.availableDate.thu),
            state: {
              start: Boolean(service.availableDate.thu)
                ? service.availableDate.thu.split("||")[0]
                : undefined,
              end: Boolean(service.availableDate.thu)
                ? service.availableDate.thu.split("||")[1]
                : undefined,
            },
          },
          fri: {
            check: Boolean(service.availableDate.fri),
            state: {
              start: Boolean(service.availableDate.fri)
                ? service.availableDate.fri.split("||")[0]
                : undefined,
              end: Boolean(service.availableDate.fri)
                ? service.availableDate.fri.split("||")[1]
                : undefined,
            },
          },
          sat: {
            check: Boolean(service.availableDate.sat),
            state: {
              start: Boolean(service.availableDate.sat)
                ? service.availableDate.sat.split("||")[0]
                : undefined,
              end: Boolean(service.availableDate.sat)
                ? service.availableDate.sat.split("||")[1]
                : undefined,
            },
          },
          sun: {
            check: Boolean(service.availableDate.sun),
            state: {
              start: Boolean(service.availableDate.sun)
                ? service.availableDate.sun.split("||")[0]
                : undefined,
              end: Boolean(service.availableDate.sun)
                ? service.availableDate.sun.split("||")[1]
                : undefined,
            },
          },
        }
      : {
          mon: { check: false, state: { start: undefined, end: undefined } },
          tue: { check: false, state: { start: undefined, end: undefined } },
          wed: { check: false, state: { start: undefined, end: undefined } },
          thu: { check: false, state: { start: undefined, end: undefined } },
          fri: { check: false, state: { start: undefined, end: undefined } },
          sat: { check: false, state: { start: undefined, end: undefined } },
          sun: { check: false, state: { start: undefined, end: undefined } },
        }
  );

  const [allWritten, setAllWritten] = useState(false);
  const prevDeeplyNestedObject = usePrevious(availableDate);
  useEffect(() => {
    if (!_.isEqual(prevDeeplyNestedObject, availableDate)) {
      if (
        (availableDate.mon.check &&
          availableDate.mon.state.start &&
          availableDate.mon.state.end) ||
        (availableDate.tue.check &&
          availableDate.tue.state.start &&
          availableDate.tue.state.end) ||
        (availableDate.wed.check &&
          availableDate.wed.state.start &&
          availableDate.wed.state.end) ||
        (availableDate.thu.check &&
          availableDate.thu.state.start &&
          availableDate.thu.state.end) ||
        (availableDate.fri.check &&
          availableDate.fri.state.start &&
          availableDate.fri.state.end) ||
        (availableDate.sat.check &&
          availableDate.sat.state.start &&
          availableDate.sat.state.end) ||
        (availableDate.sun.check &&
          availableDate.sun.state.start &&
          availableDate.sun.state.end)
      ) {
        setAllWritten(true);
      } else {
        setAllWritten(false);
      }
    }
  }, [availableDate, prevDeeplyNestedObject]);
  const onClickCreateService = () => {
    setStep((prev) => {
      createServiceMutation({
        variables: {
          mon: availableDate.mon.check
            ? availableDate.mon.state.start + "||" + availableDate.mon.state.end
            : undefined,
          tue: availableDate.tue.check
            ? availableDate.tue.state.start + "||" + availableDate.tue.state.end
            : undefined,
          wed: availableDate.wed.check
            ? availableDate.wed.state.start + "||" + availableDate.wed.state.end
            : undefined,
          thu: availableDate.thu.check
            ? availableDate.thu.state.start + "||" + availableDate.thu.state.end
            : undefined,
          fri: availableDate.fri.check
            ? availableDate.fri.state.start + "||" + availableDate.fri.state.end
            : undefined,
          sat: availableDate.sat.check
            ? availableDate.sat.state.start + "||" + availableDate.sat.state.end
            : undefined,
          sun: availableDate.sun.check
            ? availableDate.sun.state.start + "||" + availableDate.sun.state.end
            : undefined,
          step: prev + 1,
          serviceId,
        },
      });
      return prev + 1;
    });
  };
  return (
    <Container>
      {day.map((item, index) => (
        <TimePicker
          key={index}
          day={item.title}
          value={item.value}
          availableDate={availableDate}
          setAvailableDate={setAvailableDate}
        />
      ))}
      <HalfBtnSet
        leftText={"이전"}
        leftBg={"#D7D7D7"}
        leftColor={"rgba(0, 0, 0, .6)"}
        onClickLeft={() => {
          setStep(2);
        }}
        rightText={"저장하고 다음"}
        rightColor={"#fff"}
        onClickRight={() => {
          onClickCreateService();
        }}
        allWritten={allWritten}
        disabled={!allWritten}
      />
    </Container>
  );
};

export default ServiceDateSetting;
