import React, { useEffect, useState } from 'react';
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
import { lineChartOption } from '../../../../../assets/data/chartOptions';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart({ type = 'normal', chartData }) {
  const [data, setData] = useState({
    datasets: [
      {
        label: '방문자 수',
        data: [],
        borderColor: '#A378F7',
        borderWidth: 4,
        backgroundColor: '#A378F7',
        lineTension: 0.3,
      },
    ],
  });

  useEffect(() => {
    setData({
      datasets: [
        {
          label: '방문자 수',
          data: chartData,
          borderColor: '#A378F7',
          borderWidth: type === 'normal' ? 4 : 3,
          backgroundColor: '#A378F7',
          lineTension: 0.3,
        },
      ],
    });
  }, [chartData]);

  return <Line data={data} options={lineChartOption} />;
}

export default LineChart;
