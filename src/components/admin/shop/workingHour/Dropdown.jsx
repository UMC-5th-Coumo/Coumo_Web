import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import { timeData } from '../../../../assets/data/workingHourData';

function Dropdown({ value, setValue, disabled }) {
  const [open, setOpen] = useState(false);
  const outsideRef = useRef(null);

  const handleItemClick = (time) => {
    setOpen(false);
    setValue(time);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (outsideRef.current && !outsideRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [outsideRef]);

  return (
    <Container ref={outsideRef}>
      <DropdownInput
        isOpen={open}
        onClick={() => setOpen((prev) => !prev)}
        disabled={disabled}
      >
        <span>{value}</span>
        <IoIosArrowDown style={{ height: '15px', width: '15px' }} />
      </DropdownInput>
      {open && (
        <DropDownPosition>
          <DropdownBox>
            {timeData.map((item, i) => (
              <Item key={i} onClick={() => handleItemClick(item)}>
                {item}
              </Item>
            ))}
          </DropdownBox>
        </DropDownPosition>
      )}
    </Container>
  );
}

export default Dropdown;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const DropdownInput = styled.div`
  width: 220px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 7px;
  font-weight: 400;
  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.fontSize.sm};
  box-sizing: border-box;
  padding: 0px 15px;
  cursor: pointer;

  pointer-events: ${(props) => (props.disabled ? 'none' : 'all')};
  background: ${({ theme }) => theme.colors.white_fefe};
  border: 1px solid
    ${({ theme, disabled, isOpen }) =>
      disabled
        ? '#dddddd'
        : isOpen
          ? theme.colors.coumo_purple
          : theme.colors.tab_gray};
  color: ${(props) => (props.disabled ? '#dddddd' : '#666666')};

  @media screen and (max-width: 1024px) {
    width: 160px;
    height: 35px;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  @media screen and (max-width: 870px) {
    width: 140px;
  }
`;

const DropDownPosition = styled.div`
  position: absolute;
  top: 2.7rem;
  left: 0;
  width: 100%;
  overflow: hidden;
  z-index: 1;
`;

const DropdownBox = styled.div`
  width: 99%;
  height: 200px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.white_fefe};
  border: 1px solid ${({ theme }) => theme.colors.coumo_purple};

  display: flex;
  flex-direction: column;
  overflow: auto;

  @media screen and (max-width: 1024px) {
    height: 160px;
  }
`;

const Item = styled.span`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: #333333;
  cursor: pointer;

  &:not(:first-child) {
    border-top: 1px solid rgb(208, 208, 208);
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.coumo_lightpurple};
  }

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;
