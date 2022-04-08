import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Tv_Button from './components/Button/Tv-Button.vue'
import Tv_Dialog from './components/Dialog/Tv_Dialog.vue'
import Tv_Input from './components/Input/Tv-input.vue'
import ElementPlus from 'element-plus'
import {Edit} from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.component("Tv-Button",Tv_Button)
.component(Edit.name,Edit)
.component("Tv-dialog",Tv_Dialog)
.component("Tv-input",Tv_Input)
app.use(ElementPlus)
app.mount('#app')