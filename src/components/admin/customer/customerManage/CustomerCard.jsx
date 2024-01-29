import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../../styles/theme';

const CustomerCard = ({ data, selected, setSelected }) => {
  const { name, number, birthday, gender, totalStamp, visitDate } = data;
  return (
    <Container
      selected={selected === data.id}
      onClick={() => setSelected(data.id)}
    >
      <InfoBox>
        <InfoLine>
          <span style={{ fontWeight: '800' }}>{name}</span>
          <span>{number}</span>
        </InfoLine>
        <InfoLine>
          <span>성별: {gender}</span>
        </InfoLine>
        <InfoLine>
          <span>보유 쿠폰 개수: {totalStamp}개</span>
        </InfoLine>
      </InfoBox>
      <Recent selected={selected === data.id}>최근 방문: {visitDate}</Recent>
    </Container>
  );
};

export default CustomerCard;

const Container = styled.div`
  width: 422px;
  height: 104px;
  padding: 16px 24px 16px 58px;
  box-sizing: border-box;

  display: flex;
  align-items: flex-start;
  gap: 32px;
  background: ${(props) =>
    props.selected ? COLORS.card_lightpurple : COLORS.white_fff};
`;

const InfoBox = styled.div`
  width: 138px;
  height: 72px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const InfoLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  color: ${COLORS.text_gray};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 132%; /* 15.84px */
`;

const Recent = styled.span`
  display: flex;
  height: 16px;
  padding: 0px 8px;
  align-items: center;
  gap: 8px;

  border-radius: 23px;
  background: ${(props) => (props.selected ? COLORS.coumo_purple : '#E3E1E8')};
  color: ${(props) =>
    props.selected ? COLORS.white_fff : COLORS.coumo_purple};
  text-align: center;
  font-size: 8px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 8px */
`;
