<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Procedimientos operativos

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema_5/img_1.png')
      .bloque-texto-t__texto.col-10.mb-0.p-4
        p.mb-0 Para asegurar la exactitud y fiabilidad de la información de trazabilidad, es fundamental contar con Procedimientos Operativos Estándar (POEs) robustos y bien definidos. A continuación, ampliaremos el contenido del programa de métrica centrándonos en el rol crucial de los POEs.

    separador

    #t_5_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.1 Concepto
    .mb-3

    .row.justify-content-center.align-items-center
      .col-12.col-lg-4.mb-lg-0.mb-3
        img(src="@/assets/curso/temas/tema_5/img_2.png", class="img-fluid")
      .col-12.col-lg-8
        p.mb-0 Los POEs son documentos detallados que describen, paso a paso, cómo llevar a cabo una tarea o proceso específico de manera consistente y eficaz. Son una especie de manual de instrucciones o sistema de gestión que elimina la ambigüedad y asegura que todas las actividades se realicen de la misma forma, independientemente de quién las ejecute. En el contexto de la trazabilidad, los POEs garantizan que la captura, el registro y la gestión de la información se realicen siguiendo un método unificado.

    separador

    #t_5_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.2 Importancia
    .mb-3
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-4
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.d-none.d-lg-block
                img(src='@/assets/curso/temas/tema_5/img_3.png',  class="img-fluid cita-decorada__imagen-flotante-4")
              .col-12.col-lg-8
                p.cita-decorada__texto Los Procedimientos Operativos Estandarizados (POEs) son esenciales para garantizar la trazabilidad en las operaciones de transporte y logística, ya que proporcionan uniformidad, fiabilidad y control en la captura y gestión de la información. Su aplicación permite reducir errores, fortalecer la confianza en los datos y cumplir con normativas vigentes, además de servir como herramienta de capacitación y mejora continua:
    .row.justify-content-center.mb-5
      .col-12.col-lg-10.position-relative
        .avatar
          figure
            img.img250(src="@/assets/curso/temas/tema_5/img_6.png", alt="avatar" class="img-fluid")
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto.position-relative
              figure
                img.img100(src="@/assets/curso/temas/tema_5/img_4.png", alt="Control químico" class="img-fluid")
            .col
              h5 Consistencia  de datos
              p.p-2 Estandarizan la captura de información (códigos, temperaturas, sellos, entre otros), reduciendo errores y manteniendo registros coherentes.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto.position-relative
              figure
                img.img100(src="@/assets/curso/temas/tema_5/img_5.png", alt="Control mecánico" class="img-fluid")
            .col
              h5 Fiabilidad de la información
              p.p-2 Garantizan precisión y confianza al registrar origen, transporte y destino de los productos.
        .crd.crd--avatarHorizontal.crd--middle.py-4
          .row.align-items-center
            .col-auto.position-relative
              figure
                img.img100(src="@/assets/curso/temas/tema_5/img_4.png", alt="Control manual" class="img-fluid")
            .col
              h5 Reducción de errores y omisiones
              p.p-2 Proveen instrucciones claras que minimizan fallas humanas en procesos críticos.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto.position-relative
              figure
                img.img100(src="@/assets/curso/temas/tema_5/img_5.png", alt="Control biológico" class="img-fluid")
            .col
              h5 Facilitación de la capacitación
              p.p-2 Funcionan como guías de formación estandarizada, acelerando el aprendizaje y cumplimiento de procedimientos.
        .crd.crd--avatarHorizontal.crd--middle.py-4
          .row.align-items-center
            .col-auto.position-relative
              figure
                img.img100(src="@/assets/curso/temas/tema_5/img_4.png", alt="Control biocultural" class="img-fluid")
            .col
              h5 Base para auditoría y mejora continua
              p.p-2 Sirven como referencia para auditorías y permiten revisar y optimizar procesos.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto.position-relative
              figure
                img.img100(src="@/assets/curso/temas/tema_5/img_5.png", alt="Control biológico" class="img-fluid")
            .col
              h5 Cumplimiento normativo
              p.p-2 Aseguran que las operaciones cumplan con regulaciones de trazabilidad mediante documentación y ejecución consistente.

    separador

    #t_5_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.3 Estructura
    .mb-3

    .row.justify-content-center.align-items-center
      .col-12.col-lg-4.mb-lg-0.mb-3
        img(src="@/assets/curso/temas/tema_5/img_7.png", class="img-fluid")
      .col-12.col-lg-8
        p.mb-3 Un POE para operaciones de transporte debe responder a la dinámica del movimiento de mercancías y garantizar procesos uniformes, seguros y trazables. Su estructura puede organizarse en los siguientes apartados:
        ul.list-unstyled.mb-0
          li.d-flex.align-items-start.mb-1.border-bottom.border-dashed.pb-2
            i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
            span <B>Identificación:</B> Título, código, versión y fechas.
          li.d-flex.align-items-start.mb-1.border-bottom.border-dashed.pb-2
            i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
            span <B>Propósito y Alcance:</B> Qué busca el POE y a qué procesos aplica.
          li.d-flex.align-items-start.mb-1.border-bottom.border-dashed.pb-2
            i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
            span <B>Definiciones:</B> Glosario de términos o acrónimos.
          li.d-flex.align-items-start.mb-1.border-bottom.border-dashed.pb-2
            i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
            span <B>Roles:</B> Responsables de cada tarea.
          li.d-flex.align-items-start.mb-1.border-bottom.border-dashed.pb-2
            i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
            span <B>Recursos:</B> Materiales, equipos y formularios necesarios.
          li.d-flex.align-items-start.mb-1.border-bottom.border-dashed.pb-2
            i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
            span <B>Ejecución y control:</B> Instrucciones, verificación y acciones correctivas.
          li.d-flex.align-items-start.mb-0
            i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
            span <B>Referencias y revisiones:</B> Documentos relacionados e historial de cambios.

    separador

    #t_5_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.4 Composición 
    .mb-3

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema_5/img_8.png')
      .bloque-texto-t__texto.col-10.mb-0.p-4
        p.mb-0 Un POE de captura y gestión de datos de trazabilidad debe ser riguroso en cada punto donde se genera o registra información. Su correcta estructuración garantiza la consistencia, integridad y disponibilidad de los datos en toda la cadena logística.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 2.
      span Composición del POE de Trazabilidad
    .tabla-a.mb-5
      table
        caption 
          p <b>Fuente:</b>  SENA, 2025.
        thead
          tr
            th.col-3.col-lg-3 Función / Componente
            th.col-4.col-lg-4 Descripción
            th.col-4.col-lg-4 Ejemplo de Acción
        tbody
          tr
            td.text-start.fw-bold Puntos Críticos de Control (PCC)
            td.text-start Identifica cada etapa donde se genera información clave de trazabilidad, asegurando consistencia y confiabilidad.
            td.text-start Recepción de mercancía, almacenamiento, picking, carga, tránsito, entrega y devoluciones.
          tr.bg-table-01
            td.text-start.fw-bold Métodos de captura de datos
            td.text-start Define cómo se registran los datos de forma precisa y confiable, combinando tecnología y procedimientos.
            td.text-start Escaneo de códigos de barras / RFID, entrada manual con doble verificación, sensores de temperatura y humedad.
          tr
            td.text-start.fw-bold Formatos y estándares de datos
            td.text-start Estandariza la información registrada para facilitar su interpretación, control y análisis.
            td.text-start Fechas y horas estandarizadas, identificadores únicos (lote, serie, SSCC, entre otros), códigos de producto (GTIN), unidades de medida consistentes.
          tr.bg-table-01
            td.text-start.fw-bold Validación y verificación
            td.text-start Asegura que los datos sean correctos y completos, minimizando errores y omisiones.
            td.text-start Validación en punto de captura, verificación cruzada entre sistemas, resolución de inconsistencias detectadas.
          tr
            td.text-start.fw-bold Almacenamiento y seguridad
            td.text-start Protege la información registrada y asegura disponibilidad, confidencialidad e integridad de los datos.
            td.text-start Uso de WMS / TMS / ERP, copias de seguridad, control de accesos, permisos de usuario y protección contra manipulación.
          tr.bg-table-01
            td.text-start.fw-bold Reporting y análisis
            td.text-start Permite evaluar el desempeño del sistema de trazabilidad y tomar decisiones basadas en datos.
            td.text-start Generación de reportes de historial de productos, análisis de KPIs de trazabilidad y desempeño operativo.
</template>

<script>
export default {
  name: 'Tema5',
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
