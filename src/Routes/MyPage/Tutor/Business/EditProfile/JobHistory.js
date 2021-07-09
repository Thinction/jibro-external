import React, { useState } from 'react';
import styled from 'styled-components';
import { AddBtn } from '../../../../../Components/Buttons';

const Section = styled.div`
  padding: 0 16px;
  margin-bottom: 24px;
`;

const Theme = styled.div`
  ${(p) => p.theme.subTitle2};
  margin-bottom: 8px;
`;

const OneLineInput = styled.input`
  width: 100%;
  min-height: 48px;
  resize: none;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  padding: 12px;
  :focus {
    outline: none;
  }
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
  justify-content: space-between;
`;

const BtnWrap = styled.div`
  padding: 0 16px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
`;

const JobHistory = ({onClickAddArray, list, setList}) => {
    const [ partialValues, setPartialValues ] = useState({
        company: '',
        grade: '',
        role: '',
        year: '',
        month: '',
    });

    const isSetValues = (e) => {
        const { name, value } = e.target;
        setPartialValues({...partialValues, [name]: value});
    };

    const onClickRemove = () => {
        setPartialValues({
            company: '',
            grade: '',
            role: '',
            year: '년',
            month: '개월',
        })
    }

    const numberRepeat = (num, unit) => {
        let numArray = [];
        for ( let i = 0; i <= num; i ++ ) {
            numArray.push(i + unit)
        }
        return numArray;
    };

    return (
        <>
        <Section>
            <Theme>회사</Theme>
            <OneLineInput
                size={"100%"}
                placeholder="주식회사 ○○○"
                name={'company'}
                value={partialValues.company}
                onChange={isSetValues}
            />
        </Section>
        <Section>
            <Theme>직위</Theme>
            <OneLineInput
                size={"100%"}
                placeholder="사원"
                name={'grade'}
                value={partialValues.grade}
                onChange={isSetValues}
            />
        </Section>
        <Section>
            <Theme>담당업무</Theme>
            <OneLineInput
                size={"100%"}
                placeholder="트레이닝"
                name={'role'}
                value={partialValues.role}
                onChange={isSetValues}
            />
        </Section>
        <Section>
            <Theme>근무기간</Theme>
            <SelectWrap>
                <Select
                    size={"46%"}
                    name={'year'}
                    value={partialValues.year}
                    onChange={isSetValues}
                >
                    <Option>년</Option>
                    {
                        numberRepeat(50, '년').map((item) => {
                            return (
                                <Option
                                    key={item}
                                >{item}</Option>
                            )
                        })
                    }
                </Select>
                <Select
                    size={"46%"}
                    name={'month'}
                    value={partialValues.month}
                    onChange={isSetValues}
                >
                    <Option>개월</Option>
                    {
                        numberRepeat(12, '개월').map((item) => {
                            return (
                                <Option
                                    key={item}
                                >{item}</Option>
                            )
                        })
                    }
                </Select>
            </SelectWrap>
        </Section>
        <BtnWrap>
            <AddBtn
                onClick={() => {
                    onClickAddArray(
                        partialValues,
                        list,
                        setList,
                        '경력사항을 입력해주세요',
                        '이미 추가한 경력사항입니다.'
                    )
                    onClickRemove()
                }}
            />
        </BtnWrap>
        </>
    );
}

export default JobHistory;