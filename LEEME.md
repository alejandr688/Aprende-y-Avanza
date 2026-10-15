# Aprende y Avanza — sitio general

Abre **index.html** con doble clic. Conserva los archivos y carpetas juntos; no necesitas instalar programas.

## Actualización del 14 de octubre de 2026

Los cuatro temarios nuevos sustituyen las convocatorias anteriores de las próximas ediciones de R y Machine Learning. Se conservan los demás cursos y los grupos anteriores de Excel y SQL.

| Nuevo grupo | Inicio | Horario | Duración | Pago único |
| --- | --- | --- | --- | --- |
| Git y GitHub | 30 octubre 2026 | Lunes a viernes, 18:00–19:00 | 20 sesiones de 1 hora | $299 MXN |
| R para Análisis de Datos | 30 octubre 2026 | Lunes a viernes, 19:00–20:00 | 20 sesiones de 1 hora | $299 MXN |
| Excel + Power BI | 31 octubre 2026 | Sábados y domingos, 09:00–12:00 | 8 sesiones de 3 horas | $299 MXN |
| Machine Learning con Python | 9 noviembre 2026 | Lunes a viernes, 20:00–21:00 | 20 sesiones de 1 hora | $349 MXN |

Los PDF no especifican zona horaria ni fecha final. Se pide confirmarlas al inscribirse y no se calculó un cierre. Los cierres de septiembre de Excel y SQL conservan las estimaciones anteriores (18 y 23 de octubre); ajustar si cambió el calendario.

Excel, R y Git comienzan desde las bases. Machine Learning requiere Python básico. Cada ficha incluye descripción, público, requisitos, objetivos, herramientas, cuatro módulos con sesiones y prácticas, proyecto, entregables, recursos y PDF. Los temas avanzados y complementarios conservan su alcance introductorio.

## Contenido general

- Clases en vivo por Google Meet, grabaciones en la carpeta de Drive, materiales y actividades en Classroom, y grupo de WhatsApp para avisos y dudas generales.
- Pagos: transferencia bancaria, depósito en OXXO, PayPal y tarjeta de crédito. Ya estaban registrados en courses.js y ahora aparecen en la sección de pagos, preguntas frecuentes y fichas. No se agregaron cuentas ni enlaces de cobro.
- Los cuatro grupos nuevos tienen un pago único por curso completo, sin mensualidades, según sus PDF.
- Los accesos se entregan por WhatsApp tras confirmar el pago. No se publican enlaces privados de alumnos.
- Siete referencias nuevas, sin duplicar comentarios repetidos en ambas capturas. Antonio López y Carlos Arellano aparecen con fragmentos identificados. Daf Leyva se identifica como experiencia de apoyo en trabajos. Se mantienen los dos agradecimientos anteriores de Python.
- Las dos capturas originales se muestran directamente en Referencias y se pueden ampliar. Los testimonios en texto quedan en un desplegable adicional. No se les atribuye un curso o fecha no identificados.

## Archivos usados por la web

- index.html: contenido general y navegación.
- home.css, palette.css, courses-2026.css: diseño adaptable.
- home.js: catálogo, fichas, filtros, grupos y contacto.
- site-config.js: contacto, convocatorias y referencias.
- courses.js: seis programas detallados; Python conserva su ficha básica en home.js.
- assets/curso-*-2026.png: las cuatro imágenes nuevas, conservadas completas.
- assets/referencias-*-2026.png: capturas originales.
- assets/aprende-y-avanza-*.png: identidad y portada existentes.
- temarios/temario_*_aprende_y_avanza_2026.pdf: cuatro PDF vigentes, sin modificar.
- Los cinco PDF anteriores se conservan en temarios. La ficha de Excel enlaza también el temario del grupo anterior. SQL y LaTeX identifican su programa como referencia de septiembre.

app.js, styles.css, themes.js y themes.css corresponden a la web anterior y no se cargan.

## Actualizar convocatorias

Edita site-config.js. Cada elemento de cohorts representa una edición; un curso puede tener varias. Identificadores: machine-learning, python, excel-power-bi, sql, git-github, latex, r.

Estados: open (inscripciones), active (en curso), upcoming (próximamente), completed (finalizado), cancelled (oculto). Fechas: AAAA-MM-DD. Se utiliza la fecha de Ciudad de México para los estados, sin determinar la zona horaria de las clases. Al recargar, los grupos abiertos pasan a en curso al iniciar y a finalizados después de end. Con end: null, añade el cierre cuando se confirme o cambia el estado al terminar.

El precio de cada edición está en cohorts[].price. Si cambian los precios nuevos, actualiza también la explicación de pagos de index.html y el PDF correspondiente. common.price y common.durationWeeks en courses.js pertenecen al material histórico y no se usan para anunciar los precios o duración actuales.

## Inscripciones y privacidad

El formulario prepara un mensaje y abre WhatsApp al 55 2573 4814. La persona lo revisa y envía allí. La web no almacena los datos en una base de datos, no cobra ni confirma inscripciones automáticamente. Redes sociales y WhatsApp requieren internet. Google Fonts cuenta con fuentes locales de respaldo.

## Publicar

La actualización se guarda localmente. **Aprende-y-Avanza-General.zip** contiene los archivos vigentes, imágenes, temarios y este documento. Descomprímelo y sube su contenido al alojamiento estático. No requiere servidor de aplicaciones ni base de datos.

No publiques toda la carpeta de trabajo: contiene Git y copias históricas. Aprende-y-Avanza-Web.zip es anterior y se conserva. Después de publicar, verifica WhatsApp y las descargas desde el dominio final.

Los nuevos grupos aparecen antes del catálogo, en tarjetas con ilustración, fecha destacada, horario, nivel, duración, precio y acceso a inscripción. Los grupos en curso se consultan en un desplegable separado.

Las tarjetas de nuevos grupos y del catálogo incluyen un botón directo «Descargar temario» para cada curso con PDF disponible. Se identifica la edición histórica cuando corresponde. Python incluye su PDF descargable y un enlace a https://alejandr688.github.io/Cursopython/ tanto en el catálogo como en su ficha. La edición de septiembre–octubre permanece concluida.
