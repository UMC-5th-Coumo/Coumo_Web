export const barChartoption = {
  responsive: true,
  maintainAspectRatio: false,
  maxBarThickness: 13,
  grouped: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      intersect: false,
      position: 'nearest',
      displayColors: false,
      bodySpacing: 5, // 툴팁 내부 항목들 간 간격
      bodyFont: {
        font: {
          family: 'Pretendard',
        },
      },
    },
  },
  interaction: {
    mode: 'index',
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
      beginAtZero: true,
    },
  },
  barThickness: 25,
};

export const smallBarChartoption = {
  responsive: true,
  maintainAspectRatio: false,
  maxBarThickness: 10,
  grouped: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      intersect: false,
      displayColors: false,
      position: 'nearest',
      bodySpacing: 5, // 툴팁 내부 항목들 간 간격
      bodyFont: {
        font: {
          family: 'Pretendard',
        },
      },
    },
  },
  interaction: {
    mode: 'index',
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
      beginAtZero: true,
    },
  },
  barThickness: 20,
};

export const lightBarChartoption = {
  responsive: true,
  maintainAspectRatio: false,
  maxBarThickness: 7,
  grouped: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      intersect: false,
      displayColors: false,
      position: 'nearest',
      bodySpacing: 5, // 툴팁 내부 항목들 간 간격
      bodyFont: {
        font: {
          family: 'Pretendard',
        },
      },
    },
  },
  interaction: {
    mode: 'index',
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
      beginAtZero: true,
    },
  },
  barThickness: 15,
};

export const lineChartOption = {
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
    tooltip: {
      intersect: false,
      displayColors: false,
      position: 'nearest',
      bodySpacing: 1, // 툴팁 내부 항목들 간 간격
      bodyFont: {
        font: {
          family: 'Pretendard',
        },
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
      beginAtZero: true,
    },
  },
};

export const doughnutChartOption = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
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
  },

  cutout: 60,
};
