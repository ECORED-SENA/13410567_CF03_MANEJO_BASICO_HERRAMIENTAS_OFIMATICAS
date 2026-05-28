export default {
  global: {
    Name: 'Uso de herramientas ofimáticas – Microsoft PowerPoint',
    Description:
      'Este componente formativo aborda el uso del presentador de diapositivas Microsoft PowerPoint, permitiendo al aprendiz diseñar, estructurar y presentar información mediante el uso de herramientas de formato, inserción de elementos, animaciones y transiciones, aplicadas en contextos académicos y laborales para una comunicación clara y efectiva.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        titulo: 'Conceptos de presentaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Importancia de las presentaciones',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Uso en contextos académicos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Uso de contextos laborales',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Tipos de presentaciones',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Uso combinado de herramientas ofimáticas',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Interfaz y entorno de trabajo de PowerPoint',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Interfaz y entorno de trabajo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Panel de diapositivas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Área de diseño',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Barra de herramientas',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Flujo de trabajo digital',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Diseño y creación de diapositivas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Inserción de elementos y presentación',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/13410567_CF3_DU.pdf',
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
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Barra de herramientas',
      significado:
        'Conjunto de iconos, botones y menús ubicados en la parte superior de una ventana que permiten acceder rápidamente a las funciones más comunes del programa, como crear, editar o manipular documentos o imágenes.',
    },
    {
      termino: 'Diapositiva',
      significado:
        'Hoja que forma parte de una presentación física o digital y que muestra información organizada para el público, comúnmente utilizada en conferencias, exposiciones y presentaciones similares.',
    },
    {
      termino: 'PowerPoint',
      significado:
        'Programa de software desarrollado por Microsoft que permite crear presentaciones visuales para fines profesionales, educativos o personales.',
    },
    {
      termino: 'Presentación digital',
      significado:
        'Pase de diapositivas creado en Microsoft PowerPoint, compuesto por una serie de diapositivas que integran texto, imágenes, gráficos, videos y otros recursos para organizar la información y guiar al público.',
    },
    {
      termino: 'Plantillas',
      significado:
        'Base de una presentación de PowerPoint que incluye un tema y diseños de diapositivas, ya sea mediante opciones predeterminadas o personalizadas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Anderson, M. (2025, julio 3). ¿Qué es una presentación de PowerPoint? Ejemplos, usos y cómo crear una más rápido en 2026. Autoppt. ',
      link: 'https://autoppt.com/es/blog/what-is-a-powerpoint-presentation/ ',
    },
    {
      referencia:
        'García, C. (2024, octubre 28). Qué es PowerPoint y para qué sirve. Femxa. ',
      link: 'https://www.cursosfemxa.es/blog/que-es-powerpoint ',
    },
    {
      referencia:
        'Lee-Ann. (2020, diciembre 3). Diferencia entre plantillas, temas y diseños de PowerPoint. PPT Productivity. ',
      link:
        'https://pptproductivity.com/es/blog/difference-powerpoint-templates-themes-layouts',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional 06<br> Responsable Ecosistema Virtual de Recursos Educativos Digitales  ',
          centro: 'Centro Agroturístico - Regional Santander ',
        },
        {
          nombre: 'Olga Constanza Bermúdez ',
          cargo: 'Responsable de Línea de Producción Huila ',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joinner Enrique Osorio Martínez',
          cargo: 'Experto temático ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada ',
          cargo: 'Diseñador de contenidos digitales ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Henry Álvarez Astudillo',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta ',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura ',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández  ',
          cargo: 'Validador de recursos educativos digitales ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
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
