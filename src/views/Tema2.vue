<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Parámetros de control

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema_1/img_4.png')
      .bloque-texto-t__texto.col-10.mb-0.p-4
        p.mb-0 Los parámetros de control permiten garantizar que cada proceso dentro de la cadena de suministro se ejecute bajo condiciones estandarizadas, medibles y verificables. Estos parámetros son esenciales para mantener la coherencia entre lo planificado y lo ejecutado, facilitando la trazabilidad de la información y la toma de decisiones oportunas frente a desviaciones o riesgos.

    separador

    #t_2_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.1 Concepto
    .mb-3

    .bg_img_2.mb-5

      p.mb-5 Los parámetros de control son criterios, variables o condiciones previamente definidos que se utilizan para supervisar y evaluar el desempeño de un proceso logístico. Su función es establecer puntos de referencia que permitan medir la eficiencia, seguridad y calidad de las operaciones:

      .row.justify-content-center.align-items-center
        .col-8.col-lg-8.col-xl-2.mb-lg-0.mb-3
          img(src='@/assets/curso/temas/tema_2/img_2.png',  class="img-fluid cita-decorada__imagen-flotante-2")
        .col-12.col-lg-12.col-xl-10
          TabsA.mb-0.tarjeta-tabs-a.color-terciario-10
            .tarjeta.color-terciario-10.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Supervisión y seguimiento")
              .row.justify-content-center.align-items-center.mb-0
                .col-12.col-lg-8.order-2.order-lg-1.mb-0
                  p.mb-0 Los parámetros de control permiten monitorear en tiempo real el desarrollo de las operaciones logísticas, verificando que se cumplan los estándares de calidad, seguridad y eficiencia. De esta manera, los responsables pueden identificar variaciones frente a lo planificado y tomar decisiones inmediatas para corregirlas.
                .col-6.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema_2/img_3.png', class="img-fluid")
            .tarjeta.color-terciario-10.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Medición del desempeño")
              .row.justify-content-center.align-items-center.mb-0
                .col-12.col-lg-8.order-2.order-lg-1.mb-0
                  p.mb-0 A través de los parámetros de control se pueden establecer indicadores cuantitativos y cualitativos que muestran el nivel de cumplimiento de las metas. Estos resultados facilitan la comparación entre periodos, procesos o áreas, generando información clave para evaluar la productividad y la trazabilidad.
                .col-6.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema_2/img_4.png', class="img-fluid")
            .tarjeta.color-terciario-10.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Mejora continua y toma de decisiones")
              .row.justify-content-center.align-items-center.mb-0
                .col-12.col-lg-8.order-2.order-lg-1.mb-0
                  p.mb-0 Los parámetros de control funcionan como herramientas estratégicas para analizar tendencias y detectar oportunidades de optimización. Al contar con información confiable, las organizaciones pueden implementar acciones correctivas y preventivas que fortalecen la sostenibilidad y la competitividad en la cadena de suministro.
                .col-6.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema_2/img_5.png', class="img-fluid")

      separador

      #t_2_2.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 2.2 Métricas de desempeño
      .mb-3

      .cita-decorada.mb-5
        blockquote.cita-decorada__caja.cita-decorada__caja--fondo-3.p-5
          .row.justify-content-center.align-items-center
            .col-12.col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema_2/img_6.png',  class="img-fluid cita-decorada__imagen-flotante-2")
            .col-12.col-lg-8
              p.cita-decorada__texto Son indicadores cuantificables que permiten evaluar la eficacia y eficiencia de nuestro sistema de trazabilidad. Se necesita saber si está funcionando bien y si está entregando valor. La selección de métricas debe ser estratégica y alinearse con los objetivos generales de la empresa.
 
    .bg_img_3.mb-3

      SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h5 Tasa  de éxito de la captura de datos
            p.mb-0 Porcentaje de lecturas exitosas en códigos o etiquetas. Un valor bajo indica fallas en tecnología, etiquetas o capacitación.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_8.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h5 Tiempo de respuesta de la consulta
            p.mb-0 Tiempo que tarda el sistema en recuperar información de un artículo o lote. Impacta eficiencia y capacidad de reacción.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_9.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h5 Precisión de los datos
            p.mb-0 Porcentaje de registros correctos y completos, validado mediante auditorías o contrastes con la realidad física.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_10.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h5 Porcentaje de productos rastreados
            p.mb-0 Proporción de productos con registro completo de recorrido. El valor ideal es del 100 %.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_11.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h5 Tiempo de inactividad del sistema
            p.mb-0 Horas o porcentaje en que el sistema no opera. La inactividad implica pérdida de visibilidad y aumento de riesgos.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_12.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h5 Costo por unidad de trazabilidad
            p.mb-0 Relación entre el costo total del sistema y las unidades trazadas. Permite evaluar rentabilidad.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_13.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h5 Cumplimiento normativo
            p.mb-0 Porcentaje de cumplimiento de requisitos legales y regulatorios en el sistema de trazabilidad.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_14.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h5 Reducción de mermas/devoluciones
            p.mb-0 Medición de disminución de pérdidas o devoluciones gracias a la trazabilidad y la identificación de problemas de calidad.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_15.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h5 Tiempo de investigación de incidentes
            p.mb-0 Duración del proceso para identificar el origen de un problema o retiro de producto, clave en gestión de riesgos.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_16.png', class="img-fluid")


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
