<template>
  <div class="iphone-12-pro">
    <div class="notch">
      <!-- 刘海儿部分 -->
    </div>
    <div class="screen">
      <!-- 屏幕部分 -->
      <slot name="template" />
    </div>
    <div class="camera">
      <!-- 后置摄像头部分 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhoneModel'
}
</script>

<style scoped>
.iphone-12-pro {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px; /* 固定宽度 */
  height: 600px; /* 根据宽度按比例计算的高度 */
  border-radius: 20px; /* 边框圆角 */
  overflow: hidden;
  /* box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15), inset 0 0.2rem 0.5rem rgba(255, 255, 255, 0.3); */
  background: #000; /* 背景色 */
  border: 3px solid #e5e5ea; /* 边框颜色 */
  position: relative;
}

.notch {
  position: absolute;
  top: 10px; /* 按比例调整刘海位置 */
  left: 50%;
  transform: translateX(-50%);
  width: 120px; /* 刘海宽度 */
  height: 12px; /* 刘海高度 */
  background: #fff;
  border-radius: 10px;
}

.screen {
  width: 280px; /* 屏幕实际显示区域宽度 */
  height: 520px; /* 屏幕实际显示区域高度 */
  background: #fff; /* 屏幕背景色 */
  border: 1px solid #ccc; /* 屏幕边框 */
  border-radius: 10px;
  overflow-y: auto; /* 如果内容超出屏幕高度，允许滚动 */
}

.camera {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px; /* 摄像头宽度 */
  height: 40px; /* 摄像头高度 */
  background: #333;
  border-radius: 50%;
}
</style>