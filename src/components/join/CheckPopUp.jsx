import React from 'react';
import styled from 'styled-components';
import { Cancel } from '../../assets';

const CheckPopUp = ({ title, content, setPopUp }) => {
  return (
    <Background>
      <AgreePop>
        <Div>
          <Back>
            <Title>{title}</Title>
            <Cancel onClick={() => setPopUp(false)} />
          </Back>
          <Content>
            {Object.entries(content).map(([key, value]) => (
              <Consent key={key}>
                <Number>{value[0]}</Number>
                <Text>{value[1]}</Text>
              </Consent>
            ))}
          </Content>
        </Div>
      </AgreePop>
    </Background>
  );
};

export default CheckPopUp;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: #2e2e2e5d;
  position: absolute;
  top: 0;
  left: 0;
`;

const AgreePop = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 50px;
  width: 700px;
  height: 500px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 30px 30px 30px 40px;
  box-sizing: border-box;
  border-radius: 10px;
  overflow-y: auto;
  gap: 20px;
  cursor: pointer;

  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #80808056;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 5px;
  }
`;

const Back = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & svg {
    width: 23px;
    height: 23px;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
  }
  & path {
    stroke: '#424242';
    stroke-width: 1.8;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.title};
  margin-top: 30px;
`;

const Content = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;

const Consent = styled.div`
  margin-bottom: 20px;
`;

const Number = styled.div`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 500;
`;
