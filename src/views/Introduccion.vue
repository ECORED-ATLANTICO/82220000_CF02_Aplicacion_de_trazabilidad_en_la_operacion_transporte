<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-9
        p.mb-lg-3.mb-3 El componente formativo <B>“Métricas del sistema de trazabilidad”</B> ofrece al aprendiz herramientas técnicas y prácticas para abordar la gestión de parámetros de control, indicadores de desempeño y criterios de seguridad en las operaciones logísticas. A partir del conocimiento de la cadena de suministro, sus elementos y la relación con la calidad, se fortalecen las competencias para analizar, medir y aplicar métricas que garanticen procesos eficientes y transparentes en la trazabilidad de productos y servicios dentro del transporte.
        .row.justify-content-center.align-items-center.mb-lg-3.mb-4
          .col-6.col-lg-3.mb-lg-0.mb-4.d-flex
            figure.w-100.d-flex.flex-column
              img(src='@/assets/curso/introduccion/img_2.png',  class="img-fluid")
          .col-12.col-lg-9
            p.mb-0 Este componente también enfatiza la interpretación de indicadores de gestión y en la aplicación de procedimientos operativos, con un enfoque en la mejora continua, la sostenibilidad y el cumplimiento de la normativa vigente. Además, promueve el desarrollo de habilidades para la toma de decisiones basadas en datos. Así, se contribuye a la formación de profesionales capaces de coordinar operaciones de transporte seguras, confiables y competitivas en el sector logístico.
      .col-8.col-lg-3
        figure
          img(src='@/assets/curso/introduccion/img_1.png',  class="img-fluid")
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/X-HAyBJi1MI?si=FsYSgWCUXctMSAtO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      
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
