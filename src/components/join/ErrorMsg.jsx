import React from 'react';
import styled from 'styled-components';

function ErrorMsg({ text }) {
  return <Msg>{text}</Msg>;
}

export default ErrorMsg;

const Msg = styled.div`
  height: 15px;
  color: #fc0f0f;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
  display: flex;
  align-items: flex-start;
  margin-right: auto;
  margin-left: 5px;
  margin-bottom: 10px;
`;
