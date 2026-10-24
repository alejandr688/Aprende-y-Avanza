(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const config = window.SITE_CONFIG;
  const source = window.COURSE_DATA;
  if (!config || !source) { $('#course-grid').textContent = 'No pudimos cargar el catálogo. Escríbenos al 55 2573 4814.'; return; }
  const escape = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const normalized = s => s.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const wa = text => `${config.whatsapp}?text=${encodeURIComponent(text)}`;
  const date = s => s ? new Intl.DateTimeFormat('es-MX', { day:'numeric', month:'long', year:'numeric', timeZone:'UTC' }).format(new Date(`${s}T12:00:00Z`)) : 'Por confirmar';
  const groupStart = g => g.start ? date(g.start) : g.startLabel || 'Por confirmar';
  const today = () => new Intl.DateTimeFormat('en-CA', {timeZone:'America/Mexico_City', year:'numeric', month:'2-digit', day:'2-digit'}).format(new Date());
  const state = cohort => {
    const now = today();
    if (cohort.status === 'cancelled') return 'cancelled';
    if (cohort.status === 'completed' || (cohort.end && now > cohort.end)) return 'completed';
    if (cohort.start && now >= cohort.start && ['open','active'].includes(cohort.status)) return 'active';
    if (cohort.status === 'open' && (!cohort.registrationCloses || now <= cohort.registrationCloses) && (!cohort.start || now < cohort.start)) return 'open';
    return cohort.status === 'active' ? 'active' : 'upcoming';
  };
  const courses = [
    {
      id:'python', image:'assets/curso-python-octubre-2026.png', website:'https://alejandr688.github.io/Cursopython/', pdf:'temarios/curso-python-desde-cero.pdf', pdfIsHistorical:true,
      shortTitle:'Python desde cero', title:'Python desde cero + Introducción al Análisis de Datos',
      category:'desarrollo', categoryLabel:'Programación y análisis de datos', theme:'python',
      summary:'Aprende a programar desde cero y da el primer paso al análisis de datos. En octubre seguimos aprendiendo en los grupos matutino, nocturno y de fin de semana.',
      description:'Python desde cero + Introducción al Análisis de Datos. Aprende las bases del lenguaje y continúa con bases de datos, NumPy, Pandas y visualización. La convocatoria de octubre anuncia 25 clases, sesiones en Google Meet y grabaciones incluidas.',
      tags:['Python','Desde cero','Pandas','Análisis de datos'], level:'Desde cero · sin experiencia previa',
      isCurrentProgram:true, programEdition:'Octubre de 2026', sessions:25,
      audience:'Para quienes quieren comenzar a programar y explorar el análisis de datos sin experiencia previa.',
      requirements:['Una computadora para instalar Python y Visual Studio Code.','Conexión a internet para las clases y los materiales.'],
      objective:'Comprender las bases de Python, trabajar con archivos y bases de datos, y comenzar a analizar y visualizar información.',
      tools:['Python','Visual Studio Code','SQLite3','MySQL','NumPy','Pandas','Matplotlib','Seaborn'],
      included:['Clases en vivo por Google Meet.','Grabaciones de las clases para repasar a tu ritmo.','Material de apoyo en Google Classroom y Google Drive.','Grupo de WhatsApp para avisos y dudas del curso.'],
      paymentMethods:['Transferencia bancaria','Depósito en OXXO','PayPal'],
      paymentNote:'Python: pago único de $299 MXN. Por PayPal se agregan $20 MXN de comisión (total: $319 MXN). OXXO puede cobrar una comisión adicional. Concepto o referencia: PYTHON + TU NOMBRE. Confirma disponibilidad de tu horario y solicita las instrucciones por WhatsApp antes de pagar.',
      modules:[
        {title:'Fundamentos de Python',lessons:[{title:'Tus primeras líneas de código',topics:['Variables, tipos de datos, operadores y strings.']}]},
        {title:'Condicionales y bucles',lessons:[{title:'Decisiones y repeticiones',topics:['Condicionales y bucles en Python.']}]},
        {title:'Estructuras de datos',lessons:[{title:'Organiza la información',topics:['Listas, tuplas, conjuntos y diccionarios.']}]},
        {title:'Funciones y manejo de archivos',lessons:[{title:'Organiza y reutiliza tu código',topics:['Funciones y manejo de archivos.']}]},
        {title:'Regex y manejo de errores',lessons:[{title:'Texto y errores',topics:['Expresiones regulares y manejo de errores.']}]},
        {title:'Programación orientada a objetos',lessons:[{title:'Introducción a POO',topics:['Programación orientada a objetos en Python.']}]},
        {title:'SQLite3 y MySQL',lessons:[{title:'Primeros pasos con bases de datos',topics:['SQLite3 y MySQL.']}]},
        {title:'NumPy y Pandas',lessons:[{title:'Introducción al trabajo con datos',topics:['NumPy y Pandas.']}]},
        {title:'Visualización y análisis de datos',lessons:[{title:'De los datos a las gráficas',topics:['Matplotlib, Seaborn y análisis de datos.']}]}
      ]
    },
    ...source.courses
  ];
  const symbols = {'machine-learning':'ML / Py','python':'Py','excel-power-bi':'X + BI',sql:'SQL','git-github':'git /',latex:'LaTeX',r:'R'};
  const labels = {open:'Inscripciones abiertas',active:'En curso',upcoming:'Próximamente',completed:'Finalizado'};
  let filter = 'all';
  let returnFocus;
  const groups = c => config.cohorts.filter(g => g.courseId === c.id && state(g) !== 'cancelled');
  const courseState = c => (filter !== 'all' && groups(c).some(g => state(g) === filter) ? filter : ['open','active','upcoming','completed'].find(s => groups(c).some(g => state(g) === s))) || 'consult';
  const statusLabel = c => labels[courseState(c)] || 'Consulta próxima fecha';
  const featuredGroup = c => groups(c).find(g => state(g) === courseState(c));
  const courseImage = c => featuredGroup(c)?.image || c.image;
  const cohortSummary = c => {
    const g = featuredGroup(c);
    if (!g) return '';
    const active = groups(c).filter(g => state(g) === 'active');
    return `<div class="card-cohort">${active.length > 1 && courseState(c) === 'active' ? `<p><strong>${active.length} grupos en curso</strong> · ${active.map(g=>escape(g.groupName || g.label)).join(' · ')}</p>` : ''}<p>${state(g) === 'completed' ? 'Finalizó' : 'Inicio'}: <strong>${escape(state(g) === 'completed' ? date(g.end) : groupStart(g))}</strong></p><p>${escape(g.schedule)}</p>${g.price != null ? `<strong class="cohort-price">$${escape(g.price)} <small>MXN</small></strong>` : ''}</div>`;
  };
  const contact = c => wa(courseState(c) === 'active' ? `Hola, me interesa ${c.shortTitle} de Aprende y Avanza. ¿Me compartes información de los grupos en curso, horarios, precio y si todavía puedo incorporarme?` : `Hola, me interesa ${c.shortTitle} de Aprende y Avanza. ¿Me compartes las próximas fechas, horarios, precio y disponibilidad para inscribirme?`);
  const downloadLink = (c, group = featuredGroup(c)) => {
    const pdf = group?.pdf || c.pdf;
    if (!pdf) return '';
    const historical = c.pdfIsHistorical || !c.isCurrentProgram || pdf !== c.pdf;
    return `<a class="syllabus-download" href="${escape(pdf)}" download="${escape(pdf.split('/').pop())}" aria-label="Descargar temario de ${escape(c.shortTitle)} en PDF${historical ? ', edición septiembre 2026' : ''}"><span>Descargar temario <small>PDF${historical ? ' · Septiembre 2026' : ''}</small></span><span aria-hidden="true">↓</span></a>`;
  };
  const coursePageLink = c => c.website ? `<a class="button secondary course-page-link" href="${escape(c.website)}" target="_blank" rel="noopener noreferrer" aria-label="Visitar la página de ${escape(c.shortTitle)}">Página del curso <span aria-hidden="true">↗</span></a>` : '';
  const coursePhotoLink = c => {
    const g = featuredGroup(c);
    return g?.poster ? `<a class="course-photo-link" href="${escape(g.poster)}" target="_blank" rel="noopener noreferrer" aria-label="Ver foto del cartel de ${escape(c.shortTitle)}">Ver foto del cartel <span aria-hidden="true">↗</span></a>` : '';
  };
  function renderCatalog() {
    const q = normalized($('#course-search').value.trim());
    const category = $('#category-filter').value;
    const found = courses.filter(c => (filter === 'all' || groups(c).some(g => state(g) === filter)) && (category === 'all' || c.category === category) && normalized([c.shortTitle,c.summary,...c.tags].join(' ')).includes(q)).sort((a,b) => ['open','active','upcoming','consult','completed'].indexOf(courseState(a)) - ['open','active','upcoming','consult','completed'].indexOf(courseState(b)));
    $('#course-grid').innerHTML = found.map(c => `<article class="course-card" data-theme="${escape(c.theme)}"><div class="course-art ${courseImage(c) ? 'has-image' : ''}" aria-hidden="true">${courseImage(c) ? `<img class="course-illustration" src="${escape(courseImage(c))}" alt="" width="1254" height="1254" loading="lazy" decoding="async">` : `<span class="art-kicker">APRENDE Y AVANZA / ${escape(c.categoryLabel)}</span><span class="course-symbol">${symbols[c.id] || escape(c.shortTitle)}</span><span class="art-orbit"></span><span class="art-bottom">Una habilidad. Nuevas posibilidades. <b>↗</b></span>`}</div><div class="course-content"><span class="status ${courseState(c)}"><i></i>${statusLabel(c)}</span><h3>${escape(c.shortTitle)}</h3><p>${escape(c.summary)}</p><p class="course-level">${escape(c.level || 'Desde cero')}${c.sessions ? `<span>${c.sessions} sesiones${c.hours ? ` · ${c.hours} horas en vivo` : ''}</span>` : ''}</p><div class="tags">${c.tags.map(t=>`<span>${escape(t)}</span>`).join('')}</div>${cohortSummary(c)}<div class="card-actions"><button class="text-button" data-course="${c.id}" aria-label="Explorar curso ${escape(c.shortTitle)}">Explorar curso <span>↗</span></button><a href="${contact(c)}" target="_blank" rel="noopener noreferrer" aria-label="Consultar ${escape(c.shortTitle)} por WhatsApp">${courseState(c) === 'open' ? 'Inscribirme ↗' : 'Consultar ↗'}</a></div>${coursePageLink(c)}${coursePhotoLink(c)}${downloadLink(c)}</div></article>`).join('');
    $('#catalog-count').textContent = `${found.length} ${found.length === 1 ? 'curso' : 'cursos'}`;
    $('#empty-state').hidden = found.length !== 0;
    $('#empty-title').textContent = filter === 'open' && !q ? 'Estamos preparando los próximos grupos' : 'No encontramos cursos con esos filtros';
    $('#empty-copy').textContent = filter === 'open' && !q ? 'Escríbenos para consultar las próximas inscripciones del curso que te interesa.' : 'Prueba otra búsqueda o explora el catálogo completo.';
  }
  function showCourse(id) {
    const c = courses.find(c => c.id === id);
    if (!c) return;
    returnFocus = document.activeElement;
    const cohorts = groups(c);
    const list = values => `<ul>${values.map(v=>`<li>${escape(v)}</li>`).join('')}</ul>`;
    $('#course-detail').innerHTML = `
      <p class="eyebrow">${escape(c.categoryLabel)}</p><h2 id="course-dialog-title">${escape(c.shortTitle)}</h2>
      <p class="dialog-intro">${escape(c.description || c.summary)}</p>
      <span class="status ${courseState(c)}"><i></i>${statusLabel(c)}</span>
      <div class="detail-facts"><span>${escape(c.level || 'Desde cero')}</span>${c.sessions ? `<span>${c.sessions} sesiones${c.sessionHours ? ` de ${c.sessionHours} ${c.sessionHours === 1 ? 'hora' : 'horas'}` : ''}</span>` : ''}${c.hours ? `<span>${c.hours} horas en vivo</span>` : ''}<span>En línea · Google Meet</span></div>
      <div class="detail-columns"><div>
        ${c.audience ? `<h3>¿Es para ti?</h3><p>${escape(c.audience)}</p>` : ''}
        ${c.requirements.length ? `<h3>Lo que necesitas para comenzar</h3>${list(c.requirements)}` : ''}
        ${c.objective ? `<h3>Lo que podrás aprender</h3><p>${escape(c.objective)}</p>` : ''}
        ${c.outcomes?.length ? list(c.outcomes) : ''}
        ${c.tools?.length ? `<p class="course-tools"><strong>Herramientas:</strong> ${escape(c.tools.join(' · '))}</p>` : ''}
        ${c.modules.length ? `<h3>Tu ruta de aprendizaje</h3><p class="small muted">${c.isCurrentProgram ? `Programa de ${escape(c.programEdition)}. Abre cada módulo para conocer sus temas.` : 'Programa de referencia de septiembre de 2026. Consulta los ajustes de la siguiente edición.'}</p>
        <div class="modules">${c.modules.map((m,i)=>`<details><summary><span class="module-number">${String(i+1).padStart(2,'0')}</span>${escape(m.title)}<span>+</span></summary>${m.description ? `<p class="module-description">${escape(m.description)}</p>` : ''}<ul>${m.lessons.map(l=>`<li><strong>${escape(l.title)}</strong>${list(l.topics)}${l.practice ? `<p class="lesson-practice"><strong>Práctica:</strong> ${escape(l.practice)}</p>` : ''}</li>`).join('')}</ul></details>`).join('')}</div>` : `<p class="notice">${escape(c.editionNote)}</p>`}
        ${c.project ? `<h3>Tu proyecto final</h3><p><strong>${escape(c.project.title)}</strong></p><p>${escape(c.project.description)}</p>${c.project.deliverables?.length ? `<h4 class="deliverables-title">Lo que entregarás</h4>${list(c.project.deliverables)}` : ''}` : ''}
        ${c.complementaryTopics?.length ? `<h3>Un vistazo a lo que sigue</h3>${list(c.complementaryTopics)}<p class="small muted">${escape(c.scopeNote)}</p>` : ''}
      </div><aside class="detail-aside"><h3>Fechas e inscripción</h3>
        ${cohorts.length ? cohorts.map(g=>`<div class="cohort-info"><span class="status ${state(g)}">${labels[state(g)]}</span><h4>${escape(g.label)}</h4><p>Inicio: ${escape(groupStart(g))}</p>${state(g) === 'completed' && g.end ? `<p>Finalizó: ${date(g.end)}</p>` : ''}<p>${escape(g.schedule || 'Horario por confirmar')}</p>${g.sessions ? `<p>${g.sessions} clases${g.hours ? ` · ${g.hours} horas en vivo` : ''}</p>` : ''}<strong>${g.price != null ? `$${escape(g.price)} MXN · pago único` : state(g) === 'completed' ? 'Edición concluida' : 'Precio por confirmar'}</strong>${g.poster || g.image ? `<a class="cohort-poster" href="${escape(g.poster || g.image)}" target="_blank" rel="noopener noreferrer"><img src="${escape(g.poster || g.image)}" alt="${escape(g.posterAlt || `Cartel de ${c.shortTitle}, edición ${g.label}`)}" width="${g.posterWidth || 497}" height="${g.posterHeight || 497}" loading="lazy" decoding="async"><span>${g.poster ? 'Ver foto del cartel' : 'Ver cartel de esta edición'} ↗</span></a>` : ''}${g.pdf && g.pdf !== c.pdf ? `<a class="previous-program" href="${escape(g.pdf)}" download>Temario de este grupo ↓</a>` : ''}</div>`).join('') : '<p>Consulta la próxima fecha, el horario y el precio vigente por WhatsApp.</p>'}
        <a class="button primary" href="${contact(c)}" target="_blank" rel="noopener noreferrer">${courseState(c)==='open' ? 'Quiero inscribirme' : 'Consultar por WhatsApp'} ↗</a>
        ${coursePageLink(c)}
        ${c.pdf ? `<a class="button secondary" href="${escape(c.pdf)}" download>Descargar temario ↓</a><p class="small muted">${c.isCurrentProgram && !c.pdfIsHistorical ? `Temario completo · ${escape(c.programEdition)}.` : 'PDF de referencia de septiembre de 2026. Consulta arriba el programa y los grupos actuales.'}</p>` : ''}
        <p class="small">Confirma la zona horaria y el calendario final por WhatsApp.</p>
        ${c.pdf ? `<details class="aside-details"><summary>Tu inscripción incluye<span>+</span></summary>${list(c.included || source.common.included)}</details><details class="aside-details"><summary>Métodos de pago<span>+</span></summary>${list(c.paymentMethods || source.common.paymentMethods)}</details>${c.paymentNote ? `<p class="small">${escape(c.paymentNote)}</p>` : ''}<p class="small">Solicita por WhatsApp las instrucciones del método que prefieras. Tras confirmar el pago, recibirás los accesos a Classroom, al grupo de WhatsApp y las indicaciones para las clases.</p>` : '<p class="small">Consulta los recursos y condiciones incluidos en la próxima edición.</p>'}
      </aside></div>`;
    $('#course-dialog').showModal(); document.body.classList.add('modal-open'); $('#course-dialog').scrollTop = 0;
  }
  function renderGroups() {
    const current = config.cohorts.filter(g=>['active','open','upcoming'].includes(state(g)) && courses.some(c=>c.id===g.courseId));
    const upcoming = current.filter(g=>state(g)!=='active');
    const active = current.filter(g=>state(g)==='active');
    const highlights = upcoming.map(g=>{
      const c=courses.find(c=>c.id===g.courseId);
      const start=g.start ? new Date(`${g.start}T12:00:00Z`) : null;
      const month=start ? new Intl.DateTimeFormat('es-MX',{month:'short',timeZone:'UTC'}).format(start).replace('.','') : '';
      return `<article class="launch-card" data-theme="${escape(c.theme)}">
        <div class="launch-visual${g.poster ? ' has-photo' : ''}"><span class="launch-status">${state(g)==='open' ? '● Inscripciones abiertas' : 'Próximo grupo'}</span>${g.poster ? `<a class="launch-poster" href="${escape(g.poster)}" target="_blank" rel="noopener noreferrer" aria-label="Ampliar foto del cartel de ${escape(c.shortTitle)}"><img src="${escape(g.poster)}" alt="${escape(g.posterAlt)}" width="${g.posterWidth}" height="${g.posterHeight}" loading="lazy" decoding="async"><span>Ver foto completa ↗</span></a>` : c.image ? `<img src="${escape(c.image)}" alt="" width="1254" height="1254" loading="lazy">` : `<span class="launch-symbol">${escape(symbols[c.id] || c.shortTitle)}</span>`}<div class="launch-date"><span>INICIO</span><strong>${start ? start.getUTCDate() : '—'}</strong><span>${escape(month)} ${start ? start.getUTCFullYear() : 'Por confirmar'}</span></div></div>
        <div class="launch-content"><p class="launch-category">${escape(c.categoryLabel)}</p><h3>${escape(c.shortTitle)}</h3><p class="launch-description">${escape(c.summary)}</p>
          <div class="launch-facts"><p><span>HORARIO</span><strong>${escape(g.schedule || 'Por confirmar')}</strong></p><p><span>NIVEL Y DURACIÓN</span><strong>${escape(c.level || 'Consulta requisitos')}${g.hours ? ` · ${g.hours} horas en vivo` : ''}</strong></p></div>
          <div class="launch-bottom"><p class="launch-price">${g.price!=null ? `<strong>$${escape(g.price)} <small>MXN</small></strong><span>Pago único · curso completo</span>` : '<span>Consulta el precio</span>'}</p><a class="button primary" href="${wa(`Hola, me interesa el grupo de ${c.shortTitle} que inicia el ${date(g.start)}. ¿Me comparten disponibilidad e instrucciones para inscribirme?`)}" target="_blank" rel="noopener noreferrer" aria-label="Inscribirme a ${escape(c.shortTitle)}">${state(g)==='open'?'Quiero inscribirme':'Consultar grupo'} ↗</a></div>
          <button class="launch-program" data-course="${escape(c.id)}">Ver programa de ${escape(c.shortTitle)} <span aria-hidden="true">↗</span></button>
          ${downloadLink(c, g)}
        </div></article>`;
    }).join('');
    const ongoing = active.sort((a,b)=>(a.courseId==='python'?0:1)-(b.courseId==='python'?0:1)).map(g=>{
      const c=courses.find(c=>c.id===g.courseId);
      return `<article class="current-card" data-theme="${escape(c.theme)}" aria-labelledby="${escape(g.id)}-title">
        <div class="current-card-top"><span class="status active"><i></i>En curso</span><span class="current-symbol" aria-hidden="true">${escape(symbols[c.id] || c.shortTitle)}</span></div>
        <p class="current-edition">${escape(g.label)}</p><h4 id="${escape(g.id)}-title">${escape(c.shortTitle)}</h4>
        ${c.id==='python' ? '<p class="current-description">Desde cero + Introducción al Análisis de Datos</p>' : ''}
        <dl class="current-facts"><div><dt>INICIO</dt><dd>${escape(groupStart(g))}</dd></div><div><dt>HORARIO</dt><dd>${escape(g.schedule || 'Horario por confirmar')}</dd></div>${g.sessions ? `<div><dt>DURACIÓN</dt><dd>${g.sessions} clases${g.hours ? ` · ${g.hours} horas` : ''}</dd></div>` : ''}${g.price!=null ? `<div><dt>PRECIO DE LA EDICIÓN</dt><dd>$${escape(g.price)} MXN · pago único</dd></div>` : ''}</dl>
        <p class="current-resources">Google Meet · Grabaciones en Drive<br>Materiales en Classroom · Grupo de WhatsApp</p>
        <button class="button secondary" data-course="${escape(c.id)}" aria-label="Ver programa de ${escape(c.shortTitle)}, ${escape(g.groupName || g.label)}">Ver programa y recursos <span aria-hidden="true">↗</span></button>
        <a class="current-contact" href="${wa(`Hola, me interesa ${c.shortTitle}, ${g.label}. ¿Me comparten el horario, precio y si todavía puedo incorporarme a este grupo?`)}" target="_blank" rel="noopener noreferrer">Consultar este grupo ↗</a>
      </article>`;
    }).join('');
    $('#groups-list').innerHTML = current.length ? `${ongoing ? `<section class="current-groups" id="en-curso" aria-labelledby="current-groups-title"><div class="groups-subheading"><div><p class="eyebrow">APRENDIENDO EN COMUNIDAD</p><h3 id="current-groups-title">Cursos que estamos llevando</h3></div><span>${active.length} grupos en curso</span></div><div class="current-grid">${ongoing}</div></section>` : ''}${active.some(g=>g.courseId==='python') ? $('#python-captures-template').innerHTML : ''}${highlights ? `<section class="upcoming-groups" aria-labelledby="upcoming-groups-title"><div class="groups-subheading"><div><p class="eyebrow">PREPARA TU SIGUIENTE PASO</p><h3 id="upcoming-groups-title">Próximos grupos</h3></div><span>Consulta las inscripciones</span></div><div class="launch-grid">${highlights}</div><div class="launch-includes"><span>Todos los nuevos grupos incluyen</span><strong>Google Meet en vivo</strong><i aria-hidden="true">✳</i><strong>Grabaciones en Drive</strong><i aria-hidden="true">✳</i><strong>Grupo de WhatsApp</strong></div>${$('#campaign-photos-template').innerHTML}</section>` : ''}` : '<div class="groups-empty"><span class="calendar-icon" aria-hidden="true">↗</span><div><h3>Tu próximo grupo empieza aquí</h3><p>Consulta por WhatsApp las convocatorias vigentes y los grupos en marcha.</p></div><a class="button secondary" data-wa="Hola, ¿qué cursos tienen inscripciones abiertas?">Consultar grupos ↗</a></div>';
    $('#announcement-label').textContent = current.some(g => state(g) === 'open') ? 'Inscripciones abiertas · Conoce los próximos grupos' : 'Consulta nuestras próximas convocatorias';
    wireLinks();
  }
  function wireLinks() {
    $$('[data-wa]').forEach(a=>{a.href=wa(a.dataset.wa);a.target='_blank';a.rel='noopener noreferrer';});
    $$('[data-social]').forEach(a=>{a.href=config[a.dataset.social];a.target='_blank';a.rel='noopener noreferrer';});
  }
  document.addEventListener('click', e=>{
    const course = e.target.closest('[data-course]'); if(course) showCourse(course.dataset.course);
    const tab=e.target.closest('[data-filter]'); if(tab){filter=tab.dataset.filter;$$('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===filter)));renderCatalog();}
    if(e.target.closest('[data-reset]')) {filter='all';$('#course-search').value='';$('#category-filter').value='all';$$('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter==='all')));renderCatalog();}
    if(e.target.closest('[data-close]')) e.target.closest('dialog').close();
    if(e.target.closest('#mobile-nav a')) closeMenu();
  });
  function closeMenu() {$('#mobile-nav').hidden=true;$('#menu-toggle').setAttribute('aria-expanded','false');$('#menu-toggle').setAttribute('aria-label','Abrir menú');}
  $('#menu-toggle').addEventListener('click',()=>{const open=$('#mobile-nav').hidden;$('#mobile-nav').hidden=!open;$('#menu-toggle').setAttribute('aria-expanded',String(open));$('#menu-toggle').setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
  matchMedia('(min-width: 901px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
  $('#course-search').addEventListener('input',renderCatalog);
  $('#category-filter').addEventListener('change',renderCatalog);
  $$('dialog').forEach(d=>{d.addEventListener('close',()=>{document.body.classList.remove('modal-open');if(returnFocus?.isConnected)returnFocus.focus();});d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}});});
  $('#privacy-button').addEventListener('click',()=>{returnFocus=document.activeElement;$('#privacy-dialog').showModal();document.body.classList.add('modal-open');});
  courses.forEach(c=>{const o=document.createElement('option');o.value=c.id;o.textContent=c.shortTitle;$('#contact-course').append(o);});
  $('#contact-form').addEventListener('submit',e=>{
    e.preventDefault();if(!e.currentTarget.reportValidity())return;
    const c=courses.find(c=>c.id===$('#contact-course').value);
    const name=$('#contact-name').value.trim();
    const message=$('#contact-message').value.trim();
    const url=wa(`Hola${name ? `, soy ${name}` : ''}. ${c?`Me interesa ${c.shortTitle}.`:'Quiero orientación para elegir un curso.'} ¿Me compartes fechas, horarios, precio y los pasos para inscribirme?${message?'\n\n'+message:''}`);
    const status=$('#form-status');status.replaceChildren(document.createTextNode('Tu mensaje está listo. Revísalo y envíalo en WhatsApp. '));
    const a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener noreferrer';a.textContent='Abrir WhatsApp ↗';status.append(a);status.hidden=false;
    window.open(url,'_blank','noopener,noreferrer');
  });
  const referenceCard = r => {
    const captures = r.captures?.length ? `<div class="testimonial-gallery" role="group" aria-label="Capturas originales de la misma conversación">${r.captures.map(capture => `<a class="testimonial-capture" href="${escape(capture.src)}" target="_blank" rel="noopener noreferrer"><img src="${escape(capture.src)}" alt="${escape(capture.alt)}" width="${capture.width}" height="${capture.height}" loading="lazy" decoding="async"><span>${escape(capture.label)}<small>Ampliar captura ↗</small></span></a>`).join('')}</div>` : '';
    const quote = r.additionalQuotes?.length ? [r.quote, ...r.additionalQuotes].map(paragraph => `<p>${escape(paragraph)}</p>`).join('') : escape(r.quote);
    return `<figure class="quote-card${captures ? ' quote-card-conversation' : ''}">${r.context ? `<p class="reference-context">${escape(r.context)}</p>` : ''}${r.capture ? `<a class="testimonial-capture" href="${escape(r.capture)}" target="_blank" rel="noopener noreferrer"><img src="${escape(r.capture)}" alt="${escape(r.captureAlt)}" width="${r.captureWidth}" height="${r.captureHeight}" loading="lazy" decoding="async"><span>Ver captura original ↗</span></a>` : ''}<span class="quote-mark" aria-hidden="true">“</span><blockquote>${quote}</blockquote>${captures}<figcaption>${escape(r.attribution)}<small>${escape(r.edition)}</small></figcaption></figure>`;
  };
  $('#python-references-list').innerHTML=config.references.filter(r=>r.featured).map(referenceCard).join('');
  $('#references-list').innerHTML=config.references.filter(r=>!r.featured).map(referenceCard).join('');
  $('#payment-methods').innerHTML=source.common.paymentMethods.map((method,i)=>`<li><span aria-hidden="true">0${i+1}</span>${escape(method)}</li>`).join('');
  $('#current-year').textContent=new Date().getFullYear();
  renderCatalog();renderGroups();wireLinks();
})();
