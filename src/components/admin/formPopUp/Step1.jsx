import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from '../../common/Input';
import Category from '../coupon/Category';
import { categoryData } from '../../../assets/data/categoryData';
import Title from '../../common/Title';
import DaumPostcode from 'react-daum-postcode';
import { createRoot } from 'react-dom/client';
import WorkingHour from '../shop/workingHour/WorkingHour';

const Step1 = ({ storeData, setStoreData, hours, setHours }) => {
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);

  const handleAddressClick = () => {
    setIsPostcodeOpen(true);
  };

  const handleAddressDetailClick = () => {
    if (storeData.address === '') {
      setIsPostcodeOpen(true);
    }
  };

  const handleAddressComplete = (data) => {
    const fullAddress = data.address;
    setStoreData((prev) => ({ ...prev, address: fullAddress }));

    setIsPostcodeOpen(false);
  };

  const WindowPopup = ({ children }) => {
    useEffect(() => {
      const popupWindow = window.open('', '_blank', 'width=415,height=515');

      if (popupWindow) {
        const doc = popupWindow.document;
        doc.write('<html><head><title>DaumPostcode Popup</title></head><body>');
        doc.write('<div id="root"></div>');
        doc.write('</body></html>');

        // React 컴포넌트 렌더링
        const root = doc.getElementById('root');
        const reactRoot = createRoot(root);
        reactRoot.render(children);
        return () => {
          popupWindow.close();
        };
      } else {
        console.error('Failed to open popup window.');
      }
    }, [children]);

    return null;
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
            <Row>
              <Input
                name='address'
                label='위치정보'
                type='text'
                placeholder='주소를 입력해주세요.'
                value={storeData.address}
                readOnly={true}
                fullwidth='230px'
                onChange={(e) =>
                  setStoreData((prev) => ({ ...prev, address: e.target.value }))
                }
                onClick={handleAddressClick}
              />
              {isPostcodeOpen && (
                <WindowPopup>
                  <DaumPostcode
                    onComplete={handleAddressComplete}
                    autoClose
                    style={{
                      width: '400px',
                      height: '500px',
                      zIndex: 1000,
                    }}
                  />
                </WindowPopup>
              )}
              <Input
                name='addressDetail'
                type='text'
                placeholder='상세 주소를 입력해주세요.'
                value={storeData.addressDetail}
                fullwidth='230px'
                onChange={(e) =>
                  setStoreData((prev) => ({
                    ...prev,
                    addressDetail: e.target.value,
                  }))
                }
                onClick={handleAddressDetailClick}
              />
            </Row>
          </Left>
          <Right>
            <WorkingHours dropWidth='100px'>
              <Title title='영업시간' />
              {Object.keys(hours).map((day, i) => (
                <WorkingHour
                  key={i}
                  day={day}
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

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 10px;
`;

const Content = styled.div`
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.colors.text_darkgray};
  font-size: ${({ theme }) => theme.fontSize.base};
  box-sizing: border-box;
  font-weight: 500;
  position: relative;
  padding: 50px 50px;
  display: flex;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

const Left = styled.div`
  width: 40%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Right = styled.div`
  width: 60%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
`;

const WorkingHours = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
