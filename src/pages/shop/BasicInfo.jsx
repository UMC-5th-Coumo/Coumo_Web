import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../../components/common/Input';
import Category from '../../components/admin/coupon/Category';
import Button from '../../components/common/Button';
import { categoryData } from '../../assets/data/categoryData';
import WorkingHour from '../../components/admin/shop/workingHour/WorkingHour';
import axios from 'axios';
import Title from '../../components/common/Title';
import { useDispatch, useSelector } from 'react-redux';
import AddressInput from '../../components/admin/shop/AddressInput';
import getStoreInfo from '../../redux/thunks/getStoreInfo';
import {
  setAddress,
  setAddressDetail,
  setCategory,
  setNumber,
  setStoreName,
  setWorkingHours,
} from '../../redux/slices/storeSlice';
import modifyStoreInfo from '../../redux/thunks/modifyStoreInfo';

const BasicInfo = () => {
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.store);
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);
  const { storeId } = useSelector((state) => state.user);
  const handleInputClick = () => {
    if (isPostcodeOpen) {
      setIsPostcodeOpen(false);
    }
  };

  useEffect(() => {
    dispatch(getStoreInfo(storeId));
  }, []);

  const getAddressCoords = async (address) => {
    // 좌표 변환 API를 통해 주소를 좌표로 변환
    try {
      const response = await axios.get(
        'https://dapi.kakao.com/v2/local/search/address.json?query=' + address,
        {
          headers: {
            Authorization: `KakaoAK ${process.env.REACT_APP_KAKAOMAP_API_KEY}`,
          },
        }
      );

      if (!response.data.documents || response.data.documents.length === 0) {
        throw new Error('Failed to fetch coordinates from Kakao Map API');
      }

      const coords = response.data.documents[0].address;
      console.log('lat:', coords.y, 'log:', coords.x);
      return {
        latitude: coords.y,
        longitude: coords.x,
      };
    } catch (error) {
      console.error('Error getting coordinates:', error);
      throw error;
    }
  };

  const isVaild = () => {
    const { storeName, number, address, addressDetail } = info;
    if (
      storeName.trim() === '' ||
      number.trim() === '' ||
      address.trim() === '' ||
      addressDetail.trim() === ''
    ) {
      return false;
    } else {
      return true;
    }
  };

  const onSubmit = async () => {
    if (!isVaild()) {
      alert('모든 항목을 입력해주세요.');
      return;
    }
    const coords = await getAddressCoords(info.address);

    dispatch(modifyStoreInfo(storeId, coords));
  };

  return (
    <Content>
      <Wrapper>
        <LeftForm>
          <Input
            name='storeName'
            label='매장명'
            type='text'
            placeholder='매장명을 입력해주세요.'
            value={info.storeName}
            onChange={(e) => dispatch(setStoreName(e.target.value))}
            onClick={handleInputClick}
          />
          <Input
            name='number'
            label='매장 전화번호'
            type='text'
            placeholder='ex) 01012345678'
            value={info.number}
            onChange={(e) => dispatch(setNumber(e.target.value))}
            onClick={handleInputClick}
          />
          <Category
            data={categoryData}
            category={info.category}
            setCategory={(id) => dispatch(setCategory(id))}
            columns='1fr 1fr 1fr'
          />
          <AddressInput
            address={info.address}
            addressDetail={info.addressDetail}
            setAddress={(value) => dispatch(setAddress(value))}
            setAddressDetail={(value) => dispatch(setAddressDetail(value))}
            isPostcodeOpen={isPostcodeOpen}
            setIsPostcodeOpen={setIsPostcodeOpen}
            handleInputClick={handleInputClick}
          />
        </LeftForm>
        <WorkingHours>
          <Title title='영업시간' />
          {Object.keys(info.workingHours).map((day, i) => (
            <WorkingHour
              key={i}
              day={day}
              data={info.workingHours[day]}
              dropWidth={false}
              setData={(hours) =>
                dispatch(
                  setWorkingHours({ ...info.workingHours, [day]: hours })
                )
              }
              onClick={handleInputClick}
            />
          ))}
        </WorkingHours>
      </Wrapper>
      <BtnContainer>
        <Button text='저장하기' type={true} onClickBtn={onSubmit} />
      </BtnContainer>
    </Content>
  );
};

export default BasicInfo;

const Content = styled.div`
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.colors.text_darkgray};
  font-size: ${({ theme }) => theme.fontSize.base};
  box-sizing: border-box;
  position: relative;
  padding: 70px 100px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 870px) {
    padding: 70px 50px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  gap: 80px;

  @media screen and (max-width: 1400px) {
    flex-direction: column;
    max-width: 600px;
    gap: 40px;
  }
`;

const LeftForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const BtnContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 50px;
`;

const WorkingHours = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
