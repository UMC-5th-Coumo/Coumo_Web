import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
import { doughnutChartOption } from '../../../../../assets/data/chartOptions';
ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {
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
    const result = {
      male: 33.33333333333333,
      female: 66.66666666666666,
    };

    const processedData = {
      male: result.male.toFixed(2),
      female: 100 - result.male.toFixed(2),
    };

    setData({
      labels: ['여성', '남성'],
      datasets: [
        {
          data: [processedData.female, processedData.male],
          backgroundColor: ['#AF8DF3', '#D9D9D9'],
        },
      ],
    });
  }, []);

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
