import React from 'react';
import styled from 'styled-components';

const Input = ({
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
  onClick,
  readOnly,
  fullwidth,
  fullheight,
}) => {
  return (
    <Element>
      <StyledInputTitle>{label}</StyledInputTitle>
      <StyledInput
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        readOnly={readOnly}
        onChange={onChange}
        onClick={onClick}
        fullwidth={fullwidth}
        fullheight={fullheight}
      ></StyledInput>
    </Element>
  );
};

export default Input;

const Element = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInputTitle = styled.div`
  color: ${({ theme }) => theme.colors.coumo_purple};
  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-style: normal;
  font-weight: 700;
  line-height: 132%; /* 31.68px */
  letter-spacing: 0.72px;
  padding-bottom: 16px;

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

const StyledInput = styled.input`
  display: flex;
  width: ${({ fullwidth }) => (fullwidth ? fullwidth : '100%')};
  height: 30px;
  padding: 8px 12px;
  justify-content: flex-end;
  align-items: top;
  gap: 8px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: ${({ theme }) => theme.colors.coumo_gray};
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text_gray};
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.fontSize.base};
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 27.2px */

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.sm};
    width: 80%;
    height: 20px;
  }
`;

/*Edit에서 쓰는 styled*/
export const StyledWriteInput = styled(Input)`
  margin-bottom: 50px;
`;
