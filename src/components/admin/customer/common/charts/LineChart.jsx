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

  const processMonthlyData = (chartData) => {
    return chartData.map((data) => {
      let newData = {
        x: '',
        y: data.totalCustomer,
      };

      // 요일 변경
      switch (data.day) {
        case 'MON':
          newData.x += '월';
          break;
        case 'TUE':
          newData.x += '화';
          break;
        case 'WED':
          newData.x += '수';
          break;
        case 'THU':
          newData.x += '목';
          break;
        case 'FRI':
          newData.x += '금';
          break;
        case 'SAT':
          newData.x += '토';
          break;
        case 'SUN':
          newData.x += '일';
          break;
        default:
          break;
      }
      return newData;
    });
  };

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
