import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { getMonth, getYear } from 'date-fns';
import { theme } from '../../../../styles/theme';

const { colors } = theme;

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
              fill={colors.text_darkgray}
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
              fill={colors.text_darkgray}
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
  width: 230px;
  height: 32px;
  padding: 12px 8px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: none;
  border-radius: 16px 16px 0px 0px;
  background: ${({ theme }) => theme.colors.coumo_purple};

  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-style: normal;
  font-weight: 600;
  line-height: 132%;
  letter-spacing: 0.48px;
  font-family: 'Pretendard';
  caret-color: transparent;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.base};

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 1024px) {
    width: 200px;
    height: 30px;
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

const Header = styled.div`
  height: 16px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
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
