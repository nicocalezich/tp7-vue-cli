<template>

  <section class="src-components-container">
   
   <div id="header">
		<h1>The Great <br>
			<span id="colorDisplay">{{createRandomStringColor()}}</span>
			<br>
			Guessing Game</h1>
	</div>

	<div id="navigator">
		<button id="reset">New colors</button>
		<span id="message"> </span>
		<button @click="easyClick()" id="easy">easy</button>
		<button @click="hardClick()" id="hard" class="selected">hard</button>
	</div>

  <Squares :squares="colorCount"/>

  </section>

</template>

<script lang="js">

  import Squares from './Squares.vue'

  export default  {
    name: 'src-components-container',
    props: [],
    components: {
       Squares 
    },
    mounted () {
       
    },
    data () {
      return {
        isHard: true,
        colorCount: 6,
        colors: [],
      }
    },
    methods: {

      createRandomStringColor(){
        var newColor = "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")" 
        return newColor;
      },

      randomInt(){
        return Math.floor(Math.random() * 256)
      },

      PickColor(){
        var quantity;
        if (this.isHard) {
          quantity = 6;
        } else {
          quantity = 3;
        }
        return Math.floor(Math.random() * quantity )
      },

      easyClick(){
      if(this.isHard){
        this.isHard = false
        document.querySelector("#easy").classList.add("selected")
        document.querySelector("#hard").classList.remove("selected")
        this.colorCount = 3
        }
      },

      hardClick(){
        if(!this.isHard){
          this.isHard = true
          document.querySelector("#hard").classList.add("selected")
          document.querySelector("#easy").classList.remove("selected")
          this.colorCount = 6
          }
      },

      /*
      restart(){
        this.colors = this.createNewColors(this.colorCount);
        this.pickedColor = this.colors[this.PickColor()];
        colorDisplay.textContent = pickedColor;
        this.textContent = "Pick New Colors!";
        header.style.backgroundColor = "steelblue";
        messageDisplay.textContent = "";
        restartButton.textContent = "New Colors!";
        for (var i = 0; i <squares.length; i++) {
          squares[i].style.backgroundColor = colors[i];
        }
      }
      */      
    },
  computed: {

  }
  
}
</script>

<style scoped lang="css">

  h1 {
    font-weight: normal;
    line-height: 1.1;
    padding: 20px 0;

  }

  #navigator {
    background: #ffffff;
    height: 30px;
    text-align: center;
    margin: 0;
    margin-top: -30px;

  }

  #header {
    transition: all 0.3s;
    background: steelblue;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
    color: white;
    
  }

  #colorDisplay {
    font-size: 200%;
  }

  #message {
    color: #ffffff;
    display: inline-block;
    width: 20%;
  }

  .selected {
	background-color: steelblue;
	color: white;
}

button {
	border: none;
	background-color: white;
	font-family: "Montserrat", "Avenir";
	text-transform: uppercase;
	height: 100%;
	font-weight: 700;
	letter-spacing: 1px;
	color: steelblue;
	transition: all 0.3s;
	outline: none;
}

button:hover {
	color: white;
	background-color: steelblue;
}



</style>
