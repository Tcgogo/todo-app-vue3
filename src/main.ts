import { createApp } from 'vue'
import App from './App.vue'
import animated from 'animate.css';

const app = createApp(App);
app.use(animated);
app.mount('#app');
