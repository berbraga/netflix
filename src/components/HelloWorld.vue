<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  
  </div>
</template>
<style>
  
  h1{
    color: rgb(233, 222, 222);
  }
</style>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
