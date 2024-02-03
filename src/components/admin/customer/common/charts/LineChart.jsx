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

function LineChart() {
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

  const processData = (chartData) => {
    return chartData.map((data) => ({
      x: data.startTime.slice(0, 5),
      y: data.totalCustomer,
    }));
  };

  useEffect(() => {
    const result = [
      {
        startTime: '00:00:00',
        totalCustomer: 1,
      },
      {
        startTime: '01:00:00',
        totalCustomer: 2,
      },
      {
        startTime: '02:00:00',
        totalCustomer: 8,
      },
      {
        startTime: '03:00:00',
        totalCustomer: 4,
      },
      {
        startTime: '04:00:00',
        totalCustomer: 10,
      },
      {
        startTime: '05:00:00',
        totalCustomer: 7,
      },
      {
        startTime: '06:00:00',
        totalCustomer: 8,
      },
      {
        startTime: '07:00:00',
        totalCustomer: 11,
      },
      {
        startTime: '08:00:00',
        totalCustomer: 3,
      },
      {
        startTime: '09:00:00',
        totalCustomer: 6,
      },
      {
        startTime: '10:00:00',
        totalCustomer: 3,
      },
      {
        startTime: '11:00:00',
        totalCustomer: 0,
      },
      {
        startTime: '12:00:00',
        totalCustomer: 5,
      },
      {
        startTime: '13:00:00',
        totalCustomer: 8,
      },
      {
        startTime: '14:00:00',
        totalCustomer: 2,
      },
      {
        startTime: '15:00:00',
        totalCustomer: 8,
      },
      {
        startTime: '16:00:00',
        totalCustomer: 10,
      },
      {
        startTime: '17:00:00',
        totalCustomer: 11,
      },
      {
        startTime: '18:00:00',
        totalCustomer: 3,
      },
    ];

    // 데이터 가공
    const processedData = processData(result);

    setData({
      datasets: [
        {
          label: '방문자 수',
          data: processedData,
          borderColor: '#A378F7',
          borderWidth: 4,
          backgroundColor: '#A378F7',
          lineTension: 0.3,
        },
      ],
    });
  }, []);

  return <Line data={data} options={lineChartOption} />;
}

export default LineChart;
