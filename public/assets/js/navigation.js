const C = (id) => document.getElementById(id);

// ========== SCHOOL FILTER FUNCTIONS ==========
function filterSchool2025(school, btn) {
  document.querySelectorAll('#schoolFilter2025 .school-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const panel = C('2025-programs');
  panel.querySelectorAll('.prog-school-block').forEach(b => {
    if (school === 'all') { b.classList.remove('hidden'); }
    else { b.classList.toggle('hidden', !b.classList.contains('prog-' + school)); }
  });
}

function filterSchool2026(school, btn) {
  document.querySelectorAll('#schoolFilter2026 .school-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const panel = C('2026-programs');
  panel.querySelectorAll('.prog-school-block').forEach(b => {
    if (school === 'all') { b.classList.remove('hidden'); }
    else { b.classList.toggle('hidden', !b.classList.contains('prog2026-' + school)); }
  });
}

function filterServices2025(school, btn) {
  document.querySelectorAll('#servFilter2025 .school-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const panel = C('2025-services');
  panel.querySelectorAll('.serv-block').forEach(b => b.style.display = 'none');
  const cls = school === 'all' ? 'serv-all-2025' : 'serv-' + school + '-2025';
  const el = panel.querySelector('.' + cls);
  if (el) el.style.display = 'block';
}

function filterServices2026(school, btn) {
  document.querySelectorAll('#servFilter2026 .school-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const panel = C('2026-services');
  panel.querySelectorAll('.serv-block').forEach(b => b.style.display = 'none');
  const cls = school === 'all' ? 'serv-all-2026' : 'serv-' + school + '-2026';
  const el = panel.querySelector('.' + cls);
  if (el) el.style.display = 'block';
}


function switchYear(year) {
  ['2025','2026','compare'].forEach(y => {
    C(`year-${y}`).classList.remove('active');
  });
  C(`year-${year}`).classList.add('active');

  document.querySelectorAll('.year-tab').forEach((t,i) => {
    t.classList.remove('active');
    if (['2025','2026','compare'][i] === year) t.classList.add('active');
  });
}

function switchSection(year, section, clickEvent) {
  const yearPanel = C(`year-${year}`);
  yearPanel.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  yearPanel.querySelectorAll('.section-tab').forEach(t => t.classList.remove('active'));
  C(`${year}-${section}`).classList.add('active');
  clickEvent.currentTarget.classList.add('active');
}

window.switchYear = switchYear;
window.switchSection = switchSection;
window.filterSchool2025 = filterSchool2025;
window.filterSchool2026 = filterSchool2026;
window.filterServices2025 = filterServices2025;
window.filterServices2026 = filterServices2026;
