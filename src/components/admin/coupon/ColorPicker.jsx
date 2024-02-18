import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { ChromePicker } from 'react-color';

const ColorPicker = ({ color, setColor, dropWidth, type = 'normal' }) => {
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
      <ColorBox onClick={() => setOpen((prev) => !prev)} dropWidth={dropWidth}>
        <Color color={color} dropWidth={dropWidth} />
        <span>{color}</span>
      </ColorBox>
      {open && (
        <Picker type={type}>
          <ChromePicker color={color} onChange={(color) => setColor(color)} />
        </Picker>
      )}
    </Container>
  );
};

export default ColorPicker;

const ColorBox = styled.button`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  display: flex;
  width: ${({ dropWidth }) => (dropWidth ? '100px' : '110px')};
  height: ${({ dropWidth }) => (dropWidth ? '35px' : '38.5px')};
  padding: ${({ dropWidth }) => (dropWidth ? '6px 10px' : '8px 12px')};
  align-items: center;
  gap: 8px;
  border: 1px solid ${({ theme }) => theme.colors.text};

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
    height: ${({ dropWidth }) => (dropWidth ? '30px' : '35px')};
    padding: 6px 10px;
  }
`;

const Picker = styled.div`
  position: absolute;
  right: ${({ type }) => (type === 'normal' ? '-225px' : '-1')};
  top: ${({ type }) => (type === 'normal' ? '0' : '35px')};
  z-index: 999;
`;

const Color = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.color};
  border: 1px solid lightgray;

  @media screen and (max-width: 1024px) {
    width: 12px;
    height: 12px;
  }
`;

const Container = styled.div`
  position: relative;
`;
