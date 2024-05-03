import register from './register'
import registericon from './registericon'
// 导入所有图标

import type { App } from 'vue'
export const useGlobal = (app: App) => {
    app.use(register)
    app.use(registericon)
}



