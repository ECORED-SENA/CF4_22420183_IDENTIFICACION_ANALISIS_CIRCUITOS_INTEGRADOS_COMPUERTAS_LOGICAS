<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .fondo-personalizado-1.f1
      .fondo-personalizado-1__contenido.py-5
        p.mb-4(data-aos="fade-up") La lógica combinatoria es un componente fundamental en la electrónica digital, permitiendo integrar diferentes compuertas lógicas para resolver problemas específicos y realizar funciones complejas. Este enfoque se basa en operaciones como #[em OR, AND y NOT], que constituyen la base para procesar y manipular señales binarias en circuitos digitales.

        .bloque-texto-g.fondo-color-sistema-i.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Una de las herramientas principales en la lógica combinatoria son los esquemas lógicos y las tablas de verdad, los cuales permiten visualizar y analizar el comportamiento de las funciones lógicas en función de todas las posibles combinaciones de entrada. Estas representaciones facilitan el diseño de circuitos eficientes y precisos en aplicaciones prácticas.
        
        .row.mb-5.pb-3
          .col(data-aos="fade-right")
            p.mb-0 Además, el proceso de simplificación de funciones lógicas, mediante el uso de propiedades de Boole, teoremas de De Morgan y mapas de Karnaugh, optimiza los diseños reduciendo la cantidad de compuertas necesarias. Esto no solo ahorra espacio y costos, sino que también mejora el rendimiento general de los circuitos, destacando la importancia de este concepto en el ámbito tecnológico.
          .col-md-auto.order-first.order-lg-last(data-aos="fade-left")
            figure.mb-4.mb-md-0
              img.mx-auto(src="@/assets/curso/temas/3.svg",style="max-width: 190px;")
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
