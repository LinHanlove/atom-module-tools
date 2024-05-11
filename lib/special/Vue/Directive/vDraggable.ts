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

        // 是否正在被拖拽
        let isDragging = false;

        // 鼠标按下事件处理函数
        const mouseDown = (e: MouseEvent) => {

            // 拖拽状态
            isDragging = true;

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

                if (!isDragging) return

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


                    // 边界条件：确保元素的四个角都不会超出父元素的边界
                    // 元素可以紧贴父元素的边缘，但不会超出
                    x = Math.max(parentL, Math.min(x, parentR - el.offsetWidth));
                    y = Math.max(parentT, Math.min(y, parentB - el.offsetHeight));

                    // 是否贴边
                    const isEdgeTouching = checkEdgeTouching(el, parentEl, disX, disY);

                    if (isEdgeTouching) {
                        // 元素贴边，给父元素加上虚线边框
                        parentEl.style.border = '1px dashed #3498db';
                    } else {
                        // 元素没有贴边，移除父元素的边框
                        parentEl.style.border = '';
                    }
                } else {
                    // 如果没有提供父元素ID，即拖拽区域是整个网页
                    // 获取元素最大可移动的坐标范围
                    const maxX = document.body.clientWidth - el.offsetWidth;
                    const maxY = document.body.clientHeight - el.offsetHeight;

                    // 边界条件：确保元素不会超出网页边界
                    x = Math.max(0, Math.min(x, maxX));
                    y = Math.max(0, Math.min(y, maxY));
                }

                // 更新元素的 left 和 top 属性
                el.style.left = x + 'px';
                el.style.top = y + 'px';
            };

            // 鼠标释放事件处理函数
            const mouseUp = () => {

                // 拖拽结束
                isDragging = false;

                // 移除样式
                removeDragStyles(el)
                // 移除鼠标移动和鼠标释放的监听器
                document.removeEventListener('mousemove', mouseMove);
                document.removeEventListener('mouseup', mouseUp);

                // 无论元素是否贴边，停止拖拽时都移除父元素的边框
                if (parentId) parentEl.style.border = '';

            };

            // 添加鼠标移动和鼠标释放的监听器
            document.addEventListener('mousemove', mouseMove);
            document.addEventListener('mouseup', mouseUp);

            // 阻止事件冒泡
            e.stopPropagation();
        };

        // 给元素添加鼠标按下监听器
        el.addEventListener('mousedown', mouseDown);

        // 检查元素是否贴边的辅助函数
        const checkEdgeTouching = (el: { getBoundingClientRect: () => any; }, parentEl: HTMLElement, disX: number, disY: number) => {
            const elRect = el.getBoundingClientRect();
            const parentRect = parentEl.getBoundingClientRect();

            // 检查元素的四个角是否在父元素边界内
            const isTopEdgeTouching = elRect.top - disY <= parentRect.top;
            const isBottomEdgeTouching = elRect.bottom + disY >= parentRect.bottom;
            const isLeftEdgeTouching = elRect.left + disX <= parentRect.left;
            const isRightEdgeTouching = elRect.right - disX >= parentRect.right;

            return (
                isTopEdgeTouching || isBottomEdgeTouching ||
                isLeftEdgeTouching || isRightEdgeTouching
            );
        };

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