import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../common/Input';
import Category from '../coupon/Category';
import { categoryData } from '../../../assets/data/categoryData';
import Title from '../../common/Title';
import WorkingHour from '../shop/workingHour/WorkingHour';
import AddressInput from '../shop/AddressInput';

const Step1 = ({ storeData, setStoreData, hours, setHours }) => {
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);

  const handleInputClick = () => {
    if (isPostcodeOpen) {
      setIsPostcodeOpen(false);
    }
  };

  return (
    <Box>
      <Content>
        <Wrapper>
          <Left>
            <Input
              name='storeName'
              label='매장명'
              type='text'
              placeholder='매장명을 입력해주세요.'
              value={storeData.name}
              fullwidth='230px'
              fontSize='xs'
              onChange={(e) =>
                setStoreData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <Category
              data={categoryData}
              category={storeData.category}
              setCategory={(selected) =>
                setStoreData((prev) => ({ ...prev, category: selected }))
              }
              dropWidth='100px'
              columns='1fr 1fr'
            />
            <Input
              name='number'
              label='매장 전화번호'
              type='text'
              placeholder='ex) 010-1234-5678'
              value={storeData.telePhone}
              fullwidth='230px'
              onChange={(e) =>
                setStoreData((prev) => ({ ...prev, telePhone: e.target.value }))
              }
            />
            <AddressInput
              address={storeData.address}
              addressDetail={storeData.addressDetail}
              setAddress={(value) =>
                setStoreData((prev) => ({ ...prev, address: value }))
              }
              setAddressDetail={(value) =>
                setStoreData((prev) => ({ ...prev, addressDetail: value }))
              }
              isPostcodeOpen={isPostcodeOpen}
              setIsPostcodeOpen={setIsPostcodeOpen}
              handleInputClick={handleInputClick}
            />
          </Left>
          <Right>
            <WorkingHours>
              <Title title='영업시간' />
              {Object.keys(hours).map((day, i) => (
                <WorkingHour
                  key={i}
                  day={day}
                  data={hours[day]}
                  dropWidth={false}
                  setData={(hours) =>
                    setHours((prev) => ({ ...prev, [day]: hours }))
                  }
                />
              ))}
            </WorkingHours>
          </Right>
        </Wrapper>
      </Content>
    </Box>
  );
};

export default Step1;

const Box = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const Content = styled.div`
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.colors.text_darkgray};
  font-size: ${({ theme }) => theme.fontSize.base};
  box-sizing: border-box;
  font-weight: 500;
  position: relative;
  padding: 50px 150px;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 50px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

const WorkingHours = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
