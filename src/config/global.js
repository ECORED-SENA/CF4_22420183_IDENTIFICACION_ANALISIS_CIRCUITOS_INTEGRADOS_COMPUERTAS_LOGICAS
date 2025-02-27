export default {
  global: {
    Name: 'Lógica combinatoria',
    Description:
      'La lógica combinatoria utiliza compuertas lógicas como <em>OR, AND y NOT</em> para realizar funciones específicas. Representa operaciones mediante esquemas lógicos y tablas de verdad. Su simplificación optimiza diseños usando propiedades de Boole, teoremas de De Morgan y mapas de Karnaugh, reduciendo costos y espacio. Se aplica en circuitos digitales para procesos como control y supervisión.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
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
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
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
        titulo: 'Lógica combinatoria',
        desarrolloContenidos: true,
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
        download: 'downloads/22420183_CF04_DU.pdf',
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
      tema: 'Lógica combinatoria',
      referencia:
        'Fernando González. (2020). <i>LÓGICA COMBINATORIA COMPUERTAS LÓGICAS CLASE 1</i>. [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=b096QGPxj38&ab_channel=FernandoGonz%C3%A1lez',
    },
    {
      tema: 'Lógica combinatoria',
      referencia:
        'Mundo Electrónica (2020). <i>Compuertas lógicas y lógica combinacional | Curso de electrónica digital | #5</i>. [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=OAA2B50e9nA&ab_channel=MundoElectr%C3%B3nica',
    },
    {
      tema: 'Lógica combinatoria',
      referencia:
        'Electrónica FP. (2019). <i>DeMorgan (Ejercicio)</i>. [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=N5YXG0KKLCc&ab_channel=Electr%C3%B3nicaFP',
    },
  ],
  glosario: [
    {
      termino: 'Compuerta lógica',
      significado:
        'dispositivo digital que realiza operaciones básicas como <em>and, or o not</em>.',
    },
    {
      termino: 'Esquema lógico',
      significado:
        'representación gráfica de funciones lógicas mediante compuertas.',
    },
    {
      termino: 'Lógica combinatoria',
      significado:
        'rama de la electrónica digital que utiliza compuertas lógicas para realizar funciones específicas.',
    },
    {
      termino: 'Mapas de Karnaugh',
      significado:
        'técnica gráfica para simplificar funciones lógicas en circuitos digitales.',
    },
    {
      termino: 'Operación <em>AND</em>',
      significado:
        'representa la multiplicación lógica, donde la salida es 1 solo si todas las entradas son 1.',
    },
    {
      termino: 'Operación <em>NOT</em>',
      significado:
        'representa la negación lógica, invirtiendo el valor de la entrada.',
    },
    {
      termino: 'Operación <em>OR</em>',
      significado:
        'representa la suma lógica, donde la salida es 1 si alguna entrada es 1.',
    },
    {
      termino: 'Simplificación lógica',
      significado:
        'proceso de optimizar funciones lógicas reduciendo el número de compuertas necesarias.',
    },
    {
      termino: 'Tabla de verdad',
      significado:
        'herramienta para describir todas las combinaciones posibles de entradas y sus salidas.',
    },
    {
      termino: 'Teoremas de De Morgan',
      significado:
        'reglas matemáticas que permiten simplificar expresiones lógicas mediante negaciones.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cidead, (s.f). <i>Material interactivo sobre Lógica Binaria</i>.',
      link:
        'http://recursostic.educacion.es/secundaria/edad/4esotecnologia/quincena5/4q2_index.htm',
    },
    {
      referencia:
        'Mc Graw Hill, (s.f), <i>Introducción a los sistemas digitales. Unidad 1</i>. En Mc Graw Hill.',
      link: 'http://www.mcgraw-hill.es/bcv/guide/capitulo/844817156X.pdf',
    },
    {
      referencia: 'Neuroproductions, (s.f). <i>Simulador On line</i>.',
      link: '',
    },
    {
      referencia:
        'ProfesorMolina, (s.f). <i>Función interactiva de compuertas</i>.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Magda Melissa Rodríguez Celis',
          cargo: 'Experta temática',
          centro:
            'Centro de Desarrollo Agroempresarial - Regional Cundinamarca',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edwin Sneider Velandia Suarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
