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
    
    .row.justify-content-center.mb-4
      .col-lg-8
        .fondo-color-sistema-j.p-4.borde-14
          p.fw-bold.mb-4 Ejemplo.
          p.mb-0 Para la función lógica F=(A+B) * C
          p.mb-0 n=3 (ya que las variables son A, B y C).
          p 2#[sup 3]=8 (número de combinaciones posibles y filas que debe tener la tabla).
      
    p.mb-4 La tabla de verdad y los niveles lógicos que cumplen dicha función en la salida son:

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 2.] Tabla de verdad.
        .tabla-a.color-acento-contenido.tabla-p-1.min-w-1
          table
            thead
              tr
                th(colspan="3") Variables o entradas
                th(colspan="2") Salidas parciales
                th(style="width: 200px;") Función lógica
            tbody
              tr
                td.text-center A
                td.text-center B
                td.text-center C
                td.text-center A + B
                td.text-center B + C
                td.text-center (A + B) * (B + C)
              tr
                td.text-center 0
                td.text-center 0
                td.text-center 0
                td.text-center 0
                td.text-center 0
                td.text-center 0
              tr
                td.text-center 0
                td.text-center 0
                td.text-center 1
                td.text-center 0
                td.text-center 1
                td.text-center 0
              tr
                td.text-center 0
                td.text-center 1
                td.text-center 0
                td.text-center 1
                td.text-center 0
                td.text-center 1
              tr
                td.text-center 0
                td.text-center 1
                td.text-center 1
                td.text-center 1
                td.text-center 1
                td.text-center 1
              tr
                td.text-center 1
                td.text-center 0
                td.text-center 0
                td.text-center 0
                td.text-center 0
                td.text-center 0
              tr
                td.text-center 1
                td.text-center 0
                td.text-center 1
                td.text-center 0
                td.text-center 1
                td.text-center 1
    
    h3.fondo-color-sistema-m.d-inline-flex.py-2.px-4.pe-5.borde-20.mb-4 Combinaciones

    p.mb-4 Para comprobar la tabla realice la simulación:

    .row.justify-content-center
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 2.] Diagrama lógico con compuertas OR y AND
        .fondo-color-sistema-n.p-4
          figure
            img.mx-auto(src="@/assets/curso/temas/8.svg",style="max-width: 434px;",alt="El diagrama muestra un circuito lógico compuesto por tres entradas etiquetadas como A, B y C. Estas se conectan a dos compuertas OR: la primera toma las entradas A y B, mientras que la segunda toma las entradas B y C. Las salidas de ambas compuertas OR se dirigen a una compuerta AND, cuya salida final está conectada a un cuadro etiquetado como Salida.")

    .titulo-decorativo.my-4.mq-p-1
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Simplificación de funciones lógicas
    
    .row.mb-4
      .col-lg-9
        p.mb-4 Al diseñar esquemas lógicos para cumplir funciones o procesos específicos, puede generarse inicialmente una función extensa que requiera un gran número de compuertas lógicas. Sin embargo, estas funciones pueden simplificarse mediante las propiedades de Boole, los teoremas de Morgan y los mapas de Karnaugh.
        p.mb-0 Como ejercicio práctico, se continuará trabajando con la función lógica del ejercicio 1.
      .col-lg-3.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/9.svg",style="max-width: 295px;")
    
    .fondo-personalizado-1.top-1.f2.pb-5
      .fondo-personalizado-1__contenido
        .row.mb-4
          .col-lg-8
            .borde-14.fondo-color-sistema-j.p-4.h-100.align-content-center
              p.fw-bold.mb-4 Ejercicio práctico 2
              p.mb-4 Simplificar la función lógica: #[b (A+B) * (B+C)]
              p Antes de simplificar la función, es importante recordar las propiedades de Boole y los teoremas de Morgan:
          .col-lg-4.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/10.png",style="max-width: 400px;")
        
        .row.justify-content-center
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 3.] Propiedades o Reglas del Álgebra de Boole
            .tabla-a.color-acento-contenido.tabla-p-1.min-w-1.mb-5
              table
                thead
                  tr
                    th Propiedad o Regla
                    th(style="width: 230px;") Ejemplo
                tbody
                  tr
                    td Simplificación de negación
                    td
                      math.f-p-1
                        mover
                          mtext A
                          mo =
                        mo =
                        mtext A
                  tr
                    td Simplificación de igualdad
                    td
                      p.mb-1 A + A = A
                      p.mb-0 A · A = A
                  tr
                    td Inversa
                    td
                      div
                        math.f-p-1
                          mtext A
                          mo +
                          mover
                            mtext A
                            mo =
                          mo =
                          mi 1
                      div
                        math.f-p-1
                          mtext A
                          mo ·
                          mover
                            mtext A
                            mo =
                          mo =
                          mi 0
                  tr
                    td Identidad
                    td
                      p.mb-1 A + 0 = A
                      p.mb-1 A · 1 = A
                      p.mb-1 A + 1 = 1
                      p.mb-0 A · 0 = 0
                  tr
                    td Conmutativa
                    td
                      p.mb-1 A + B = B + A
                      p.mb-0 A · B = B · A
                  tr
                    td Asociativa
                    td
                      p.mb-1 A + (B + C) = (A + B) + C
                      p.mb-0 A · (B · C) = (A · B) · C
                  tr
                    td Distributiva
                    td
                      p.mb-1 A · (B + C) = (A · B) + (A · C)
                      p.mb-0 (A + B) · C = (A · C) + (B · C)
                  tr
                    td Más reglas de simplificación o leyes de absorción
                    td
                      p.mb-1 A + A · B = A
                      p.mb-0 A · (A + B) = A
                  tr
                    td Teorema de Morgan
                    td
                      div
                        math.f-p-1
                          mover
                            mo (A · B)
                            mo =
                          mo =
                          msup
                            mtext A
                            mo &apos;
                          mo +
                          msup
                            mtext B
                            mo &apos;
                      div
                        math.f-p-1
                          mover
                            mo (A + B)
                            mo =
                          mo =
                          msup
                            mtext A
                            mo &apos;
                          mo ·
                          msup
                            mtext B
                            mo &apos;

        p.mb-0 El proceso de simplificación es:

    .row
      .col-lg-4.mb-3.order-p-1
        .borde-8.fondo-color-sistema-m.p-4.text-center.h-100
          p.fw-bold.mb-0 1. Reorganización de la función usando la propiedad conmutativa
      .col-lg-4.mb-3.order-p-2
        .borde-8.fondo-color-sistema-m.p-4.text-center.h-100
          p.fw-bold.mb-0 2. Aplicación de la propiedad distributiva
      .col-lg-4.mb-3.order-p-3
        .borde-8.fondo-color-sistema-m.p-4.text-center.h-100
          p.fw-bold.mb-0 3. Resultado simplificado
      .col-lg-4.mb-3.order-p-4
        .borde-8.fondo-color-sistema-d.p-4.text-center.h-100
          p.mb-0 (A + B) * (B + C) = (B + A) * (B + C)
      .col-lg-4.mb-3.order-p-5
        .borde-8.fondo-color-sistema-d.p-4.text-center.h-100
          p.mb-0 (B + A) * (B + C) = B + (A * C)
      .col-lg-4.mb-3.order-p-6
        .borde-8.fondo-color-sistema-d.p-4.text-center.h-100
          p.mb-0 (A + B) * (B + C) = B + (A * C)
    
    .titulo-decorativo.my-4
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Validación de la simplificación
    
    p.mb-4 Para validar que la función simplificada cumple con la misma salida que la función original, se debe:

    .row.justify-content-center.mb-4
      .col-lg-10
        .fondo-color-sistema-o.p-4
          .row.align-items-center
            .col-md-4
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/11.svg",style="max-width: 156px;")
            .col-md-8
              ul.lista-ul.pb-0.mb-0
                li.d-flex
                  i.fas.fa-check-circle.c-color-sistema-p.me-3
                  span Construir el esquema lógico simplificado y compararlo con el inicial.
                li.d-flex
                  i.fas.fa-check-circle.c-color-sistema-p.me-3
                  span Comprobar que las tablas de verdad coincidan para ambas expresiones.
                li.d-flex.mb-0
                  i.fas.fa-check-circle.c-color-sistema-p.me-3
                  span Analizar cómo la simplificación reduce el número de compuertas necesarias.
    
    p.mb-4 Esto evidencia que la simplificación no solo conserva la lógica original, sino que optimiza el diseño del esquema lógico.

    figure.mb-4
      img.mx-auto(src="@/assets/curso/temas/12.svg",style="max-width: 610px;")
    
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 3.] Representación de funciones lógicas con compuertas
        .fondo-color-sistema-n.p-4
          figure
            img.mx-auto(src="@/assets/curso/temas/13.svg",style="max-width: 964px;",alt="La figura presenta dos circuitos lógicos y una tabla. La tabla tiene tres columnas etiquetadas como Función o Salida, Operación y Compuerta. En el circuito de la izquierda, las entradas A, B y C se conectan a una compuerta AND para obtener A⋅C, y luego a una compuerta OR junto con B para obtener B+(A*C) En el circuito de la derecha, las entradas A, B y C se procesan a través de dos compuertas OR, una que genera A+B y otra que genera B+C, cuyas salidas son conectadas a una compuerta AND que cumple la función (A+B)⋅(B+C).")
    
    .titulo-decorativo.my-4.mq-p-1
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Esquema lógico simplificado versus Esquema lógico sin simplificar
    
    p.mb-4 Ambos esquemas realizan la misma función lógica, pero el esquema simplificado utiliza menos compuertas, lo que resulta en una reducción de costos y espacio. Esto resalta la importancia de simplificar las funciones lógicas al diseñar circuitos.

    p.mb-4 A continuación, se procederá a comprobar que las dos funciones, la original (A+B)*(B+C) y la simplificada B+(A*C), generan los mismos resultados mediante sus respectivas tablas de verdad:

    .fondo-personalizado-1.top-2.bottom-1.f2.mb-4
      .fondo-personalizado-1__contenido
        .row.justify-content-center.mb-4
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 4.] Tabla comparativa de funciones lógicas sin simplificar y simplificada
            .fondo-color-sistema-n.p-4
              figure
                img.mx-auto(src="@/assets/curso/temas/14.svg",style="max-width: 864px;",alt="La figura presenta una tabla tiene cinco columnas principales: Variables o entradas, Función lógica sin simplificar (A+B)⋅(B+C), Variables o entradas repetidas, Salida parcial A⋅C, y Función lógica simplificada B+(A⋅C). Contiene valores binarios (0 y 1) para todas las combinaciones posibles de las variables A, B y C, mostrando cómo evolucionan los resultados desde la función sin simplificar hasta su versión simplificada, estableciendo una equivalencia entre ambas funciones.")
        
        p.mb-4 Se evidencia que las salidas para cada combinación son las mismas.

        .row.mb-4
          .col-lg-8
            .fondo-color-sistema-j.p-4.borde-14.h-100.align-content-center
              p.fw-bold.mb-4 Ejercicio práctico 3
              p A partir del esquema lógico, se debe elaborar la tabla de verdad y determinar la función lógica. Luego, simplificar la función lógica obtenida y comprobar que las salidas coinciden con las de la función original sin simplificar.
          .col-lg-4.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/15.png",style="max-width: 400px;")
        
        .row.justify-content-center
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 5.] Circuito lógico con compuertas combinadas
            .fondo-color-sistema-n.p-4
              figure
                img.mx-auto(src="@/assets/curso/temas/16.svg",style="max-width: 731px;",alt="La figura representa un circuito lógico con tres entradas etiquetadas como A, B y C. Las entradas pasan por diferentes compuertas. La entrada A y la entrada B se conectan a una compuerta OR. La entrada C pasa por un inversor antes de ser procesada junto con otras señales en una compuerta AND. Las salidas de las compuertas AND y OR se combinan en una compuerta OR final para generar la salida.")
    
    p.fw-bold.mb-1 Solución:
    p.mb-4 Para determinar la función lógica del esquema, es necesario identificar el tipo de compuertas lógicas y las operaciones que realiza cada una, de la siguiente manera:

    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 6.] Diagrama de circuito lógico y tabla de operaciones
        .fondo-color-sistema-n.p-4
          figure
            img.mx-auto(src="@/assets/curso/temas/17.svg",style="max-width: 909px;",alt="La imagen muestra un circuito lógico con varias compuertas y una tabla explicativa. El circuito comienza con una compuerta OR que toma como entradas A, B y C, y su salida es A + B + C. Luego, la entrada C pasa por una compuerta NOT para ser negada (C). La salida de la compuerta NOT (C) y la entrada B se combinan en una compuerta AND, generando la salida B⋅C. Posteriormente, la salida de la primera compuerta OR y C pasan por otra compuerta AND, cuyo resultado es (A+B+C)⋅C. Finalmente, ambas salidas AND se combinan en una compuerta OR, dando como resultado la función lógica final [(A+B+C)⋅C]+(B⋅C). La tabla debajo describe las compuertas utilizadas: OR (+), NOT (Inversor o negación), y AND (⋅).")
    
    p.mb-4 Con la función lógica, se procede a construir la tabla de verdad. La tabla de verdad y los niveles lógicos que corresponden a la salida de dicha función son los siguientes:

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 4.] Tabla de verdad para función lógica compuesta













      
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
