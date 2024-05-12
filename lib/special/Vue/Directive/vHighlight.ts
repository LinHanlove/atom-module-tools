import type { Directive, App } from 'vue';

// v-highlight 指令
const vHighlight: Directive = {
  // 指令被绑定到元素时执行
  mounted(el, binding) {
    highlightText(el, binding);
  },
  // 组件更新时重新高亮
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      highlightText(el, binding);
    }
  }
};

function highlightText(el: HTMLElement, binding) {

  const { keyword, style } = binding.value

  // 如果没有提供关键词，则抛出错误
  if (!keyword) {
    throw new Error('Keyword for highlighting is required.');
  }

  const regex = new RegExp(keyword, 'gi');

  el.innerHTML = el.innerHTML.replace(regex, (match) => {
    // 创建一个 <mark> 元素并应用样式
    const span = document.createElement('span');

    if (!style || typeof style !== 'object') {
      throw new Error('Style must be an object.');
    }

    Object.keys(style).forEach((prop) => {
      const cssProp = prop.replace(/([A-Z])/g, match => match.toLowerCase());
      // 设置样式
      (span.style as any)[cssProp] = style[prop];
    });

    span.textContent = match;

    // 返回包裹后的文本
    return span.outerHTML;
  });
}

export function setHighlightDirective(app: App) {
  app.directive('highlight', vHighlight);
}

export default vHighlight;