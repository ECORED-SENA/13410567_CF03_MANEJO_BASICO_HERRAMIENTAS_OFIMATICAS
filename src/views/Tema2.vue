<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Interfaz y entorno de trabajo de PowerPoint
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-4.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este apartado aborda los elementos que conforman la interfaz de Microsoft PowerPoint y su entorno de trabajo, con el propósito de comprender cómo se organiza el espacio en el que se crean y editan las presentaciones digitales. El conocimiento de estos componentes permite un uso más eficiente de la herramienta y facilita el desarrollo de contenidos.
    Separador
    //- Inicio Tema2.1
    .row.mt-5
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Interfaz y entorno de trabajo
    p(data-aos="fade-left") La interfaz de Microsoft PowerPoint corresponde al entorno gráfico que permite al usuario interactuar con las diferentes herramientas del programa para la creación y edición de presentaciones.
    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-12
        .d-flex.flex-column.flex-lg-row.align-items-center.p-4.rounded-4           
          .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
            img(src='@/assets/curso/fondos/lineas.svg', style="width: 80px")          
          .flex-grow-1.text-center.text-lg-start            
            p.mb-0 Este entorno está diseñado de manera intuitiva, lo que facilita el acceso a funciones como la inserción de contenido, el diseño de diapositivas y la configuración de la presentación. La organización de sus elementos permite identificar rápidamente cada herramienta y utilizarla de forma eficiente. El entorno de trabajo se compone de varias secciones que cumplen funciones específicas dentro del proceso de creación. 
    .row.mb-5.justify-content-center(data-aos="fade-left")
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 1.
          span Interfaz Power Point           
        figure
          img(src='@/assets/curso/tema2/img2.png', alt='Captura de la interfaz de Microsoft PowerPoint con barra de herramientas superior, pestañas de funciones, panel lateral de diapositivas y área central de diseño de la diapositiva. ')
    p(data-aos="fade-right") A continuación, se presentan sus componentes principales:
    //- Inicio Accordion
    .bg--img_03.mt-5
    .row.justify-content-center
      .col-lg-3 
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/img3.png", alt="").img400.m-auto
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Barra de herramientas")
              p.mb-4 Contiene los comandos principales organizados en pestañas, desde donde se insertan, editan y formatean los elementos de la presentación.              
          .row(titulo="Pestañas")
              p.mb-4 Permiten acceder a las diferentes funciones del programa, como insertar elementos, diseñar diapositivas o aplicar animaciones.
          .row(titulo="Herramientas")
              p.mb-4 Conjunto de opciones dentro de cada pestaña que facilitan la edición, inserción y formato del contenido.
          .row(titulo="Panel de diapositivas")
              p.mb-4 Espacio lateral donde se visualizan las miniaturas de cada diapositiva, permitiendo organizar y navegar en la presentación.
          .row(titulo="Área de diseño")
              p.mb-4 Zona principal donde se crea y edita el contenido de cada diapositiva, incluyendo texto, imágenes y otros elementos.
    //- Fin Accordion
    p.text-center(data-aos="fade-left") En conjunto, estos elementos permiten estructurar, diseñar y organizar la información de manera lógica y funcional dentro de la presentación.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
