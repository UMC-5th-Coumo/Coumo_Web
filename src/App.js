import React from 'react';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <div>
      <GlobalStyle />
      <span style={{ fontFamily: 'GmarketSans', fontWeight: 'bold' }}>
        G마켓 산스 폰트
      </span>
      <span style={{ fontWeight: '300' }}>Pretendard 폰트</span>
    </div>
  );
}

export default App;
