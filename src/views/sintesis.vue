<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-3
      .col-8.col-lg-4.mb-lg-0.mb-3(data-aos="fade-left")
        figure
          img(src="@/assets/curso/sintesis/img_1.png", class="img-fluid")
      .col-12.col-lg-7.mb-lg-0.mb-0(data-aos="fade-left")
        p.mb-0 El componente formativo “Métricas del sistema de trazabilidad” permite comprender los procesos y herramientas esenciales para garantizar la visibilidad, control y eficiencia en la operación del transporte, desde su planificación hasta la evaluación de su desempeño. Se inicia con el estudio de la cadena de suministro, abordando su concepto, elementos y estándares de calidad, así como la normativa y políticas aplicables que aseguran la integridad de los productos y la eficiencia de la logística. Posteriormente, se profundiza en los parámetros de control, incluyendo su concepto y las métricas de desempeño, lo que permite establecer su importancia en la medición y optimización de la trazabilidad.
      .col-12.col-lg-1.d-none.d-lg-block.mb-0
        figure
          img(src="@/assets/curso/sintesis/img_2.svg", class="img-fluid")  
       

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-9.order-2.order-lg-1(data-aos="fade-left")
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-3
            p.mb-0 Asimismo, se analizan los criterios de seguridad, proporcionando herramientas para proteger los activos, la información y los procesos, y se presentan los principios y tipos de seguridad que influyen en la confiabilidad del sistema. Se examinan los indicadores de gestión de la operación, detallando su concepto, importancia, tipos, variables y principios de sostenibilidad para facilitar la toma de decisiones estratégicas y la mejora continua. Finalmente, se abordan los procedimientos operativos, incluyendo estructura y composición, métodos de captura y validación de datos, almacenamiento, reporting y análisis, consolidando competencias que permiten coordinar operaciones de transporte de manera transparente, segura y eficiente.
      .col-8.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-3(data-aos="fade-left")
        figure
          img(src="@/assets/curso/sintesis/img_4.png", class="img-fluid")

    
    .row.justify-content-center
      .col-12.col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
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
