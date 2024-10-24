/*
 *   Copyright (c) 2023
 *   All rights reserved.
 */
import { createApp } from "vue";
import "./style.css";
import App from "@/App.vue";
import router from "@/routes";
import { createPinia } from "pinia";
import vuetify from "@/plugins/vuetify";

const pinia = createPinia();

createApp(App).use(router).use(pinia).use(vuetify).mount("#app");
