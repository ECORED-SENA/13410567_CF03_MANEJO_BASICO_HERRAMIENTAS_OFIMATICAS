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
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 1,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 1,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 1,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 1,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 1,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 1,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 1,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 1,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 1,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 1,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 1,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 1,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 1,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 1,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 1,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 1,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 1,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 1,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 1,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
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
