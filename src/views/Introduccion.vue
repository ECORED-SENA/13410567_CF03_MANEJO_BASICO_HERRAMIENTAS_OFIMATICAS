<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-10      
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg
          p.mb-0 Las tecnologías de la información y la comunicación han transformado la manera en que se gestiona la información, haciendo que el uso de herramientas ofimáticas sea una competencia clave en contextos académicos y laborales. En este marco, programas como Microsoft PowerPoint adquieren relevancia al permitir organizar y presentar información de forma clara, visual y estructurada, integrando diversos elementos como texto, imágenes y recursos multimedia.
        .row.align-items-start.mb-10(data-aos="fade-left")
          .col-lg
            p.p-4.bg-color-2(data-aos="fade-left") Las tecnologías de la información y la comunicación han transformado de manera significativa la forma en que las personas acceden, procesan y transmiten la información en diferentes contextos. En este sentido, el uso de herramientas ofimáticas se ha convertido en una competencia fundamental tanto en el ámbito académico como en el entorno laboral, permitiendo optimizar procesos, mejorar la comunicación y facilitar la presentación de contenidos de manera estructurada y comprensible.
            
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/img1.png", data-aos="zoom-in" style="max-width: 458px")
    .row.justify-content-center.align-items-stretch.mb-3.g-0.bg-color-4(data-aos="fade-left")
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/intro/img2.png', alt='', style="object-fit: cover;")
      .col-lg-7.bg-color-3.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 El uso de PowerPoint implica un proceso integral que va más allá del manejo técnico, ya que requiere habilidades como la planificación, la síntesis, la organización lógica de ideas y la comunicación. En el ámbito académico, estas presentaciones apoyan el aprendizaje al facilitar la comprensión de contenidos y fortalecer competencias como la expresión oral y el pensamiento crítico. En el entorno laboral, contribuyen a la comunicación profesional, la presentación de proyectos y la toma de decisiones.
    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-12
        .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-4.p-4.rounded-4           
          .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
            img(src='@/assets/curso/fondos/icono.svg', style="width: 80px")          
          .flex-grow-1.text-center.text-lg-start            
            p.mb-0 El componente formativo propuesto busca desarrollar estas habilidades mediante un abordaje progresivo que incluye conceptos básicos, reconocimiento de la interfaz, diseño de diapositivas, uso de elementos visuales y aplicación de efectos. Finaliza con un ejercicio práctico que permite integrar los conocimientos adquiridos, favoreciendo su aplicación en situaciones reales y fortaleciendo el desempeño académico y profesional del aprendiz.
</template>

<script>
export default {
  name: 'Introduccion',
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
