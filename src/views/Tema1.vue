<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Lógica combinatoria

    .fondo-personalizado-1.bottom-1.f2.mb-4
      .fondo-personalizado-1__contenido.pt-5
        p.mb-4(data-aos="fade-up") La lógica combinatoria implica la integración de diferentes compuertas en un único circuito o esquema lógico.

        .row(data-aos="fade-up")
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
        
        .titulo-decorativo.my-4(data-aos="fade-up")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 3 operaciones: (+, *, +)
        
        p.mb-4(data-aos="fade-up") A continuación, se identifican las compuertas que corresponden a cada operación:

        .row.justify-content-center(data-aos="fade-up")
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 1.] #[i Relación entre funciones lógicas, operaciones y compuertas]
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
    
    p.mb-4(data-aos="fade-up") De esta forma, el esquema lógico quedaría diseñado considerando las compuertas correspondientes a cada operación.

    .row.justify-content-center(data-aos="fade-up")
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 1.] #[i Diagrama de compuertas lógicas]
        figure
          img.mx-auto(src="@/assets/curso/temas/6.svg",style="max-width: 610px;",alt="El diagrama muestra un circuito lógico compuesto por tres entradas: A, B y C. Dos compuertas OR están conectadas de la siguiente manera: una toma las entradas A y B para producir la salida A+B; la otra toma las entradas B y C para producir la salida B+C. Estas salidas son llevadas a una compuerta AND, que genera el resultado final de la función lógica (A+B)⋅(B+C).")
    
    .titulo-decorativo.my-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Esquema lógico o plano

    p.mb-4(data-aos="fade-up") Antes de construir la tabla de verdad, es fundamental tener en cuenta:

    .row.justify-content-center.mb-4(data-aos="fade-up")
      .col-lg-10
        .fondo-color-sistema-l.p-4
          .row.align-items-center
            .col-md-auto
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 116px;")
            .col
              p.mb-3 #[b Tabla de verdad.] Es una representación gráfica de todos los valores que puede asumir la función lógica para cada una de las posibles combinaciones de las variables de entrada.
    
    p.mb-4(data-aos="fade-up") El número de combinaciones posibles se calcula como 2n, siendo n el número de variables.
    
    .row.justify-content-center.mb-4(data-aos="fade-up")
      .col-lg-8
        .fondo-color-sistema-j.p-4.borde-14
          p.fw-bold.mb-4 Ejemplo.
          p.mb-0 Para la función lógica F=(A+B) * C
          p.mb-0 n=3 (ya que las variables son A, B y C).
          p 2#[sup 3]=8 (número de combinaciones posibles y filas que debe tener la tabla).
      
    p.mb-4(data-aos="fade-up") La tabla de verdad y los niveles lógicos que cumplen dicha función en la salida son:

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 2.] #[i Tabla de verdad]
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
    
    h3.fondo-color-sistema-m.d-inline-flex.py-2.px-4.pe-5.borde-20.mb-4(data-aos="fade-up") Combinaciones

    p.mb-4(data-aos="fade-up") Para comprobar la tabla realice la simulación:

    .row.justify-content-center(data-aos="fade-up")
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 2.] #[i Diagrama lógico con compuertas OR y AND]
        .fondo-color-sistema-n.p-4
          figure
            img.mx-auto(src="@/assets/curso/temas/8.svg",style="max-width: 434px;",alt="El diagrama muestra un circuito lógico compuesto por tres entradas etiquetadas como A, B y C. Estas se conectan a dos compuertas OR: la primera toma las entradas A y B, mientras que la segunda toma las entradas B y C. Las salidas de ambas compuertas OR se dirigen a una compuerta AND, cuya salida final está conectada a un cuadro etiquetado como Salida.")

    .titulo-decorativo.my-4.mq-p-1(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Simplificación de funciones lógicas
    
    .row.mb-4(data-aos="fade-up")
      .col-lg-9
        p.mb-4 Al diseñar esquemas lógicos para cumplir funciones o procesos específicos, puede generarse inicialmente una función extensa que requiera un gran número de compuertas lógicas. Sin embargo, estas funciones pueden simplificarse mediante las propiedades de Boole, los teoremas de Morgan y los mapas de Karnaugh.
        p.mb-0 Como ejercicio práctico, se continuará trabajando con la función lógica del ejercicio 1.
      .col-lg-3.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/9.svg",style="max-width: 295px;")
    
    .fondo-personalizado-1.top-1.f2.pb-5
      .fondo-personalizado-1__contenido
        .row.mb-4(data-aos="fade-up")
          .col-lg-8
            .borde-14.fondo-color-sistema-j.p-4.h-100.align-content-center
              p.fw-bold.mb-4 Ejercicio práctico 2
              p.mb-4 Simplificar la función lógica: #[b (A+B) * (B+C)]
              p Antes de simplificar la función, es importante recordar las propiedades de Boole y los teoremas de Morgan:
          .col-lg-4.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/10.png",style="max-width: 400px;")
        
        .row.justify-content-center(data-aos="fade-up")
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 3.] #[i Propiedades o Reglas del Álgebra de Boole]
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

    .row(data-aos="fade-up")
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
    
    .titulo-decorativo.my-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Validación de la simplificación
    
    p.mb-4(data-aos="fade-up") Para validar que la función simplificada cumple con la misma salida que la función original, se debe:

    .row.justify-content-center.mb-4(data-aos="fade-up")
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
    
    p.mb-4(data-aos="fade-up") Esto evidencia que la simplificación no solo conserva la lógica original, sino que optimiza el diseño del esquema lógico.

    figure.mb-4
      img.mx-auto(src="@/assets/curso/temas/12.svg",style="max-width: 610px;")
    
    .row.justify-content-center(data-aos="fade-up")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 3.] #[i Representación de funciones lógicas con compuertas]
        .fondo-color-sistema-n.p-4
          figure
            img.mx-auto(src="@/assets/curso/temas/13.svg",style="max-width: 964px;",alt="La figura presenta dos circuitos lógicos y una tabla. La tabla tiene tres columnas etiquetadas como Función o Salida, Operación y Compuerta. En el circuito de la izquierda, las entradas A, B y C se conectan a una compuerta AND para obtener A⋅C, y luego a una compuerta OR junto con B para obtener B+(A*C) En el circuito de la derecha, las entradas A, B y C se procesan a través de dos compuertas OR, una que genera A+B y otra que genera B+C, cuyas salidas son conectadas a una compuerta AND que cumple la función (A+B)⋅(B+C).")
    
    .titulo-decorativo.my-4.mq-p-1(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Esquema lógico simplificado versus Esquema lógico sin simplificar
    
    p.mb-4(data-aos="fade-up") Ambos esquemas realizan la misma función lógica, pero el esquema simplificado utiliza menos compuertas, lo que resulta en una reducción de costos y espacio. Esto resalta la importancia de simplificar las funciones lógicas al diseñar circuitos.

    p.mb-4(data-aos="fade-up") A continuación, se procederá a comprobar que las dos funciones, la original (A+B)*(B+C) y la simplificada B+(A*C), generan los mismos resultados mediante sus respectivas tablas de verdad:

    .fondo-personalizado-1.top-2.bottom-1.f2.mb-4
      .fondo-personalizado-1__contenido
        .row.justify-content-center.mb-4(data-aos="fade-up")
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 4.] #[i Tabla comparativa de funciones lógicas sin simplificar y simplificada]
            .fondo-color-sistema-n.p-4
              figure
                img.mx-auto(src="@/assets/curso/temas/14.svg",style="max-width: 864px;",alt="La figura presenta una tabla tiene cinco columnas principales: Variables o entradas, Función lógica sin simplificar (A+B)⋅(B+C), Variables o entradas repetidas, Salida parcial A⋅C, y Función lógica simplificada B+(A⋅C). Contiene valores binarios (0 y 1) para todas las combinaciones posibles de las variables A, B y C, mostrando cómo evolucionan los resultados desde la función sin simplificar hasta su versión simplificada, estableciendo una equivalencia entre ambas funciones.")
        
        p.mb-4(data-aos="fade-up") Se evidencia que las salidas para cada combinación son las mismas.

        .row.mb-4(data-aos="fade-up")
          .col-lg-8
            .fondo-color-sistema-j.p-4.borde-14.h-100.align-content-center
              p.fw-bold.mb-4 Ejercicio práctico 3
              p A partir del esquema lógico, se debe elaborar la tabla de verdad y determinar la función lógica. Luego, simplificar la función lógica obtenida y comprobar que las salidas coinciden con las de la función original sin simplificar.
          .col-lg-4.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/15.png",style="max-width: 400px;")
        
        .row.justify-content-center(data-aos="fade-up")
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 5.] #[i Circuito lógico con compuertas combinadas]
            .fondo-color-sistema-n.p-4
              figure
                img.mx-auto(src="@/assets/curso/temas/16.svg",style="max-width: 731px;",alt="La figura representa un circuito lógico con tres entradas etiquetadas como A, B y C. Las entradas pasan por diferentes compuertas. La entrada A y la entrada B se conectan a una compuerta OR. La entrada C pasa por un inversor antes de ser procesada junto con otras señales en una compuerta AND. Las salidas de las compuertas AND y OR se combinan en una compuerta OR final para generar la salida.")
    
    p.fw-bold.mb-1 Solución:
    p.mb-4 Para determinar la función lógica del esquema, es necesario identificar el tipo de compuertas lógicas y las operaciones que realiza cada una, de la siguiente manera:

    .row.justify-content-center.mb-4(data-aos="fade-up")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 6.] #[i Diagrama de circuito lógico y tabla de operaciones]
        .fondo-color-sistema-n.p-4
          figure
            img.mx-auto(src="@/assets/curso/temas/17.svg",style="max-width: 909px;",alt="La imagen muestra un circuito lógico con varias compuertas y una tabla explicativa. El circuito comienza con una compuerta OR que toma como entradas A, B y C, y su salida es A + B + C. Luego, la entrada C pasa por una compuerta NOT para ser negada (C). La salida de la compuerta NOT (C) y la entrada B se combinan en una compuerta AND, generando la salida B⋅C. Posteriormente, la salida de la primera compuerta OR y C pasan por otra compuerta AND, cuyo resultado es (A+B+C)⋅C. Finalmente, ambas salidas AND se combinan en una compuerta OR, dando como resultado la función lógica final [(A+B+C)⋅C]+(B⋅C). La tabla debajo describe las compuertas utilizadas: OR (+), NOT (Inversor o negación), y AND (⋅).")
    
    p.mb-4(data-aos="fade-up") Con la función lógica, se procede a construir la tabla de verdad. La tabla de verdad y los niveles lógicos que corresponden a la salida de dicha función son los siguientes:

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 4.] #[i Tabla de verdad para función lógica compuesta]
        .tabla-b.color-acento-contenido.tabla-p-2.pad-p-1
          table
            thead
              tr
                th.text-center(colspan="3") Variables o entradas
                th.text-center(colspan="4") Salidas parciales
                th.text-center Función lógica
            tbody
              tr
                td.fw-bold A
                td.fw-bold B
                td.fw-bold C
                td.fw-bold A+B+C
                td.fw-bold C’
                td.fw-bold.text-nowrap (A+B+C) * C’
                td.fw-bold B*C’
                td.fw-bold.text-nowrap [(A+B+C) * C’]+ B*C’
                tr
                  td.text-center 0
                  td.text-center 0
                  td.text-center 0
                  td.text-center 0
                  td.text-center 1
                  td.text-center 0
                  td.text-center 0
                  td.text-center 0
                tr
                  td.text-center 0
                  td.text-center 0
                  td.text-center 1
                  td.text-center 1
                  td.text-center 0
                  td.text-center 0
                  td.text-center 0
                  td.text-center 0
                tr
                  td.text-center 0
                  td.text-center 1
                  td.text-center 0
                  td.text-center 1
                  td.text-center 1
                  td.text-center 1
                  td.text-center 1
                  td.text-center 1
                tr
                  td.text-center 0
                  td.text-center 1
                  td.text-center 1
                  td.text-center 1
                  td.text-center 0
                  td.text-center 0
                  td.text-center 0
                  td.text-center 0
                tr
                  td.text-center 1
                  td.text-center 0
                  td.text-center 0
                  td.text-center 1
                  td.text-center 1
                  td.text-center 1
                  td.text-center 0
                  td.text-center 1
                tr
                  td.text-center 1
                  td.text-center 0
                  td.text-center 1
                  td.text-center 1
                  td.text-center 0
                  td.text-center 0
                  td.text-center 0
                  td.text-center 0
                tr
                  td.text-center 1
                  td.text-center 1
                  td.text-center 0
                  td.text-center 1
                  td.text-center 1
                  td.text-center 1
                  td.text-center 1
                  td.text-center 1
                tr
                  td.text-center 1
                  td.text-center 1
                  td.text-center 1
                  td.text-center 1
                  td.text-center 0
                  td.text-center 0
                  td.text-center 0
                  td.text-center 0
    
    p.mb-4(data-aos="fade-up") Para comprobar la tabla se debe realizar la simulación: 
    
    .row.justify-content-center.mb-4(data-aos="fade-up")
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 7.] #[i Circuito lógico con compuertas combinadas]
        
        .fondo-color-sistema-n.p-4.py-lg-5
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/18.svg",style="max-width: 773px;",alt='La figura presenta un circuito lógico con tres entradas etiquetadas como A, B y C. Las entradas A y B pasan por una compuerta OR, cuya salida se dirige a una compuerta AND. La entrada C pasa por una compuerta NOT antes de combinarse en una compuerta AND con otra línea de entrada. Las salidas de ambas compuertas AND se combinan en una compuerta OR final, que genera la salida del circuito marcada como "Salida".')
    
    p.fw-bold(data-aos="fade-up") Simplificación de la función anterior:

    .row.align-items-center(data-aos="fade-up")
      .col-lg-7
        .fondo-color-sistema-m.p-4.borde-8.mb-3.d-inline-flex
          p.mb-0.fw-bold [(A+B+C)⋅C′]+(B⋅C′)
        .fondo-color-sistema-q.p-3.px-lg-4.borde-8.mb-1
          .row
            .col-lg-8
              p.mb-1 1. Multiplicación de C′C'C′ por la operación (A+B+C)
              p.mb-0 (A⋅C′)+(B⋅C′)+(C⋅C′)+(B⋅C′)
            .col-lg-4
              p.mb-0.fw-bold (A⋅C′)+(B⋅C′)+(C⋅C′)+(B⋅C′)
        .fondo-color-sistema-r.p-3.px-lg-4.borde-8.mb-1
          .row
            .col-lg-8
              p.mb-1 2. Aplicación de la propiedad inversa (C*C′=0)
              p.mb-0 (A*C′)+(B⋅C′)+(B*C′)
            .col-lg-4
              p.mb-0.fw-bold (A*C′)+(B⋅C′)+(B*C′)
        .fondo-color-sistema-q.p-3.px-lg-4.borde-8.mb-1
          .row
            .col-lg-8
              p.mb-1 3. Simplificación de igualdad (B⋅C′+B⋅C′ =B⋅C′)
              p.mb-0 (A⋅C′)+(B⋅C′)
            .col-lg-4
              p.mb-0.fw-bold (A⋅C′)+(B⋅C′)
        .fondo-color-sistema-r.p-3.px-lg-4.borde-8.mb-1
          .row
            .col-lg-8
              p.mb-1 4. Aplicación de la propiedad distributiva (C′⋅(A+B))
              p.mb-0 C′⋅(A+B)
            .col-lg-4
              p.mb-0.fw-bold C′⋅(A+B)
        .fondo-color-sistema-q.p-3.px-lg-4.borde-8.mb-1
          .row
            .col-lg-8
              p.mb-1 5. Resultado simplificado
              p.mb-0 [(A+B+C)⋅C′]+(B⋅C′)=C′⋅(A+B)
            .col-lg-4
              p.mb-0.fw-bold [(A+B+C)⋅C′]+(B⋅C′)=C′⋅(A+B)
        .fondo-color-sistema-r.p-3.px-lg-4.borde-8.mb-4
          .row
            .col-lg-8
              p.mb-1 6. Conclusión
              p.mb-0 Función inicial = Función simplificada.
            .col-lg-4
              p.mb-0.fw-bold Función inicial = Función 
              simplificada.
        p.fw-bold.mb-4 Propiedades utilizadas:

        .row.align-items-center
          .col-lg-3.mb-4
            .fondo-color-sistema-i.text-center.d-flex.align-items-center.justify-content-center(style="min-height: 59px;")
              p.mb-0.fw-bold Propiedad inversa
            .fondo-color-sistema-n.p-3.text-center
              p.mb-0 C⋅C′=0.
          .col-lg-5.mb-4
            .fondo-color-sistema-i.text-center.d-flex.align-items-center.justify-content-center(style="min-height: 59px;")
              p.mb-0.fw-bold Propiedad de simplificación de igualdad
            .fondo-color-sistema-n.p-3.text-center
              p.mb-0 B⋅C′+B⋅C′=B⋅C′B
          .col-lg-4.mb-4
            .fondo-color-sistema-i.text-center.d-flex.align-items-center.justify-content-center(style="min-height: 59px;")
              p.mb-0.fw-bold Propiedad distributiva
            .fondo-color-sistema-n.p-3.text-center
              p.mb-0 C′⋅(A+B)=(A⋅C′)+(B⋅C′)

      .col-lg-5
        figure
          img.mx-auto(src="@/assets/curso/temas/19.png",style="max-width: 505px;")
    
    p.mb-4(data-aos="fade-up") Ahora, se comprobará que ambas funciones generan los mismos resultados mediante sus tablas de verdad.

    .titulo-sexto.color-acento-contenido(data-aos="fade-up")
      p.mb-0 #[b Tabla 5.] #[i Comparación de función lógica sin simplificar y simplificada]
    
    .row(data-aos="fade-up")
      .col-lg-6.mb-4
        .tabla-a.color-acento-contenido.tabla-p-1
          table
            thead(style="height:73px;")
              tr
                th(colspan="3" style="width: 160px;") Variables o entradas
                th(style="width: 300px;") Función lógica sin simplificar
            tbody
              tr
                td.text-center.fw-bold A
                td.text-center.fw-bold B
                td.text-center.fw-bold C
                td.text-center.fw-bold [(A+B+C)] + B+ C′
                tr
                  td.text-center 0
                  td.text-center 0
                  td.text-center 0
                  td.text-center 0
                tr
                  td.text-center 0
                  td.text-center 0
                  td.text-center 1
                  td.text-center 0
                tr
                  td.text-center 0
                  td.text-center 1
                  td.text-center 0
                  td.text-center 1
                tr
                  td.text-center 0
                  td.text-center 1
                  td.text-center 1
                  td.text-center 0
                tr
                  td.text-center 1
                  td.text-center 0
                  td.text-center 0
                  td.text-center 1
                tr
                  td.text-center 1
                  td.text-center 0
                  td.text-center 1
                  td.text-center 0
                tr
                  td.text-center 1
                  td.text-center 1
                  td.text-center 0
                  td.text-center 0
                tr
                  td.text-center 1
                  td.text-center 1
                  td.text-center 1
                  td.text-center 0
      .col-lg-6.mb-4
        .tabla-a.color-acento-contenido.tabla-p-1.min-w-1
          table
            thead(style="height:73px;")
              tr
                th(colspan="3") Variables o entradas
                th Salida parcial
                th
                th(style="width: 230px;") Función lógica simplificada
            tbody
              tr
                td.text-center.fw-bold A
                td.text-center.fw-bold B
                td.text-center.fw-bold C
                td.text-center.fw-bold A+B
                td.text-center.fw-bold C′
                td.text-center.fw-bold C′*(A+B)
                tr
                  td.text-center 0
                  td.text-center 0
                  td.text-center 0
                  td.text-center 0
                  td.text-center 1
                  td.text-center 0
                tr
                  td.text-center 0
                  td.text-center 0
                  td.text-center 0
                  td.text-center 0
                  td.text-center 0
                  td.text-center 0
                tr
                  td.text-center 0
                  td.text-center 1
                  td.text-center 0
                  td.text-center 1
                  td.text-center 1
                  td.text-center 1
                tr
                  td.text-center 0
                  td.text-center 1
                  td.text-center 1
                  td.text-center 1
                  td.text-center 0
                  td.text-center 0
                tr
                  td.text-center 1
                  td.text-center 0
                  td.text-center 0
                  td.text-center 1
                  td.text-center 1
                  td.text-center 1
                tr
                  td.text-center 1
                  td.text-center 0
                  td.text-center 1
                  td.text-center 1
                  td.text-center 0
                  td.text-center 0
                tr
                  td.text-center 1
                  td.text-center 1
                  td.text-center 0
                  td.text-center 1
                  td.text-center 1
                  td.text-center 1
                tr
                  td.text-center 1
                  td.text-center 1
                  td.text-center 1
                  td.text-center 1
                  td.text-center 0
                  td.text-center 0
    
    figure.mb-5(data-aos="fade-up")
      img.mx-auto(src="@/assets/curso/temas/20.svg",style="max-width: 33px;")
    
    p.mb-4(data-aos="fade-up") Se evidencia que las salidas para cada combinación son las mismas

    .row.mb-4(data-aos="fade-up")
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 8.] #[i Esquema lógico inicial]
        .fondo-color-sistema-n.p-4
          figure
            img.mx-auto(src="@/assets/curso/temas/21.svg",style="max-width: 729px;",alt="El diagrama muestra un circuito lógico con varias compuertas. Tres entradas (A, B, C) se procesan a través de una compuerta OR para generar la salida de la suma de A, B y C. La entrada C pasa por una compuerta NOT, y su salida negada se combina con la entrada B en una compuerta AND. Las salidas de estas operaciones se procesan en compuertas adicionales para generar la función lógica final que combina las operaciones de suma y producto de las entradas y sus negaciones. ")
    .row.mb-4(data-aos="fade-up")
      .col-lg-5
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 9.] #[i Esquema lógico simplificado]
        .fondo-color-sistema-n.p-4
          figure
            img.mx-auto(src="@/assets/curso/temas/22.svg",style="max-width: 457px;",alt="El diagrama muestra un circuito lógico simplificado con tres entradas (A, B, C). Las entradas A y B pasan por una compuerta OR generando la salida de su suma. La entrada C pasa por una compuerta NOT, y la salida negada se combina con la salida de la compuerta OR en una compuerta AND, generando la salida final que combina la negación de C con la suma de A y B.")
    
    .row(data-aos="fade-up")
      .col-lg-6.mb-4.mb-lg-0
        .fondo-color-sistema-m.p-4.pt-lg-5.h-100.align-content-center
          p.fw-bold.mb-4 Caso
          p.mb-0 El gerente de una empresa de transporte desea tener mayor control sobre el registro del equipaje de los pasajeros, por lo que solicita al ingeniero un circuito digital capaz de supervisar el paso de las maletas durante el recorrido de revisión.
      .col-lg-6
        .fondo-color-sistema-r.p-4.pt-lg-5.h-100.align-content-center
          p.fw-bold.mb-4 Objetivo
          p.mb-0 Diseñar un circuito digital capaz de detectar el equipaje desde que ingresa a la zona de carga, hasta que pasa la revisión y el registro, permitiendo finalmente su acceso a la zona de carga.

    .fondo-personalizado-1.bottom-1.f2.mb-5
      .fondo-personalizado-1__contenido.pt-5
        p.fw-bold.mb-4(data-aos="fade-up") Las variables de entrada son:

        .row.align-items-center.mb-5(data-aos="fade-up")
          .col-lg-9
            AcordionA.mb-0(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
              .div(titulo="Sensor Puerta 1")
                .ps-md-5.ms-md-3
                  p Detecta el equipaje para permitir la apertura de la puerta 1 y el avance hacia el primer control. La salida es '0' cuando detecta equipaje y '1' cuando no.
              .div(titulo="Pulsador Puerta 2")
                .ps-md-5.ms-md-3
                  p Permite la apertura de la puerta 2 si se oprime el botón y la puerta 1 previamente estuvo en '0'. La salida es '1' si el botón es oprimido y '0' si no.
              .div(titulo="Sensor Puerta 3")
                .ps-md-5.ms-md-3
                  p Detecta el código de barras del tiquete para abrir la puerta 3 y permitir el paso a la zona de carga. La salida es '1' cuando detecta el código y '0' cuando no.
          .col-lg-3.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/23.png",style="max-width: 295px;")
    
        p.fw-bold.mb-4(data-aos="fade-up") Solución
        p.mb-5(data-aos="fade-up") Identificar entradas y salidas:

        .row.justify-content-center(data-aos="fade-up")
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 6.] Tabla de condiciones de operación para puertas con diferentes entradas y salidas
            .tabla-a.color-acento-contenido.tabla-p-1.min-w-1
              table
                thead
                  tr
                    th(colspan="2") Puerta 1 (una entrada)
                    th(colspan="2") Puerta 2 (dos entradas)
                    th(colspan="2") Puerta 3 (2 entradas)
                tbody
                  tr
                    td Entrada
                    td Salida
                    td Entrada
                    td Salida
                    td Entrada
                    td Salida
                  tr
                    td Sensor de objetos en "0".
                    td Salida puerta 1 en "1".
                    td Salida puerta 1 en "1".
                    td.align-content-start(rowspan="2") Se abre la puerta 2 en "1".
                    td Salida puerta 2 en "1".
                    td Se abre la puerta 3 en "1".
                  tr
                    td
                    td
                    td Botón en "1".
                    td Sensor que detecta tiquete en "1".
                    td Se permite cargar el equipaje.

    p.fw-bold.mb-4(data-aos="fade-up") Identificación de compuertas lógicas

    .titulo-sexto.color-acento-contenido(data-aos="fade-up")
      p.mb-0 #[b Figura 10.] #[i Tabla de operación y compuertas lógicas para tres puertas]
    
    figure.mb-4(data-aos="fade-up")
      img.mx-auto.d-none.d-lg-block(src="@/assets/curso/temas/24.svg",style="max-width: 1240px;",alt="La figura presenta una tabla que describe la operación y las compuertas asociadas para tres puertas lógicas. En la primera columna, correspondiente a la puerta 1, se explica que cuando ingresa un valor 0, la salida será 1, es decir, se aplica una negación mediante una compuerta inversora. La segunda columna describe la puerta 2, que opera bajo la condición de que si las salidas de la puerta 1 y un botón son iguales a 1, la salida será 1, utilizando una compuerta AND. La tercera columna, correspondiente a la puerta 3, detalla que si las salidas de la puerta 2 y un sensor de tiquete son iguales a 1, la salida será 1, también utilizando una compuerta AND.")
      img.mx-auto.d-lg-none(src="@/assets/curso/temas/25.svg",style="max-width: 500px;",alt="La figura presenta una tabla que describe la operación y las compuertas asociadas para tres puertas lógicas. En la primera columna, correspondiente a la puerta 1, se explica que cuando ingresa un valor 0, la salida será 1, es decir, se aplica una negación mediante una compuerta inversora. La segunda columna describe la puerta 2, que opera bajo la condición de que si las salidas de la puerta 1 y un botón son iguales a 1, la salida será 1, utilizando una compuerta AND. La tercera columna, correspondiente a la puerta 3, detalla que si las salidas de la puerta 2 y un sensor de tiquete son iguales a 1, la salida será 1, también utilizando una compuerta AND.")
    
    p.fw-bold.mb-4(data-aos="fade-up") El esquema lógico, según las entradas y salidas de las compuertas, es el siguiente:

    .row.justify-content-center.mb-4(data-aos="fade-up")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 11.] #[i Diagrama lógico de operación para control de puertas]
        .fondo-color-sistema-n.p-4
          figure
            img.mx-auto(src="@/assets/curso/temas/26.svg",style="max-width: 865px;",alt="El diagrama muestra un sistema lógico para el control de puertas. Inicia con un sensor detector de objetos (A) conectado a una compuerta NOT que genera la salida para la puerta 1. Luego, un botón de revisión (B) se combina con la salida de la puerta 1 mediante una compuerta AND para generar la salida de la puerta 2. Finalmente, un sensor de tiquete (C) se combina con la salida de la puerta 2 en otra compuerta AND para generar la salida de la puerta 3 o salida final del sistema.")
    
    p.fw-bold.mb-4(data-aos="fade-up") La función lógica es:

    .borde-8.fondo-color-sistema-m.p-4.d-inline-flex.mb-4(data-aos="fade-up")
      p.mb-0.fw-bold (A * B * C) = ( A’ * B * C)
    
    p.mb-4(data-aos="fade-up") Verifique, mediante la tabla de verdad, que el circuito cumple con el proceso requerido por el gerente. Esto implica evaluar todas las combinaciones posibles de las entradas y comprobar que las salidas corresponden a las condiciones establecidas para cada puerta del sistema.

    .row.justify-content-center.mb-4(data-aos="fade-up")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 7.] #[i Tabla de verdad y condiciones de apertura de puertas]
        .tabla-a.color-acento-contenido.tabla-p-1.min-w-1
          table(style="width: auto;")
            thead
              tr
                th(colspan="3") Variable o entradas
                th(colspan="2") Puerta 1
                th(colspan="2") Puerta 1
                th Función lógica o salida puerta 3
            tbody
              tr
                td.fw-bold A
                td.fw-bold B
                td.fw-bold C
                td.fw-bold A'
                td.fw-bold Si se cumple
                td.fw-bold A' · B
                td.fw-bold Si se cumple la condición
                td.fw-bold Función lógica o salida puerta 3
              tr
                td 0
                td 0
                td 0
                td 1
                td Se abre
                td 0
                td No abre
                td 0
              tr
                td 0
                td 0
                td 1
                td 1
                td Se abre
                td 0
                td No abre
                td 0
              tr
                td 0
                td 1
                td 0
                td 1
                td Se abre
                td 1
                td Se abre
                td 0
              tr
                td 0
                td 1
                td 1
                td 1
                td Se abre
                td 1
                td Se abre
                td 1 Se abre luego si se cumple
              tr
                td 1
                td 0
                td 0
                td 0
                td No abre
                td 0
                td No abre
                td 0
              tr
                td 1
                td 0
                td 1
                td 0
                td No abre
                td 0
                td No abre
                td 0
              tr
                td 1
                td 1
                td 0
                td 0
                td No abre
                td 0
                td No abre
                td 0
              tr
                td 1
                td 1
                td 1
                td 0
                td No abre
                td 0
                td No abre
                td 0
    
    p.mb-4(data-aos="fade-up") Para finalizar se identificará que tipo de CI son necesarios para realizar el circuito:

    .row.justify-content-center.mb-4(data-aos="fade-up")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 12.] #[i Diagrama lógico de control de puertas]
        .fondo-color-sistema-n.p-4
          figure
            img.mx-auto(src="@/assets/curso/temas/27.svg",style="max-width: 865px;",alt="La figura presenta un diagrama lógico compuesto por tres puertas. Un sensor detector de objetos (A) pasa por una compuerta NOT que genera la salida de la puerta 1. Un botón de revisión (B) se combina con la salida de la puerta 1 en una compuerta AND para generar la salida de la puerta 2. Finalmente, un sensor de tiquete (C) y la salida de la puerta 2 se combinan en otra compuerta AND para generar la salida de la puerta 3 o salida final.")
    
    p.mb-4(data-aos="fade-up") En el esquema se identifican tres compuertas necesarias para cumplir las funciones específicas del proceso, de las cuales dos son del tipo AND. Por lo tanto, los circuitos integrados adecuados para el diseño son:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 13.] #[i Implementación del control de puertas con circuitos integrados]
        .fondo-color-sistema-n.p-4
          figure
            img.mx-auto(src="@/assets/curso/temas/28.svg",style="max-width: 749px;",alt="La figura presenta dos circuitos integrados utilizados para implementar el control lógico de las puertas. El primer circuito es un 7404 con seis compuertas NOT, utilizado para la inversión de la entrada del sensor detector de objetos (A) en la puerta 1. El segundo circuito es un 7408 con cuatro compuertas AND, utilizado para las combinaciones lógicas en las puertas 2 y 3, integrando las señales de revisión (B) y del sensor de tiquete (C).")
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
