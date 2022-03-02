import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import VueDraggableResizable from 'vue-draggable-resizable'

// optionally import default styles
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

Vue.config.productionTip = false
Vue.use(Antd);
Vue.component('vue-draggable-resizable', VueDraggableResizable)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
