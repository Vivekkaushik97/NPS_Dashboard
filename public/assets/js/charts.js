(function () {
// ========== HELPERS ==========
const C = (id) => document.getElementById(id);

function npsColor(val) {
  if (val >= 0) return '#22c55e';
  if (val >= -15) return '#eab308';
  if (val >= -25) return '#f97316';
  return '#ef4444';
}

const chartDefaults = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      labels: { color: '#64748b', font: { size: 11 }, boxWidth: 12 } // Changed text color
    },
    tooltip: {
      backgroundColor: '#ffffff', // White tooltip
      borderColor: '#e2e8f0',     // Light border
      borderWidth: 1,
      titleColor: '#0f172a',      // Dark title
      bodyColor: '#475569',       // Dark body text
    }
  },
  scales: {
    x: { ticks: { color: '#64748b', font: { size: 10 } }, grid: { color: 'rgba(0,0,0,0.05)' } }, // Darker grid lines
    y: { ticks: { color: '#64748b', font: { size: 10 } }, grid: { color: 'rgba(0,0,0,0.05)' } }  // Darker grid lines
  }
};

function makeBarChart(id, labels, data, title='NPS') {
  const ctx = C(id);
  if (!ctx) return;
  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: title,
        data,
        backgroundColor: data.map(v => npsColor(v) + 'aa'),
        borderColor: data.map(v => npsColor(v)),
        borderWidth: 1.5,
        borderRadius: 6,
      }]
    },
    options: {
      ...chartDefaults,
      plugins: { ...chartDefaults.plugins, legend: { display: false } },
      scales: {
        x: { ...chartDefaults.scales.x, ticks: { ...chartDefaults.scales.x.ticks, maxRotation: 30 } },
        y: { ...chartDefaults.scales.y, ticks: { callback: v => v > 0 ? '+'+v : v } }
      }
    }
  });
}

function makeGroupedBar(id, labels, datasets) {
  const ctx = C(id);
  if (!ctx) return;
  return new Chart(ctx, {
    type: 'bar',
    data: { labels, datasets },
    options: {
      ...chartDefaults,
      scales: {
        x: { ...chartDefaults.scales.x, ticks: { ...chartDefaults.scales.x.ticks, maxRotation: 30 } },
        y: { ...chartDefaults.scales.y, ticks: { callback: v => v > 0 ? '+'+v : v } }
      }
    }
  });
}

function makeLineChart(id, labels, datasets) {
  const ctx = C(id);
  if (!ctx) return;
  return new Chart(ctx, {
    type: 'line',
    data: { labels, datasets },
    options: {
      ...chartDefaults,
      scales: {
        x: chartDefaults.scales.x,
        y: { ...chartDefaults.scales.y, ticks: { callback: v => v > 0 ? '+'+v : v } }
      }
    }
  });
}

function makeDoughnut(id, labels, data, colors) {
  const ctx = C(id);
  if (!ctx) return;
 return new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels,
      datasets: [{ data, backgroundColor: colors, borderWidth: 2, borderColor: '#ffffff' }] // Changed to #ffffff
    },
    // ... rest of the options
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { position: 'bottom', labels: { color: '#94a3b8', font: { size: 11 }, boxWidth: 12 } },
        tooltip: chartDefaults.plugins.tooltip,
      },
      cutout: '60%'
    }
  });
}

window.NPSCharts = { makeBarChart, makeGroupedBar, makeLineChart, makeDoughnut };
})();
