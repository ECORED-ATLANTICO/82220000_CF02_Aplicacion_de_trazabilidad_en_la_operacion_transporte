export default {
  global: {
    Name: 'Métricas del sistema de trazabilidad',
    Description:
      'El componente formativo de Métricas del sistema de trazabilidad es fundamental en la cadena logística para comprender y optimizar el rendimiento en la operación del transporte. Al dominar la recopilación y análisis de datos clave, como la velocidad de registro, la precisión de la información y el tiempo de respuesta ante incidentes, los profesionales pueden identificar problemáticas, mejorar la eficiencia operativa y asegurar la integridad del producto',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Cadena de suministro',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Elementos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Calidad',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Parámetros de control',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Métricas de desempeño',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Criterios de seguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Principios',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Tipos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Indicadores de gestión de la operación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Importancia',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Tipos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Variables',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Principios de sostenibilidad',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Procedimientos operativos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Importancia',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Estructura',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Composición',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Cadena de suministro.',
      referencia:
        'LASAD Soluciones Integrales. (2022, 1 de marzo). <i>¿Qué es una cadena de suministro?</i> [Video]. YouTube',
      tipo: 'Sitio Video',
      link: 'https://www.youtube.com/watch?v=YOqQjF-VHD0',
    },
    {
      tema: 'Criterios de seguridad.',
      referencia:
        'Global Security Consultants. (2022, abril 21). <i>5 medidas de seguridad para el transporte de carga</i> [Video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ty57u2DbhMw',
    },
    {
      tema: 'Indicadores de gestión de la operación.',
      referencia:
        'Patiño-González, M. A., & Agudelo-Rico, H. A. (2018). <i>Medición para cadenas de suministro bajo indicadores claves de desempeño (KPI) y tecnologías de información.</i>',
      tipo: 'Manual PDF',
      link:
        'https://revistas.unilibre.edu.co/index.php/dictamenlibre/article/view/5147/4365',
    },
  ],
  glosario: [
    {
      termino: 'Auditoría de trazabilidad',
      significado:
        'Proceso sistemático de revisión y verificación de la exactitud e integridad de los datos y procesos de trazabilidad dentro del sistema.',
    },
    {
      termino: 'Cobertura de trazabilidad',
      significado:
        'Porcentaje de productos, lotes o componentes que están incluidos en el sistema de trazabilidad, respecto al total que debería estarlo.',
    },
    {
      termino: 'Conformidad de datos',
      significado:
        'Grado en que los datos registrados en el sistema de trazabilidad cumplen con los estándares predefinidos de formato, contenido y calidad.',
    },
    {
      termino: 'Disponibilidad de datos',
      significado:
        'Medida de la accesibilidad y el tiempo de actividad de la información de trazabilidad dentro del sistema.',
    },
    {
      termino: 'Eficiencia operacional',
      significado:
        'Medida de desempeño que refleja la capacidad de una operación para cumplir objetivos de forma óptima en tiempo, recursos y costos.',
    },
    {
      termino: 'Exactitud de los datos',
      significado:
        'Grado en que los datos de trazabilidad reflejan fielmente la información real sobre el producto, su origen, ruta y destino.',
    },
    {
      termino: 'ERP (<i>Enterprise Resource Planning</i>)',
      significado:
        'Sistema integrado de gestión empresarial que puede incluir módulos de transporte, inventario, finanzas y trazabilidad.',
    },
    {
      termino:
        'Indicador de desempeño / KPI (<i>Key Performance Indicator</i>)',
      significado:
        'Métrica cuantificable utilizada para medir el éxito de un proceso, operación o actividad frente a objetivos estratégicos.',
    },
    {
      termino: 'PCC (Punto Crítico de Control)',
      significado:
        'Etapa o lugar en la cadena de transporte donde se registra o verifica información clave de trazabilidad.',
    },
    {
      termino: 'POE (Procedimiento Operativo Estandarizado)',
      significado:
        'Documento que describe paso a paso cómo ejecutar tareas de manera uniforme para garantizar consistencia, calidad y seguridad en la operación.',
    },
    {
      termino: 'Precisión de la información',
      significado:
        'Porcentaje de registros correctos y completos en los sistemas de trazabilidad.',
    },
    {
      termino: '<i>Reporting</i>',
      significado:
        'Generación de reportes o informes sobre desempeño, trazabilidad, seguridad y cumplimiento de procedimientos.',
    },
    {
      termino: 'TMS (<i>Transport Management System</i>)',
      significado:
        'Sistema de gestión del transporte que permite planificar, ejecutar y monitorear operaciones de transporte.',
    },
    {
      termino: 'WMS (<i>Warehouse Management System</i>)',
      significado:
        'Sistema de gestión de almacenes utilizado para registrar, monitorear y controlar inventarios y operaciones de almacenamiento.',
    },
  ],
  referencias: [
    {
      referencia:
        'AENOR. (n.d.). <i>Certificación ISO 22005 Trazabilidad Cadena de Alimentos</i>. Recuperado de',
      link: 'https://www.aenor.com/certificacion/alimentacion/trazabilidad',
    },
    {
      referencia:
        'Calatayud, A., & Katz, R. (2019). <i>Cadena de suministro 4.0: Mejores prácticas internacionales y hoja de ruta para América Latina.</i> Banco Interamericano de Desarrollo.',
      link:
        'https://publications.iadb.org/publications/spanish/document/Cadena_de_suministro_4.0_Mejores_pr%C3%A1cticas_internacionales_y_hoja_de_ruta_para_Am%C3%A9rica_Latina_es.pdf',
    },
    {
      referencia:
        'Congreso de Colombia. (2004). <i>Ley 914 de 2004: Por la cual se crea el Sistema Nacional de Identificación e Información de Ganado Bovino.</i> Diario Oficial No. 45.759.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (2013). <i>Ley 1659 de 2013: Por la cual se crea el sistema nacional de identificación, información y trazabilidad animal.</i> Diario Oficial No. 48.850.',
      link: '',
    },
    {
      referencia:
        'GS1. (s.f.). <i>Implementación de trazabilidad EAN.UCC.</i> GS1 Argentina.',
      link: 'https://www.gs1.org.ar/documentos/trazabilidad.pdf',
    },
    {
      referencia:
        'ICONTEC. (2015). <i>NTC-ISO 9001: Sistemas de gestión de la calidad - Requisitos (Cuarta actualización).</i> Instituto Colombiano de Normas Técnicas y Certificación.',
      link: '',
    },
    {
      referencia:
        'ISO. (2007). <i>ISO 22005:2007 - Trazabilidad en la cadena alimentaria — Principios generales y requisitos básicos para el diseño y la implementación del sistema.</i> Organización Internacional de Normalización.',
      link: '',
    },
    {
      referencia:
        'Lazos-Martínez, R. J. (n.d.). <i>ISO 9001:2000, Trazabilidad e Incertidumbre. Centro Nacional de Metrología.</i> Recuperado de',
      link:
        'https://www.cenam.mx/memorias/descarga/Memorias%20Simposio/documentos/ta-or079.pdf',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural (MADR). (2018). <i>Decreto 931 de 2018: Por el cual se crea el Sistema de Trazabilidad Vegetal.</i> Diario Oficial No. 50.591.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social (MSPS). (2013). <i>Resolución 2674 de 2013: Por la cual se reglamenta el artículo 126 del Decreto-ley 019 de 2012 y se dictan otras disposiciones.</i> Diario Oficial No. 48.868.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO) & Organización Mundial de la Salud (OMS). (s.f.). <i>Codex alimentarius.</i> FAO.',
      link: '. https://www.fao.org/fao-who-codexalimentarius/es/',
    },
    {
      referencia:
        'Prochile. (n.d.). <i>Guía para la aplicación del sistema de trazabilidad en la empresa agroalimentaria.</i> Recuperado de',
      link:
        'https://www.aragon.es/documents/20127/674325/Guia_Trazabilidad1.pdf/60989746-00a4-7d6a-56a8-301092cf2401',
    },
    {
      referencia:
        'Rivoir, A. L., & Morales, M. J. (Coords.). (2019). <i>Tecnologías digitales: Miradas críticas de la apropiación en América Latina.</i> CLACSO; RIAT.',
      link:
        'https://biblioteca.clacso.edu.ar/clacso/se/20191128031455/Tecnologias-digitales.pdf',
    },
    {
      referencia:
        'Unión Europea. (2002). <i>Reglamento (CE) nº 178/2002 del Parlamento Europeo y del Consejo, de 28 de enero de 2002, por el que se establecen los principios y los requisitos generales de la legislación alimentaria, se crea la Autoridad Europea de Seguridad Alimentaria y se fijan procedimientos relativos a la seguridad alimentaria.</i> Diario Oficial de las Comunidades Europeas, L 31, 1-24.',
      link: '',
    },
    {
      referencia:
        'Villafuerte, D., & Ruiz, I. (2018). <i>Sistemas de trazabilidad en la cadena de suministro agroalimentaria: Un enfoque para Latinoamérica.</i> Editorial Académica Española.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yasmín Andreina Maldonado Escobar',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Heydy Cristina González García',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Antonio Vecino Valero',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles ',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
