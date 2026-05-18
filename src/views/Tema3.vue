<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Diseño y creación de diapositivas
    p(data-aos="fade-left") Este apartado aborda los principios fundamentales relacionados con el diseño y la creación de diapositivas en PowerPoint, considerando aspectos visuales, estructurales y comunicativos que influyen en la calidad de una presentación.
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 13.
                span Diseño de diapositivas
              figure
                img(src="@/assets/curso/tema3/slide01_1.png", alt='Ilustración de una diapositiva con distribución de elementos, jerarquía de texto, alineación y uso de espacios para organización visual.')
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Diseño de diapositivas
              p El diseño de diapositivas corresponde a la forma en que se organiza y presenta la información dentro de cada diapositiva, teniendo en cuenta aspectos visuales y estructurales que facilitan la comprensión del contenido. Un diseño adecuado permite:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 Distribuir correctamente los elementos.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 Mantener el equilibrio visual.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 Asegurar que la información sea clara y fácil de interpretar.                
              p.mt-3 Esto implica el uso adecuado de espacios, alineación, colores y jerarquía del contenido. El diseño de diapositivas es fundamental, ya que influye directamente en la percepción del público y en la efectividad de la comunicación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 14.
                span Plantillas
              figure
                img(src="@/assets/curso/tema3/slide01_2.png", alt='Ejemplos de plantillas prediseñadas con fondo, tipografía, colores y estructura de contenido aplicada a diapositivas.')
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Plantillas
              p Las plantillas en PowerPoint son diseños predefinidos que permiten crear presentaciones con una estructura y estilo visual establecidos. Incluyen configuraciones como:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 Fondo.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 Tipografía.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 Colores.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 Distribución de los elementos.
              p.mt-3 Su uso facilita la creación de diapositivas, ya que proporciona una base organizada que puede adaptarse según las necesidades del usuario. Además, permite mantener uniformidad en toda la presentación. Las plantillas pueden seleccionarse al crear la presentación o aplicarse posteriormente desde la pestaña Diseño.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 15.
                span Temas
              figure
                img(src="@/assets/curso/tema3/slide01_3.png", alt=' Ejemplos de temas con combinaciones de colores, estilos de fuente y efectos visuales aplicados de forma uniforme.')
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Temas
              p Los temas en PowerPoint corresponden a conjuntos de estilos visuales que se aplican a toda la presentación, integrando colores, fuentes y efectos de manera coherente. Permiten:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 Mantener una identidad visual uniforme.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 Aplicar cambios globales de diseño.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 Mejorar la apariencia general del contenido.
              p.mt-3 Se gestionan desde la pestaña Diseño y pueden ajustarse según el tipo de presentación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 16.
                span Formato de contenido
              figure
                img(src="@/assets/curso/tema3/slide01_4.png", alt='Ilustración de diapositiva con texto formateado mediante tipo de letra, tamaño, color, alineación y estilos visuales.')
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Formato de contenido
              p El formato de contenido hace referencia a la forma en que se presenta la información dentro de las diapositivas, incluyendo texto, títulos y otros elementos. Implica el uso de herramientas como:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 Tipo de letra.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 Tamaño.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 Color.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 Alineación.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 Estilos.
              p.mt-3 Un formato adecuado permite resaltar la información importante, mejorar la legibilidad y evitar la sobrecarga de contenido, facilitando una comunicación clara y organizada.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2              
              figure
                img(src="@/assets/curso/tema3/slide01_5.png", alt=' Captura de la pestaña Animaciones con efectos de entrada, énfasis y salida, junto con el panel de animación y controles de tiempo.')
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Integración de texto
              p La integración de texto en las diapositivas es un elemento fundamental para comunicar ideas de manera directa. Para su uso adecuado, se recomienda:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 Utilizar texto claro, breve y organizado.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 Emplear títulos y viñetas.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 Priorizar la información relevante.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 Evitar el exceso de contenido.
              p.mt-3 El texto funciona como apoyo visual a la exposición oral, facilitando la comprensión del tema por parte del público.
    //- Fin Slideshow
</template>

<script>
export default {
  name: 'Tema3',
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
