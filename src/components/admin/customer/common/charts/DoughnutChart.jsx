import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
import { doughnutChartOption } from '../../../../../assets/data/chartOptions';
ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ chartData }) {
  const [data, setData] = useState({
    labels: ['여성', '남성'],
    datasets: [
      {
        data: [16, 84],
        backgroundColor: ['#AF8DF3', '#D9D9D9'],
      },
    ],
  });

  useEffect(() => {
    setData({
      labels: ['여성', '남성'],
      datasets: [
        {
          data: [chartData.female, chartData.male],
          backgroundColor: ['#AF8DF3', '#D9D9D9'],
        },
      ],
    });
  }, [chartData]);

  return (
    <Container>
      <Doughnut data={data} options={doughnutChartOption} />
    </Container>
  );
}

export default DoughnutChart;

const Container = styled.div`
  width: 200px;
  height: 200px;
`;
