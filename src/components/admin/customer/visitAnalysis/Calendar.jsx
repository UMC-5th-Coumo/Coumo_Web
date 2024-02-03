import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
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

const Calendar = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const dayClassName = (date) => {
    if (startDate && endDate) {
      if (date >= startDate && date <= endDate) {
        return 'selected-day';
      }
    }
    return 'default';
  };

  return (
    <Container>
      <DatePicker
        locale={ko}
        dateFormat='yyyy.MM.dd'
        dayClassName={dayClassName}
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onKeyDown={(e) => {
          e.preventDefault();
        }}
        maxDate={new Date()}
        placeholderText='날짜를 선택해주세요.'
        onChange={(update) => {
          setDateRange(update);
        }}
        customInput={<CustomInput />}
        isClearable={false}
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
    </Container>
  );
};

export default Calendar;

const Container = styled.div`
  width: 230px;
  font-size: 14px;
`;

const CustomInput = styled.input`
  display: flex;
  width: 230px;
  height: 32px;
  padding: 12px 8px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: none;
  border-radius: 16px 16px 0px 0px;
  background: ${COLORS.btn_lightgray};

  text-align: center;
  color: ${COLORS.coumo_purple};
  font-style: normal;
  font-weight: 600;
  line-height: 132%;
  letter-spacing: 0.48px;
  font-family: 'Pretendard';
  caret-color: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  @media screen and (max-width: 1024px) {
    width: 200px;
    height: 30px;
    padding: 12px 8px;
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
  align-items: center;
  gap: 5px;
  font-weight: 700;
`;

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
