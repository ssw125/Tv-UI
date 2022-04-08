import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Tv_Button from './components/Button/Tv-Button.vue'
import Tv_Dialog from './components/Dialog/Tv_Dialog.vue'
import Tv_Input from './components/Input/Tv-input.vue'
const app = createApp(App)
app.component("Tv-button",Tv_Button)
.component("Tv-dialog",Tv_Dialog)
.component("Tv-input",Tv_Input)
app.mount('#app')