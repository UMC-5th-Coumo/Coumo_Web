import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../styles/theme';
import { ChromePicker } from 'react-color';

const ColorPicker = ({ open, setOpen, color, setColor }) => {
  return (
    <Container>
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
  background: ${COLORS.white_fff};
  border-radius: 4px;
  display: flex;
  height: 48px;
  padding: 8px 12px;
  align-items: center;
  gap: 8px;
  border: 1px solid #d8d8d8;

  color: ${COLORS.text_darkgray};
  text-overflow: ellipsis;
  font-family: 'Pretendard';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 27.2px */
  cursor: pointer;
`;

const Picker = styled.div`
  position: absolute;
  right: -1;
  z-index: 999;
`;

const Color = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
`;

const Container = styled.div`
  position: relative;
`;
