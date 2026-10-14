# Aprende y Avanza — sitio general

Abre **index.html** con doble clic. La página funciona sin instalar programas. Conserva los archivos y las carpetas juntos.

## Qué incluye

- Catálogo general de siete cursos con búsqueda y filtros por área y estado.
- Inscripciones abiertas: Machine Learning con Python y R para Análisis de Datos.
- Cursos en marcha: Excel + Power BI y SQL.
- Python desde cero finalizado; Git y GitHub y LaTeX disponibles para consultar nuevas fechas.
- Fichas de curso, programas y cinco temarios PDF descargables.
- Calendario de grupos, metodología, referencias reales y preguntas frecuentes.
- Contacto por WhatsApp al 55 2573 4814, Facebook e Instagram actualizados.
- Diseño adaptable, menú móvil, navegación con teclado y diálogos accesibles.

## Información confirmada el 12 de octubre de 2026

| Curso | Estado | Inicio | Horario | Precio |
| --- | --- | --- | --- | --- |
| Machine Learning con Python | Inscripciones abiertas | 2 noviembre 2026 | Lunes a viernes, 19:00–20:00 | $300 MXN |
| R para Análisis de Datos | Inscripciones abiertas | 31 octubre 2026 | Sábado y domingo, 09:00–12:00 | $300 MXN |
| Excel + Power BI | En curso | 26 septiembre 2026 | Sábado y domingo, 09:00–12:00 | $300 MXN |
| SQL | En curso | 28 septiembre 2026 | Lunes a viernes, 19:00–20:00 | $300 MXN |
| Python desde cero | Finalizado | 10 septiembre 2026 | 20:00–21:00; finalizó el 9 octubre | No publicado |

Las nuevas convocatorias y el cierre de Python fueron confirmados por el propietario. Las fechas iniciales, precios y horarios de Excel y SQL se verificaron en la primera página de sus PDF. Sus cierres previstos (18 y 23 de octubre) se calcularon con las cuatro semanas y las sesiones anunciadas; ajustar si hubo cambios o suspensiones.

No se proporcionaron la fecha final, duración ni temario de Machine Learning, ni fecha final del nuevo grupo de R. No se inventaron. Los horarios se muestran como fueron proporcionados y se solicita confirmar la zona horaria al inscribirse.

## Actualizar convocatorias y referencias

Edita **site-config.js**. La lista `cohorts` permite añadir varios grupos de un mismo curso.

```js
{
  id: 'sql-nuevo-grupo',
  courseId: 'sql',
  label: 'Nueva edición',
  status: 'open',
  start: '2026-11-02',
  end: '2026-11-27',
  registrationCloses: '2026-11-01',
  schedule: 'Lunes a viernes · 19:00–20:00 · Ciudad de México',
  price: 300
}
```

Ejemplo ilustrativo, no una convocatoria real. Identificadores: `machine-learning`, `python`, `excel-power-bi`, `sql`, `git-github`, `latex`, `r`.

Estados: `open` (inscripciones), `active` (en curso), `upcoming` (próximamente), `completed` (finalizado), `cancelled` (oculto). El calendario usa la fecha de Ciudad de México: los grupos abiertos pasan a en curso al iniciar y a finalizados después de `end`. Si la fecha final es desconocida (`null`), hay que añadirla o marcar el cierre manualmente. Los cambios de estado se reflejan al recargar la página. Una fecha límite de inscripción vencida deja de anunciar cupo abierto.

Los filtros admiten varias ediciones del mismo curso. Los mensajes de alumnos se editan en `references`; incluir solo referencias reales. Las transcripciones actuales vienen de la imagen `843449237_122096173707513796_5867413423200779245_n.jpg` de la carpeta Referencias Cursos/Septiembre 2026. Se omiten nombres y teléfonos. Las otras dos capturas documentan Classroom, Drive, materiales y el proyecto de Python. No se distribuyen capturas originales ni códigos de acceso.

## Archivos usados por la web

- `index.html`: estructura y contenido general.
- `home.css`: diseño y adaptación a pantallas.
- `palette.css`: paleta coordinada con las ilustraciones; crema, lila, rosa, amarillo y verde menta.
- `home.js`: catálogo, fichas, filtros, grupos y contacto; fichas básicas de Python y Machine Learning.
- `site-config.js`: contacto, convocatorias y referencias.
- `courses.js`: programas detallados de los cinco cursos originales.
- `assets/aprende-y-avanza-portada.png`: portada horizontal proporcionada por el propietario.
- `assets/aprende-y-avanza-identidad.png`: imagen cuadrada en cabecera, inicio, pie e icono del navegador.
- Las imágenes se conservan completas, sin recortes ni modificaciones.
- `temarios/`: cinco PDF originales sin modificaciones.

Los PDF corresponden a septiembre de 2026: sus precios, fechas y horarios no sustituyen los de las nuevas convocatorias. La ficha de R identifica explícitamente el programa de septiembre como referencia.

Los archivos `app.js`, `styles.css`, `themes.js` y `themes.css` se conservan de la versión anterior y ya no son cargados por la nueva página. El ZIP antiguo también es histórico.

## Inscripciones y privacidad

El formulario prepara un mensaje y abre WhatsApp. La persona debe enviarlo allí; no almacena datos, procesa pagos ni confirma inscripciones automáticamente. Los enlaces a redes requieren internet. Las tipografías usan Google Fonts y cuentan con fuentes alternativas locales.

## Publicar

El resultado está guardado localmente, sin despliegue a internet. **Aprende-y-Avanza-General.zip** contiene solo los archivos necesarios para publicar, además de este documento. Descomprímelo y sube su contenido a un alojamiento estático. No requiere servidor de aplicaciones ni base de datos.

No publiques la carpeta completa del proyecto: contiene copias históricas, Git y material auxiliar. Usa el ZIP nuevo. Después de publicar, verifica WhatsApp y las descargas desde tu dominio.
