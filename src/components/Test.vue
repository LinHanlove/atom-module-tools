<script setup lang="ts">
const dragAudioPlayerCallback = (res: string) => {
  console.log(res)
}
</script>
<template>
  <div id="parent-a">
    <div v-draggable v-copy="{ content: 'copy指令', type: 'dblclick', callback: dragAudioPlayerCallback }">
      后面准备编写自定义指令 所以集成了tsx 和 vue 配置多入口
    </div>
    <div>

      <div>拖拽</div>

    </div>

  </div>

</template>
