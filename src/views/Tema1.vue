<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 1
      h1 Lógica combinatoria
    
    .fondo-personalizado-1.bottom-1.f2.mb-4
      .fondo-personalizado-1__contenido.pt-5
        p.mb-4 La lógica combinatoria implica la integración de diferentes compuertas en un único circuito o esquema lógico.

        .row
          .col-lg-8
            .fondo-color-sistema-j.p-4
              p.fw-bold.mb-4 Ejercicio práctico 1
              p.mb-1 Realizar el esquema lógico y la tabla de verdad a partir de la siguiente función lógica: (A + B) · (B + C).
              p.mb-4 Para construir el esquema lógico basado en la función dada, primero se identifican las operaciones involucradas para que se cumpla la función, de la siguiente forma:
              figure
                img.me-auto(src="@/assets/curso/temas/4.svg",style="max-width: 178px;")
          .col-lg-4.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/5.png",style="max-width: 400px;")
        
        .titulo-decorativo.my-4
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 3 operaciones: (+, *, +)
        
        p.mb-4 A continuación, se identifican las compuertas que corresponden a cada operación:

        .row.justify-content-center
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 1.] Relación entre funciones lógicas, operaciones y compuertas
            .tabla-a.color-acento-contenido.tabla-p-1.pad-p-1
              table
                thead
                  tr
                    th Función o salida
                    th(style="width: 150px;") Operación
                    th Compuerta
                tbody
                  tr
                    td A + B
                    td +
                    td OR
                  tr
                    td B + C
                    td +
                    td OR
                  tr
                    td (A + B) · (B + C)
                    td ·
                    td AND
    
    p.mb-4 De esta forma, el esquema lógico quedaría diseñado considerando las compuertas correspondientes a cada operación.

    .row.justify-content-center
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 1.] Diagrama de compuertas lógicas
        figure
          img.mx-auto(src="@/assets/curso/temas/6.svg",style="max-width: 610px;",alt="El diagrama muestra un circuito lógico compuesto por tres entradas: A, B y C. Dos compuertas OR están conectadas de la siguiente manera: una toma las entradas A y B para producir la salida A+B; la otra toma las entradas B y C para producir la salida B+C. Estas salidas son llevadas a una compuerta AND, que genera el resultado final de la función lógica (A+B)⋅(B+C).")
    
    .titulo-decorativo.my-4
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Esquema lógico o plano

    p.mb-4 Antes de construir la tabla de verdad, es fundamental tener en cuenta:

    .row.justify-content-center.mb-4
      .col-lg-10
        .fondo-color-sistema-l.p-4
          .row.align-items-center
            .col-md-auto
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 116px;")
            .col
              p.mb-3 #[b Tabla de verdad.] Es una representación gráfica de todos los valores que puede asumir la función lógica para cada una de las posibles combinaciones de las variables de entrada.
    
    p.mb-4 El número de combinaciones posibles se calcula como 2n, siendo n el número de variables.
    
    .row.justify-content-center
      .col-lg-8
        .fondo-color-sistema-j.p-4.borde-14
          p.fw-bold.mb-4 Ejemplo.
          p.mb-0 Para la función lógica F=(A+B) * C
          p.mb-0 n=3 (ya que las variables son A, B y C).
          p 2#[sup 3]=8 (número de combinaciones posibles y filas que debe tener la tabla).

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
