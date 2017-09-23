import Vue from 'vue'
import Enviroment from './plugins/enviroment';

import App from './components/App'

Vue.use(Enviroment)

new Vue({
  el: '#app',
  render(h) {
    return h(App)
  }
})
