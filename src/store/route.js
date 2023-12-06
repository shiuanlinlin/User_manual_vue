//引用 vue-router 的 createRouter() 與 createWebHistory()。
import { createRouter, createWebHistory } from 'vue-router'
import Index from '/src/components/Pdf.vue'
//import Index from '/src/components/Index.vue'
// import About from '/src/components/About.vue'
// import Ghart from '/src/components/Ghart.vue'
// import Canvas from '/src/components/Canvas.vue'
//import Contact from '/src/components/Contact.vue'
import Pdf from '/src/components/Pdf.vue'

let history = createWebHistory()
let routes = [
  {
    path: '/',
    name: 'Index',
    props: (route) => route.params,
    component: Index
  },
  {
    path: '/Pdf/:id',
    name: 'Pdf',
    component: Pdf
  },
]

export default createRouter({ history, routes })