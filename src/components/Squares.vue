<template>

  <section class="src-components-squares">

    <div v-for="(number,index) in this.$store.state.colorCount" :key="index" class="table-darprimaryk" id="container">

      <div @click="check(index)" :style="{'backgroundColor': $store.state.colors[index]}" :id="index" class="square"></div>  
      
    </div>

  </section>

</template>

<script lang="js">
  export default  {
    name: 'src-components-squares',
    mounted () {
     
    },
    data () {
      return {
        successMessage: 'You Picked Right!',
        failMessage: 'Try Again!',
        resetMessage: 'Play Again!'
      }
    },
    methods: {
      
    check(index){
      let square = document.getElementById(index)
      if (square.style.backgroundColor ===  this.$store.state.pickedColor) {           
          this.$store.state.spanMessage = this.successMessage
          this.$store.state.resetMessage = this.resetMessage
          this.$store.state.headerBackground = this.$store.state.pickedColor
          this.setAllColorsTo( this.$store.state.pickedColor)
        } 
      else{
          square.style.backgroundColor = "#232323";
          this.$store.state.spanMessage = this.failMessage
        }
    },   
     setAllColorsTo(color) {
        for (var i = 0; i < this.$store.state.colorCount; i++) {
          let square = document.getElementById(i)   
          square.style.backgroundColor = color
        }
    }

  },
  
    computed: {
    
      }
    
  
}
</script>

<style scoped lang="css">
.square {
	width: 30%;
	background: blue;
	padding-bottom: 30%;
	float: left;
	margin: 1.66%;
	border-radius: 10%;
	transition: background 0.8s;
	-webkit-transition: background 0.8s;
	-moz-transition: background 0.8s;
}
#container {
	margin: 20px auto;
	max-width: 600px;
}
</style>