import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  plugins,
} from 'chart.js';
import styled from 'styled-components';
import {
  barChartoption,
  lightBarChartoption,
  smallBarChartoption,
} from '../../../../../assets/data/chartOptions';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  plugins
);

function AgeGroupChart({ type }) {
  let option = {};
  const [data, setData] = useState({
    datasets: [
      {
        label: '여성',
        data: [],
        backgroundColor: ({ chart: { ctx } }) => {
          const bg = ctx.createLinearGradient(0, 50, 0, 350);
          bg.addColorStop(0, '#9d9d9d');
          bg.addColorStop(1, '#e0e0e0');
          return bg;
        },
        borderRadius: 10,
      },
      {
        label: '남성',
        data: [],
        backgroundColor: ({ chart: { ctx } }) => {
          const bg = ctx.createLinearGradient(0, 100, 0, 600);
          bg.addColorStop(0, '#A97CFF');
          bg.addColorStop(1, 'rgba(217, 217, 217, 0)');
          return bg;
        },
        borderRadius: 10,
      },
    ],
  });

  // 서버로부터 받은 데이터 가공
  const processData = (type, chartData) => {
    return chartData.map((data) => {
      let newData = {
        x: '',
        y: Math.floor(data[type]),
      };

      // 연령대 변경
      switch (data.ageGroup) {
        case '10s':
          newData.x = '10대';
          break;
        case '20s':
          newData.x = '20대';
          break;
        case '30s':
          newData.x = '30대';
          break;
        case '40s':
          newData.x = '40대';
          break;
        case '50s':
          newData.x = '50대';
          break;
        case '60s':
          newData.x = '60대';
          break;
        default:
          break;
      }

      // 방문자 수 추가
      newData.x += ` (${data.total}명)`;

      return newData;
    });
  };

  useEffect(() => {
    // 서버 요청 후 응답 - 방문자수
    const result = [
      {
        ageGroup: '10s',
        male: 0,
        female: 3,
        total: 3,
      },
      {
        ageGroup: '20s',
        male: 1,
        female: 3,
        total: 4,
      },
      {
        ageGroup: '30s',
        male: 2,
        female: 1,
        total: 3,
      },
      {
        ageGroup: '40s',
        male: 0,
        female: 1,
        total: 1,
      },
      {
        ageGroup: '50s',
        male: 1,
        female: 1,
        total: 2,
      },
      {
        ageGroup: '60s',
        male: 1,
        female: 2,
        total: 3,
      },
    ];

    // 데이터 가공
    const maleData = processData('male', result);
    const femaleData = processData('female', result);

    setData({
      datasets: [
        {
          label: '남성',
          data: maleData,
          backgroundColor: ({ chart: { ctx } }) => {
            const bg = ctx.createLinearGradient(0, 50, 0, 350);
            bg.addColorStop(0, '#9d9d9d');
            bg.addColorStop(1, '#e0e0e0');
            return bg;
          },
          borderRadius: 10,
        },
        {
          label: '여성',
          data: femaleData,
          backgroundColor: ({ chart: { ctx } }) => {
            const bg = ctx.createLinearGradient(0, 100, 0, 600);
            bg.addColorStop(0, '#A97CFF');
            bg.addColorStop(1, 'rgba(217, 217, 217, 0)');
            return bg;
          },
          borderRadius: 10,
        },
      ],
    });
  }, []);

  if (type === 'normal') {
    option = barChartoption;
  } else if (type === 'small') {
    option = smallBarChartoption;
  } else if (type === 'light') {
    option = lightBarChartoption;
  }

  return (
    <Container>
      <Bar data={data} options={option} />
    </Container>
  );
}

export default AgeGroupChart;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
