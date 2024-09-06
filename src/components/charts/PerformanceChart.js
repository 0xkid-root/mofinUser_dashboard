import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Filler } from 'chart.js';

// Register chart components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Filler);

const PerformanceChart = ({ chartSize }) => {
  const initialData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Dataset',
        data: [1000, 2000, 2500, 2000, 4000, 5000, 3000, 6500, 8500, 6000, 9000, 8000],
        borderColor: '#FFB1C1',
        backgroundColor: '#FFB1C188',
        fill: 'start',
        tension: 0.4,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Performance Chart',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value',
        },
        ticks: {
          callback: function (value) {
            return `$${value}`;
          },
          stepSize: 1000,
        },
      },
    },
  };

  return (
    <div style={{ width: chartSize.width, height: chartSize.height }}>
      <Line data={initialData} options={options} />
    </div>
  );
};

export default PerformanceChart;
