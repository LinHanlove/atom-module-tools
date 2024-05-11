import type { App } from 'vue'
import { setVCopyDirective } from './vCopy'
import { setDraggableDirective } from './vDraggable'

/**
 * 抛出注册指令方法，需在挂载之前执行
 * @param app
 */
export function setupDirectivePlugins(app: App) {
  // 注册指令
  setVCopyDirective(app)
  setDraggableDirective(app)
}
