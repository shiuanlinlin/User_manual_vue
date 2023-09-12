import { createApp } from 'vue';
import App from '../App.vue';
import router from '../store/route';
import VueAxios from "vue-axios";
import axios from "axios";
import $ from 'jquery';
// Import all of Bootstrap's JS
// https://getbootstrap.com/docs/5.2/getting-started/vite/
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
// import ElButton from 'element-plus'
import 'element-plus/es/components/button/style/css';
import '../sass/main.sass';
// https://fontawesome.com/docs/web/use-with/vue/
// https://blog.fontawesome.com/how-to-use-vue-js-with-font-awesome/
// https://stackoverflow.com/questions/66389974/using-font-awesome-in-vue-3
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faUser, faBars , faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App);
//https://element-plus.org/en-US/guide/quickstart.html#usage
//https://github.com/element-plus/unplugin-element-plus#readme
// app.use(ElButton)
library.add(faPhone, faUser, faBars , faImage );

app.component("font-awesome-icon", FontAwesomeIcon);
app.use($);
app.use(router).use(VueAxios, axios).mount('#app');






