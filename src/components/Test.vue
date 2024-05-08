<script  setup lang="ts">
const dragAudioPlayerCallback = (res:string) => {
  console.log(res);
  
}
</script>
<template>
  <div v-copy="{ content: 'hahah', type:'dblclick',callback:dragAudioPlayerCallback}">后面准备编写自定义指令 所以集成了tsx 和 vue 配置多入口</div>
</template>
