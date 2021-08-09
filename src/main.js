import { createApp } from 'vue'
import { ElMenu, ElSubmenu, ElMenuItem, ElAside, ElHeader, ElMain, ElContainer } from 'element-plus'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/reset.scss'

const components = [
    ElMenu,
    ElSubmenu,
    ElMenuItem,
    ElContainer,
    ElHeader,
    ElAside,
    ElMain,
]
const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})
app.use(store).use(router).mount('#app')
