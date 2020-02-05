import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { routes } from './routes'
import { store } from './store'

Vue.use(Vuex)
Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
