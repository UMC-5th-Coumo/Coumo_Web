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

function BarChart({ type, chartData }) {
  let option = {};
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

  useEffect(() => {
    setData({
      datasets: [
        {
          label: '방문자 수',
          data: chartData,
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

  if (type === 'weekly') {
    option = barChartoption;
  } else if (type === 'monthly') {
    option = smallBarChartoption;
  }

  return (
    <Container>
      <Bar data={data} options={option} />
    </Container>
  );
}

export default BarChart;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
