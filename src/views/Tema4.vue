<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Inserción de elementos y presentación
    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-12
        .d-flex.flex-column.flex-lg-row.align-items-center.p-4.rounded-4           
          .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
            img(src='@/assets/curso/fondos/lineas2.svg', style="width: 80px")          
          .flex-grow-1.text-center.text-lg-start            
            p.mb-0 Este apartado aborda los principales recursos y herramientas que permiten enriquecer las diapositivas y fortalecer la presentación del contenido, mediante la incorporación de elementos visuales y efectos que mejoran la comunicación y la interacción con la audiencia.
    //- Inicio Accordion
    .bg--img_03.mt-5
    .row.justify-content-center
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Inserción de imágenes")
            .col-lg-6
              p.mb-4 Contiene los comandos principales organizados en pestañas, desde donde se insertan, editan y formatean los elementos de la presentación.              
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  span Ajustar su tamaño.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  span Modificar su posición.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  span Aplicar formato.
              p.mt-4 El uso de imágenes contribuye a hacer la presentación más atractiva, dinámica y fácil de interpretar, apoyando la comunicación visual de la información.
            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 17.
                span Inserción de imágenes
              figure
                img(src="@/assets/curso/tema4/accordion01_1.png", alt='Captura de diapositiva con imagen insertada y opciones de ajuste de tamaño, posición, recorte y formato visual. ')
          .row(titulo="Inserción de gráficos")
            .col-lg-6
              p.mb-4 Los gráficos en PowerPoint permiten representar información de forma visual, facilitando el análisis y la interpretación de datos. Se pueden insertar desde la pestaña Insertar, seleccionando tipos como:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  span Gráficos de barras.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  span Gráficos de líneas.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  span Gráficos circulares.
              p.mt-4 Además, pueden personalizarse en cuanto a diseño, colores y datos, adaptándose a las necesidades de la presentación. Su uso permite simplificar información compleja y presentarla de manera clara y comprensible.
            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 18.
                span Inserción de gráficos
              figure
                img(src="@/assets/curso/tema4/accordion01_2.png", alt='Captura de diapositiva con gráfico de datos, como barras o líneas, con ejes, valores y elementos visuales representados. ')
          .row(titulo="Animaciones")
            .col-lg-6
              p.mb-4 Las animaciones en PowerPoint son efectos que se aplican a los elementos dentro de una diapositiva, como texto, imágenes o gráficos, con el fin de controlar la forma en que aparecen o se destacan durante la presentación. Se configuran desde la pestaña Animaciones, donde es posible:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  span Seleccionar tipos de efectos.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  span Ajustar la duración.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  span Definir el orden de ejecución.
              p.mt-4 El uso adecuado de animaciones mejora la interacción con el contenido, evita la saturación visual y facilita la comprensión progresiva de la información.
            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 19.
                span Animaciones
              figure
                img(src="@/assets/curso/tema4/accordion01_3.png", alt='Ilustración de elementos de diapositiva con efectos aplicados que controlan la aparición, énfasis y salida de contenido. ')
          .row(titulo="Transiciones")
            .col-lg-6
              p.mb-4 Las transiciones son efectos visuales que se aplican al cambiar de una diapositiva a otra durante la presentación. Se configuran desde la pestaña Transiciones, permitiendo:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  span Seleccionar diferentes estilos.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  span Ajustar la duración.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  span Aplicar el efecto a una o varias diapositivas.
              p.mt-4 Su uso permite dar continuidad a la presentación, haciendo más fluido el paso entre diapositivas y mejorando la experiencia visual del público.
            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 20.
                span Transiciones
              figure
                img(src="@/assets/curso/tema4/accordion01_4.png", alt='Ilustración de cambio entre diapositivas con efectos visuales aplicados y configuración de tiempo de transición. ')
          .row(titulo="Presentación de diapositivas")
            .col-lg-6
              p.mb-4 La presentación de diapositivas corresponde a la etapa final del proceso, en la cual se expone el contenido ante una audiencia utilizando las herramientas de PowerPoint.  Se puede iniciar desde la pestaña Presentación con diapositivas, lo que permite visualizar el contenido en pantalla completa y controlar el avance. Durante la presentación, es posible utilizar herramientas como:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  span Puntero.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  span Control del tiempo.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  span Navegación entre diapositivas.
              p.mt-4 Una correcta presentación permite transmitir la información de manera clara, organizada y profesional, integrando todos los elementos desarrollados.
            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 21.
                span Presentación de diapositivas
              figure
                img(src="@/assets/curso/tema4/accordion01_5.png", alt='Captura de presentación en pantalla completa con diapositiva activa, puntero y controles de navegación. ')
    //- Fin Accordion
    p(data-aos="fade-left") A continuación, se presenta el videotutorial, donde se desarrolla el proceso de creación de una presentación en PowerPoint, incluyendo la selección de plantillas, organización de diapositivas, aplicación de diseño, integración de recursos visuales, uso de animaciones y presentación final en modo diapositivas.
    //- Inicio Video
    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/nHjl83QvSUw?si=PYOSxqLdAk88V5nb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    //- Fin Video



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
