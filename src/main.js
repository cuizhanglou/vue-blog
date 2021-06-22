//https://www.bilibili.com/video/BV1T4411W76J
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './router'


Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)
//自定义指令
Vue.directive('rainbow',{
  bind(el){
    el.style.color="red";
  }
})
//自定义过滤器
Vue.filter("to-uppercase",function(value){
  return value.toUpperCase();
})

Vue.filter("snippet",function(value){
  
  return value.slice(0,100)+'...';
})
//创建路由
const router=new VueRouter({
  routes:Routes,
  mode:"history"//去掉#号地址栏
})

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
