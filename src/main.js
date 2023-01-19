/** @format */

import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import router from "./MainRouter.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import axios from "axios";

axios.defaults.withCredentials = true;

const app = createApp(App);
app.use(router);
app.mount("#app");
