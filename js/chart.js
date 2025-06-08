const revenueCtx = document.getElementById('revenueChart').getContext('2d');
const customerCtx = document.getElementById('customerChart').getContext('2d');

// Sample Data
const data = {
  2024: {
    revenue: [25, 40, 65, 90],
    customers: [120, 150, 210, 280]
  },
  2023: {
    revenue: [15, 35, 50, 70],
    customers: [80, 100, 130, 180]
  }
};

const labels = ['Q1', 'Q2', 'Q3', 'Q4'];

// Revenue Chart
let revenueChart = new Chart(revenueCtx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Revenue ($K)',
      data: data[2024].revenue,
      backgroundColor: '#2563eb'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: 'InnovateX Revenue Trends - 2024' }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { callback: value => `$${value}K` }
      }
    }
  }
});

// Customer Chart
let customerChart = new Chart(customerCtx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'New Customers',
      data: data[2024].customers,
      borderColor: '#10b981',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      tension: 0.3,
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: 'Customer Signups - 2024' }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Sync with year selection
document.getElementById('yearSelector').addEventListener('change', function () {
  const selectedYear = this.value;

  // Update revenue chart
  revenueChart.data.datasets[0].data = data[selectedYear].revenue;
  revenueChart.options.plugins.title.text = `InnovateX Revenue Trends - ${selectedYear}`;
  revenueChart.update();

  // Update customer chart
  customerChart.data.datasets[0].data = data[selectedYear].customers;
  customerChart.options.plugins.title.text = `Customer Signups - ${selectedYear}`;
  customerChart.update();
});
