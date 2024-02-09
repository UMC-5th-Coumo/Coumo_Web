import React from 'react';
import styled from 'styled-components';
import { CheckBoxDefault, CheckBoxSelected } from '../../assets';

function CheckList({ checks, setChecks }) {
  /* ----- 체크박스 클릭 이벤트 핸들러 ----- */
  const handleCheck1Click = () => {
    setChecks((prev) => ({
      ...prev,
      step1: !prev.step1,
    }));
  };

  const handleCheck2Click = () => {
    setChecks((prev) => ({
      ...prev,
      step2: !prev.step2,
    }));
  };

  return (
    <Container>
      <Agree>
        <CheckWrapper>
          {checks.step1 ? (
            <CheckBoxSelected onClick={handleCheck1Click} />
          ) : (
            <CheckBoxDefault onClick={handleCheck1Click} />
          )}
          <CheckTitle>쿠모 서비스 이용 약관 동의</CheckTitle>
        </CheckWrapper>
        <CheckMore>보기</CheckMore>
      </Agree>
      <Agree>
        <CheckWrapper>
          {checks.step2 ? (
            <CheckBoxSelected onClick={handleCheck2Click} />
          ) : (
            <CheckBoxDefault onClick={handleCheck2Click} />
          )}
          <CheckTitle>개인정보 정책 동의</CheckTitle>
        </CheckWrapper>
        <CheckMore>보기</CheckMore>
      </Agree>
    </Container>
  );
}

export default CheckList;

const Container = styled.div`
  padding: 10px 0px;
  width: 100%;
  gap: 5px;
`;

const Agree = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CheckTitle = styled.div`
  color: ${({ theme }) => theme.colors.text_black};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-style: normal;
  font-weight: 600;
  line-height: 32.4px; /* 180% */
  margin-left: 10px;
`;

const CheckMore = styled.div`
  color: rgba(33, 37, 41, 0.5);
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-style: normal;
  font-weight: 400;
  line-height: 32.4px; /* 180% */
`;

const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
`;
