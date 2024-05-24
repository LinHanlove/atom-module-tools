<script setup lang="ts">
import {getUrlParams } from '@/public/main'
const dragAudioPlayerCallback = (res: string) => {
  console.log(res)
}
const handleClick = () => {
  console.log('点击触发啦~~~')
}

const handleInput = () => {
  console.log('输入框触发啦~~~')
}

const handleOutsideClick = (e: any) => {
  console.log('点击人家啦', e)
}

// 定义回调函数，它将在尺寸变化时被调用
const handleResize = (contentRect: any) => {
  console.log('尺寸变化:', contentRect)
}

const handleVisibilityChange = (isVisible: boolean) => {
  console.log(`Element is ${isVisible ? '看见啦' : '没有看见'}!`)
}

// 定义观察选项
const visibilityOptions = {
  callback: handleVisibilityChange,
  options: {
    root: null, // 或者指定一个元素作为参照物
    rootMargin: '50px', // 可以修改为需要的值
    threshold: 0.5 // 可以修改为一个数组或一个值
  }
}


// 解析地址栏参数
const getUrlParamsFun = () => {
  console.log(getUrlParams('https://account-devops.aliyun.com/logout?a=1&b=99','b'));
  
}
</script>
<template>
  <div id="parent-a" v-waterMarker style="width: 500px; height: 500px; background-color: teal">
    <div v-draggable:parent-a v-copy="{ content: 'copy指令', type: 'dblclick', callback: dragAudioPlayerCallback }">
      拖拽我~~
    </div>

    <input type="text" v-debounce:input="{ callback: handleInput, wait: 1000 }" />

    <div class="bg-teal-500" v-highlight="{ keyword: 'Vue', style: { color: 'red' } }">
      学习使用 Vue.js 是一件非常有趣的事情。
      <div>Vue</div>
    </div>

    <button v-debounce:click="{ callback: handleClick, wait: 1000 }">点击我</button>

    <button v-outside-click="handleOutsideClick">在外面点击我</button>

    <img v-zoom="{ minScale: 0.5, maxScale: 3, step: 0.2 }" src="https://via.placeholder.com/150" alt="可缩放的图片" />


    <div class="w-[200px] h-[800px]" v-resize="handleResize">观察我的大小变化！</div>

    <div v-observe-visibility="visibilityOptions" class="visibility-target">我是否在视口中？</div>

    <div @click="getUrlParamsFun">解析地址栏参数</div>

  </div>
</template>
