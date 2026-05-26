<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.mb-5
      .col-12.ps-3(style="border-left: 10px solid #39A900;") 
        h3.mb-1 Manejo básico de herramientas ofimáticas I
        p.mb-0 
          | Síntesis:           
          | Uso de herramientas ofimáticas – Microsoft PowerPoint
    p.mt-5 A continuación, se presenta a manera de síntesis, un esquema que articula los elementos principales abordados en el desarrollo del componente formativo.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Síntesis del componente formativo sobre Microsoft PowerPoint que organiza contenidos como conceptos de presentaciones, importancia y usos en contextos académicos y laborales, tipos de presentaciones, elementos de la interfaz, flujo de trabajo digital, diseño de diapositivas, uso de plantillas y temas, formato de contenido e integración de recursos como imágenes, gráficos, animaciones, transiciones y presentación final.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis
</template>

<script>
export default {
  name: 'Sintesis',
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
