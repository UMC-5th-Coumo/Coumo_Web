import React, { useEffect } from 'react';
import styled from 'styled-components';
import Input from '../../common/Input';
import DaumPostcode from 'react-daum-postcode';
import { createRoot } from 'react-dom/client';

function AddressInput({
  address,
  addressDetail,
  setAddress,
  setAddressDetail,
  isPostcodeOpen,
  handleInputClick,
  setIsPostcodeOpen,
}) {
  const handleAddressClick = () => {
    setIsPostcodeOpen(true);
    // 한번 창을 닫은 후에도 주소 선택 시 창 계속 뜨도록 함수 호출
    handleInputClick();
  };

  const handleAddressDetailClick = () => {
    if (address === '') {
      setIsPostcodeOpen(true);
    }
  };

  const handleAddressComplete = (data) => {
    setAddress(data.address);
    setIsPostcodeOpen(false);
  };

  const WindowPopup = ({ children }) => {
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const popupWindow = window.open('', '_blank', 'width=415,height=515');

        if (popupWindow) {
          const doc = popupWindow.document;
          doc.write(
            '<html><head><title>DaumPostcode Popup</title></head><body>'
          );
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
      }
    }, [children]);

    return null;
  };

  return (
    <Container>
      <Input
        id='here'
        name='address'
        label='위치정보'
        type='text'
        placeholder='주소를 입력해주세요.'
        value={address}
        readOnly={true}
        width
        onChange={(e) => setAddress(e.target.value)}
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
        value={addressDetail}
        onChange={(e) => setAddressDetail(e.target.value)}
        onClick={handleAddressDetailClick}
      />
    </Container>
  );
}

export default AddressInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
