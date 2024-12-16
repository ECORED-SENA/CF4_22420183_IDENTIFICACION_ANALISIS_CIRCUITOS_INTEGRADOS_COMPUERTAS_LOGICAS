<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Lógica combinatoria',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar  los conceptos fundamentales de la lógica combinatoria, incluyendo operaciones lógicas, herramientas de representación, y métodos de simplificación, para afianzar el conocimiento teórico y práctico en el diseño de circuitos digitales.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué representa la operación OR (+)?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Una multiplicación lógica.', esCorrecta: false },
            { id: 'b', texto: 'Un inversor lógico.', esCorrecta: false },
            { id: 'c', texto: 'Un diagrama lógico.', esCorrecta: false },
            { id: 'd', texto: 'Una suma lógica.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué herramienta permite visualizar todas las combinaciones posibles de entradas y salidas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Un mapa de Karnaugh.', esCorrecta: false },
            { id: 'b', texto: 'Una tabla de verdad.', esCorrecta: true },
            { id: 'c', texto: 'Un esquema lógico.', esCorrecta: false },
            { id: 'd', texto: 'Un simulador digital.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es una ventaja principal de la simplificación de funciones lógicas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducción de costos y espacio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incremento en el número de compuertas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mayor complejidad del diseño.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumento en el uso de memoria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué representan las propiedades de Boole en la lógica combinatoria?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Normas para identificar errores en circuitos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diagramas para construir esquemas lógicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reglas para simplificar expresiones lógicas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Herramientas exclusivas para la operación AND.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué dispositivo realiza operaciones como OR, AND y NOT?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Un simulador virtual.', esCorrecta: false },
            { id: 'b', texto: 'Un procesador de datos.', esCorrecta: false },
            { id: 'c', texto: 'Una compuerta lógica.', esCorrecta: true },
            { id: 'd', texto: 'Un generador de señales.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué describe mejor un esquema lógico?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un diagrama con compuertas lógicas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Una representación matemática.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un conjunto de fórmulas algebraicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una tabla con valores binarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué resultado se obtiene aplicando los teoremas de De Morgan?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El diseño de una nueva compuerta lógica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La simplificación de funciones lógicas con negaciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La creación de un simulador digital.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un esquema con más operaciones lógicas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué se obtiene al usar mapas de Karnaugh?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar las combinaciones posibles de entradas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un diseño lógico más complejo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La simplificación gráfica de funciones lógicas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La representación de resultados en tablas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Las compuertas lógicas son esenciales para diseñar circuitos digitales.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'La tabla de verdad solo se utiliza para operaciones OR.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Cuál es el objetivo principal de la lógica combinatoria?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Analizar datos numéricos.', esCorrecta: false },
            {
              id: 'b',
              texto:
                'Realizar funciones específicas mediante compuertas lógicas.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Crear procesos aleatorios.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Representar señales de audio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: "¿Qué significa la operación NOT (') en lógica combinatoria?",
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Representa una suma lógica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Inversiona el valor lógico de una entrada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Realiza una comparación de entradas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Multiplica dos valores binarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué permite reducir la simplificación de funciones lógicas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El número de compuertas necesarias.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La cantidad de combinaciones de entrada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El tiempo de procesamiento de los circuitos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El tamaño de las tablas de verdad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué describe mejor un mapa de Karnaugh?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un conjunto de operaciones AND.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una representación textual de funciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una técnica gráfica para simplificar funciones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un simulador de circuitos digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Cuál de los siguientes es un método de simplificación en lógica combinatoria?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Esquemas lógicos.', esCorrecta: false },
            { id: 'b', texto: 'Teoremas de De Morgan.', esCorrecta: true },
            { id: 'c', texto: 'Compuertas virtuales.', esCorrecta: false },
            { id: 'd', texto: 'Operaciones aritméticas.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
