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
  fontSize,
  paddingB,
  paddingL,
}) => {
  return (
    <Element>
      <StyledInputTitle
        fontSize={fontSize}
        paddingB={paddingB}
        paddingL={paddingL}
      >
        {label}
      </StyledInputTitle>
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
  font-size: ${({ theme, fontSize }) =>
    fontSize ? theme.fontSize.md : theme.fontSize.lg};
  font-style: normal;
  font-weight: 700;
  line-height: 132%; /* 31.68px */
  letter-spacing: 0.72px;
  padding-left: ${({ paddingL }) => (paddingL ? paddingL : '0px')};
  padding-bottom: ${({ paddingB }) => (paddingB ? paddingB : '13px')};

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

const StyledInput = styled.input`
  display: flex;
  width: ${({ fullwidth }) => (fullwidth ? fullwidth : '100%')};
  height: ${({ fullheight }) => (fullheight ? fullheight : '40px')};
  padding: 8px 12px;
  box-sizing: border-box;
  justify-content: flex-end;
  align-items: top;
  gap: 8px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text_darkgray};
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.fontSize.base};
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 27.2px */

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.coumo_purple};
    &::placeholder {
      opacity: 0.4;
    }
  }
`;

/*Edit에서 쓰는 styled*/
export const StyledWriteInput = styled(Input)`
  margin-bottom: 50px;
`;
