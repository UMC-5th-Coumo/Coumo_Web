import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from '../../components/common/Input';
import Category from '../../components/admin/coupon/Category';
import Button from '../../components/common/Button';
import { categoryData } from '../../assets/data/categoryData';
import WorkingHour from '../../components/admin/shop/workingHour/WorkingHour';
import axios from 'axios';
import Title from '../../components/common/Title';
import { useSelector } from 'react-redux';
import AddressInput from '../../components/admin/shop/AddressInput';
import { authInstance, defaultInstance } from '../../api/axios';

const BasicInfo = () => {
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);
  const { storeId } = useSelector((state) => state.user);
  const [category, setCategory] = useState('cafe');
  const [inputs, setInputs] = useState({
    storeName: '',
    number: '',
    address: '',
    addressDetail: '',
  });
  const [hours, setHours] = useState({
    MONDAY: {
      day: 'MONDAY',
      startTime: '',
      endTime: '',
    },
    TUESDAY: {
      day: 'TUESDAY',
      startTime: '',
      endTime: '',
    },
    WEDNESDAY: {
      day: 'WEDNESDAY',
      startTime: '',
      endTime: '',
    },
    THURSDAY: {
      day: 'THURSDAY',
      startTime: '',
      endTime: '',
    },
    FRIDAY: {
      day: 'FRIDAY',
      startTime: '',
      endTime: '',
    },
    SATURDAY: {
      day: 'SATURDAY',
      startTime: '',
      endTime: '',
    },
    SUNDAY: {
      day: 'SUNDAY',
      startTime: '',
      endTime: '',
    },
  });

  const handleInputClick = () => {
    if (isPostcodeOpen) {
      setIsPostcodeOpen(false);
    }
  };

  const getBasicInfo = async () => {
    await defaultInstance
      .get(`/api/owner/store/${storeId}/basic`)
      .then((res) => {
        if (res.data.isSuccess) {
          const data = res.data.result;
          setInputs({
            storeName: data.name,
            number: data.telePhone,
            address: data.location,
            addressDetail: '',
          });

          data.time.forEach((timeData) => {
            setHours((prev) => ({ ...prev, [timeData.day]: timeData }));
          });
        } else {
          throw Error;
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getBasicInfo();
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

  const onSubmit = async () => {
    try {
      const coords = await getAddressCoords(inputs.address);

      const storeData = {
        name: inputs.storeName,
        time: Object.keys(hours).map((day) => hours[day]),
        telePhone: inputs.number.split('-').join(''),
        category: category,
        location: inputs.address + ' ' + inputs.addressDetail,
        longitude: coords.longitude,
        latitude: coords.latitude,
      };
      console.log('storeData', storeData);

      // 기본정보 수정 api
      await authInstance
        .patch(`/api/owner/store/${storeId}/basic`, storeData)
        .then((res) => {
          if (res.data.isSuccess) {
            console.log('Store data updated successfully!');
            // 팝업 예정
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error('Failed to update store data:', error);
    }
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
            value={inputs.storeName}
            onChange={(e) =>
              setInputs((prev) => ({ ...prev, storeName: e.target.value }))
            }
            onClick={handleInputClick}
          />
          <Input
            name='number'
            label='매장 전화번호'
            type='text'
            placeholder='ex) 01012345678'
            value={inputs.number}
            onChange={(e) =>
              setInputs((prev) => ({ ...prev, number: e.target.value }))
            }
            onClick={handleInputClick}
          />
          <Category
            data={categoryData}
            category={category}
            setCategory={setCategory}
            columns='1fr 1fr 1fr'
          />
          <AddressInput
            address={inputs.address}
            addressDetail={inputs.addressDetail}
            setAddress={(value) =>
              setInputs((prev) => ({ ...prev, address: value }))
            }
            setAddressDetail={(value) =>
              setInputs((prev) => ({ ...prev, addressDetail: value }))
            }
            isPostcodeOpen={isPostcodeOpen}
            setIsPostcodeOpen={setIsPostcodeOpen}
            handleInputClick={handleInputClick}
          />
        </LeftForm>
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
