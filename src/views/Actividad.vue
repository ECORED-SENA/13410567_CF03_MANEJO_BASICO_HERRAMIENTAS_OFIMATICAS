<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Reconocimiento del manejo de la interfaz de Microsoft PowerPoint',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Reconocer los elementos principales de la interfaz de Microsoft PowerPoint.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es la finalidad principal de una presentación digital?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizar y comunicar información visual.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Guardar datos en formato numérico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Editar documentos extensos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ejecutar funciones automáticas. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué elemento permite visualizar y reorganizar las diapositivas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Área de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Panel de diapositivas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Barra de estado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuadro de texto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿En qué pestaña se insertan imágenes o gráficos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Vista.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Insertar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Revisar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué función cumplen los temas en PowerPoint?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Insertar contenido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aplicar estilos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ejecutar diapositivas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Organizar archivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál es la diferencia entre animaciones y transiciones?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ambas hacen lo mismo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Animaciones y transiciones no se combinan.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Animaciones afectan objetos y transiciones el cambio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Transiciones afectan objetos y animaciones el cambio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál es una práctica adecuada al diseñar diapositivas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Usar muchas fuentes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incluir textos intensos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar imágenes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mantener claridad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué opción permite iniciar la presentación?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseño.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Presentación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Revisar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Insertar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál es la función del área de diseño?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Editar contenido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mostrar diapositivas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aplicar animaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Insertar gráficos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué sucede al aplicar una transición?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambio el texto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se agrega contenido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se modifica el fondo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Efecto de cambio.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Por qué es importante usar elementos visuales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducen tamaño.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Facilitan compresión.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminan texto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituyen explicación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué permite la pestaña vista?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Insertar elementos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cambiar visualización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aplicar animaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Crea gráficos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Cuál es la función de las plantillas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Insertar texto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Crear gráficos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aplicar estructura.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Revisar ortografía.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué permite el uso de listas con viñetas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Insertar imágenes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ordenar información.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Crear animaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aplicar temas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué herramienta permite revisar errores de texto?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Insertar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diseño.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Revisar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Vista.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Cuál es la función de un gráfico en PowerPoint?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Decorar diapositivas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mostrar datos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cambiar diseño.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Insertar texto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué permite la pestaña diseño?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Revisar contenido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ejecutar presentación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Insertar tablas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aplicar temas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué se logra al aplicar animaciones?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambiar fondo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mover elementos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Insertar gráficos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Guardar archivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué permite la pestaña Insertar?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Agregar contenido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ejecutar presentación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cambiar vista.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Revisar errores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué ocurre al usar transiciones?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se cambia texto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se organiza contenido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se aplican efectos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se insertan gráficos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Por qué es importante estructurar una presentación?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejora organización.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aumenta tamaño.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reduce contenido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambia formato.',
              esCorrecta: false,
            },
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
