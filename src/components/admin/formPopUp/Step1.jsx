import React, { useState } from 'react';
import styled from 'styled-components';
import Category from '../coupon/Category';
import { categoryData } from '../../../assets/data/categoryData';
import AddressInput from '../shop/AddressInput';
import PopUpInput from '../../common/PopUpInput';

const Step1 = ({ storeData, setStoreData }) => {
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);

  const handleInputClick = () => {
    if (isPostcodeOpen) {
      setIsPostcodeOpen(false);
    }
  };

  return (
    <Box>
      <Content>
        <PopUpInput
          name='storeName'
          label='매장명'
          type='text'
          placeholder='매장명을 입력해주세요.'
          value={storeData.name}
          onChange={(e) =>
            setStoreData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <PopUpInput
          name='number'
          label='매장 전화번호'
          type='text'
          placeholder='ex) 010-1234-5678'
          value={storeData.telePhone}
          onChange={(e) =>
            setStoreData((prev) => ({ ...prev, telePhone: e.target.value }))
          }
        />
        <Category
          data={categoryData}
          category={storeData.category}
          setCategory={(selected) =>
            setStoreData((prev) => ({ ...prev, category: selected }))
          }
          dropWidth='80px'
          columns='1fr 1fr 1fr'
          gap={8}
          titleSize='popup'
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
          type='popup'
        />
      </Content>
    </Box>
  );
};

export default Step1;

const Box = styled.div`
  max-width: 800px;
  height: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.text_darkgray};
  font-size: ${({ theme }) => theme.fontSize.base};
  box-sizing: border-box;
  font-weight: 500;
  position: relative;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
