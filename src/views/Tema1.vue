<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Cadena de suministro
    
    .bloque-texto-g.color-secundario-20.p-3.p-sm-4.p-md-5.mb-0
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La cadena de suministro constituye un sistema estratégico que integra de manera coordinada a proveedores, productores, distribuidores y clientes, con el propósito de garantizar que los bienes y servicios lleguen en el momento, lugar y condiciones requeridas. Su adecuada gestión fortalece la trazabilidad, asegura la eficiencia operativa y promueve la confianza entre los diferentes actores de la red logística.

    separador

    #t_1_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.1 Concepto
    .mb-3

    .cita-decorada
      blockquote.cita-decorada__caja.cita-decorada__caja--fondo-2.p-4
        .row.justify-content-center.align-items-center
          .col-12.col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema_1/img_2.png',  class="img-fluid cita-decorada__imagen-flotante-1")
          .col-12.col-lg-8
            p.cita-decorada__texto La cadena de suministro <EM>(Supply Chain)</EM> se entiende como una red estructurada de organizaciones, personas, procesos, recursos e información que interactúan para transformar insumos en productos terminados, facilitando su disponibilidad para el consumidor final. Este sistema busca optimizar los flujos de materiales, datos y recursos financieros, logrando operaciones más productivas, sostenibles y alineadas con los estándares de calidad y seguridad que exige el mercado actual.

    separador

    #t_1_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.2 Elementos
    .mb-3

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema_1/img_4.png')
      .bloque-texto-t__texto.col-10.mb-0.p-4
        p.mb-0 Los elementos de la cadena de suministro conforman los pilares que garantizan la eficiencia, la trazabilidad y la sostenibilidad de las operaciones logísticas. Cada uno, desde la planificación hasta la gestión de devoluciones, junto con los habilitadores tecnológicos y organizacionales, aporta valor y asegura la disponibilidad de información confiable para coordinar y optimizar los procesos de transporte.
    
    .bg_img_1.mb-3
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10.col-xl-8
          .gps-infografia-container.tarjeta--fondo-infografia
            .row.justify-content-center.align-items-center.mb-0
              .mt-5
              .mt-5
              .col-8.col-xl-8.mb-5.mt-5
                input#infografia-punto-1.d-none(type="radio" name="infografia-puntos" checked)
                input#infografia-punto-2.d-none(type="radio" name="infografia-puntos")
                input#infografia-punto-3.d-none(type="radio" name="infografia-puntos")
                input#infografia-punto-4.d-none(type="radio" name="infografia-puntos")
                input#infografia-punto-5.d-none(type="radio" name="infografia-puntos")
                input#infografia-punto-6.d-none(type="radio" name="infografia-puntos")
                .info-cards-container.mb-3
                  .info-card(data-card="1")
                    .img-circulo
                      figure
                        img(src="@/assets/curso/temas/tema_1/img_9.png", class="img-fluid")
                    .card-content
                      h5.mb-3 Planificación 
                      p.mb-0 Pronóstico de demanda, capacidad productiva y abastecimiento. Asegura la disponibilidad de información inicial, asignación de lotes y números de serie.
                  .info-card(data-card="2")
                    .img-circulo 
                      figure
                        img(src="@/assets/curso/temas/tema_1/img_10.png", class="img-fluid")
                    .card-content
                      h5.mb-3 Aprovisionamiento (Sourcing)
                      p.mb-0 Selección y evaluación de proveedores, gestión de relaciones (SRM) y contratos con cláusulas de trazabilidad. Garantiza el registro del origen de insumos y materias primas.
                  .info-card(data-card="3")
                    .img-circulo 
                      figure
                        img(src="@/assets/curso/temas/tema_1/img_11.png", class="img-fluid")
                    .card-content
                      h5.mb-3 Fabricación/Producción (Make)
                      p.mb-0 Control de procesos, inventarios en proceso y calidad. La trazabilidad se fortalece con la asignación de lotes, números de serie y captura de datos en cada etapa.
                  .info-card(data-card="4")
                    .img-circulo 
                      figure
                        img(src="@/assets/curso/temas/tema_1/img_12.png", class="img-fluid")
                    .card-content
                      h5.mb-3 Distribución y logística (Deliver)
                      p.mb-0 Gestión de almacenes, transporte, pedidos y logística inversa. Permite trazabilidad hacia adelante y hacia atrás mediante información de envíos, ubicaciones y devoluciones.
                  .info-card(data-card="5")
                    .img-circulo 
                      figure
                        img(src="@/assets/curso/temas/tema_1/img_10.png", class="img-fluid")
                    .card-content
                      h5.mb-3 Gestión de devoluciones (Return)
                      p.mb-0 Procesos de recepción, clasificación y disposición de productos. Cierra el ciclo de vida y facilita el control en retiros del mercado o postventa.
                  .info-card(data-card="6")
                    .img-circulo 
                      figure
                        img(src="@/assets/curso/temas/tema_1/img_11.png", class="img-fluid")
                    .card-content
                      h5.mb-3 Habilitadores (Enablers)
                      p.mb-0 Tecnología (ERP, WMS, RFID, Blockchain), talento humano, infraestructura y KPIs. Constituyen la base digital y organizacional para capturar y acceder a la información de trazabilidad.
              .col-12.col-lg-12.col-xl-10.mb-5
                figure
                  label.punto-info(for="infografia-punto-1" style="top: 50%; left: 10%;")
                    .punto-numero +
                  label.punto-info(for="infografia-punto-2" style="top: 50%; left: 25%;")
                    .punto-numero +
                  label.punto-info(for="infografia-punto-3" style="top: 50%; left: 40%;")
                    .punto-numero +
                  label.punto-info(for="infografia-punto-4" style="top: 50%; left: 55%;")
                    .punto-numero +
                  label.punto-info(for="infografia-punto-5" style="top: 50%; left: 70%;")
                    .punto-numero +
                  label.punto-info(for="infografia-punto-6" style="top: 50%; left: 85%;")
                    .punto-numero +

      separador

      #t_1_3.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 1.3 Calidad 
      .mb-3

      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-lg-1.mb-lg-0.mb-3
          img(src="@/assets/curso/temas/tema_1/img_6.png", class="img-fluid")
        .col-12.col-lg-11
          p.mb-0 La calidad en la cadena de suministro se refiere a un enfoque integral que busca asegurar que cada etapa y cada componente del proceso, desde la adquisición de materias primas hasta la entrega del producto final al cliente, cumpla con los estándares y expectativas establecidos. No se trata solo del producto final, sino de la excelencia en cada eslabón, incluyendo:

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-4.mb-3
        img(src="@/assets/curso/temas/tema_1/img_7.png", class="img-fluid")
      .col-12.col-lg-8.mb-3
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--color-primario-t")
          div(titulo="Materias  primas y componentes")
            p.mb-0 Asegura que los materiales recibidos de los proveedores cumplan con las especificaciones de calidad requeridas. Esto implica una evaluación rigurosa de proveedores y auditorías de calidad.
          div(titulo="Procesos de producción")
            p.mb-0 Garantiza que los procesos de fabricación sean eficientes, precisos y generen productos sin defectos. Esto incluye el control de calidad en cada fase de la producción.
          div(titulo="Almacenamiento y manejo")
            p.mb-0 Mantiene las condiciones adecuadas de almacenamiento para preservar la calidad de los productos y evitar daños durante su manipulación.
          div(titulo="Transporte y distribución")
            p.mb-0 Asegura que los productos lleguen a su destino en el tiempo y condiciones esperadas, sin sufrir deterioros o pérdidas. Esto implica un diseño de red de distribución eficiente y un transporte confiable.

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
