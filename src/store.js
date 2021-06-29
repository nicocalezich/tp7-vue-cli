import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {    
        colorCount: 0,
        colors: [],
        pickedColor: '',
        spanMessage: '',
        resetMessage: '',
        headerBackground: ''
    },
    actions: {
      
    },
    mutations: {
       
    }
})