document.addEventListener("DOMContentLoaded", function () {
  // --- BASE DE DATOS AMPLIADA: MUNICIPIOS DE ANTIOQUIA (PERIODO 2021) ---
  const municipalitiesData = [
    { id: "05001", name: "Medellín", lat: 6.2442, lng: -75.5812, failures: 1420, rain: 210, resSub: 420000, nonResSub: 45000, loss: 125000000, strata: [85000, 110000, 105000, 60000, 35000, 25000], climateSeries: [110, 130, 190, 250, 240, 180, 160, 200, 230, 280], financialSeries: [25, 28, 42, 55, 48, 35, 30, 45, 50, 68] },
    { id: "05088", name: "Bello", lat: 6.3370, lng: -75.5579, failures: 890, rain: 185, resSub: 180000, nonResSub: 12000, loss: 68000000, strata: [55000, 62000, 41000, 15000, 5000, 2000], climateSeries: [95, 115, 165, 220, 200, 150, 135, 175, 200, 240], financialSeries: [15, 18, 22, 30, 25, 19, 16, 21, 24, 32] },
    { id: "05360", name: "Itagüí", lat: 6.1846, lng: -75.5991, failures: 650, rain: 160, resSub: 95000, nonResSub: 15000, loss: 45000000, strata: [20000, 38000, 25000, 9000, 2000, 1000], climateSeries: [80, 100, 140, 190, 180, 130, 120, 150, 170, 210], financialSeries: [10, 12, 16, 21, 19, 14, 12, 16, 18, 22] },
    { id: "05266", name: "Envigado", lat: 6.1759, lng: -75.5818, failures: 420, rain: 140, resSub: 88000, nonResSub: 11000, loss: 32000000, strata: [2000, 8000, 22000, 28000, 18000, 10000], climateSeries: [70, 90, 130, 170, 160, 110, 100, 130, 150, 180], financialSeries: [6, 8, 11, 15, 13, 10, 9, 12, 13, 16] },
    { id: "05615", name: "Rionegro", lat: 6.1552, lng: -75.3737, failures: 780, rain: 230, resSub: 45000, nonResSub: 8500, loss: 54000000, strata: [8000, 14000, 12000, 7000, 3000, 1000], climateSeries: [130, 150, 210, 270, 250, 200, 180, 220, 240, 290], financialSeries: [12, 14, 19, 25, 22, 17, 15, 20, 22, 28] },
    { id: "05045", name: "Apartadó", lat: 7.8829, lng: -76.6258, failures: 980, rain: 290, resSub: 38000, nonResSub: 3800, loss: 71000000, strata: [18000, 13000, 5200, 1400, 300, 100], climateSeries: [150, 180, 250, 320, 300, 240, 220, 270, 290, 350], financialSeries: [16, 19, 26, 33, 30, 23, 20, 27, 29, 36] },
    { id: "05837", name: "Turbo", lat: 8.0936, lng: -76.7282, failures: 850, rain: 305, resSub: 31000, nonResSub: 2900, loss: 62000000, strata: [15000, 11000, 3800, 1000, 200, 0], climateSeries: [155, 185, 260, 330, 310, 250, 230, 280, 300, 360], financialSeries: [14, 16, 22, 29, 26, 20, 18, 24, 26, 32] },
    { id: "05154", name: "Caucasia", lat: 7.9865, lng: -75.1957, failures: 1150, rain: 310, resSub: 32000, nonResSub: 3200, loss: 82000000, strata: [15000, 11000, 4500, 1200, 200, 100], climateSeries: [160, 190, 270, 340, 320, 260, 240, 290, 310, 380], financialSeries: [18, 21, 29, 38, 35, 27, 24, 31, 34, 42] },
    { id: "05887", name: "Yarumal", lat: 6.9697, lng: -75.4194, failures: 340, rain: 195, resSub: 14000, nonResSub: 1500, loss: 24000000, strata: [7000, 5000, 1500, 450, 50, 0], climateSeries: [100, 120, 170, 230, 210, 160, 140, 180, 200, 250], financialSeries: [5, 6, 8, 11, 10, 7, 6, 9, 10, 13] },
    { id: "05697", name: "Santa Fe de Antioquia", lat: 6.5558, lng: -75.8283, failures: 290, rain: 120, resSub: 11000, nonResSub: 1800, loss: 19000000, strata: [4000, 4500, 2000, 450, 50, 0], climateSeries: [60, 75, 110, 150, 140, 95, 85, 110, 125, 150], financialSeries: [4, 5, 7, 9, 8, 6, 5, 7, 8, 10] },
    { id: "05543", name: "Puerto Berrío", lat: 6.4912, lng: -74.4036, failures: 510, rain: 240, resSub: 19000, nonResSub: 2100, loss: 38000000, strata: [9000, 7500, 2000, 450, 50, 0], climateSeries: [120, 145, 205, 275, 255, 195, 175, 225, 245, 295], financialSeries: [8, 10, 13, 18, 16, 12, 11, 15, 16, 20] },
    { id: "05308", name: "Girardota", lat: 6.3789, lng: -75.4450, failures: 310, rain: 175, resSub: 15000, nonResSub: 1400, loss: 22000000, strata: [7500, 5500, 1600, 350, 50, 0], climateSeries: [90, 110, 155, 210, 195, 145, 130, 165, 185, 225], financialSeries: [5, 6, 8, 10, 9, 7, 6, 8, 9, 12] },
    { id: "05212", name: "Copacabana", lat: 6.3475, lng: -75.5078, failures: 380, rain: 180, resSub: 21000, nonResSub: 1800, loss: 27000000, strata: [10000, 8000, 2300, 600, 100, 0], climateSeries: [92, 112, 160, 215, 200, 150, 135, 170, 190, 230], financialSeries: [6, 7, 10, 13, 11, 8, 7, 10, 11, 14] },
    { id: "05380", name: "La Ceja", lat: 5.9794, lng: -75.4214, failures: 320, rain: 215, resSub: 22000, nonResSub: 2200, loss: 23000000, strata: [7000, 10000, 3500, 1200, 250, 50], climateSeries: [115, 135, 195, 255, 245, 185, 165, 205, 235, 285], financialSeries: [5, 6, 8, 11, 10, 7, 6, 9, 10, 12] },
    { id: "05321", name: "Guarne", lat: 6.2831, lng: -75.4431, failures: 350, rain: 205, resSub: 18000, nonResSub: 1900, loss: 25000000, strata: [6000, 8500, 2600, 750, 130, 20], climateSeries: [105, 125, 185, 245, 230, 175, 155, 195, 220, 270], financialSeries: [5, 7, 9, 12, 10, 8, 7, 10, 11, 13] }
  ];

  let selectedMuniId = null;
  let stratumChart, climateChart, financialChart, map;

  // --- CONSOLIDADOS GLOBALES 2021 (TODOS LOS MUNICIPIOS) ---
  const globalClimate2021 = [120, 140, 210, 280, 260, 190, 170, 220, 250, 310];
  const globalFinancial2021 = [25, 28, 42, 55, 48, 35, 30, 45, 50, 68];

  // --- 1. INICIALIZAR MAPA ESPACIAL (OPENSTREETMAP NATIVO) ---
  function initMap() {
    map = L.map('map', {
      center: [6.8, -75.5],
      zoom: 8,
      zoomControl: true
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    // Renderizar todos los marcadores en el mapa de Antioquia
    municipalitiesData.forEach(muni => {
      const radius = Math.max(7, Math.min(22, muni.failures / 65));
      const color = muni.failures > 800 ? '#F59E0B' : '#06B6D4';

      const circle = L.circleMarker([muni.lat, muni.lng], {
        radius: radius,
        fillColor: color,
        color: '#FFFFFF',
        weight: 1.5,
        opacity: 0.9,
        fillOpacity: 0.75
      }).addTo(map);

      circle.bindTooltip(`
        <div class="text-xs p-1">
          <strong class="text-amber-400 text-sm block mb-1">${muni.name}</strong>
          <div>Fallas en Red: <strong class="text-white">${muni.failures}</strong></div>
          <div>Lluvia: <strong class="text-blue-400">${muni.rain} mm</strong></div>
          <div>Suscriptores: <strong class="text-cyan-400">${(muni.resSub / 1000).toFixed(1)}k</strong></div>
        </div>
      `);

      circle.on('click', () => {
        selectMunicipality(muni.id);
      });
    });

    setTimeout(() => map.invalidateSize(), 300);
  }

  // --- 2. INICIALIZAR GRÁFICOS (CHART.JS) ---
  function initCharts() {
    Chart.defaults.color = '#94A3B8';
    Chart.defaults.font.family = 'sans-serif';

    // A. Gráfico de Suscriptores por Estrato
    const ctxStratum = document.getElementById('stratumChart').getContext('2d');
    stratumChart = new Chart(ctxStratum, {
      type: 'bar',
      data: {
        labels: ['Estrato 1', 'Estrato 2', 'Estrato 3', 'Estrato 4', 'Estrato 5', 'Estrato 6'],
        datasets: [{
          label: 'Cantidad de Suscriptores',
          data: getAggregatedStrata(),
          backgroundColor: ['#06B6D4', '#0284C7', '#3B82F6', '#6366F1', '#8B5CF6', '#A855F7'],
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { grid: { color: '#1E293B' } },
          x: { grid: { display: false } }
        }
      }
    });

    // B. Gráfico Climático
    const ctxClimate = document.getElementById('climateChart').getContext('2d');
    climateChart = new Chart(ctxClimate, {
      type: 'line',
      data: {
        labels: ['Ene 2021', 'Feb 2021', 'Mar 2021', 'Abr 2021', 'May 2021', 'Jun 2021', 'Jul 2021', 'Ago 2021', 'Sep 2021', 'Oct 2021'],
        datasets: [{
          label: 'Precipitación Pluvial (mm)',
          data: globalClimate2021,
          borderColor: '#3B82F6',
          backgroundColor: 'rgba(59, 130, 246, 0.15)',
          fill: true,
          tension: 0.3,
          pointBackgroundColor: '#60A5FA'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { grid: { color: '#1E293B' } },
          x: { grid: { display: false } }
        }
      }
    });

    // C. Gráfico de Pérdidas Financieras
    const ctxFinancial = document.getElementById('financialChart').getContext('2d');
    financialChart = new Chart(ctxFinancial, {
      type: 'bar',
      data: {
        labels: ['Ene 2021', 'Feb 2021', 'Mar 2021', 'Abr 2021', 'May 2021', 'Jun 2021', 'Jul 2021', 'Ago 2021', 'Sep 2021', 'Oct 2021'],
        datasets: [{
          label: 'Pérdida Financiera (Millones COP)',
          data: globalFinancial2021,
          backgroundColor: '#F43F5E',
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { grid: { color: '#1E293B' } },
          x: { grid: { display: false } }
        }
      }
    });
  }

  // --- CÁLCULOS AGREGADOS ---
  function getAggregatedStrata() {
    if (selectedMuniId) {
      const muni = municipalitiesData.find(m => m.id === selectedMuniId);
      return muni ? muni.strata : [0, 0, 0, 0, 0, 0];
    }
    return municipalitiesData.reduce((acc, current) => {
      return acc.map((val, idx) => val + current.strata[idx]);
    }, [0, 0, 0, 0, 0, 0]);
  }

  // --- SELECCIONAR MUNICIPIO (FILTRA TODAS LAS MÉTRICAS) ---
  function selectMunicipality(id) {
    selectedMuniId = id;
    const muni = municipalitiesData.find(m => m.id === id);

    if (muni) {
      document.getElementById('reset-filter-btn').classList.remove('hidden');
      document.getElementById('active-muni-label').innerText = muni.name;

      // Actualizar KPIs Superiores
      document.getElementById('kpi-subscribers').innerText = `${(muni.resSub / 1000).toFixed(1)} mil`;
      document.getElementById('kpi-non-res').innerText = `${(muni.nonResSub / 1000).toFixed(1)} mil`;
      document.getElementById('kpi-rainfall').innerText = `${muni.rain} mm`;
      document.getElementById('kpi-financial-loss').innerText = `$${(muni.loss / 1000000).toFixed(1)}M COP`;

      // 1. Actualizar Gráfico de Estratos
      stratumChart.data.datasets[0].data = muni.strata;
      stratumChart.update();

      // 2. Actualizar Gráfico Climático
      climateChart.data.datasets[0].data = muni.climateSeries;
      climateChart.update();

      // 3. Actualizar Gráfico Financiero
      financialChart.data.datasets[0].data = muni.financialSeries;
      financialChart.update();
    }
  }

  // --- RESTABLECER FILTROS ---
  document.getElementById('reset-filter-btn').addEventListener('click', () => {
    selectedMuniId = null;
    document.getElementById('reset-filter-btn').classList.add('hidden');

    const totalRes = municipalitiesData.reduce((acc, m) => acc + m.resSub, 0);
    const totalNonRes = municipalitiesData.reduce((acc, m) => acc + m.nonResSub, 0);
    const totalRain = municipalitiesData.reduce((acc, m) => acc + m.rain, 0);
    const totalLoss = municipalitiesData.reduce((acc, m) => acc + m.loss, 0);

    document.getElementById('kpi-subscribers').innerText = `${(totalRes / 1000).toFixed(1)} mil`;
    document.getElementById('kpi-non-res').innerText = `${(totalNonRes / 1000).toFixed(1)} mil`;
    document.getElementById('kpi-rainfall').innerText = `${totalRain} mm`;
    document.getElementById('kpi-financial-loss').innerText = `$${(totalLoss / 1000000).toFixed(1)}M COP`;

    // Restablecer Gráficos a Totales Globales
    stratumChart.data.datasets[0].data = getAggregatedStrata();
    stratumChart.update();

    climateChart.data.datasets[0].data = globalClimate2021;
    climateChart.update();

    financialChart.data.datasets[0].data = globalFinancial2021;
    financialChart.update();
  });

  // Inicializar Componentes
  initMap();
  initCharts();
});