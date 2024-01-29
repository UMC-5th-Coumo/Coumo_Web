import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  datasets: [
    {
      label: 'Dataset 1',
      data: [
        { x: '월', y: 20 },
        { x: '화', y: 58 },
        { x: '수', y: 42 },
        { x: '목', y: 70 },
        { x: '금', y: 52 },
        { x: '토', y: 67 },
        { x: '일', y: 40 },
      ],
      borderColor: '#A378F7',
      borderWidth: 4,
      backgroundColor: '#A378F7',
      lineTension: 0.3,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: 'top',
    },
    title: {
      display: false,
    },
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
};

function LineChart() {
  return <Line data={data} options={options} />;
}

export default LineChart;
