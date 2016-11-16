import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formula: '',
    result: 0,
  },
  actions:{
    formulaJoint({commit}, number){
      commit('FORMULAJOINT', number)
    },
    clear({commit}){
      commit('CLEAR')
    },
    resultFn({commit}, formulaSmall){
      commit('RESULTFN', formulaSmall)
    }
  },
  mutations:{
    FORMULAJOINT (state, number){
      state.formula += number
    },
    CLEAR(state){
      state.formula = '',
      state.result = 0
    },
    RESULTFN(state, formulaSmall){
      state.result = formulaSmall
    }
  }
})
