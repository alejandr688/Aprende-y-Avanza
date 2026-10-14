/* Programas actualizados con los temarios de octubre y noviembre de 2026. SQL y LaTeX conservan su programa de septiembre. */
window.COURSE_DATA = {
  "brand": "Aprende y Avanza",
  "whatsappUrl": "https://wa.me/525525734814",
  "facebook": "https://www.facebook.com/profile.php?id=61595413887567",
  "common": {
    "price": 300,
    "currency": "MXN",
    "payment": "Pago único por curso completo",
    "paymentMethods": [
      "Transferencia bancaria",
      "Depósito en OXXO",
      "PayPal",
      "Tarjeta de crédito"
    ],
    "durationWeeks": 4,
    "level": "Según los requisitos de cada curso",
    "modality": "En línea por Google Meet",
    "included": [
      "Clases en vivo por Google Meet",
      "Grabación de todas las sesiones en Google Drive",
      "Google Classroom para materiales, tareas y avisos académicos",
      "Grupo de WhatsApp para avisos, recordatorios y dudas generales",
      "Material de estudio, archivos de práctica y recursos complementarios",
      "Plantillas y ejemplos reutilizables según el contenido",
      "Ejercicios y actividades prácticas",
      "Proyecto final guiado",
      "Certificado digital de participación al completar el curso"
    ],
    "methodology": [
      "Explicación breve, demostración y práctica guiada en cada sesión",
      "Enlaces de clase, materiales, archivos y tareas en Google Classroom",
      "Grabaciones en Google Drive para repasar",
      "Proyecto final desarrollado por etapas"
    ],
    "registration": "Inscripción y contacto por WhatsApp. Una vez confirmado el pago, se enviará el acceso a Google Classroom, el grupo de WhatsApp y las indicaciones de inicio.",
    "whatsapp": "+52 55 2573 4814",
    "timezone": null
  },
  "courses": [
    {
      "id": "machine-learning",
      "title": "Machine Learning con Python",
      "shortTitle": "Machine Learning con Python",
      "category": "desarrollo",
      "categoryLabel": "Inteligencia artificial",
      "theme": "ml",
      "tags": [
        "Scikit-learn",
        "XGBoost",
        "PyTorch",
        "Streamlit"
      ],
      "level": "Básico–intermedio · requiere Python básico",
      "startDate": "2026-11-09",
      "startTime": "20:00",
      "endTime": "21:00",
      "days": [
        "lunes",
        "martes",
        "miércoles",
        "jueves",
        "viernes"
      ],
      "hours": 20,
      "sessions": 20,
      "sessionHours": 1,
      "price": 349,
      "summary": "Convierte datos en predicciones: prepara información, compara modelos y evalúa sus resultados. Termina con un proyecto reproducible y un prototipo guiado en Streamlit.",
      "audience": "Para quienes ya conocen variables, condicionales, funciones y estructuras básicas de Python y quieren iniciarse en aprendizaje automático. Comenzamos desde los fundamentos de Machine Learning; se recomienda noción de tablas, gráficas y estadística descriptiva.",
      "source": "temario_ml_aprende_y_avanza_2026.pdf",
      "sourcePageCount": 7,
      "pdf": "temarios/temario_ml_aprende_y_avanza_2026.pdf",
      "image": "assets/curso-ml-2026.png",
      "programEdition": "Noviembre 2026",
      "isCurrentProgram": true,
      "description": "Aprende el proceso de machine learning aplicado: preparar datos, entrenar y comparar modelos, medir resultados sin caer en errores de validación y mostrar predicciones en una aplicación sencilla. Incluye un primer acercamiento a XGBoost y redes neuronales con PyTorch.",
      "objective": "Construir, evaluar y presentar modelos básicos de regresión, clasificación y agrupamiento con Python; utilizar pipelines, validación cruzada y buenas prácticas para interpretar resultados.",
      "outcomes": [
        "Preparar y explorar datos antes de entrenar modelos.",
        "Separar datos correctamente y evitar fuga de información.",
        "Entrenar algoritmos supervisados y comparar métricas.",
        "Optimizar pipelines con validación cruzada.",
        "Aplicar clustering y reducción de dimensiones inicial.",
        "Presentar un prototipo predictivo con explicación y límites."
      ],
      "tools": [
        "Python",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn",
        "XGBoost",
        "PyTorch",
        "Streamlit"
      ],
      "requirements": [
        "Conocer variables, condicionales, funciones y estructuras básicas de Python.",
        "Computadora con internet y VS Code/Jupyter o Google Colab.",
        "Se recomienda noción básica de tablas, gráficas y estadística descriptiva."
      ],
      "scopeNote": "Los temas avanzados se presentan mediante ejemplos introductorios y recursos para profundizar. La profundidad se adapta a las horas del curso; los temas complementarios son un panorama para continuar aprendiendo.",
      "modules": [
        {
          "title": "Fundamentos y preparación de datos",
          "description": "Comprender el ciclo de un modelo antes de entrenarlo.",
          "lessons": [
            {
              "title": "Clase 01. Qué es realmente machine learning",
              "topics": [
                "Aprendizaje supervisado y no supervisado",
                "regresión, clasificación y clustering",
                "IA vs ML vs deep learning",
                "etapas de proyecto y casos de uso",
                "errores frecuentes y límites del modelo."
              ],
              "practice": "Definir el problema y la variable objetivo de un caso real."
            },
            {
              "title": "Clase 02. Python para datos y bibliotecas clave",
              "topics": [
                "NumPy y Pandas: lectura, selección y tipos",
                "nociones de Jupyter/Colab",
                "objetos train/target",
                "visualización con Matplotlib y Seaborn",
                "scikit-learn y su interfaz fit/predict."
              ],
              "practice": "Preparar un notebook de trabajo con dataset documentado."
            },
            {
              "title": "Clase 03. EDA y limpieza orientadas al modelado",
              "topics": [
                "Estadística rápida",
                "distribuciones y correlaciones",
                "valores faltantes y duplicados",
                "detección de outliers",
                "manejo de categorías",
                "decisiones de limpieza y sesgos."
              ],
              "practice": "Crear un informe exploratorio para elegir variables."
            },
            {
              "title": "Clase 04. Preprocesamiento sin fuga de datos",
              "topics": [
                "train_test_split",
                "entrenamiento, validación y prueba",
                "StandardScaler y OneHotEncoder",
                "imputación",
                "Data leakage",
                "reproducibilidad con random_state",
                "transformaciones por columnas."
              ],
              "practice": "Separar un dataset y construir transformaciones seguras."
            },
            {
              "title": "Clase 05. Primer modelo y línea base",
              "topics": [
                "DummyRegressor/DummyClassifier",
                "fit, predict y score",
                "baseline y métricas",
                "sobreajuste vs subajuste",
                "interpretación de resultados",
                "registro de experimentos sencillo."
              ],
              "practice": "Entrenar un baseline y justificar si mejora el punto de partida."
            }
          ]
        },
        {
          "title": "Predicción supervisada con Python",
          "description": "Aprender algoritmos esenciales de regresión y clasificación.",
          "lessons": [
            {
              "title": "Clase 06. Regresión lineal y evaluación",
              "topics": [
                "LinearRegression",
                "variables y coeficientes",
                "predicciones continuas",
                "MAE, MSE y RMSE",
                "R²",
                "evaluación en datos no vistos y residuos."
              ],
              "practice": "Predecir una variable numérica y analizar el error."
            },
            {
              "title": "Clase 07. Regresión regularizada y características",
              "topics": [
                "Ridge y Lasso (intuición)",
                "escalamiento",
                "sesgo-varianza",
                "variables relevantes",
                "importancia del preprocesamiento",
                "comparación de modelos sencillos."
              ],
              "practice": "Comparar regresión lineal frente a regularización."
            },
            {
              "title": "Clase 08. Clasificación y regresión logística",
              "topics": [
                "LogisticRegression",
                "probabilidades",
                "umbrales",
                "clasificación binaria",
                "matriz de confusión",
                "exactitud, precisión, recall y F1",
                "clases desbalanceadas."
              ],
              "practice": "Entrenar un clasificador y explicar sus errores."
            },
            {
              "title": "Clase 09. Árboles y Random Forest",
              "topics": [
                "DecisionTreeClassifier/Regressor",
                "reglas interpretables",
                "profundidad, hojas y overfitting",
                "RandomForest",
                "importancia de variables (con precauciones)",
                "comparación entre algoritmos."
              ],
              "practice": "Construir un árbol y un bosque aleatorio sobre el mismo caso."
            },
            {
              "title": "Clase 10. KNN y máquinas de vectores soporte",
              "topics": [
                "KNeighbors",
                "distancia y sensibilidad al escalamiento",
                "noción de SVM",
                "ventajas y límites de cada método",
                "selección según tipo/tamaño de datos",
                "evaluación comparable."
              ],
              "practice": "Medir el desempeño de tres modelos de clasificación."
            }
          ]
        },
        {
          "title": "Validación, optimización e interpretación",
          "description": "Evitar que un modelo parezca mejor de lo que realmente es.",
          "lessons": [
            {
              "title": "Clase 11. Cross-validation y resultados confiables",
              "topics": [
                "KFold/StratifiedKFold",
                "cross_val_score",
                "varianza entre pliegues",
                "evitar usar test para ajustar",
                "métricas según el objetivo",
                "clasificación estratificada."
              ],
              "practice": "Comparar modelos con validación cruzada."
            },
            {
              "title": "Clase 12. Pipelines reutilizables",
              "topics": [
                "Pipeline y ColumnTransformer",
                "imputación y escalado por tipo",
                "one-hot encoding",
                "fit_transform vs transform",
                "prevenir leakage",
                "guardar configuraciones."
              ],
              "practice": "Crear un pipeline completo desde datos crudos."
            },
            {
              "title": "Clase 13. Optimización de hiperparámetros",
              "topics": [
                "Parámetro frente a hiperparámetro",
                "GridSearchCV y RandomizedSearchCV",
                "espacios de búsqueda",
                "overfitting de validación",
                "tiempo de cómputo",
                "comparación final en test."
              ],
              "practice": "Ajustar un modelo con una búsqueda acotada."
            },
            {
              "title": "Clase 14. Métricas avanzadas y desbalance",
              "topics": [
                "Curvas ROC y precisión-recall",
                "AUC",
                "validación estratificada",
                "pesos de clase",
                "sensibilidad/especificidad",
                "calibración conceptual",
                "umbral según costo del error."
              ],
              "practice": "Elegir una métrica apropiada para un caso desbalanceado."
            },
            {
              "title": "Clase 15. Interpretabilidad y ML responsable",
              "topics": [
                "Coeficientes e importancia por permutación",
                "visualización del error",
                "sesgo en datos",
                "fairness, privacidad y generalización",
                "uso básico de permutation_importance",
                "reportes transparentes."
              ],
              "practice": "Explicar qué influye en un modelo y qué no puede asegurar."
            }
          ]
        },
        {
          "title": "Técnicas modernas y aplicación final",
          "description": "Explorar herramientas actuales y presentar un producto útil.",
          "lessons": [
            {
              "title": "Clase 16. Clustering y reducción de dimensión",
              "topics": [
                "KMeans",
                "escalamiento de variables",
                "selección inicial de K",
                "silhouette score (visión práctica)",
                "PCA",
                "visualización de agrupaciones",
                "diferencia entre explorar y predecir."
              ],
              "practice": "Segmentar clientes o productos y describir grupos."
            },
            {
              "title": "Clase 17. Gradient boosting con XGBoost",
              "topics": [
                "Boosting vs bagging",
                "idea de ensambles secuenciales",
                "XGBClassifier/Regressor a nivel introductorio",
                "árboles y regularización",
                "comparación con Random Forest",
                "selección de un baseline sólido."
              ],
              "practice": "Entrenar una demostración de XGBoost y comparar métricas."
            },
            {
              "title": "Clase 18. Primer contacto con PyTorch",
              "topics": [
                "Tensores y operaciones",
                "intuición de red neuronal",
                "capas, activaciones y pérdida",
                "entrenamiento en ejemplo guiado",
                "diferencia entre scikit-learn y deep learning",
                "cuándo usar GPU."
              ],
              "practice": "Ejecutar y modificar un notebook guiado de red neuronal pequeña."
            },
            {
              "title": "Clase 19. De notebook a aplicación con Streamlit",
              "topics": [
                "Guardar modelos con joblib",
                "cargar pipeline",
                "interfaz con Streamlit",
                "campos de entrada, predicción y advertencias",
                "privacidad de datos",
                "presentación de un prototipo local."
              ],
              "practice": "Construir una interfaz sencilla que muestre una predicción."
            },
            {
              "title": "Clase 20. Proyecto integrador y evaluación final",
              "topics": [
                "Definición de problema",
                "preparación",
                "train/test y baseline",
                "entrenamiento y comparación",
                "interpretación",
                "conclusiones",
                "demostración del prototipo y recomendaciones de",
                "portafolio."
              ],
              "practice": "Presentar un proyecto reproducible de machine learning."
            }
          ]
        }
      ],
      "project": {
        "title": "Proyecto predictivo de principio a fin",
        "description": "Elegirás un caso práctico de predicción o clasificación. Construirás un notebook reproducible que va desde la exploración y el preprocesamiento hasta la evaluación y presentación de un modelo.",
        "deliverables": [
          "Notebook de Python con pregunta, dataset y análisis exploratorio.",
          "Pipeline de limpieza, entrenamiento y división train/test correcta.",
          "Modelo baseline y al menos dos algoritmos comparados.",
          "Métricas pertinentes y breve justificación del modelo elegido.",
          "Gráficos para interpretar resultados, errores y limitaciones.",
          "Archivo del modelo y prototipo básico en Streamlit (demostración guiada)."
        ]
      },
      "complementaryTopics": [
        "Panorama de NLP con Transformers y modelos de Hugging Face.",
        "Introducción conceptual a visión por computadora con PyTorch.",
        "Ruta de aprendizaje para MLOps, experiment tracking y despliegue real."
      ]
    },
    {
      "id": "excel-power-bi",
      "title": "Excel + Power BI desde cero",
      "shortTitle": "Excel + Power BI",
      "category": "datos",
      "categoryLabel": "Análisis de datos",
      "theme": "excel",
      "tags": [
        "Excel",
        "Power Query",
        "Power BI",
        "DAX"
      ],
      "level": "Desde cero",
      "startDate": "2026-10-31",
      "startTime": "09:00",
      "endTime": "12:00",
      "days": [
        "sábado",
        "domingo"
      ],
      "hours": 24,
      "sessions": 8,
      "sessionHours": 3,
      "price": 299,
      "summary": "De tus primeras hojas de cálculo a un dashboard ejecutivo: organiza datos, domina fórmulas y tablas dinámicas, y crea indicadores con Power Query, Power BI y DAX.",
      "audience": "Para estudiantes y personas que trabajan con información de ventas, administración, finanzas u operaciones. Empiezas por las bases de Excel y avanzas hacia tableros interactivos.",
      "source": "temario_excel_aprende_y_avanza_2026.pdf",
      "sourcePageCount": 7,
      "pdf": "temarios/temario_excel_aprende_y_avanza_2026.pdf",
      "image": "assets/curso-excel-2026.png",
      "programEdition": "Octubre–noviembre 2026",
      "isCurrentProgram": true,
      "description": "Domina un flujo de análisis de datos completo: organiza información en Excel, utiliza funciones y tablas dinámicas, transforma archivos con Power Query y crea dashboards interactivos con Power BI y medidas DAX. Todo con ejemplos de ventas, finanzas y operaciones.",
      "objective": "Analizar y limpiar datos en Excel, crear modelos confiables en Power BI, calcular indicadores con DAX y construir un tablero ejecutivo que responda preguntas de negocio.",
      "outcomes": [
        "Diseñar archivos y tablas de Excel listos para análisis.",
        "Utilizar funciones de búsqueda, criterios y matrices dinámicas.",
        "Crear tablas dinámicas, gráficos y segmentadores.",
        "Preparar y combinar archivos con Power Query.",
        "Relacionar tablas e implementar medidas DAX útiles.",
        "Entregar un dashboard visual, filtrable y documentado."
      ],
      "tools": [
        "Microsoft Excel",
        "Power Query",
        "Tablas dinámicas",
        "Power BI Desktop",
        "DAX",
        "Power Pivot"
      ],
      "requirements": [
        "Laptop o computadora con internet y Excel; se recomienda Microsoft 365 o Excel 2021/2024.",
        "Power BI Desktop instalado en Windows para las prácticas; cuenta de Google.",
        "No se requieren conocimientos previos de Power BI ni Excel avanzado."
      ],
      "scopeNote": "Los temas avanzados se presentan mediante ejemplos introductorios y recursos para profundizar. La profundidad se adapta a las horas del curso; los temas complementarios son un panorama para continuar aprendiendo.",
      "modules": [
        {
          "title": "Excel: fundamentos y productividad",
          "description": "Preparar hojas limpias, fórmulas robustas y análisis repetibles.",
          "lessons": [
            {
              "title": "Sesión 01. Excel profesional desde la base",
              "topics": [
                "Libros, hojas, rangos y tipos de dato",
                "formatos y estructura tabular",
                "referencias relativas/absolutas",
                "tablas estructuradas",
                "filtros, quitar duplicados y validaciones",
                "errores frecuentes de captura."
              ],
              "practice": "Convertir datos desordenados en una tabla maestra utilizable."
            },
            {
              "title": "Sesión 02. Fórmulas y funciones de alto valor",
              "topics": [
                "SUMA, PROMEDIO, CONTAR y SI",
                "SI.ERROR, Y/O",
                "SUMAR.SI.CONJUNTO y CONTAR.SI.CONJUNTO",
                "fechas y texto",
                "BUSCARX e INDICE+COINCIDIR",
                "introducción a FILTRAR y UNICOS según versión."
              ],
              "practice": "Construir una hoja de indicadores y búsquedas entre tablas."
            }
          ]
        },
        {
          "title": "Excel: análisis y automatización visual",
          "description": "Presentar información y reducir tareas manuales.",
          "lessons": [
            {
              "title": "Sesión 03. Calidad de datos y análisis avanzado",
              "topics": [
                "Formato condicional con reglas",
                "listas desplegables",
                "detectar errores y duplicados",
                "segmentación de registros",
                "cálculo de crecimientos, metas y variaciones",
                "funciones LET y matrices dinámicas como demostración."
              ],
              "practice": "Crear un semáforo automático de cumplimiento por vendedor."
            },
            {
              "title": "Sesión 04. Tablas dinámicas y dashboards en Excel",
              "topics": [
                "Tablas dinámicas, jerarquías y agrupación de fechas",
                "campos calculados introductorios",
                "segmentadores y cronología",
                "gráficos dinámicos",
                "diseño de un mini-dashboard",
                "preparación para importar a Power BI."
              ],
              "practice": "Entregar un tablero ejecutivo funcional dentro de Excel."
            }
          ]
        },
        {
          "title": "Power Query y modelado en Power BI",
          "description": "Limpiar y relacionar datos con un flujo reproducible.",
          "lessons": [
            {
              "title": "Sesión 05. Power Query: transformar sin copiar/pegar",
              "topics": [
                "Obtener datos de CSV/Excel",
                "cambiar tipos, encabezados y columnas",
                "dividir, reemplazar, quitar errores y duplicados",
                "anexar consultas",
                "combinar tablas con Merge",
                "introducción al lenguaje M."
              ],
              "practice": "Crear una consulta que consolide varios archivos de ventas."
            },
            {
              "title": "Sesión 06. Power BI: modelo de datos y DAX esencial",
              "topics": [
                "Entorno de Power BI Desktop",
                "Power Query y carga",
                "tablas de hechos/dimensiones",
                "relaciones uno a muchos y dirección de filtro",
                "esquema estrella",
                "columna calculada versus medida",
                "SUM, COUNTROWS, DISTINCTCOUNT y DIVIDE."
              ],
              "practice": "Construir un modelo relacional y primeras métricas de negocio."
            }
          ]
        },
        {
          "title": "DAX, visualización y dashboard final",
          "description": "Transformar los datos en decisiones entendibles.",
          "lessons": [
            {
              "title": "Sesión 07. Medidas DAX y análisis de indicadores",
              "topics": [
                "Contexto de filtro",
                "CALCULATE y filtros",
                "medidas de margen, ticket promedio y crecimiento",
                "tablas calendario y noción de inteligencia de tiempo",
                "KPI y tarjetas",
                "validación de resultados y formato."
              ],
              "practice": "Crear medidas reutilizables para un reporte comercial."
            },
            {
              "title": "Sesión 08. Dashboard final y comunicación",
              "topics": [
                "Barras, líneas, matrices, tarjetas y segmentadores",
                "drill-down, tooltips e interacciones",
                "diseño y accesibilidad",
                "navegación sencilla",
                "actualización de datos",
                "panorama de publicación y permisos de Power BI Service."
              ],
              "practice": "Presentar un dashboard ejecutivo completo con conclusiones."
            }
          ]
        }
      ],
      "project": {
        "title": "Dashboard ejecutivo en Excel y Power BI",
        "description": "Construirás un tablero de ventas, administración o finanzas: de datos sin limpiar a una página ejecutiva con métricas, filtros, visualizaciones y recomendaciones.",
        "deliverables": [
          "Base de Excel organizada, validada y con indicadores calculados.",
          "Tablas y gráficos dinámicos para una vista preliminar.",
          "Consultas de Power Query con pasos de limpieza reproducibles.",
          "Modelo con relaciones coherentes y tabla de fechas si aplica.",
          "Mínimo cinco medidas KPI y visualizaciones interactivas.",
          "Archivo .pbix final con explicación de hallazgos y decisiones."
        ]
      },
      "complementaryTopics": [
        "Introducción a actualización de archivos y organización de fuentes de datos.",
        "Panorama de publicación en Power BI Service y licenciamiento.",
        "Próximos pasos: Power Pivot y automatización con Power Automate."
      ]
    },
    {
      "id": "sql",
      "title": "SQL desde Cero",
      "source": "02_sql_temario_v4.pdf",
      "sourcePageCount": 7,
      "startDate": "2026-09-28",
      "days": [
        "lunes",
        "martes",
        "miércoles",
        "jueves",
        "viernes"
      ],
      "startTime": "19:00",
      "endTime": "20:00",
      "hours": 20,
      "sessions": 20,
      "sessionHours": 1,
      "description": "Curso orientado a aprender SQL desde cero con un enfoque práctico para consultar, organizar y analizar información almacenada en bases de datos relacionales. Se trabajará con una base de datos de ejemplo que crecerá a lo largo del curso, desde la creación de tablas hasta consultas con agrupaciones, JOIN, subconsultas, CTE y funciones de ventana.",
      "objective": "Al finalizar, el alumno podrá comprender la estructura de una base de datos relacional, crear tablas básicas, insertar y modificar registros, consultar información con SELECT, aplicar filtros, agrupar datos, relacionar múltiples tablas y construir consultas útiles para reportes y análisis.",
      "requirements": [
        "Computadora o laptop con conexión a internet.",
        "Instalación de MySQL Community Server y MySQL Workbench, o acceso a un entorno SQL compatible.",
        "Cuenta de Google para Classroom y Drive.",
        "No se requieren conocimientos previos de bases de datos ni programación."
      ],
      "modules": [
        {
          "title": "Semana 1: Fundamentos, estructura y consultas básicas",
          "lessons": [
            {
              "title": "Día 1. Introducción a bases de datos y SQL",
              "topics": [
                "Qué es una base de datos y qué problema resuelve.",
                "Bases de datos relacionales: tablas, filas, columnas y relaciones.",
                "Qué es SQL y diferencia entre SQL y un gestor de bases de datos.",
                "Ejemplos de uso en empresas, análisis de datos y aplicaciones.",
                "Instalación o preparación del entorno de trabajo.",
                "Recorrido por MySQL Workbench.",
                "Primera consulta SQL y reglas básicas de sintaxis."
              ]
            },
            {
              "title": "Día 2. Crear bases de datos y tablas",
              "topics": [
                "CREATE DATABASE y USE.",
                "CREATE TABLE.",
                "Tipos de datos: INT, DECIMAL, VARCHAR, DATE, DATETIME y BOOLEAN.",
                "Elección de tipos de datos adecuados.",
                "Definición de columnas obligatorias con NOT NULL.",
                "Ejercicio: crear tablas de clientes, productos y ventas."
              ]
            },
            {
              "title": "Día 3. Claves, restricciones y relaciones",
              "topics": [
                "Llave primaria y su función.",
                "AUTO_INCREMENT.",
                "Llaves foráneas y relaciones entre tablas.",
                "UNIQUE, DEFAULT y CHECK a nivel introductorio.",
                "Integridad referencial.",
                "Concepto básico de normalización y por qué evitar datos repetidos.",
                "Práctica: relacionar clientes, pedidos y productos."
              ]
            },
            {
              "title": "Día 4. Insertar, actualizar y eliminar registros",
              "topics": [
                "INSERT INTO para agregar uno o varios registros.",
                "UPDATE con condiciones.",
                "DELETE con condiciones.",
                "Importancia de utilizar WHERE al modificar datos.",
                "NULL y diferencias con cadena vacía o cero.",
                "Práctica de mantenimiento de una tabla."
              ]
            },
            {
              "title": "Día 5. SELECT y construcción de consultas claras",
              "topics": [
                "SELECT * y selección de columnas específicas.",
                "Alias con AS.",
                "Expresiones y columnas calculadas.",
                "DISTINCT para valores únicos.",
                "Buenas prácticas de formato e indentación.",
                "Práctica integradora de la semana."
              ]
            }
          ]
        },
        {
          "title": "Semana 2: Filtros, funciones y agregaciones",
          "lessons": [
            {
              "title": "Día 6. WHERE y operadores de comparación",
              "topics": [
                "Filtrar filas con WHERE.",
                "Operadores =, <>, >, <, >= y <=.",
                "Filtrar fechas y cantidades.",
                "IS NULL e IS NOT NULL.",
                "Construcción de condiciones seguras y legibles.",
                "Ejercicios de búsqueda sobre clientes y ventas."
              ]
            },
            {
              "title": "Día 7. AND, OR, NOT, IN, BETWEEN y LIKE",
              "topics": [
                "Combinar múltiples condiciones.",
                "Uso de paréntesis para controlar prioridad lógica.",
                "IN para listas de valores.",
                "BETWEEN para rangos.",
                "LIKE con comodines % y _.",
                "Ejercicios de filtrado de texto, fechas y categorías."
              ]
            },
            {
              "title": "Día 8. ORDER BY, LIMIT y consultas de ranking básico",
              "topics": [
                "Orden ascendente y descendente.",
                "Orden por varias columnas.",
                "LIMIT para obtener los primeros registros.",
                "Top productos, clientes o ventas.",
                "Combinación de filtros y ordenamiento.",
                "Práctica: consulta de mejores y peores resultados."
              ]
            },
            {
              "title": "Día 9. Funciones de texto, números y fechas",
              "topics": [
                "CONCAT y manipulación sencilla de cadenas.",
                "UPPER, LOWER, LENGTH y TRIM.",
                "ROUND y operaciones numéricas.",
                "YEAR, MONTH, DAY y funciones de fecha básicas.",
                "Construcción de etiquetas y periodos de análisis.",
                "Ejercicios aplicados a nombres, importes y fechas."
              ]
            },
            {
              "title": "Día 10. Funciones de agregación",
              "topics": [
                "COUNT y COUNT DISTINCT.",
                "SUM, AVG, MIN y MAX.",
                "Diferencia entre detalle y resumen.",
                "Cálculo de ventas, promedio, número de clientes y extremos.",
                "Práctica con indicadores básicos de negocio."
              ]
            }
          ]
        },
        {
          "title": "Semana 3: Agrupaciones y relaciones entre tablas",
          "lessons": [
            {
              "title": "Día 11. GROUP BY",
              "topics": [
                "Agrupar resultados por categoría.",
                "Agrupaciones por una o varias columnas.",
                "Indicadores por producto, sucursal, vendedor o periodo.",
                "Errores comunes al mezclar agregaciones y columnas de detalle.",
                "Práctica: resumen mensual de ventas."
              ]
            },
            {
              "title": "Día 12. HAVING y análisis de grupos",
              "topics": [
                "Diferencia entre WHERE y HAVING.",
                "Filtrar resultados agregados.",
                "Detectar categorías con ventas superiores a una meta.",
                "Combinar WHERE, GROUP BY y HAVING.",
                "Práctica integradora de agregaciones."
              ]
            },
            {
              "title": "Día 13. INNER JOIN",
              "topics": [
                "Por qué se necesitan JOIN en bases normalizadas.",
                "INNER JOIN paso a paso.",
                "Uso de alias para tablas.",
                "Relacionar clientes y pedidos.",
                "Relacionar pedidos y productos.",
                "Seleccionar columnas de varias tablas sin ambigüedad."
              ]
            },
            {
              "title": "Día 14. LEFT JOIN, RIGHT JOIN y múltiples tablas",
              "topics": [
                "LEFT JOIN para conservar registros de la tabla principal.",
                "RIGHT JOIN y cuándo puede evitarse reordenando la consulta.",
                "Detectar clientes sin compras o productos sin ventas.",
                "JOIN encadenados entre tres o más tablas.",
                "Práctica con un modelo completo de ventas."
              ]
            },
            {
              "title": "Día 15. CASE WHEN y columnas de clasificación",
              "topics": [
                "Crear categorías a partir de reglas.",
                "Clasificar ventas como baja, media o alta.",
                "Etiquetas de cumplimiento de metas.",
                "CASE dentro de consultas agregadas.",
                "Práctica: segmentación de clientes y productos."
              ]
            }
          ]
        },
        {
          "title": "Semana 4: Consultas intermedias y proyecto",
          "lessons": [
            {
              "title": "Día 16. Subconsultas",
              "topics": [
                "Qué es una subconsulta.",
                "Subconsultas en WHERE.",
                "Subconsultas escalares en SELECT.",
                "Comparar resultados contra promedios o máximos.",
                "Cuándo una subconsulta es útil y cuándo un JOIN puede ser más claro.",
                "Ejercicios guiados."
              ]
            },
            {
              "title": "Día 17. CTE con WITH",
              "topics": [
                "Qué es una Common Table Expression.",
                "Separar una consulta compleja en pasos legibles.",
                "Reutilizar resultados temporales dentro de una consulta.",
                "CTE para cálculos por cliente o producto.",
                "Práctica: reporte de ventas por etapas."
              ]
            },
            {
              "title": "Día 18. Vistas e índices: introducción práctica",
              "topics": [
                "CREATE VIEW para guardar consultas reutilizables.",
                "Consultar y actualizar una vista de lectura.",
                "Qué es un índice y qué problema intenta resolver.",
                "PRIMARY KEY e índices comunes.",
                "Buenas prácticas: no indexar sin criterio.",
                "Ejemplo de vista para un reporte recurrente."
              ]
            },
            {
              "title": "Día 19. Funciones de ventana para análisis",
              "topics": [
                "Concepto de OVER y particiones.",
                "ROW_NUMBER, RANK y DENSE_RANK.",
                "Ranking de productos por ventas.",
                "Ranking dentro de cada categoría o sucursal.",
                "Introducción a LAG para comparar periodos consecutivos.",
                "Práctica de consultas analíticas."
              ]
            },
            {
              "title": "Día 20. Proyecto final y cierre",
              "topics": [
                "Integración de filtros, agregaciones, JOIN y funciones analíticas.",
                "Resolución guiada de preguntas de negocio.",
                "Revisión de legibilidad y buenas prácticas de las consultas.",
                "Entrega del script SQL final.",
                "Explicación de resultados.",
                "Recomendaciones para incluir el proyecto en un portafolio."
              ]
            }
          ]
        }
      ],
      "project": {
        "title": "Base de datos y reporte de ventas con SQL",
        "description": "El alumno trabajará con una pequeña base de datos relacional de clientes, productos y ventas y construirá consultas capaces de responder preguntas de negocio.",
        "deliverables": [
          "Script de creación o carga de la base de datos.",
          "Consultas de filtrado y búsqueda.",
          "Consultas con agregaciones y GROUP BY.",
          "Al menos dos consultas con JOIN.",
          "Una consulta con CASE.",
          "Una CTE o subconsulta.",
          "Una consulta con función de ventana.",
          "Comentarios o explicación breve de los resultados obtenidos."
        ],
        "outcomes": [
          "Comprender tablas, claves y relaciones.",
          "Escribir consultas SELECT claras y seguras.",
          "Filtrar, ordenar y resumir información.",
          "Combinar datos de múltiples tablas.",
          "Construir consultas para análisis y reportes.",
          "Tener un proyecto SQL listo para mostrar."
        ]
      },
      "theme": "sql",
      "shortTitle": "SQL",
      "category": "datos",
      "categoryLabel": "Análisis de datos",
      "tagline": "Haz las preguntas correctas a tus datos",
      "summary": "Aprende a consultar, filtrar y relacionar bases de datos para construir reportes y responder preguntas de negocio con SQL.",
      "tags": [
        "Consultas SQL",
        "JOIN",
        "Bases de datos"
      ],
      "icon": "db",
      "pdf": "temarios/sql.pdf",
      "audience": "Para quienes quieren aprender a consultar y analizar bases de datos sin experiencia previa en programación.",
      "programEdition": "Septiembre 2026",
      "level": "Desde cero"
    },
    {
      "id": "git-github",
      "title": "Git y GitHub desde cero",
      "shortTitle": "Git y GitHub",
      "category": "desarrollo",
      "categoryLabel": "Programación y desarrollo",
      "theme": "git",
      "tags": [
        "Git",
        "GitHub",
        "GitHub Actions",
        "Portafolio"
      ],
      "level": "Desde cero · principiante a intermedio práctico",
      "startDate": "2026-10-30",
      "startTime": "18:00",
      "endTime": "19:00",
      "days": [
        "lunes",
        "martes",
        "miércoles",
        "jueves",
        "viernes"
      ],
      "hours": 20,
      "sessions": 20,
      "sessionHours": 1,
      "price": 299,
      "summary": "Guarda el historial de tus proyectos, recupera cambios y aprende a colaborar con ramas y pull requests. Publica un repositorio documentado con una primera automatización.",
      "audience": "Para quienes crean código, sitios o análisis de datos y quieren organizar sus versiones y colaborar en equipo. No necesitas experiencia previa con Git ni con la terminal.",
      "source": "temario_git_aprende_y_avanza_2026.pdf",
      "sourcePageCount": 7,
      "pdf": "temarios/temario_git_aprende_y_avanza_2026.pdf",
      "image": "assets/curso-git-2026.png",
      "programEdition": "Octubre–noviembre 2026",
      "isCurrentProgram": true,
      "description": "Aprende a controlar versiones sin perder cambios, colaborar en proyectos reales y publicar un portafolio de código. Comenzamos con Git y la terminal; avanzamos hasta ramas, resolución de conflictos, revisiones de código y una primera automatización con GitHub Actions.",
      "objective": "Gestionar repositorios locales y remotos con seguridad, trabajar mediante ramas y pull requests, documentar proyectos y presentar un repositorio profesional listo para compartir.",
      "outcomes": [
        "Crear y mantener repositorios de forma ordenada.",
        "Registrar y comparar cambios con commits claros.",
        "Resolver conflictos y recuperar versiones sin riesgos.",
        "Colaborar mediante Issues, forks y pull requests.",
        "Aplicar documentación, seguridad básica y versiones.",
        "Publicar un proyecto y automatizar una verificación sencilla."
      ],
      "tools": [
        "Git",
        "GitHub",
        "VS Code",
        "Git Bash / terminal",
        "Markdown",
        "GitHub Actions",
        "GitHub Pages"
      ],
      "requirements": [
        "Computadora con Windows, macOS o Linux y acceso a internet.",
        "Cuenta gratuita de GitHub; Git y Visual Studio Code instalados.",
        "No necesitas experiencia previa con Git ni con la terminal."
      ],
      "scopeNote": "Los temas avanzados se presentan mediante ejemplos introductorios y recursos para profundizar. La profundidad se adapta a las horas del curso; los temas complementarios son un panorama para continuar aprendiendo.",
      "modules": [
        {
          "title": "Fundamentos y trabajo local",
          "description": "Entender el historial del proyecto y registrar cambios sin perder información.",
          "lessons": [
            {
              "title": "Clase 01. Git y GitHub: el mapa completo",
              "topics": [
                "Control de versiones y snapshots",
                "repositorio local frente a remoto",
                "commit, árbol de trabajo y staging",
                "usos en Python, ciencia de datos y equipos",
                "configuración del entorno."
              ],
              "practice": "Abrir y organizar tu primer repositorio de práctica."
            },
            {
              "title": "Clase 02. Terminal y configuración profesional",
              "topics": [
                "Navegación con cd, ls/dir y mkdir",
                "git –version",
                "user.name y user.email",
                "editor predeterminado",
                "crear repositorio con git init",
                "uso integrado en VS Code."
              ],
              "practice": "Inicializar un proyecto y preparar su entorno de trabajo."
            },
            {
              "title": "Clase 03. Los comandos esenciales de Git",
              "topics": [
                "git status, git add y git commit",
                "estados untracked, modified y staged",
                "commits atómicos",
                "convenciones de mensajes",
                "inspección del árbol de trabajo."
              ],
              "practice": "Guardar tres versiones coherentes de un mismo proyecto."
            },
            {
              "title": "Clase 04. Historial, diferencias y trazabilidad",
              "topics": [
                "git log, –oneline y –graph",
                "git diff y git show",
                "comparar archivos y commits",
                "interpretar cambios",
                "encontrar qué cambió y cuándo."
              ],
              "practice": "Investigar el historial de un proyecto con cambios simulados."
            },
            {
              "title": "Clase 05. Recuperación segura de cambios",
              "topics": [
                "git restore y –staged",
                "git revert",
                "git reset: soft, mixed y hard a nivel conceptual",
                "HEAD y referencias",
                "buenas prácticas antes de sobrescribir."
              ],
              "practice": "Recuperar un archivo y revertir un error sin romper el historial."
            }
          ]
        },
        {
          "title": "Ramas, fusiones y trabajo organizado",
          "description": "Desarrollar funcionalidades sin afectar la versión principal.",
          "lessons": [
            {
              "title": "Clase 06. Estructura de un repositorio limpio",
              "topics": [
                "README y estructura de carpetas",
                ".gitignore",
                "archivos temporales y carpetas del editor",
                "secretos y .env",
                "git rm –cached",
                "normas para subir datos y binarios."
              ],
              "practice": "Preparar un repositorio reproducible y sin archivos innecesarios."
            },
            {
              "title": "Clase 07. Ramas: experimenta sin miedo",
              "topics": [
                "git branch, git switch y switch -c",
                "main y ramas feature",
                "referencias y HEAD",
                "cambios independientes",
                "nomenclatura y convenciones de ramas."
              ],
              "practice": "Crear una mejora en una rama y conservar main estable."
            },
            {
              "title": "Clase 08. Merge y resolución de conflictos",
              "topics": [
                "git merge",
                "fast-forward y merge commit",
                "lectura de marcadores de conflicto",
                "comparación de cambios",
                "resolución manual en VS Code",
                "validación tras fusionar."
              ],
              "practice": "Provocar y resolver un conflicto real entre dos ramas."
            },
            {
              "title": "Clase 09. Herramientas de flujo avanzado",
              "topics": [
                "git stash y stash pop",
                "introducción a cherry-pick",
                "rebase frente a merge y cuándo evitar reescribir historial compartido",
                "reflog como salvavidas."
              ],
              "practice": "Mover una corrección entre ramas y retomar trabajo pendiente."
            },
            {
              "title": "Clase 10. Flujos Git para equipos",
              "topics": [
                "Flujo de características (feature branches)",
                "commits pequeños",
                "reglas de nombres",
                "revisiones previas al merge",
                "convenciones y repositorios preparados para colaboración."
              ],
              "practice": "Simular el desarrollo de una funcionalidad con checklist."
            }
          ]
        },
        {
          "title": "GitHub y colaboración real",
          "description": "Trabajar con repositorios en la nube y contribuir en equipo.",
          "lessons": [
            {
              "title": "Clase 11. Repositorios remotos y autenticación",
              "topics": [
                "Crear un repositorio en GitHub",
                "clone y remote -v",
                "HTTPS frente a SSH",
                "tokens y credenciales",
                "verificación del origen remoto",
                "repositorios públicos y privados."
              ],
              "practice": "Conectar un proyecto local con un repositorio remoto."
            },
            {
              "title": "Clase 12. Sincronización sin perder trabajo",
              "topics": [
                "git push, pull y fetch",
                "upstream",
                "diferencias local/remoto",
                "conflictos de sincronización",
                "pull –rebase como concepto",
                "hábitos antes de publicar."
              ],
              "practice": "Sincronizar cambios desde dos equipos o ramas simuladas."
            },
            {
              "title": "Clase 13. Forks y pull requests paso a paso",
              "topics": [
                "Fork y clone",
                "rama de contribución",
                "apertura de Pull Request",
                "descripción clara y referencias cruzadas",
                "diferencia entre base y compare",
                "merge."
              ],
              "practice": "Realizar una contribución mediante Pull Request."
            },
            {
              "title": "Clase 14. Issues, Projects y revisiones",
              "topics": [
                "GitHub Issues: etiquetas, responsables y tareas",
                "GitHub Projects",
                "comentarios de revisión",
                "solicitar cambios y aprobar",
                "trazabilidad entre issue, rama y PR."
              ],
              "practice": "Organizar un mini-sprint con tablero e issue vinculada."
            },
            {
              "title": "Clase 15. Seguridad y protección del repositorio",
              "topics": [
                "Por qué no subir contraseñas ni tokens",
                "revisión de secretos",
                "permisos de colaboración",
                "reglas de protección de ramas",
                "Dependabot y alertas (panorama)."
              ],
              "practice": "Aplicar una lista de verificación de seguridad antes de publicar."
            }
          ]
        },
        {
          "title": "Automatización y portafolio",
          "description": "Convertir los conocimientos en un proyecto que puedas mostrar.",
          "lessons": [
            {
              "title": "Clase 16. README que comunica y convence",
              "topics": [
                "Markdown, tablas, enlaces e imágenes",
                "instrucciones de instalación",
                "documentación de uso",
                "CONTRIBUTING, LICENSE y CHANGELOG",
                "badges utilizados con criterio."
              ],
              "practice": "Diseñar el README y la documentación de un proyecto."
            },
            {
              "title": "Clase 17. Primeros pasos con GitHub Actions",
              "topics": [
                "Qué es integración continua",
                "workflows YAML",
                "eventos push y pull_request",
                "jobs y steps",
                "uso de checkout",
                "ejecutar una prueba o verificación sencilla."
              ],
              "practice": "Crear una automatización que se ejecute en cada push."
            },
            {
              "title": "Clase 18. Versionado y entregas formales",
              "topics": [
                "git tag",
                "versiones semánticas MAJOR.MINOR.PATCH",
                "releases y notas de cambio",
                "ramas protegidas",
                "checklist de publicación y trazabilidad."
              ],
              "practice": "Publicar una versión 1.0 con nota de cambios."
            },
            {
              "title": "Clase 19. Perfil GitHub y GitHub Pages",
              "topics": [
                "README del perfil",
                "repositorios fijados",
                "buenas prácticas de portafolio",
                "publicación estática con Pages",
                "enlaces y presentación visual",
                "guía para entrevistas."
              ],
              "practice": "Publicar una página sencilla que enlace tu trabajo."
            },
            {
              "title": "Clase 20. Proyecto integrador y demostración",
              "topics": [
                "Repositorio y ramas",
                "Issues y PR",
                "revisión del historial",
                "merge y release",
                "automatización",
                "documentación",
                "presentación final y revisión grupal."
              ],
              "practice": "Entregar un repositorio completo, público o privado, listo para portafolio."
            }
          ]
        }
      ],
      "project": {
        "title": "Un repositorio profesional con flujo colaborativo",
        "description": "Construirás un proyecto pequeño (sitio, script o análisis) y documentarás todo su ciclo en GitHub: desde el primer commit hasta una versión publicable.",
        "deliverables": [
          "Repositorio con estructura, licencia y archivo README explicativo.",
          "Historial de commits descriptivos y al menos una rama de trabajo.",
          "Issue, pull request revisado y merge documentado.",
          ".gitignore y revisión de archivos sensibles.",
          "Tag o release con versión y notas de cambio.",
          "Workflow sencillo de GitHub Actions; enlace a perfil o Pages cuando aplique."
        ]
      },
      "complementaryTopics": [
        "Introducción a GitHub Codespaces y entornos de desarrollo en la nube.",
        "Panorama de GitHub Copilot y buenas prácticas al aceptar sugerencias.",
        "Buenas prácticas para repositorios de ciencia de datos y colaboración open source."
      ]
    },
    {
      "id": "latex",
      "title": "LaTeX desde Cero",
      "source": "04_latex_temario_v4.pdf",
      "sourcePageCount": 7,
      "startDate": "2026-09-28",
      "days": [
        "lunes",
        "martes",
        "miércoles",
        "jueves",
        "viernes"
      ],
      "startTime": "18:00",
      "endTime": "19:00",
      "hours": 20,
      "sessions": 20,
      "sessionHours": 1,
      "description": "Curso para aprender LaTeX desde cero y producir documentos académicos con apariencia profesional. Se utilizará Overleaf para trabajar sin configuraciones complicadas y se cubrirán estructura del documento, formato, ecuaciones, tablas, imágenes, referencias cruzadas, bibliografía y una introducción a presentaciones con Beamer.",
      "objective": "Al finalizar, el alumno será capaz de crear y organizar documentos en LaTeX, escribir expresiones matemáticas, insertar figuras y tablas, generar referencias y bibliografía, trabajar con documentos largos y preparar un reporte, artículo o proyecto académico con formato consistente.",
      "requirements": [
        "Computadora o laptop con conexión a internet.",
        "Cuenta gratuita de Overleaf.",
        "Cuenta de Google para Classroom y Drive.",
        "No se requieren conocimientos previos de LaTeX ni programación."
      ],
      "modules": [
        {
          "title": "Semana 1: Estructura y formato de documentos",
          "lessons": [
            {
              "title": "Día 1. Introducción a LaTeX y Overleaf",
              "topics": [
                "Qué es LaTeX y diferencias frente a un procesador de texto tradicional.",
                "Casos de uso: tareas, reportes, tesis, artículos y documentos científicos.",
                "Crear una cuenta y proyecto en Overleaf.",
                "Estructura mínima: documentclass, begin{document} y end{document}.",
                "Compilar, revisar errores y descargar PDF.",
                "Primer documento del curso."
              ]
            },
            {
              "title": "Día 2. Clases de documento, preámbulo y paquetes",
              "topics": [
                "article, report y book.",
                "Qué es el preámbulo.",
                "Uso de paquetes con usepackage.",
                "Idioma y codificación moderna.",
                "Márgenes con geometry.",
                "Tamaño de papel y organización del archivo.",
                "Práctica: plantilla base reutilizable."
              ]
            },
            {
              "title": "Día 3. Texto, énfasis y listas",
              "topics": [
                "Párrafos y saltos.",
                "Negritas, cursivas, subrayado y texto monoespaciado.",
                "Tamaños de fuente a nivel práctico.",
                "Listas itemize y enumerate.",
                "Listas anidadas.",
                "Caracteres especiales: %, $, &, #, _, { y }.",
                "Práctica de formato académico limpio."
              ]
            },
            {
              "title": "Día 4. Secciones, índices y organización",
              "topics": [
                "section, subsection y subsubsection.",
                "Jerarquía lógica de un documento.",
                "tableofcontents.",
                "Saltos de página.",
                "Portada con title, author y date.",
                "Numeración automática.",
                "Práctica: estructura de un reporte completo."
              ]
            },
            {
              "title": "Día 5. Cajas, notas y diseño sobrio",
              "topics": [
                "Uso básico de color con xcolor.",
                "Cajas sencillas con tcolorbox.",
                "Reglas y separadores.",
                "Buenas prácticas para no sobrecargar un documento académico.",
                "Creación de bloques de definición, ejemplo o nota.",
                "Mini proyecto de la semana: guía académica de dos páginas."
              ]
            }
          ]
        },
        {
          "title": "Semana 2: Matemáticas en LaTeX",
          "lessons": [
            {
              "title": "Día 6. Matemáticas en línea y ecuaciones",
              "topics": [
                "Modo matemático en línea.",
                "Ecuaciones centradas.",
                "Superíndices y subíndices.",
                "Fracciones y raíces.",
                "Símbolos griegos.",
                "Operadores matemáticos comunes.",
                "Práctica con fórmulas de física, ingeniería y matemáticas."
              ]
            },
            {
              "title": "Día 7. Ecuaciones alineadas y sistemas",
              "topics": [
                "Paquete amsmath.",
                "Entorno equation.",
                "align y align*.",
                "Alineación por el signo igual.",
                "Sistemas de ecuaciones con cases.",
                "Numeración y referencias de ecuaciones.",
                "Práctica con desarrollos paso a paso."
              ]
            },
            {
              "title": "Día 8. Integrales, sumas, límites y notación científica",
              "topics": [
                "Integrales definidas e indefinidas.",
                "Sumatorias y productorias.",
                "Límites.",
                "Derivadas y derivadas parciales.",
                "Vectores y notación en negritas.",
                "Funciones trigonométricas y logaritmos.",
                "Práctica de notación científica completa."
              ]
            },
            {
              "title": "Día 9. Matrices y arreglos",
              "topics": [
                "matrix, pmatrix, bmatrix y vmatrix.",
                "Determinantes.",
                "Vectores columna y matrices por bloques.",
                "Arreglos simples dentro de matemáticas.",
                "Matrices con puntos suspensivos.",
                "Práctica aplicada a álgebra lineal."
              ]
            },
            {
              "title": "Día 10. Teoremas, definiciones y demostraciones",
              "topics": [
                "Uso básico de amsthm.",
                "Crear entornos theorem, definition y example.",
                "Entorno proof.",
                "Numeración automática.",
                "Estilo consistente para documentos matemáticos.",
                "Práctica integradora de la semana."
              ]
            }
          ]
        },
        {
          "title": "Semana 3: Figuras, tablas, referencias y bibliografía",
          "lessons": [
            {
              "title": "Día 11. Imágenes y figuras",
              "topics": [
                "Paquete graphicx.",
                "includegraphics y control de tamaño.",
                "Entorno figure.",
                "Caption y label.",
                "Posición de figuras y concepto de objetos flotantes.",
                "Buenas prácticas para resolución y nombres de archivo.",
                "Práctica con imágenes y gráficas."
              ]
            },
            {
              "title": "Día 12. Tablas básicas",
              "topics": [
                "Entorno tabular.",
                "Columnas l, c y r.",
                "Bordes y separación de columnas.",
                "Encabezados y alineación.",
                "Uso de booktabs para tablas más limpias.",
                "Tabla dentro de entorno table con caption.",
                "Práctica: tabla de resultados."
              ]
            },
            {
              "title": "Día 13. Tablas más completas",
              "topics": [
                "Columnas de ancho fijo con p{}.",
                "multicolumn.",
                "Filas con contenido largo.",
                "Ajustar tablas anchas.",
                "Tablas de comparación.",
                "Buenas prácticas: evitar exceso de líneas.",
                "Práctica con una tabla académica real."
              ]
            },
            {
              "title": "Día 14. Referencias cruzadas",
              "topics": [
                "label y ref.",
                "Referenciar secciones, figuras, tablas y ecuaciones.",
                "Por qué no conviene escribir números manualmente.",
                "hyperref para enlaces internos.",
                "Uso de autoref o referencias descriptivas a nivel introductorio.",
                "Práctica: documento con navegación interna."
              ]
            },
            {
              "title": "Día 15. Bibliografía y citas",
              "topics": [
                "Qué es un archivo .bib.",
                "Entradas article, book y misc.",
                "Claves de citación.",
                "Uso de biblatex/biber o flujo equivalente en Overleaf.",
                "Citas en el texto y bibliografía automática.",
                "Estilos bibliográficos comunes.",
                "Práctica: agregar y citar varias fuentes."
              ]
            }
          ]
        },
        {
          "title": "Semana 4: Documentos largos, plantillas y proyecto",
          "lessons": [
            {
              "title": "Día 16. Encabezados, pies y numeración",
              "topics": [
                "fancyhdr para encabezados y pies.",
                "Numeración de páginas.",
                "Estilo consistente en reportes largos.",
                "Uso moderado de color institucional.",
                "Práctica sobre la plantilla del proyecto final."
              ]
            },
            {
              "title": "Día 17. Comandos personalizados y reutilización",
              "topics": [
                "newcommand para abreviar expresiones repetidas.",
                "Comandos con argumentos simples.",
                "Definir colores y estilos propios.",
                "Evitar repetición de formato.",
                "Separar contenido y presentación.",
                "Práctica: crear una mini plantilla personal."
              ]
            },
            {
              "title": "Día 18. Proyectos largos y múltiples archivos",
              "topics": [
                "Separar capítulos o secciones en varios .tex.",
                "input e include.",
                "Carpetas para figuras y bibliografía.",
                "Estructura recomendada para tesis o reportes extensos.",
                "Trabajo colaborativo y versiones en Overleaf.",
                "Práctica: dividir el proyecto final en archivos."
              ]
            },
            {
              "title": "Día 19. Introducción a Beamer",
              "topics": [
                "Qué es Beamer.",
                "Frames y estructura de una presentación.",
                "Títulos, listas, bloques e imágenes.",
                "Ecuaciones dentro de diapositivas.",
                "Temas y colores con moderación.",
                "Mini presentación de 3 a 5 diapositivas."
              ]
            },
            {
              "title": "Día 20. Proyecto final y cierre",
              "topics": [
                "Revisión del documento final.",
                "Corrección de errores frecuentes de compilación.",
                "Consistencia de títulos, figuras, tablas y bibliografía.",
                "Verificación de referencias cruzadas.",
                "Exportación del PDF final.",
                "Recomendaciones para adaptar la plantilla a tesis, artículos o reportes."
              ]
            }
          ]
        }
      ],
      "project": {
        "title": "Reporte académico profesional en LaTeX",
        "description": "El alumno elaborará un documento académico completo que combine estructura, matemáticas, figuras, tablas, referencias y bibliografía.",
        "deliverables": [
          "Portada y tabla de contenido.",
          "Secciones y subsecciones correctamente organizadas.",
          "Al menos tres expresiones o ecuaciones matemáticas.",
          "Una figura con caption y referencia cruzada.",
          "Una tabla con formato limpio.",
          "Bibliografía automática con varias fuentes.",
          "Encabezado o pie de página coherente.",
          "PDF final y archivos fuente organizados."
        ],
        "outcomes": [
          "Crear documentos desde cero en Overleaf.",
          "Escribir matemáticas con buena presentación.",
          "Insertar figuras y tablas de forma correcta.",
          "Automatizar numeración y referencias.",
          "Gestionar citas y bibliografía.",
          "Construir una plantilla académica reutilizable."
        ]
      },
      "theme": "latex",
      "shortTitle": "LaTeX",
      "category": "academico",
      "categoryLabel": "Herramientas académicas",
      "tagline": "Dale a tus ideas una presentación profesional",
      "summary": "Crea documentos académicos en Overleaf con ecuaciones, figuras, tablas y bibliografía para presentar tus ideas con claridad.",
      "tags": [
        "Overleaf",
        "Escritura académica",
        "Bibliografía"
      ],
      "icon": "file",
      "pdf": "temarios/latex.pdf",
      "audience": "Para quienes necesitan preparar reportes, artículos o proyectos académicos con una presentación consistente.",
      "programEdition": "Septiembre 2026",
      "level": "Desde cero"
    },
    {
      "id": "r",
      "title": "R para Análisis de Datos",
      "shortTitle": "R para análisis de datos",
      "category": "datos",
      "categoryLabel": "Análisis de datos",
      "theme": "r",
      "tags": [
        "RStudio",
        "tidyverse",
        "ggplot2",
        "Quarto"
      ],
      "level": "Desde cero",
      "startDate": "2026-10-30",
      "startTime": "19:00",
      "endTime": "20:00",
      "days": [
        "lunes",
        "martes",
        "miércoles",
        "jueves",
        "viernes"
      ],
      "hours": 20,
      "sessions": 20,
      "sessionHours": 1,
      "price": 299,
      "summary": "Aprende R desde cero para importar y limpiar archivos, analizar información con tidyverse, crear gráficas con ggplot2 y comunicar tus hallazgos en un reporte reproducible.",
      "audience": "Para estudiantes, investigadores y profesionales que quieren analizar datos de ventas, salud, educación o finanzas. No necesitas experiencia previa en programación, R ni estadística avanzada.",
      "source": "temario_r_aprende_y_avanza_2026.pdf",
      "sourcePageCount": 7,
      "pdf": "temarios/temario_r_aprende_y_avanza_2026.pdf",
      "image": "assets/curso-r-2026.png",
      "programEdition": "Octubre–noviembre 2026",
      "isCurrentProgram": true,
      "description": "Aprende R desde cero y transfórmalo en una herramienta real para trabajar con información. Pasaremos de objetos, funciones y tablas a limpieza de datos, visualizaciones profesionales y reportes reproducibles sobre casos de ventas, salud, educación o finanzas.",
      "objective": "Importar, depurar, transformar, explorar y comunicar datos con R, tidyverse y ggplot2, mediante un análisis reproducible con interpretación y conclusiones propias.",
      "outcomes": [
        "Escribir scripts claros y trabajar con RStudio.",
        "Importar y limpiar archivos CSV y Excel.",
        "Combinar, agrupar y transformar datos con tidyverse.",
        "Crear gráficos profesionales y comunicar hallazgos.",
        "Aplicar estadística descriptiva y regresión introductoria.",
        "Generar un reporte reproducible y proyecto de portafolio."
      ],
      "tools": [
        "R",
        "RStudio",
        "tidyverse",
        "dplyr",
        "tidyr",
        "ggplot2",
        "readxl",
        "Quarto"
      ],
      "requirements": [
        "Computadora con conexión a internet, R y RStudio Desktop.",
        "Cuenta de Google para Classroom y Drive.",
        "No se requieren conocimientos previos de R, estadística avanzada ni programación."
      ],
      "scopeNote": "Los temas avanzados se presentan mediante ejemplos introductorios y recursos para profundizar. La profundidad se adapta a las horas del curso; los temas complementarios son un panorama para continuar aprendiendo.",
      "modules": [
        {
          "title": "De cero al lenguaje R",
          "description": "Aprender el entorno, programar y organizar información.",
          "lessons": [
            {
              "title": "Clase 01. Introducción a R, RStudio y proyectos",
              "topics": [
                "R frente a RStudio",
                "instalación y paneles",
                "scripts .R y proyectos .Rproj",
                "consola, ayuda y paquetes",
                "primeras operaciones",
                "buenas prácticas de organización."
              ],
              "practice": "Crear tu primer script y proyecto en RStudio."
            },
            {
              "title": "Clase 02. Variables, tipos y operaciones",
              "topics": [
                "Asignación <numeric, integer, character, logical y factor",
                "operadores y conversiones",
                "class, typeof y str",
                "funciones matemáticas",
                "tratamiento básico de fechas."
              ],
              "practice": "Automatizar cálculos de ingresos, porcentajes y variaciones."
            },
            {
              "title": "Clase 03. Vectores y lógica vectorizada",
              "topics": [
                "c, seq y rep",
                "indexación positiva, negativa y lógica",
                "operaciones vectorizadas",
                "sum, mean, median y quantile",
                "valores faltantes NA y is.na."
              ],
              "practice": "Analizar una serie de mediciones sin escribir ciclos."
            },
            {
              "title": "Clase 04. Listas, matrices y tablas de datos",
              "topics": [
                "Matrices y listas",
                "data.frame y tibble",
                "nombres de columnas",
                "selección de registros",
                "factores y categorías",
                "inspección con head, dim y summary."
              ],
              "practice": "Construir una base de datos pequeña y explorar sus campos."
            },
            {
              "title": "Clase 05. Condicionales, ciclos y funciones propias",
              "topics": [
                "if/else",
                "for y apply en contexto",
                "function, argumentos y valores retornados",
                "uso de operadores lógicos",
                "vectorización como alternativa",
                "depuración de errores comunes."
              ],
              "practice": "Programar una función reutilizable para indicadores."
            }
          ]
        },
        {
          "title": "Datos reales con tidyverse",
          "description": "Importar, limpiar, unir y transformar archivos.",
          "lessons": [
            {
              "title": "Clase 06. El ecosistema tidyverse",
              "topics": [
                "install.packages y library",
                "pipe nativo |>",
                "dplyr, tidyr, readr y tibble",
                "flujo reproducible",
                "organización de scripts y rutas relativas con proyectos."
              ],
              "practice": "Crear un pipeline ordenado para preparar datos."
            },
            {
              "title": "Clase 07. Importación profesional de archivos",
              "topics": [
                "read_csv y read_excel",
                "delimitadores y codificación",
                "tipos de columnas",
                "inspección con glimpse",
                "importación de varias hojas",
                "exportación segura a CSV."
              ],
              "practice": "Cargar una base de ventas desde CSV y Excel."
            },
            {
              "title": "Clase 08. Filtrar y crear variables con dplyr",
              "topics": [
                "select, filter, arrange y mutate",
                "operadores lógicos",
                "case_when e if_else",
                "rename",
                "distinct",
                "combinaciones de filtros y reglas de calidad."
              ],
              "practice": "Limpiar registros y crear segmentos de clientes."
            },
            {
              "title": "Clase 09. Agrupaciones y resúmenes para negocio",
              "topics": [
                "group_by y summarise",
                "n, n_distinct, mean y sum",
                "recuentos con count",
                "porcentajes por categoría",
                "orden de agregación",
                "tablas comparativas."
              ],
              "practice": "Crear un ranking de categorías y un reporte de KPI."
            },
            {
              "title": "Clase 10. Limpieza, unión y reestructura de datos",
              "topics": [
                "NA y duplicados",
                "replace_na y drop_na",
                "pivot_longer/pivot_wider",
                "left_join e inner_join",
                "tipos de claves",
                "strings y fechas básicas con stringr/lubridate."
              ],
              "practice": "Consolidar tablas de pedidos y clientes en formato analítico."
            }
          ]
        },
        {
          "title": "Visualización con ggplot2",
          "description": "Diseñar gráficos que responden preguntas.",
          "lessons": [
            {
              "title": "Clase 11. Gramática de gráficos y ggplot2",
              "topics": [
                "Datos, aesthetics y geoms",
                "aes y mapeos",
                "geom_point, geom_line y geom_col",
                "títulos, etiquetas y temas",
                "buenas prácticas visuales."
              ],
              "practice": "Graficar tendencias de ingresos con estilo profesional."
            },
            {
              "title": "Clase 12. Distribuciones y comparación de grupos",
              "topics": [
                "Histogramas, densidades y boxplots",
                "dispersiones",
                "facetas con facet_wrap",
                "escalas continuas/discretas",
                "outliers",
                "interpretación responsable de la variación."
              ],
              "practice": "Comparar distribuciones de ventas entre sucursales."
            },
            {
              "title": "Clase 13. Visualización avanzada y storytelling",
              "topics": [
                "Colores accesibles",
                "anotaciones y líneas de referencia",
                "coord_flip",
                "escalas y formatos",
                "facets",
                "exportación con ggsave",
                "elección del gráfico correcto."
              ],
              "practice": "Diseñar un panel de tres gráficos consistentes."
            },
            {
              "title": "Clase 14. Estadística descriptiva aplicada",
              "topics": [
                "Media, mediana, moda conceptual y cuartiles",
                "desviación estándar y percentiles",
                "group_by",
                "correlación",
                "tablas cruzadas",
                "qué no puede concluirse de los datos."
              ],
              "practice": "Redactar un resumen estadístico acompañado de visualizaciones."
            },
            {
              "title": "Clase 15. EDA: análisis exploratorio completo",
              "topics": [
                "Hipótesis y preguntas de negocio",
                "faltantes, valores atípicos y sesgos",
                "relaciones entre variables",
                "segmentación",
                "interpretación de hallazgos",
                "checklist de calidad."
              ],
              "practice": "Entregar un diagnóstico exploratorio de un dataset."
            }
          ]
        },
        {
          "title": "Reportes y análisis reproducible",
          "description": "Comunicar resultados y automatizar el trabajo.",
          "lessons": [
            {
              "title": "Clase 16. Texto, categorías y fechas",
              "topics": [
                "stringr: detectar y limpiar cadenas",
                "expresiones regulares introductorias",
                "factores con forcats",
                "lubridate para fechas",
                "agrupación mensual",
                "datos sucios reales."
              ],
              "practice": "Normalizar nombres y construir una serie mensual."
            },
            {
              "title": "Clase 17. Inferencia básica y correlación",
              "topics": [
                "Muestreo y población",
                "intervalos a nivel conceptual",
                "cor y matrices de correlación",
                "correlación no implica causalidad",
                "introducción a pruebas de comparación."
              ],
              "practice": "Examinar relación entre dos variables y sus límites."
            },
            {
              "title": "Clase 18. Regresión lineal inicial con lm",
              "topics": [
                "Variables predictoras y respuesta",
                "fórmula y lm",
                "predict",
                "lectura básica de coeficientes y R²",
                "revisión de residuos de forma introductoria",
                "precauciones al interpretar."
              ],
              "practice": "Ajustar un modelo sencillo y visualizar su tendencia."
            },
            {
              "title": "Clase 19. Reportes con Quarto y datos reproducibles",
              "topics": [
                "Documentos .qmd",
                "fragmentos de R",
                "texto, tablas y gráficos",
                "parámetros básicos",
                "exportación HTML/PDF según entorno",
                "introducción visual a Shiny como siguiente paso."
              ],
              "practice": "Generar un reporte HTML con código, gráficos y conclusiones."
            },
            {
              "title": "Clase 20. Proyecto final: de archivo a hallazgos",
              "topics": [
                "Carga y validación",
                "limpieza con dplyr/tidyr",
                "estadística",
                "ggplot2",
                "interpretación",
                "organización del repositorio y presentación de resultados."
              ],
              "practice": "Presentar un análisis reproducible y un reporte para portafolio."
            }
          ]
        }
      ],
      "project": {
        "title": "Análisis de datos reproducible con R",
        "description": "Partirás de un conjunto de datos real o de práctica para responder preguntas, identificar patrones y producir un reporte claro con gráficos y conclusiones.",
        "deliverables": [
          "Proyecto RStudio con scripts ordenados y datos de entrada.",
          "Carga y depuración documentada; tratamiento de datos faltantes.",
          "Transformaciones, uniones o agregaciones mediante dplyr/tidyr.",
          "Tabla de KPI y mínimo tres gráficos con ggplot2.",
          "Resumen estadístico e interpretación con precauciones.",
          "Reporte en Quarto (HTML recomendado) o presentación de hallazgos."
        ]
      },
      "complementaryTopics": [
        "Introducción al análisis de series de tiempo con R.",
        "Panorama de dashboards con Shiny y flexdashboard.",
        "Siguiente paso: tidymodels para machine learning con R."
      ]
    }
  ]
};
