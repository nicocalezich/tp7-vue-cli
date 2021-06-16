<template>

  <section class="src-components-squares">

  <div v-for="(number,index) in colorCount" :key="index" class="table-darprimaryk" id="container">
		<div class="square"></div>
	</div>

  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-squares',
    props: ['colorCount','colors','pickedColor'],
    mounted () {
    
    },
    data () {
      return {
        
      }
    },
    methods: {
      
      init(){
        console.log('test')
        let squares = document.querySelectorAll(".square")
        for (let i = 0; i < this.colorCount; i++) {  
          squares[i].style.backgroundColor = this.colors[i]
        }
      },
      
        
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
