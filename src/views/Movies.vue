
<template>
    <div>
      <h1>filmes</h1>
        <HelloWorld msg="acao"/>
        <MoviesSecttion :movies="movies"/>
        
        <HelloWorld msg="comedia"/>
        <MoviesSecttion :movies="movies"/>

        <HelloWorld msg="suspese"/>
        <MoviesSecttion :movies="movies"/>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MoviesSecttion from '../components/MoviesSecttion.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    MoviesSecttion
  },
  data () {
    return{
      movies:[
        {
          id:1,
          name:'minions',
          banner:"https://images.educamaisbrasil.com.br/content/noticias/minions-2-a-origem-de-gru-estreia-30-de-junho_g.jpg"
        },
        {
          id:2,
          name:'scary movie',
          banner:"https://www.planocritico.com/wp-content/uploads/2021/02/todo-mundo-em-panico-3-plano-critico.jpg"
        },
        {
          id:3,
          name:'mip 1',
          banner:"https://epipoca.com.br/wp-content/uploads/2021/10/mib-19102021-1200x900.jpg"
        },
        {
          id:4,
          name:'el camino',
          banner:"https://cdn.fstatic.com/media/movies/covers/2019/09/jesse.jpg"
        },
        {
          id:5,
          name:'scary movie',
          banner:"https://www.planocritico.com/wp-content/uploads/2021/02/todo-mundo-em-panico-3-plano-critico.jpg"
        },
        {
          id:6,
          name:'el camino',
          banner:"https://cdn.fstatic.com/media/movies/covers/2019/09/jesse.jpg"
        },
        {
          id:7,
          name:'mip 1',
          banner:"https://epipoca.com.br/wp-content/uploads/2021/10/mib-19102021-1200x900.jpg"
        },
        {
          id:8,
          name:'minions',
          banner:"https://images.educamaisbrasil.com.br/content/noticias/minions-2-a-origem-de-gru-estreia-30-de-junho_g.jpg"
        }
        
      ]
    }
  }
}
</script>
