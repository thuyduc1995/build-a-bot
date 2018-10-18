import axios from 'axios';

export default {
  namespaced: true,
  state: {
    cart: [],
    parts: null,
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter(item => item.head.onSale);
    },
  },
  actions: {
    getParts({ commit }) {
      axios.get('/api/parts')
        .then(result => commit('updateParts', result.data))
        .catch(error => console.log('Erorr:', error))
    },
    addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot];
      axios.post('/api/cart', cart)
        .then(result => commit('addRobotToCart', robot))
        .catch(error => console.log('Error:', error))
    }
  }
}
