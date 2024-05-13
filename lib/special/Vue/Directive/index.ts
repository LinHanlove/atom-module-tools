import type { App } from 'vue'
import { setVCopyDirective } from './vCopy'
import { setDraggableDirective } from './vDraggable'
import { setVDebounceDirective } from './vDebounce'
import { setWaterMarkerDirective } from './vWaterMarker'
import { setHighlightDirective } from './vHighlight'
import { setVOutsideClickDirective } from './vOutsideClick'
import { setVResizeDirective } from './vResize'
import { setVObserveVisibilityDirective } from './vObserveVisibility'

/**
 * 抛出注册指令方法，需在挂载之前执行
 * @param app
 */
export function setupDirectivePlugins(app: App) {
  // 注册指令
  setVCopyDirective(app)
  setDraggableDirective(app)
  setVDebounceDirective(app)
  setWaterMarkerDirective(app)
  setHighlightDirective(app)
  setVOutsideClickDirective(app)
  setVResizeDirective(app)
  setVObserveVisibilityDirective(app)
}
