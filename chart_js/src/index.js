import Chart from 'chart.js/auto'

(async function() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
    { year: 2017, count: 26 },
    { year: 2018, count: 24 },
    { year: 2019, count: 22 },
    { year: 2020, count: 20 },
    { year: 2021, count: 22 },
    { year: 2022, count: 24 },
    { year: 2023, count: 26 },
    { year: 2024, count: 28 },
    { year: 2025, count: 30 },
    { year: 2026, count: 30 },
    { year: 2027, count: 30 },
    { year: 2028, count: 30 },
    { year: 2029, count: 30 },
    { year: 2030, count: 70 },
  ];

  new Chart(
    document.getElementById('diagram'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();
