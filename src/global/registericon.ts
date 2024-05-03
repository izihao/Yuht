import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import type { App } from 'vue'

import svgicon from '@/components/svgicon.vue'
export default {
    install:(app: App)=> {
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
        // 全局注册组件
        app.component('svgicon', svgicon)
    }

}