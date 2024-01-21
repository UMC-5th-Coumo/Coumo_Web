import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import styled from 'styled-components';
import { COLORS } from '../../../styles/theme';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { endOfMonth, getMonth, getYear, startOfMonth } from 'date-fns';

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

const MonthPicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const monthClassName = (date) => {
    if (
      selectedDate &&
      getMonth(selectedDate) === getMonth(date) &&
      getYear(selectedDate) === getYear(date)
    ) {
      return 'selected-month';
    }
    return 'default-month';
  };

  return (
    <DatePicker
      locale={ko}
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      dateFormat='yyyy년 MM월'
      showMonthYearPicker
      customInput={<CustomInput readOnly />}
      isClearable={false}
      maxDate={new Date()}
      monthClassName={monthClassName}
      onKeyDown={(e) => {
        e.preventDefault();
      }}
      renderCustomHeader={({
        date,
        decreaseYear,
        increaseYear,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <Header>
          <Button
            type='button'
            onClick={decreaseYear}
            disabled={prevMonthButtonDisabled}
          >
            <IoIosArrowBack
              style={{ height: '20px', width: '20px' }}
              fill={COLORS.text_darkgray}
            />
          </Button>
          <TextBox>
            <span>{getYear(date)}년</span>
          </TextBox>
          <Button
            type='button'
            onClick={increaseYear}
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
  );
};

export default MonthPicker;

const CustomInput = styled.input`
  display: flex;
  width: 250px;
  height: 40px;
  padding: 12px 8px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: none;
  border-radius: 16px 16px 0px 0px;
  background: ${COLORS.btn_lightgray};

  text-align: center;
  color: ${COLORS.coumo_purple};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 132%;
  letter-spacing: 0.48px;
  font-family: 'Pretendard';
  cursor: pointer;
  caret-color: transparent;

  &:focus {
    outline: none;
  }
`;

const Header = styled.div`
  height: 20px;
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
