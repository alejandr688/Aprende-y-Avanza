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
    {id:'machine-learning', shortTitle:'Machine Learning con Python', title:'Machine Learning con Python', category:'desarrollo', categoryLabel:'Inteligencia artificial', theme:'ml', summary:'Da tu siguiente paso con Python. Explora el aprendizaje automático y conoce las próximas ediciones de este curso.', tags:['Machine Learning','Python'], objective:null, audience:null, project:null, modules:[], requirements:[], editionNote:'La nueva edición inicia el 2 de noviembre de 2026. Escríbenos para conocer el temario, los requisitos y la duración.'},
    {id:'python', shortTitle:'Python desde cero', title:'Python desde cero', category:'desarrollo', categoryLabel:'Programación', theme:'python', summary:'Da tus primeros pasos en programación y lleva lo aprendido a un proyecto de análisis de datos.', tags:['Python','Programación','Análisis de datos'], audience:'Para quienes quieren dar sus primeros pasos con Python.', objective:'Acercarte a la programación y aplicar lo aprendido a un análisis de datos con resultados, gráficas y conclusiones.', project:{title:'Un análisis de datos con Python',description:'La edición de septiembre incluyó un proyecto para poner en práctica lo aprendido durante el curso.',deliverables:['Análisis de datos, resultados, gráficas y conclusiones.']}, modules:[], requirements:[], editionNote:'Tenemos referencias de la edición de septiembre de 2026. Consulta el temario y las condiciones de la siguiente edición.'},
    ...source.courses
  ];
  const symbols = {'machine-learning':'ML / Py','python':'Py','excel-power-bi':'X + BI',sql:'SQL','git-github':'git /',latex:'LaTeX',r:'R'};
  const labels = {open:'Inscripciones abiertas',active:'En curso',upcoming:'Próximamente',completed:'Finalizado'};
  let filter = 'all';
  let returnFocus;
  const groups = c => config.cohorts.filter(g => g.courseId === c.id && state(g) !== 'cancelled');
  const courseState = c => ['open','active','upcoming','completed'].find(s => groups(c).some(g => state(g) === s)) || 'consult';
  const statusLabel = c => labels[courseState(c)] || 'Consulta próxima fecha';
  const featuredGroup = c => groups(c).find(g => state(g) === courseState(c));
  const cohortSummary = c => { const g = featuredGroup(c); return g ? `<div class="card-cohort"><p>${state(g) === 'completed' ? 'Finalizó' : 'Inicio'}: <strong>${date(state(g) === 'completed' ? g.end : g.start)}</strong></p><p>${escape(g.schedule)}</p>${g.price != null ? `<strong class="cohort-price">$${escape(g.price)} <small>MXN</small></strong>` : ''}</div>` : ''; };
  const contact = c => wa(`Hola, me interesa ${c.shortTitle} de Aprende y Avanza. ¿Me compartes las próximas fechas, horarios, precio y disponibilidad para inscribirme?`);
  function renderCatalog() {
    const q = normalized($('#course-search').value.trim());
    const category = $('#category-filter').value;
    const found = courses.filter(c => (filter === 'all' || groups(c).some(g => state(g) === filter)) && (category === 'all' || c.category === category) && normalized([c.shortTitle,c.summary,...c.tags].join(' ')).includes(q)).sort((a,b) => ['open','active','upcoming','consult','completed'].indexOf(courseState(a)) - ['open','active','upcoming','consult','completed'].indexOf(courseState(b)));
    $('#course-grid').innerHTML = found.map(c => `<article class="course-card" data-theme="${escape(c.theme)}"><div class="course-art" aria-hidden="true"><span class="art-kicker">APRENDE Y AVANZA / ${escape(c.categoryLabel)}</span><span class="course-symbol">${symbols[c.id] || escape(c.shortTitle)}</span><span class="art-orbit"></span><span class="art-bottom">Una habilidad. Nuevas posibilidades. <b>↗</b></span></div><div class="course-content"><span class="status ${courseState(c)}"><i></i>${statusLabel(c)}</span><h3>${escape(c.shortTitle)}</h3><p>${escape(c.summary)}</p><div class="tags">${c.tags.map(t=>`<span>${escape(t)}</span>`).join('')}</div>${cohortSummary(c)}<div class="card-actions"><button class="text-button" data-course="${c.id}">Explorar curso <span>↗</span></button><a href="${contact(c)}" target="_blank" rel="noopener noreferrer" aria-label="Consultar ${escape(c.shortTitle)} por WhatsApp">${courseState(c) === 'open' ? 'Inscribirme ↗' : 'Consultar ↗'}</a></div></div></article>`).join('');
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
    $('#course-detail').innerHTML = `<p class="eyebrow">${escape(c.categoryLabel)}</p><h2 id="course-dialog-title">${escape(c.shortTitle)}</h2><p class="dialog-intro">${escape(c.summary)}</p><span class="status ${courseState(c)}"><i></i>${statusLabel(c)}</span><div class="detail-columns"><div>${c.objective ? `<h3>Lo que podrás aprender</h3><p>${escape(c.objective)}</p>` : ''}${c.audience ? `<h3>¿Es para ti?</h3><p>${escape(c.audience)}</p>` : ''}${c.modules.length ? `<h3>Explora el programa</h3><p class="small muted">Programa de referencia de septiembre de 2026. Confirma los ajustes de la siguiente edición.</p><div class="modules">${c.modules.map(m=>`<details><summary>${escape(m.title)}<span>+</span></summary><ul>${m.lessons.map(l=>`<li><strong>${escape(l.title)}</strong><ul>${l.topics.map(t=>`<li>${escape(t)}</li>`).join('')}</ul></li>`).join('')}</ul></details>`).join('')}</div>` : `<p class="notice">${escape(c.editionNote)}</p>`}${c.project ? `<h3>Aprende con un proyecto</h3><p><strong>${escape(c.project.title)}</strong></p><p>${escape(c.project.description)}</p>` : ''}${c.requirements.length ? `<h3>Lo que necesitas</h3><ul>${c.requirements.map(r=>`<li>${escape(r)}</li>`).join('')}</ul>` : ''}</div><aside class="detail-aside"><h3>Tu siguiente paso</h3>${cohorts.length ? cohorts.map(g=>`<div class="cohort-info"><span class="status ${state(g)}">${labels[state(g)]}</span><h4>${escape(g.label)}</h4><p>Inicio: ${date(g.start)}</p>${state(g) === 'completed' && g.end ? `<p>Finalizó: ${date(g.end)}</p>` : ''}<p>${escape(g.schedule || 'Horario por confirmar')}</p><strong>${g.price != null ? `$${escape(g.price)} MXN` : state(g) === 'completed' ? 'Edición concluida' : 'Precio por confirmar'}</strong></div>`).join('') : '<p>Consulta la próxima fecha, el horario y el precio vigente por WhatsApp.</p>'}<a class="button primary" href="${contact(c)}" target="_blank" rel="noopener noreferrer">Consultar por WhatsApp ↗</a>${c.pdf ? `<a class="button secondary" href="${escape(c.pdf)}" download>Descargar temario ↓</a><p class="small muted">PDF de septiembre de 2026. Las fechas y precios de esa edición son históricos.</p>` : ''}<p class="small">Confirma la zona horaria y tu inscripción directamente con Aprende y Avanza.</p></aside></div>`;
    $('#course-dialog').showModal(); document.body.classList.add('modal-open'); $('#course-dialog').scrollTop = 0;
  }
  function renderGroups() {
    const current = config.cohorts.filter(g=>['active','open','upcoming'].includes(state(g)) && courses.some(c=>c.id===g.courseId));
    $('#groups-list').innerHTML = current.length ? current.map(g=>{const c=courses.find(c=>c.id===g.courseId);return `<article class="group-row"><span class="status ${state(g)}">${labels[state(g)]}</span><h3>${escape(c.shortTitle)}<small>${escape(g.label)}</small></h3><p>${date(g.start)}<small>${escape(g.schedule || 'Horario por confirmar')}</small></p><button class="text-button" data-course="${c.id}">Ver información ↗</button></article>`;}).join('') : '<div class="groups-empty"><span class="calendar-icon" aria-hidden="true">↗</span><div><h3>Tu próximo grupo empieza aquí</h3><p>Consulta por WhatsApp las convocatorias vigentes y los grupos en marcha. Publicaremos aquí las fechas confirmadas.</p></div><a class="button secondary" data-wa="Hola, ¿qué cursos tienen inscripciones abiertas y qué grupos están en marcha?">Consultar grupos ↗</a></div>';
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
  $('#references-list').innerHTML=config.references.map(r=>`<figure class="quote-card"><span class="quote-mark" aria-hidden="true">“</span><blockquote>${escape(r.quote)}</blockquote><figcaption>${escape(r.attribution)}<small>${escape(r.edition)}</small></figcaption></figure>`).join('');
  $('#current-year').textContent=new Date().getFullYear();
  renderCatalog();renderGroups();wireLinks();
})();
