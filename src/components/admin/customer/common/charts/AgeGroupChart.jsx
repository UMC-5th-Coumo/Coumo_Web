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

function AgeGroupChart({ type, chartData }) {
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

  useEffect(() => {
    setData({
      datasets: [
        {
          label: '남성',
          data: chartData.maleData,
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
          data: chartData.femaleData,
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
  }, [chartData]);

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
