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

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-3.mb-lg-0.mb-3
        img(src="@/assets/curso/temas/tema_4/img_2.png", class="img-fluid")
      .col-12.col-lg-9
        p.mb-3 Los indicadores clave de rendimiento <em>(Key Performance Indicators o KPIs)</em> son métricas cuantificables utilizadas para evaluar el éxito de una organización, un proyecto o una actividad en particular. En el contexto de la operación de transporte y trazabilidad, un <em>KPI</em> es una medida específica que nos ayuda a determinar si estamos alcanzando nuestros objetivos estratégicos y operativos.
        .row.justify-content-center.align-items-center
          .col-2.col-lg-1.mb-lg-0.mb-3.d-none.d-lg-block
            img(src="@/assets/curso/temas/tema_4/img_3.svg", class="img-fluid")
          .col-12.col-lg-11
            p.mb-0 El modelo <em>SMART</em> es una metodología para diseñar indicadores y objetivos de manera clara, precisa y accionable. Su nombre proviene de las siglas en inglés <em>Specific, Measurable, Achievable, Relevant, Time-bound</em>, y busca garantizar que cada indicador cumpla con criterios que faciliten su seguimiento y efectividad en la gestión operativa.
    .bg_img_5.mb-3
      .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
        .bloque-texto-t__img.mb-0
          img(src='@/assets/curso/temas/tema_4/img_4.png')
        .row.justify-content-center.align-items-stretch
          .col-10.col-md-8.col-lg-2.mb-lg-0.mb-6
            .bloque-texto-t__texto.tarjeta.color-transparent.mb-lg-0.mb-5.h-100
              .tarjeta.tarjeta-indicador.color-secundario-5
                .tarjeta-indicador__header.color-secundario-20
                  h4.text-center.mb-0 Específico
                .tarjeta-indicador__conter.p-3
                  p.text-center.mb-0 El indicador debe estar claramente definido y enfocado en un aspecto concreto del proceso.
                .tarjeta-indicador__circulo
                  span S
          .col-10.col-md-8.col-lg-2.mb-lg-0.mb-6
            .bloque-texto-t__texto.tarjeta.color-transparent.mb-lg-0.mb-4.h-100
              .tarjeta.tarjeta-indicador.color-acento-contenido-10
                .tarjeta-indicador__header
                  h4.text-center.mb-0 Medible
                .tarjeta-indicador__conter.p-3
                  p.text-center.mb-0 Se debe poder cuantificar o expresar con datos verificables.
                .tarjeta-indicador__circulo
                  span M
          .col-10.col-md-8.col-lg-2.mb-lg-0.mb-6
            .bloque-texto-t__texto.tarjeta.color-transparent.mb-lg-0.mb-4.h-100
              .tarjeta.tarjeta-indicador.color-terciario-20
                .tarjeta-indicador__header
                  h4.text-center.mb-0 Alcanzable
                .tarjeta-indicador__conter.p-3
                  p.text-center.mb-0 El objetivo debe ser realista de acuerdo con los recursos y capacidades disponibles.
                .tarjeta-indicador__circulo
                  span A
          .col-10.col-md-8.col-lg-2.mb-lg-0.mb-6
            .bloque-texto-t__texto.tarjeta.color-transparent.mb-lg-0.mb-4.h-100
              .tarjeta.tarjeta-indicador.color-sistema-f
                .tarjeta-indicador__header
                  h4.text-center.mb-0 Relevante
                .tarjeta-indicador__conter.p-3
                  p.text-center.mb-0 Debe estar alineado con los objetivos estratégicos y aportar valor.
                .tarjeta-indicador__circulo
                  span R
          .col-10.col-md-8.col-lg-2.mb-lg-0.mb-6
            .bloque-texto-t__texto.tarjeta.color-transparent.mb-lg-0.mb-4.h-100
              .tarjeta.tarjeta-indicador.color-primario-10
                .tarjeta-indicador__header
                  h4.text-center.mb-0 Temporal
                .tarjeta-indicador__conter.p-3
                  p.text-center.mb-0 Debe tener un plazo definido para su cumplimiento y medición.
                .tarjeta-indicador__circulo
                  span T

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

    .bg_img_6.mb-3
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

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-10.order-2.order-lg-1.mb-0
          p.mb-0 El rendimiento de los indicadores clave de desempeño se fortalece cuando se consideran las variables que aportan calidad, confiabilidad y capacidad de análisis a la gestión operativa. Estas variables aseguran que la información generada sea útil, pertinente y orientada a la mejora continua de la operación de transporte y trazabilidad.
        .col-8.col-lg-2.order-1.order-lg-2.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema_4/img_9.png')
    
    .row.justify-content-center.align-items-center.mb-0
      .col-8.col-lg-4.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema_4/img_10.png', class="img-fluid")
      .col-12.col-lg-8.mb-0
        .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
          SlyderF(columnas="col-12 col-sm-12 col-md-12 col-lg-6")
            .tarjeta--fondo__slider-01.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--4
                .tarjeta--slider__title.mb-3.text-center.fw-bold Calidad  de los datos
                .tarjeta--slider__content.text-center.mb-5 La completitud, consistencia y exactitud de los datos determinan la validez del indicador.
            .tarjeta--fondo__slider-01.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--5
                .tarjeta--slider__title.mb-3.text-center.fw-bold Tecnología
                .tarjeta--slider__content.text-center.mb-5 Hardware y software de identificación y monitoreo impactan la capacidad de medir con precisión.
            .tarjeta--fondo__slider-01.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--6
                .tarjeta--slider__title.mb-3.text-center.fw-bold Factores humanos
                .tarjeta--slider__content.text-center.mb-5 Capacitación, cumplimiento de POEs, comunicación y cultura organizacional influyen en la generación de datos confiables.
            .tarjeta--fondo__slider-01.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--7
                .tarjeta--slider__title.mb-3.text-center.fw-bold Condiciones externas
                .tarjeta--slider__content.text-center.mb-5 Elementos como clima, economía, infraestructura, normativas o eventos imprevistos afectan el desempeño operativo.
            .tarjeta--fondo__slider-01.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--8
                .tarjeta--slider__title.mb-3.text-center.fw-bold Complejidad de la cadena
                .tarjeta--slider__content.text-center.mb-5 Cadenas largas y con múltiples eslabones dificultan el control y aumentan los desafíos de medición.

    separador

    #t_4_5.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.5 Principios de sostenibilidad 
    .mb-3

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema_4/img_16.png')
      .bloque-texto-t__texto.col-10.mb-0.p-4
        p.mb-0 La sostenibilidad es un eje central de la logística moderna y los KPIs deben evidenciar su impacto en tres dimensiones: ambiental, social y económica. De esta manera, la trazabilidad no solo asegura eficiencia operativa, sino también responsabilidad corporativa y valor agregado para clientes y comunidades.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Indicadores de sostenibilidad en trazabilidad
    .tabla-a.mb-5
      table
        caption 
          p <b>Fuente:</b>  SENA, 2025.
        thead
          tr
            th.col-3.col-lg-3 Dimensión
            th.col-4.col-lg-4 Indicadores clave
            th.col-4.col-lg-4 Descripción
        tbody
          tr
            td.text-start.fw-bold Ambiental
            td.text-start 
              ul.list-unstyled.mb-0
                li.d-flex.align-items-start.mb-1.border-bottom.border-dashed.pb-2
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                  span Emisiones de CO₂ por tonelada/km.
                li.d-flex.align-items-start.mb-1.border-bottom.border-dashed.pb-2
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                  span Consumo de combustible por ruta/vehículo.
                li.d-flex.align-items-start.mb-1.border-bottom.border-dashed.pb-2
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                  span Porcentaje de residuos reciclados en almacenamiento y empaque. 
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                  span Uso de energías renovables en flotas y centros.
            td.text-start Evalúan eficiencia energética, reducción de huella de carbono y gestión adecuada de residuos.
          tr.bg-table-01
            td.text-start.fw-bold Social
            td.text-start 
              ul.list-unstyled.mb-0
                li.d-flex.align-items-start.mb-1.border-bottom.border-dashed.pb-2
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                  span Horas de conducción seguras.
                li.d-flex.align-items-start.mb-1.border-bottom.border-dashed.pb-2
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                  span Cumplimiento de normativas laborales. 
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                  span Apoyo a proveedores locales o proyectos comunitarios.
            td.text-start Reflejan el compromiso con la seguridad, el bienestar laboral y el desarrollo social.
          tr
            td.text-start.fw-bold Económica
            td.text-start
              ul.list-unstyled.mb-0
                li.d-flex.align-items-start.mb-1.border-bottom.border-dashed.pb-2
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                  span Retorno de la inversión en tecnologías verdes.
                li.d-flex.align-items-start.mb-1.border-bottom.border-dashed.pb-2
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                  span Reducción de costos por rutas sostenibles.
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                  span Disminución de mermas y pérdidas.
            td.text-start Miden la rentabilidad asociada a la gestión sostenible y la optimización de recursos.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-5
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.d-none.d-lg-block
                img(src='@/assets/curso/temas/tema_4/img_17.png',  class="img-fluid cita-decorada__imagen-flotante-3")
              .col-12.col-lg-8
                p.cita-decorada__texto Integrar la sostenibilidad en los KPIs de trazabilidad fortalece la competitividad, genera eficiencia, mejora la reputación de marca y atrae aliados estratégicos conscientes del impacto social y ambiental.
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
