import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    name: '',
    brand: '',
    price: 0
  },
  mutations: {
    receiveName(state, name){
      state.name = name
    },
    receiveBrand(state, brand){
      state.brand = brand
    },
    receivePrice(state, price){
      state.price = price
    }
  },
  getters: {
    itemName: state => {
      return state.name
    },
    itemBrand: state => {
      return state.brand
    },
    itemPrice: state => {
      return state.price
    }
  },

})
