<template>
  <div id="app">
    <Container/>
    
  </div>
</template>

<script>

 import Container from './components/Container.vue'

export default {

  name: 'App',
  components: {
   Container
  }
}
</script>

<style>
#app {

}
body {
    background: #232323;
    margin: 0;
    font-family: "Montserrat", "Avenir";
  }
</style>
