/* Edita aquí las convocatorias y las referencias del sitio general.
   Solo status: 'open' anuncia inscripciones abiertas. Las fechas usan AAAA-MM-DD.
   Los precios de los temarios de septiembre no se aplican a grupos nuevos. */
window.SITE_CONFIG = {
  whatsapp: 'https://wa.me/525525734814',
  phone: '55 2573 4814',
  facebook: 'https://www.facebook.com/profile.php?id=61595413887567',
  instagram: 'https://www.instagram.com/aprendeyavanzaonline8/',
  // Añade grupos confirmados, por ejemplo:
  // { id: 'sql-noviembre', courseId: 'sql', label: 'Noviembre 2026', status: 'open',
  //   start: '2026-11-02', end: '2026-11-27', registrationCloses: '2026-11-01',
  //   schedule: 'Lunes a viernes · 19:00–20:00 · Ciudad de México', price: 300 },
  cohorts: [
    { id: 'ml-noviembre-2026', courseId: 'machine-learning', label: 'Noviembre 2026', status: 'open', start: '2026-11-02', end: null, schedule: 'Lunes a viernes · 7:00–8:00 p. m.', price: 300 },
    { id: 'r-octubre-2026', courseId: 'r', label: 'Octubre 2026', status: 'open', start: '2026-10-31', end: null, schedule: 'Sábados y domingos · 9:00 a. m.–12:00 p. m.', price: 300 },
    // Cierres previstos calculados según las 4 semanas y sesiones de los PDF.
    { id: 'excel-septiembre-2026', courseId: 'excel-power-bi', label: 'Septiembre 2026', status: 'active', start: '2026-09-26', end: '2026-10-18', schedule: 'Sábados y domingos · 9:00 a. m.–12:00 p. m.', price: 300 },
    { id: 'sql-septiembre-2026', courseId: 'sql', label: 'Septiembre 2026', status: 'active', start: '2026-09-28', end: '2026-10-23', schedule: 'Lunes a viernes · 7:00–8:00 p. m.', price: 300 },
    { id: 'python-septiembre-2026', courseId: 'python', label: 'Septiembre–octubre 2026', status: 'completed', start: '2026-09-10', end: '2026-10-09', schedule: '8:00–9:00 p. m.', price: null }
  ],
  references: [
    { quote: 'Muchas gracias profesor.', attribution: 'Participante de Python desde cero', edition: '10 sep.–9 oct. 2026' },
    { quote: 'Muchas gracias, Alejandro', attribution: 'Participante de Python desde cero', edition: '10 sep.–9 oct. 2026' }
  ]
};
