import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import { Calendar } from '../../../../assets';
import { COLORS } from '../../../../styles/theme';
import { ko } from 'date-fns/locale';
import { getMonth, getYear } from 'date-fns';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const months = [
  '1월',
  '2월',
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월',
];

function RangeCalendar() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <Container>
      <Wrapper>
        <DatePicker
          locale={ko}
          dateFormat='yyyy-MM-dd'
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          isClearable={false}
          customInput={<CustomInput />}
          maxDate={endDate}
          enableTabLoop={false}
          onKeyDown={(e) => {
            e.preventDefault();
          }}
          renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <Header>
              <Button
                type='button'
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                <IoIosArrowBack
                  style={{ height: '20px', width: '20px' }}
                  fill={COLORS.text_darkgray}
                />
              </Button>
              <TextBox>
                <span>{months[getMonth(date)]}</span>
                <span>{getYear(date)}</span>
              </TextBox>
              <Button
                type='button'
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                <IoIosArrowForward
                  style={{ height: '20px', width: '20px' }}
                  fill={COLORS.text_darkgray}
                />
              </Button>
            </Header>
          )}
        />
        <Calendar />
      </Wrapper>
      <span>~</span>
      <Wrapper>
        <DatePicker
          locale={ko}
          dateFormat='yyyy-MM-dd'
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          isClearable={false}
          customInput={<CustomInput />}
          minDate={startDate}
          enableTabLoop={false}
          onKeyDown={(e) => {
            e.preventDefault();
          }}
          renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <Header>
              <Button
                type='button'
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                <IoIosArrowBack
                  style={{ height: '20px', width: '20px' }}
                  fill={COLORS.text_darkgray}
                />
              </Button>
              <TextBox>
                <span>{months[getMonth(date)]}</span>
                <span>{getYear(date)}</span>
              </TextBox>
              <Button
                type='button'
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                <IoIosArrowForward
                  style={{ height: '20px', width: '20px' }}
                  fill={COLORS.text_darkgray}
                />
              </Button>
            </Header>
          )}
        />
        <Calendar />
      </Wrapper>
    </Container>
  );
}

export default RangeCalendar;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & span {
    color: ${COLORS.text_darkgray};
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 32px */
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CustomInput = styled.input`
  width: 130px;
  text-align: center;
  display: flex;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  border: 1.5px solid #e1e1e1;
  color: ${COLORS.text_darkgray};
  font-size: 14px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 22px */
  cursor: pointer;
  caret-color: transparent;

  &:focus {
    outline: none;
  }
`;

const Header = styled.div`
  height: 16px;
  display: flex;
  justify-content: space-between;
  background-color: ${COLORS.white_fff};
  font-family: 'Pretendard';
`;

const TextBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  font-size: 14px;
  align-items: center;
  gap: 5px;
  font-weight: 700;

  & span {
    font-size: 14px;
    color: black;
    font-style: normal;
    line-height: 100%; /* 32px */
  }
`;

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
