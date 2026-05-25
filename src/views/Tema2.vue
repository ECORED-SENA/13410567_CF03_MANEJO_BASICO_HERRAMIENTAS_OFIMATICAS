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
    .row.bg-color-1
      .col-12
        .p-5
          Separador
          //- Inicio Tema2.2
          .row.mt-5
            #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
              h2 2.2 Panel de diapositivas
          p(data-aos="fade-left") <b>El panel de diapositivas se ubica en el lado izquierdo de la interfaz</b> y presenta, en forma de miniaturas, todas las diapositivas que componen la presentación. Este panel cumple un papel clave en la organización del contenido, ya que permite comprender la estructura general del documento y facilita la navegación entre las diferentes diapositivas. A través de este espacio, es posible realizar acciones como:
          //- Inicio Tarjetas
          .row.justify-content-center(data-aos="fade-right")
            .col-sm-6.col-lg-3.mb-3.d-flex.flex-column
              .tarjeta.p-4.rounded-5.h-100.bg-white.border
                .row.justify-content-center.mb-3.align-items-center
                  .col-7
                    figure
                      img(src='@/assets/curso/tema2/tarjeta01_1.svg', alt='' style="width:100px").m-auto
                p.text-center Agregar nuevas diapositivas. 
            .col-sm-6.col-lg-3.mb-3.d-flex.flex-column
              .tarjeta.p-4.rounded-5.h-100.bg-white.border
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema2/tarjeta01_2.svg', alt='' style="width:100px").m-auto
                p.text-center Eliminar diapositivas existentes.
            .col-sm-6.col-lg-3.mb-3.d-flex.flex-column
              .tarjeta.p-4.rounded-5.h-100.bg-white.border
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema2/tarjeta01_3.svg', alt='' style="width:100px").m-auto
                p.text-center Duplicar contenido. 
            .col-sm-6.col-lg-3.mb-3.d-flex.flex-column
              .tarjeta.p-4.rounded-5.h-100.bg-white.border
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema2/tarjeta01_3.svg', alt='' style="width:100px").m-auto
                p.text-center Reorganizar la secuencia de la presentación.
              //- Fin Tarjetas
    p(data-aos="fade-left") Su uso adecuado garantiza una secuencia lógica de la información y contribuye a mantener la coherencia en el desarrollo de la presentación.              
    .row.mb-5.justify-content-center.mt-5(data-aos="fade-left")
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 2.
          span Panel de diapositivas           
        figure
          img(src='@/assets/curso/tema2/img4.png', alt='Captura del panel lateral izquierdo con miniaturas de diapositivas organizadas en secuencia para navegación y control del orden.')
    Separador
    //- Inicio Tema2.3
    .row.mt-5
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Area de diseño
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-4.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El área de diseño corresponde al espacio central de la interfaz donde se crea y edita cada diapositiva. En esta sección se insertan y organizan los distintos elementos que componen la presentación, como texto, imágenes, gráficos y otros recursos visuales.
    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-12
        .d-flex.flex-column.flex-lg-row.align-items-center.p-4.rounded-4           
          .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
            img(src='@/assets/curso/fondos/lineas.svg', style="width: 80px")          
          .flex-grow-1.text-center.text-lg-start            
            p.mb-0 Este espacio permite trabajar directamente sobre el contenido, facilitando la edición, el ajuste de elementos y la aplicación de formatos. Además, presenta una representación fiel de cómo se dispondrá la diapositiva durante la exposición. Dado su carácter central, el área de diseño se constituye como el principal espacio de trabajo, ya que en ella se desarrolla la mayor parte del contenido de la presentación.
    .row.mb-5.justify-content-center.mt-5(data-aos="fade-left")
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 3.
          span Barra de herramientas
        figure
          img(src='@/assets/curso/tema2/img6.png', alt='Captura del panel lateral izquierdo con miniaturas de diapositivas organizadas en secuencia para navegación y control del orden.')
    Separador
    //- Inicio Tema2.4
    .row.mt-5
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Barra de herramientas
    .row.mb-5
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg
            p.p-4.bg-color-2(data-aos="fade-left") La cinta de opciones de Microsoft PowerPoint se estructura en diferentes pestañas que <b>agrupan herramientas según su función dentro del proceso de creación y edición de presentaciones</b>. Esta organización permite acceder de manera ordenada a los comandos necesarios para diseñar diapositivas, insertar contenido, aplicar formatos, configurar efectos y gestionar la presentación.        
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img7.png", data-aos="zoom-in" style="max-width: 458px")
    p(data-aos="fade-left") Cada pestaña responde a una necesidad específica, lo que facilita el flujo de trabajo y contribuye a una interacción más eficiente con el programa. A continuación, se describen de forma detallada las principales pestañas y las herramientas que las componen, con el fin de comprender su funcionalidad dentro del entorno de trabajo.          
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 4.
                span Inicio
              figure
                img(src="@/assets/curso/tema2/slide01_1.png", alt='Captura de la pestaña Inicio con grupos de herramientas como portapapeles, diapositivas, fuente, párrafo y opciones de dibujo.')
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Inicio
              p La pestaña Inicio contiene las herramientas básicas para la edición de diapositivas. Entre sus grupos principales se encuentran:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Portapapeles:</b> permite copiar, cortar y pegar elementos.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Diapositivas:</b> permite crear nuevas diapositivas y aplicar diseños.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Fuente:</b> permite modificar el tipo, tamaño, color y estilo del texto.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Párrafo:</b> permite organizar el texto mediante alineación, viñetas e interlineado.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Dibujo:</b> permite insertar formas y organizar elementos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 5.
                span Insertar
              figure
                img(src="@/assets/curso/tema2/slide01_2.png", alt='Captura de la pestaña Insertar con opciones para agregar cuadros de texto, imágenes, formas, iconos, gráficos y elementos multimedia.')
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Insertar
              p La pestaña Insertar permite agregar diferentes elementos a las diapositivas. Entre sus herramientas principales se encuentran:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Texto:</b> permite insertar cuadros de texto y elementos como WordArt.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Imágenes:</b> permite insertar imágenes desde el equipo o en línea.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Ilustraciones:</b> permite incorporar formas, iconos y gráficos.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Multimedia:</b> permite agregar audio y video.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 6.
                span Diseño
              figure
                img(src="@/assets/curso/tema2/slide01_3.png", alt='Captura de la pestaña Diseño con temas visuales, variantes de estilo, combinaciones de colores y opciones de fondo de diapositiva.')
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Diseño
              p La pestaña Diseño permite modificar la apariencia general de la presentación. Entre sus opciones principales se encuentran:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Temas:</b> permite aplicar estilos visuales predefinidos.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Variantes:</b> permite modificar colores y fuentes.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Fondo:</b> permite personalizar el fondo de las diapositivas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 7.
                span Transiciones
              figure
                img(src="@/assets/curso/tema2/slide01_4.png", alt='Captura de la pestaña Transiciones con efectos de cambio entre diapositivas, opciones de duración y aplicación a toda la presentación.')
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Transiciones
              p La pestaña Transiciones permite aplicar efectos al cambio entre diapositivas. Entre sus funciones principales se encuentran:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Vista previa de efectos</b>: permite conocer el resultado antes de aplicarlo.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Duración</b>: permite configurar el tiempo de transición.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Aplicar a todas</b>: permite usar el mismo efecto en toda la presentación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 8.
                span Animaciones
              figure
                img(src="@/assets/curso/tema2/slide01_5.png", alt=' Captura de la pestaña Animaciones con efectos de entrada, énfasis y salida, junto con el panel de animación y controles de tiempo.')
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Animaciones
              p La pestaña Animaciones permite aplicar efectos a los elementos dentro de la diapositiva. Entre sus herramientas principales se encuentran:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 A<b>nimaciones de entrada, énfasis y salida:</b> permiten controlar la aparición de los elementos.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Panel de animación:</b> permite organizar y gestionar los efectos.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Control de tiempo:</b> permite definir la duración y el orden.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 9.
                span Presentación con diapositivas
              figure
                img(src="@/assets/curso/tema2/slide01_6.png", alt='Captura de la pestaña de presentación con opciones para iniciar la exposición, configurar parámetros y ensayar tiempos de diapositivas.')
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Presentación con diapositivas
              p La pestaña Presentación con diapositivas permite ejecutar y configurar la presentación. Entre sus funciones principales se encuentran:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Iniciar presentación:</b> permite comenzar la exposición.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Configuración de presentación:</b> permite ajustar parámetros de visualización.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Ensayo de tiempos:</b> permite practicar la duración de cada diapositiva.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 10.
                span Revisar
              figure
                img(src="@/assets/curso/tema2/slide01_7.png", alt='Captura de la pestaña Revisar con herramientas de ortografía, gramática, comentarios y opciones de revisión de contenido.')
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Revisar
              p La pestaña Revisar permite verificar y corregir el contenido. Entre sus herramientas principales se encuentran:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Ortografía y gramática:</b> permite identificar y corregir errores.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Comentarios:</b> permite agregar observaciones.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Revisión de texto:</b> permite mejorar la redacción.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 11.
                span Vista
              figure
                img(src="@/assets/curso/tema2/slide01_8.png", alt='Captura de la pestaña Vista con modos de visualización como normal, clasificador de diapositivas y vista de lectura.')
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Vista
              p La pestaña Vista permite cambiar la forma en que se organiza la presentación en pantalla. Entre sus opciones principales se encuentran:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Vista normal:</b> permite editar diapositivas.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Clasificador de diapositivas:</b> permite organizar la presentación.
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Vista de lectura:</b> permite revisar el contenido en formato de presentación.
    //- Fin Slideshow
    Separador
    //- Inicio Tema2.5
    .row.mt-5
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 Flujo de trabajo digital
    .row.justify-content-center.align-items-stretch.mb-3.g-0.bg-color-4(data-aos="fade-left")      
      .col-lg-7.bg-color-3.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 El flujo de trabajo digital en PowerPoint hace referencia al proceso ordenado que sigue el usuario para la creación de una presentación, desde la planificación del contenido hasta su exposición final. Este enfoque permite estructurar las actividades de manera lógica, facilitando el uso eficiente de la herramienta. 
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema2/img8.png', alt='', style="object-fit: cover;")
    p(data-aos="fade-left") Este proceso se desarrolla a través de una secuencia de etapas interrelacionadas que orientan la construcción de la presentación. A continuación, se describen sus fases principales:
    .row.mb-5.justify-content-center(data-aos="fade-left")
      .col-lg-4
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 12.
          span Flujo de trabajo digital en PowerPoint
        figure
          img(src='@/assets/curso/tema2/img9.svg', style="width: 350px", alt='Diagrama del proceso de creación de presentaciones con etapas organizadas como planificación, diseño, edición, revisión y exposición final.')
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
