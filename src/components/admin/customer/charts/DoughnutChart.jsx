import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['20대', '그 외'],
  datasets: [
    {
      data: [16, 84],
      backgroundColor: ['#AF8DF3', '#D9D9D9'],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
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
  cutout: 75,
};

function DoughnutChart() {
  return (
    <Container>
      <Doughnut data={data} options={options} />
    </Container>
  );
}

export default DoughnutChart;

const Container = styled.div`
  width: 250px;
  height: 250px;
`;
