<script setup lang="ts">
const dragAudioPlayerCallback = (res: string) => {
  console.log(res)
}
const handleClick = () => {
  console.log('点击触发啦~~~');
  
}

const handleInput = () => {
  console.log('输入框触发啦~~~');
  
}


</script>
<template>
  <div id="parent-a" v-waterMarker style="width: 500px;height: 500px;background-color: teal;">
    <div v-draggable:parent-a v-copy="{ content: 'copy指令', type: 'dblclick', callback: dragAudioPlayerCallback }">
      拖拽我~~
    </div>
 
  <input type="text" v-debounce:input="{callback: handleInput, wait: 1000}"/>

  <div class="bg-teal-500" v-highlight="{ keyword: 'Vue', style: { 'color': 'red' } }">
    学习使用 Vue.js 是一件非常有趣的事情。
    <div>Vue</div>
  </div>

   <button  v-debounce:click="{callback: handleClick, wait: 1000}">
    点击我
  </button>
  </div>



</template>
