<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Indicadores de gestión de la operación 

    .bloque-texto-g.color-acento-contenido-10.p-3.p-sm-4.p-md-5.mb-0
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_4/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los indicadores de gestión de la operación son herramientas esenciales para medir la efectividad y eficiencia de los procesos. Funcionan como señales de alerta o confirmación que permiten identificar si las actividades desarrolladas cumplen con los objetivos previstos y generan valor dentro de la cadena de operación y trazabilidad.

    separador

    #t_4_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.1 Concepto 
    .mb-3

    .row.justify-content-center.align-items-center
      .col-8.col-lg-3.mb-lg-0.mb-3
        img(src="@/assets/curso/temas/tema_4/img_2.png", class="img-fluid")
      .col-12.col-lg-9
        p.mb-3 Los indicadores clave de rendimiento <em>(Key Performance Indicators o KPIs)</em> son métricas cuantificables utilizadas para evaluar el éxito de una organización, un proyecto o una actividad en particular. En el contexto de la operación de transporte y trazabilidad, un <em>KPI</em> es una medida específica que nos ayuda a determinar si estamos alcanzando nuestros objetivos estratégicos y operativos.
        .row.justify-content-center.align-items-center
          .col-2.col-lg-1.mb-lg-0.mb-3
            img(src="@/assets/curso/temas/tema_4/img_3.svg", class="img-fluid")
          .col-12.col-lg-11
            p.mb-0 El modelo <em>SMART</em> es una metodología para diseñar indicadores y objetivos de manera clara, precisa y accionable. Su nombre proviene de las siglas en inglés <em>Specific, Measurable, Achievable, Relevant, Time-bound</em>, y busca garantizar que cada indicador cumpla con criterios que faciliten su seguimiento y efectividad en la gestión operativa.


    separador

    #t_4_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.2 Importancia
    .mb-3

    .row.justify-content-center.align-items-center
      .col-12.col-lg-4.mb-lg-0.mb-3
        img(src="@/assets/curso/temas/tema_4/img_6.png", class="img-fluid")
      .col-12.col-lg-8
        p.mb-0 Los indicadores de gestión en la operación del transporte son esenciales porque funcionan como el pulso de la organización. Permiten convertir datos en información estratégica que revela el nivel de eficiencia, productividad, calidad y rentabilidad de los procesos. Gracias a ellos, los gestores pueden anticiparse a problemas, corregir desviaciones (retrasos, sobrecostos, desperdicios de combustible, entre otros) y optimizar recursos, logrando operaciones más confiables, sostenibles y competitivas.

    separador

    #t_4_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.3 Tipos 
    .mb-3

    .bg_img_4.mb-3
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-8.order-2.order-lg-1.mb-0
          p.mb-xl-5.mb-3 Los indicadores de gestión en la operación de transporte y trazabilidad se agrupan en categorías: 
          SlyderA(tipo="a").tarjeta.tarjeta--fondo__slider.p-5
            .row.justify-content-center.align-items-center
              .col-10.col-lg-10.order-2.order-lg-1.mb-0
                h5 Eficiencia operacional
                p.mb-0 Miden el cumplimiento en tiempos y costos de la operación. Incluyen el porcentaje de entregas a tiempo (OTD), el ciclo desde la orden hasta la entrega, el costo por tonelada / km transportado y el nivel de utilización de la capacidad del vehículo.
            .row.justify-content-center.align-items-center
              .col-10.col-lg-10.order-2.order-lg-1.mb-0
                h5 Trazabilidad y calidad de datos
                p.mb-0 Evalúan la confiabilidad de la información registrada. Se consideran la precisión de los datos, el tiempo de respuesta a consultas y la cobertura de trazabilidad alcanzada en los productos o lotes.
            .row.justify-content-center.align-items-center
              .col-10.col-lg-10.order-2.order-lg-1.mb-0
                h5 Seguridad y riesgo
                p.mb-0 Reflejan el nivel de protección de la carga y el cumplimiento normativo. Aquí se incluyen los incidentes en tránsito (robos o pérdidas), el porcentaje de carga dañada o perdida y el grado de cumplimiento de rutas y horarios autorizados.
            .row.justify-content-center.align-items-center
              .col-10.col-lg-10.order-2.order-lg-1.mb-0
                h5 Servicio al cliente
                p.mb-0 Enfocados en la experiencia del usuario, consideran la cantidad de reclamos relacionados con fallas en la entrega o en la información y el nivel de satisfacción del cliente con el seguimiento y la trazabilidad ofrecida.
        .col-8.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema_4/img_8.png')

      separador

      #t_4_4.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 4.4 Variables  
      .mb-3

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10.order-2.order-lg-1.mb-0
          p.mb-0 El rendimiento de los indicadores clave de desempeño se fortalece cuando se consideran las variables que aportan calidad, confiabilidad y capacidad de análisis a la gestión operativa. Estas variables aseguran que la información generada sea útil, pertinente y orientada a la mejora continua de la operación de transporte y trazabilidad.
        .col-8.col-lg-2.order-1.order-lg-2.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema_4/img_9.png')
    
    .row.justify-content-center.align-items-center.mb-0


    separador

    #t_4_5.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.5 Principios de sostenibilidad 
    .mb-3

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema_4/img_16.png')
      .bloque-texto-t__texto.col-10.mb-0.p-4
        p.mb-0 La sostenibilidad es un eje central de la logística moderna y los KPIs deben evidenciar su impacto en tres dimensiones: ambiental, social y económica. De esta manera, la trazabilidad no solo asegura eficiencia operativa, sino también responsabilidad corporativa y valor agregado para clientes y comunidades.

</template>

<script>
export default {
  name: 'Tema4',
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
