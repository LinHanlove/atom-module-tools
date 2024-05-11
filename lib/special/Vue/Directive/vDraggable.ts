import type { Directive, App } from 'vue';

const vDraggable: Directive = {
    mounted(el, binding) {
        // 如果提供了 binding.arg 作为父元素的 ID，则根据 ID 查找父元素
        const parentId = binding.arg;

        // 如果未提供父元素 ID，则拖拽区域是整个网页
        // 如果提供父元素 ID 但是找不到对应的父元素，则抛出错误
        const parentEl = parentId ? document.getElementById(parentId) : el.parentNode as HTMLElement;

        if (!parentEl) {
            console.error(`Parent element with id '${parentId}' not found.`);
            return;
        }

        // 初始化样式
        el.style = `
                cursor: move;
                position: absolute;
                z-index: 999;
                user-select: none;
                touch-action: none;
            `;

        // 鼠标按下事件处理函数
        const mouseDown = (e: MouseEvent) => {

            addDragStyles(el)

            /**
             * 计算鼠标和元素的偏移
             * 计算从页面的左上角到鼠标点击位置的水平距离（e.pageX)
             * 减去从元素 el 的左上角到其父元素左上角的水平距离（el.offsetLeft)
             * 确定当用户开始拖拽时鼠标与元素的初始相对位置
             */
            let disX = e.pageX - el.offsetLeft;
            let disY = e.pageY - el.offsetTop;

            // 鼠标移动事件处理函数
            const mouseMove = (e: MouseEvent) => {

                // 计算鼠标在拖拽过程中的当前位置相对于元素初始拖拽位置的偏移量
                let x = e.pageX - disX;
                let y = e.pageY - disY;

                // 如果提供了父元素ID，获取父元素边界并设置边界条件
                if (parentId) {
                    const {
                        left: parentL,
                        top: parentT,
                        right: parentR,
                        bottom: parentB
                    } = parentEl.getBoundingClientRect();

                    // 边界条件：确保元素不会超出父元素的边界
                    x = Math.max(parentL + disX, Math.min(parentR - el.offsetWidth, x));
                    y = Math.max(parentT + disY, Math.min(parentB - el.offsetHeight, y));
                } else {
                    // 如果没有提供父元素ID，即拖拽区域是整个网页
                    // 获取元素最大可移动的坐标范围
                    let maxX = document.body.clientWidth - el.offsetWidth;
                    let maxY = document.body.clientHeight - el.offsetHeight;

                    // 边界条件：确保元素不会超出网页边界
                    if (x < 0) x = 0;
                    else if (x > maxX) x = maxX;

                    if (y < 0) y = 0;
                    else if (y > maxY) y = maxY;
                }

                // 更新元素的 left 和 top 属性
                el.style.left = x + 'px';
                el.style.top = y + 'px';

            };

            // 鼠标释放事件处理函数
            const mouseUp = () => {
                removeDragStyles(el)
                // 移除鼠标移动和鼠标释放的监听器
                document.removeEventListener('mousemove', mouseMove);
                document.removeEventListener('mouseup', mouseUp);
            };

            // 给文档添加鼠标移动和鼠标释放的监听器
            document.addEventListener('mousemove', mouseMove);
            document.addEventListener('mouseup', mouseUp);

            // 阻止事件冒泡
            e.stopPropagation();
        };

        // 给元素添加鼠标按下监听器
        el.addEventListener('mousedown', mouseDown);

        // 拖拽时的样式
        const addDragStyles = (el: HTMLElement) => {
            el.style.border = '1px dashed #3498db';
            el.style.borderRadius = '2px';
            el.style.opacity = '0.6';
            el.style.boxShadow = '5px 5px 15px rgba(0, 0, 0, 0.2)';
        }

        // 拖拽结束移除样式
        const removeDragStyles = (el: HTMLElement) => {
            el.style.border = '';
            el.style.boxShadow = '';
            el.style.borderRadius = '';
            el.style.opacity = '1';
        }
    },
};

export function setDraggableDirective(app: App) {
    app.directive('draggable', vDraggable);
}

export default vDraggable;