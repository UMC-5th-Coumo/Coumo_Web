import React from 'react';
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
  return (
    <Container>
      <Bar data={data} options={options} />
    </Container>
  );
}

export default BarChart;

const Container = styled.div`
  width: 550px;
  height: 300px;
`;

const data = {
  datasets: [
    {
      label: 'data1',
      data: [
        { x: '월', y: 10 },
        { x: '화', y: 40 },
        { x: '수', y: 30 },
        { x: '목', y: 20 },
        { x: '금', y: 50 },
        { x: '토', y: 10 },
        { x: '일', y: 40 },
      ],
      backgroundColor: ({ chart: { ctx } }) => {
        const bg = ctx.createLinearGradient(0, 50, 0, 300);
        bg.addColorStop(0, '#9d9d9d');
        bg.addColorStop(1, '#ffffff');
        return bg;
      },
      borderRadius: 10,
    },
    {
      label: 'data2',
      data: [
        { x: '월', y: 20 },
        { x: '화', y: 30 },
        { x: '수', y: 50 },
        { x: '목', y: 40 },
        { x: '금', y: 70 },
        { x: '토', y: 20 },
        { x: '일', y: 30 },
      ],
      backgroundColor: ({ chart: { ctx } }) => {
        const bg = ctx.createLinearGradient(0, 50, 0, 600);
        bg.addColorStop(0, '#A97CFF');
        bg.addColorStop(1, 'rgba(217, 217, 217, 0)');
        return bg;
      },
      borderRadius: 10,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  maxBarThickness: 13,
  grouped: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  interaction: {
    mode: 'index',
  },
  tooltip: {
    // 툴팁 스타일링
    bodySpacing: 5, // 툴팁 내부 항목들 간 간격
    bodyFont: {
      font: {
        family: 'Pretendard',
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  barThickness: 25,
};
