function initializeCharts() {
  const { makeBarChart, makeGroupedBar, makeLineChart, makeDoughnut } = window.NPSCharts;


  // 2025 Overview
  makeDoughnut('donut2025',
    ['Promoters 24.06%', 'Passives 28.35%', 'Detractors 47.57%'],
    [600, 707, 1186],
    ['#22c55e', '#eab308', '#ef4444']
  );

  makeBarChart('schoolBar2025',
    ['Sciences', 'Ed & Hum', 'Mgmt', 'Law', 'Engineering'],
    [15.22, -3.33, -25.60, -25.63, -29.38]
  );

  // 2025 Programs - Engineering UG
  makeBarChart('engUG2025', ['CST', 'ECE', 'ME'], [-36.89, -5.41, 42.86]);
  makeBarChart('engPG2025', ['ECE PG', 'ME PG'], [0, 50]);
  makeBarChart('engPhD2025', ['CST PhD', 'ECE PhD', 'ME PhD'], [9.52, 33.33, 50.0]);

  // 2025 Programs - SOMC
  makeBarChart('somc2025', ['UG', 'PG', 'PhD'], [-35.13, -19.61, 32.08]);
  makeBarChart('somcUG2025',
    ['Bus.Analytics', 'Entrepreneur', 'Finance', 'Healthcare', 'Operations'],
    [-40.52, -26.92, -38.71, -10.0, -37.93]
  );
  makeBarChart('law2025', ['BBA LLB', 'BA LLB', 'B.Com LLB'], [-25.63, -35, 10]);

  // 2025 Departments
  makeBarChart('deptBar2025', ['CST', 'ECE', 'ME'], [-36.89, -5.41, 42.86]);
  makeBarChart('mgtDept2025',
    ['Bus.Analytics', 'Entrepreneur', 'Finance', 'Healthcare', 'Operations'],
    [-40.52, -26.92, -38.71, -10.0, -37.93]
  );

  // 2025 Year-wise Law
  makeLineChart('bballb2025', ['1st', '2nd', '3rd', '4th', '5th'], [{
    label: 'BBA LLB', data: [-68.29, -32.26, 12.50, -13.64, -54.55],
    borderColor: '#f97316', backgroundColor: 'rgba(249,115,22,0.1)',
    pointBackgroundColor: '#f97316', tension: 0.3, fill: true
  }]);

  makeLineChart('ballb2025', ['1st', '2nd', '3rd', '4th', '5th'], [{
    label: 'BA LLB', data: [-38.64, -44.68, -15.09, -55.56, -35.14],
    borderColor: '#ef4444', backgroundColor: 'rgba(239,68,68,0.1)',
    pointBackgroundColor: '#ef4444', tension: 0.3, fill: true
  }]);

  makeLineChart('bbaFin2025', ['1st', '2nd', '3rd'], [{
    label: 'Finance & Accounts', data: [21.05, -46.15, -58.33],
    borderColor: '#06b6d4', backgroundColor: 'rgba(6,182,212,0.1)',
    pointBackgroundColor: '#06b6d4', tension: 0.3, fill: true
  }]);

  makeLineChart('bbaEntrepr2025', ['1st', '2nd', '3rd'], [{
    label: 'Entrepreneurship', data: [-20.69, -28.57, 50.0],
    borderColor: '#22c55e', backgroundColor: 'rgba(34,197,94,0.1)',
    pointBackgroundColor: '#22c55e', tension: 0.3, fill: true
  }]);

  // 2025 Services by School
  makeGroupedBar('servicesSchool2025',
    ['SoEH', 'SoE', 'SoL', 'SoMC', 'SoS'],
    [
      { label: 'Library', data: [-8.89, -10.77, -15.76, -10.72, 14.13], backgroundColor: 'rgba(59,130,246,0.7)', borderRadius: 4 },
      { label: 'Wi-Fi/IT', data: [-17.04, -33.31, -35.50, -26.48, 13.04], backgroundColor: 'rgba(239,68,68,0.7)', borderRadius: 4 },
      { label: 'Examination', data: [-7.41, -15.78, -12.39, -15.10, 26.09], backgroundColor: 'rgba(34,197,94,0.7)', borderRadius: 4 },
    ]
  );

  // 2026 Overview
  makeDoughnut('donut2026',
    ['Promoters 25.95%', 'Passives 28.18%', 'Detractors 45.85%'],
    [677, 735, 1196],
    ['#22c55e', '#eab308', '#ef4444']
  );

  makeBarChart('schoolBar2026',
    ['Sciences', 'Engineering', 'Ed & Hum', 'Business', 'Law'],
    [20.75, -19.53, -19.61, -20.80, -25.10]
  );

  // 2026 Programs
  makeBarChart('soehProg2026', ['UG', 'PG', 'PhD'], [-24.64, -33.33, 14.29]);
  makeBarChart('soehUG2026', ['BA BED', 'BSC BED', 'BED'], [-21.36, -8.51, -40.98]);
  makeBarChart('sosProg2026', ['PG', 'PhD'], [-59.5, 48.65]);
  makeBarChart('sobProg2026', ['UG', 'PG', 'PhD'], [-35, -19.61, 32.08]);
  makeBarChart('soeProgUG2026', ['CST', 'ECE', 'ME', 'Robotics & AI'], [-27.90, 17.31, -1.15, -4.82]);

  // 2026 Departments
  makeBarChart('deptBar2026', ['CST', 'ECE', 'ME', 'Robotics & AI'], [-27.90, 17.31, -1.15, -4.82]);
  makeBarChart('deptChange2026', ['CST', 'ECE', 'ME', 'Robotics & AI'], [7.16, 19.78, -44.79, 37.08]);

  // Compare - Overview
  makeLineChart('overallTrend', ['2025', '2026'], [{
    label: 'University NPS', data: [-23.50, -19.19],
    borderColor: '#3b82f6', backgroundColor: 'rgba(59,130,246,0.1)',
    pointBackgroundColor: '#3b82f6', tension: 0.3, fill: true,
    pointRadius: 8, pointHoverRadius: 10
  }]);

  makeGroupedBar('catCompare', ['Promoters%', 'Passives%', 'Detractors%'], [
    { label: '2025', data: [24.06, 28.35, 47.57], backgroundColor: 'rgba(59,130,246,0.7)', borderRadius: 4 },
    { label: '2026', data: [25.95, 28.18, 45.85], backgroundColor: 'rgba(6,182,212,0.7)', borderRadius: 4 },
  ]);

  // Compare Schools
  makeGroupedBar('schoolCompare',
    ['Sciences', 'Engineering', 'Business/Mgmt', 'Law', 'Ed & Hum'],
    [
      { label: '2025', data: [15.22, -29.38, -25.60, -25.63, -3.33], backgroundColor: 'rgba(59,130,246,0.7)', borderRadius: 4 },
      { label: '2026', data: [20.75, -19.53, -20.80, -25.10, -19.61], backgroundColor: 'rgba(6,182,212,0.7)', borderRadius: 4 },
    ]
  );

  // Compare Departments
  makeGroupedBar('deptCompare', ['CST', 'ECE', 'ME', 'Robotics & AI'], [
    { label: '2025', data: [-35.06, -2.47, 43.64, -41.90], backgroundColor: 'rgba(59,130,246,0.7)', borderRadius: 4 },
    { label: '2026', data: [-27.90, 17.31, -1.15, -4.82], backgroundColor: 'rgba(6,182,212,0.7)', borderRadius: 4 },
  ]);

  // Compare Services
  makeGroupedBar('servicesCompare',
    ['Library', 'Curriculum', 'Examination', 'Campus Life', 'Facilities', 'Wi-Fi/IT', 'Registrar'],
    [
      { label: '2025', data: [-10.59, -13.96, -12.56, -18.85, -21.70, -29.00, -14.07], backgroundColor: 'rgba(59,130,246,0.7)', borderRadius: 4 },
      { label: '2026', data: [-24.35, -3.72, -3.83, -12.42, -13.77, -33.93, -11.66], backgroundColor: 'rgba(6,182,212,0.7)', borderRadius: 4 },
    ]
  );

  // ========== 2025 ADDITIONAL CHARTS ==========
  // 2025 SoMC PG
  makeBarChart('somcPG2025', ['MBA Bus.Analytics'], [-19.61]);
  // 2025 Law
  makeBarChart('lawPG2025', ['LLM'], [10]);
  makeBarChart('lawPhD2025', ['Law PhD'], [20.51]);
  // 2025 SoEH
  makeBarChart('soehUG2025', ['BA.BED', 'B.ED', 'B.SC BED'], [-4.81, 1.16, -35.0]);
  makeBarChart('soehProg2025', ['UG', 'PG', 'PhD'], [-7.83, 0, 22.50]);
  makeBarChart('soehPhD2025', ['Ed & Hum PhD'], [22.50]);
  // 2025 SoS
  makeBarChart('sosUG2025', ['Sciences UG'], [-10.0]);
  makeBarChart('sosPG2025', ['M.Sc'], [25]);
  makeBarChart('sosPhD2025', ['Sciences PhD'], [20.83]);

  // ========== 2026 ADDITIONAL CHARTS ==========
  makeBarChart('soehPhD2026', ['Ed & Hum PhD'], [14.29]);
  makeBarChart('sosPhD2026', ['Sciences PhD'], [48.65]);
  makeBarChart('sobUGSpec2026',
    ['Bus.Analytics', 'Entrepreneur', 'Finance', 'Healthcare', 'Operations'],
    [-40.52, -26.92, -38.71, -10.0, -37.93]
  );
  makeBarChart('soePhD2026', ['CST PhD', 'ECE PhD', 'ME PhD'], [9.52, 33.33, 50.0]);
  makeBarChart('solUG2026', ['BBA LLB', 'BA LLB', 'B.Com LLB'], [-25.10, -35, 10]);
  makeBarChart('solPG2026', ['LLM'], [10]);
  makeBarChart('solPhD2026', ['Law PhD'], [20.51]);
}

window.initializeCharts = initializeCharts;
