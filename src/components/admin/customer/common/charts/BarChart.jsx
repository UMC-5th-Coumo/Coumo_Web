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
import { barChartoption } from '../../../../../assets/data/chartOptions';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  plugins
);

function BarChart() {
  const [data, setData] = useState({
    datasets: [
      {
        label: '',
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
  const processData = (chartData) => {
    return chartData.map((data) => {
      let newData = {
        x: data.date.split('-').slice(1).join('/'),
        y: data.totalCustomer,
      };

      // 요일 변경
      switch (data.day) {
        case 'MON':
          newData.x += '(월)';
          break;
        case 'TUE':
          newData.x += '(화)';
          break;
        case 'WED':
          newData.x += '(수)';
          break;
        case 'THU':
          newData.x += '(목)';
          break;
        case 'FRI':
          newData.x += '(금)';
          break;
        case 'SAT':
          newData.x += '(토)';
          break;
        case 'SUN':
          newData.x += '(일)';
          break;
        default:
          break;
      }
      return newData;
    });
  };

  useEffect(() => {
    // 서버 요청 후 응답 - 방문자수
    const result = [
      {
        day: 'THU',
        date: '2024-01-25',
        totalCustomer: 13,
      },
      {
        day: 'FRI',
        date: '2024-01-26',
        totalCustomer: 5,
      },
      {
        day: 'SAT',
        date: '2024-01-27',
        totalCustomer: 4,
      },
      {
        day: 'SUN',
        date: '2024-01-28',
        totalCustomer: 8,
      },
      {
        day: 'MON',
        date: '2024-01-29',
        totalCustomer: 3,
      },
      {
        day: 'TUE',
        date: '2024-01-30',
        totalCustomer: 10,
      },
      {
        day: 'WED',
        date: '2024-01-31',
        totalCustomer: 9,
      },
    ];

    // 데이터 가공
    const processedData = processData(result);

    setData({
      datasets: [
        {
          label: '방문자 수',
          data: processedData,
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

  return (
    <Container>
      <Bar data={data} options={barChartoption} />
    </Container>
  );
}

export default BarChart;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
