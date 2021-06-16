<template>

  <section class="src-components-container">
   
   <div id="header">
		<h1>The Great <br>
			<span id="colorDisplay">{{pickedColor}}</span>
			<br>
			Guessing Game</h1>
	</div>

	<div id="navigator">
		<button @click="restart()" id="reset">New colors</button>
		<span id="message"> </span>
		<button @click="easyClick()" id="easy">easy</button>
		<button @click="hardClick()" id="hard" class="selected">hard</button>
	</div>

  <Squares :colorCount="colorCount" :colors="colors" :pickedColor="pickedColor"/>

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
       this.restart()
    },
    data () {
      return {
        isHard: true,
        colorCount: 6,
        colors: [],
        pickedColor: ''
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
        this.restart()
        }
      },

      hardClick(){
        if(!this.isHard){
          this.isHard = true
          document.querySelector("#hard").classList.add("selected")
          document.querySelector("#easy").classList.remove("selected")
          this.colorCount = 6
          this.restart()
          }
      },

      createNewColors(numbers){
        var arr = [];
        for (var i = 0; i < numbers; i++) {
          arr.push(this.createRandomStringColor());
        }
          return arr;
      },

      /*    
      init(){
        for (var i = 0; i <squares.length; i++) {
          console.log(colors[i])
          squares[i].style.backgroundColor = colors[i];
          squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
              messageDisplay.textContent = "You Picked Right!";
              setAllColorsTo(pickedColor);
              restartButton.textContent = "Play Again!";
              header.style.backgroundColor = pickedColor;
            } 
            else {
              this.style.backgroundColor = "#232323";
              messageDisplay.textContent = "Try Again!";
              messageDisplay.style.color = "#000000";
            }
          });
        }

       restart();
      }
      */

      restart(){
        this.colors = this.createNewColors(this.colorCount)
        this.pickedColor = this.colors[this.PickColor()]
      /*
        for (var i = 0; i <squares.length; i++) {
          squares[i].style.backgroundColor = colors[i];
        }
      */
        }    
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
