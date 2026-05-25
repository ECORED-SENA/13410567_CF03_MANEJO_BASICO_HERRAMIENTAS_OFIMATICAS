<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Conceptos de presentaciones
    .row.mb-5
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg
          p.mb-0 Las <b>presentaciones son herramientas digitales</b> utilizadas para <b>organizar, estructurar y comunicar información</b> de manera clara, visual y dinámica mediante el uso de diapositivas. Estas permiten integrar diferentes tipos de contenido, como <b>texto, imágenes, gráficos, tablas, animaciones y elementos multimedia</b>, con el propósito de facilitar la comprensión de un tema y apoyar la exposición de ideas frente a una audiencia.
        .row.align-items-start.mb-10(data-aos="fade-left")
          .col-lg
            p.p-4.bg-color-2(data-aos="fade-left") Se emplean en diversos contextos, especialmente en <b>el ámbito académico y laboral</b>, donde contribuyen a mejorar la comunicación, captar la atención del público y transmitir información de forma organizada.
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img1.png", data-aos="zoom-in" style="max-width: 458px")
    .bloque-texto-g.bloque-texto-g.bg-color-4.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Su uso adecuado implica no solo la <b>creación de diapositivas</b>, sino también la <b>correcta estructuración del contenido,</b> el diseño visual y la forma en que se expone la información.  Como resultado, las presentaciones constituyen una herramienta integral que combina contenido, diseño y habilidades comunicativas.
    Separador
    //- Inicio Tema1.1
    .row.mt-5
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Importancia de las presentaciones
    .row.justify-content-center.align-items-stretch.mb-3.g-0.bg-color-4(data-aos="fade-left")      
      .col-lg-7.bg-color-3.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 Las presentaciones digitales desempeñan un papel fundamental en <b>la comunicación de la información</b>, ya que permiten transmitir ideas de manera <b>clara, organizada y estructurada.</b> A través del uso de diapositivas, es posible organizar el contenido de forma lógica, facilitando su comprensión por parte del público.
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema1/img3.png', alt='', style="object-fit: cover;")
    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-12
        .d-flex.flex-column.flex-lg-row.align-items-center.p-4.rounded-4           
          .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
            img(src='@/assets/curso/fondos/lineas.svg', style="width: 80px")          
          .flex-grow-1.text-center.text-lg-start            
            p.mb-0 Su relevancia no se limita a la <b>exposición de información</b>, sino que también radica en su capacidad para captar la atención mediante el uso de elementos visuales como <b>imágenes, gráficos y recursos multimedia</b>, lo que dinamiza el proceso comunicativo. En función del contexto, su importancia puede entenderse de la siguiente manera:
    //- Inicio Tarjetas
    .row.justify-content-center.g-0.mb-5(data-aos="fade-right")
      .col-lg-6.col-md-6
        .tarjeta.p-5.h-100.bg-color-5(style="border-radius: 25px 0 0 25px; background-color: #4d6666;")
          .row.mb-3
            .col-auto
              figure
                img(src='@/assets/curso/tema1/tarjeta01_1.svg', alt='' style="width:100px").m-auto
          h4.text-white Ámbito académico
          p.text-white Apoyan exposiciones, trabajos y actividades formativas, favoreciendo la síntesis y organización de la información.
      .col-lg-6.col-md-6
        .tarjeta.p-5.h-100.bg-color-6(style="border-radius: 0 25px 25px 0; background-color: #d8f0f0;")
          .row.mb-4
            .col-auto
              figure
                img(src='@/assets/curso/tema1/tarjeta01_1.svg', style="width:100px").m-auto
          h4.card-title.mb-2 Entorno laboral
          p Facilitan la presentación de informes, proyectos, propuestas y resultados, fortaleciendo la comunicación profesional.
    //- Fin Tarjetas
    p(data-aos="fade-left") En consecuencia, el uso adecuado de presentaciones no solo mejora la calidad de la información transmitida, sino que también fortalece las habilidades comunicativas y la interacción con diferentes tipos de audiencia.
    Separador
    //- Inicio Tema1.2
    .row.mt-5
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Uso en contextos académicos
    .row.mb-5
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg
          p.mb-0 En el ámbito académico, las presentaciones digitales funcionan como una herramienta de apoyo para la exposición de temas, permitiendo organizar y estructurar la información de manera clara y comprensible. 
        .row.align-items-start.mb-10(data-aos="fade-left")
          .col-lg
            p.p-4.bg-color-2(data-aos="fade-left") A través de las diapositivas, se facilita:
              ul.lista-ul.mb-0
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  span La síntesis de contenidos. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  span La jerarquización de ideas principales. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  span La integración de recursos visuales como <b>imágenes, gráficos y esquemas.</b>
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img4.png", data-aos="zoom-in" style="max-width: 458px")
    .row.bg-color-1
      .col-12
        .p-5
          P(data-aos="fade-left") Este enfoque favorece el proceso de aprendizaje, ya que mejora la comprensión tanto para quien expone como para la audiencia. Además, promueve el desarrollo de habilidades fundamentales como:
          //- Inicio Tarjetas
          .row.justify-content-center(data-aos="fade-right")
            .col-sm-6.col-lg-3.mb-3.d-flex.flex-column
              .tarjeta.p-4.rounded-5.h-100.bg-white.border
                .row.justify-content-center.mb-3.align-items-center
                  .col-7
                    figure
                      img(src='@/assets/curso/tema1/tarjeta02_1.svg', alt='' style="width:100px").m-auto
                p.text-center Comunicación oral. 
            .col-sm-6.col-lg-3.mb-3.d-flex.flex-column
              .tarjeta.p-4.rounded-5.h-100.bg-white.border
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema1/tarjeta02_2.svg', alt='' style="width:100px").m-auto
                p.text-center Capacidad de síntesis. 
            .col-sm-6.col-lg-3.mb-3.d-flex.flex-column
              .tarjeta.p-4.rounded-5.h-100.bg-white.border
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema1/tarjeta02_3.svg', alt='' style="width:100px").m-auto
                p.text-center Organización de la información. 
              //- Fin Tarjetas
          .row.justify-content-center.mb-4(data-aos="fade-left")
            .col-lg-9
              .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-4.p-4.rounded-4           
                .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
                  img(src='@/assets/curso/fondos/icono.svg', style="width: 80px")          
                .flex-grow-1.text-center.text-lg-start            
                  p.mb-0 De esta manera, las presentaciones se consolidan como un recurso clave para fortalecer los procesos educativos y mejorar la calidad de las exposiciones en distintos niveles de formación.
          Separador
          //- Inicio Tema1.3
          .row.mt-5
              #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 1.3 Uso en contextos laborales
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-7.p-3.p-sm-4.p-md-5.mb-3.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el entorno laboral, las presentaciones digitales constituyen una herramienta esencial para comunicar información de manera clara, organizada y profesional. Se utilizan en múltiples situaciones, como <b>la presentación de informes, proyectos, propuestas, resultados y procesos organizacionales.</b>
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img6.png", data-aos="zoom-in")
      .col-lg-7        
        .row.align-items-start(data-aos="fade-left")  
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas.svg", style="max-width: 90px").mx-auto
          .col-lg
            p(data-aos="fade-left") El uso de diapositivas permite estructurar la información de forma lógica, facilitando su comprensión por diferentes públicos, tales como <b>equipos de trabajo, directivos o clientes.</b> Asimismo, la incorporación de elementos visuales contribuye a representar la información de manera más clara y efectiva.
        p.p-3.bg-color-2 Su aplicación también abarca:
          ul.lista-ul.mb-0
            li.d-flex.mt-3
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              span Capacitaciones.
            li.d-flex.mt-3
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              span Reuniones corporativas. 
            li.d-flex.mt-3
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              span Exposiciones empresariales.
    Separador
    //- Inicio Tema1.4
    .row.mt-5
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.4 Tipos de presentaciones
    p(data-aos="fade-left") Las presentaciones digitales pueden clasificarse según su propósito, el contexto de uso y el público objetivo. Esta clasificación permite adaptar tanto el contenido como el diseño y la forma  de exposición. A continuación, se presentan los principales tipos de presentaciones:
    //- Pestanas horizontales
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Informativas")
            .row.align-items-center
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/pestana01_1.png')
              .col-md-6.mb-4.mb-md-0
                h4 Informativas
                p Transmiten datos, conceptos o conocimientos de manera clara y organizada. Son comunes en contextos académicos y formativos.
          .py-3.py-md-4(titulo="Persuasivas")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/pestana01_2.png')
              .col-md-6
                h4 Persuasivas
                p Buscan influir en la opinión o decisión de la audiencia. Se utilizan en propuestas, ventas y proyectos.
          .py-3.py-md-4(titulo="Educativas")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/pestana01_3.png')
              .col-md-6
                h4 Educativas
                p Facilitan el aprendizaje mediante explicaciones estructuradas, ejemplos y recursos didácticos.
          .py-3.py-md-4(titulo="Demostrativas")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/pestana01_4.png')
              .col-md-6
                h4 Demostrativas
                p Explican el funcionamiento de un producto, proceso o herramienta mediante aplicaciones prácticas.
    //- Cierres Pestanas horizontales
    p.text-center(data-aos="fade-left") Cada tipo de presentación requiere una planificación específica que articule objetivos, contenido y recursos, con el fin de garantizar su efectividad.
    Separador
    //- Inicio Tema1.5
    .row.mt-5
        #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.5 Uso combinado de herramientas ofimáticas
    p.mb-5(data-aos="fade-left") El uso de presentaciones digitales puede complementarse con otras herramientas ofimáticas, lo que permite enriquecer el contenido y mejorar la calidad de la información presentada. Esta integración facilita:
    //- Inicio Tarjetas
    .row.justify-content-center(data-aos="fade-left")
      .col-sm-10.col-md-6.col-lg-4.mb-4.d-flex.flex-column
        .tarjeta.p-0.rounded-2.h-100.bg-color-8.overflow-hidden
          figure.mb-0
            img(src='@/assets/curso/tema1/tarjeta03_1.png', alt='').w-100
          .p-4
            p.text-center.mb-0 Incorporar documentos elaborados en procesadores de texto como base estructural. 
      .col-sm-10.col-md-6.col-lg-4.mb-4.d-flex.flex-column
        .tarjeta.p-0.rounded-2.h-100.bg-color-8.overflow-hidden
          figure.mb-0
            img(src='@/assets/curso/tema1/tarjeta03_2.png', alt='').w-100
          .p-4
            p.text-center.mb-0 Incluir gráficos y tablas provenientes de hojas de cálculo. 
      .col-sm-10.col-md-6.col-lg-4.mb-4.d-flex.flex-column
        .tarjeta.p-0.rounded-2.h-100.bg-color-8.overflow-hidden
          figure.mb-0
            img(src='@/assets/curso/tema1/tarjeta03_3.png', alt='').w-100
          .p-4
            p.text-center.mb-0 Representar datos de forma más clara y comprensible. 
    //- Fin Tarjetas
    .row.justify-content-center.align-items-stretch.mb-3.g-0.bg-color-4(data-aos="fade-right")      
      .col-lg-7.bg-color-3.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 Además, esta combinación favorece la organización de la información, optimiza el tiempo de trabajo y permite aprovechar las funcionalidades específicas de cada herramienta. En síntesis, el uso integrado de herramientas ofimáticas contribuye a la elaboración de presentaciones más completas, dinámicas y adecuadas tanto para contextos académicos como laborales.
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema1/img7.png', alt='', style="object-fit: cover;")
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
