import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { ChromePicker } from 'react-color';

const ColorPicker = ({ color, setColor }) => {
  const [open, setOpen] = useState(false);
  const outsideRef = useRef(null);

  // picker 바깥 클릭 시 닫힘
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
      <ColorBox onClick={() => setOpen((prev) => !prev)}>
        <Color color={color} />
        <span>{color}</span>
      </ColorBox>
      {open && (
        <Picker>
          <ChromePicker color={color} onChange={(color) => setColor(color)} />
        </Picker>
      )}
    </Container>
  );
};

export default ColorPicker;

const ColorBox = styled.button`
  background: ${({ theme }) => theme.colors.white_fff};
  border-radius: 4px;
  display: flex;
  width: 110px;
  height: 38.5px;
  padding: 8px 12px;
  align-items: center;
  gap: 8px;
  border: 1px solid #d8d8d8;

  color: ${({ theme }) => theme.colors.text_darkgray};
  text-overflow: ellipsis;
  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 27.2px */
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    width: 100px;
    height: 35px;
    padding: 6px 10px;
  }
`;

const Picker = styled.div`
  position: absolute;
  right: -1;
  z-index: 999;
`;

const Color = styled.div`
  width: 16px;
  height: 16px;
  border: 0.5px solid lightgray;
  background-color: ${(props) => props.color};

  @media screen and (max-width: 1024px) {
    width: 12px;
    height: 12px;
  }
`;

const Container = styled.div`
  position: relative;
`;
