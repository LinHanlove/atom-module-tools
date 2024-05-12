import type { Directive, App } from 'vue';
import { debounce } from '@/public/HighOrderFunction';

// 防抖指令
const VDebounce: Directive = {
  mounted(el, binding) {
    // 解构binding.value，设置默认值
    const { callback, wait = 1000 } = binding.value || {};


    // 从binding.arg获取事件类型，如果提供了binding.arg
    const eventType = binding.arg || 'click';

    // 确保callback是一个函数
    if (typeof callback !== 'function') {
      throw new Error('The "callback" parameter must be a function.');
    }

    const debouncedCallback = debounce(callback, wait);

    el.addEventListener(eventType, debouncedCallback);

    el[`_${eventType}Handler`] = debouncedCallback;
  },
  unmounted(el, binding) {
    const eventType = binding.arg || (binding.value && binding.value.type) || 'click';
    el.removeEventListener(eventType, el[`_${eventType}Handler`]);
  }
};

export function setVDebounceDirective(app: App) {
  app.directive('debounce', VDebounce);
}

export default VDebounce;