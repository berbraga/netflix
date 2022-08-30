<template>
  <div class="home">
    <img alt="Vue logo" src="https://www.freepnglogos.com/uploads/netflix-logo-symbol-png-1.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <MoviesSecttion/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MoviesSecttion from '@/components/MoviesSecttion.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    MoviesSecttion
  }
}
</script>
