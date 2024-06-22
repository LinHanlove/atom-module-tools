<script setup lang="ts">
import { getUrlParams,formatDate } from '@/public/main'
import { log } from '@/public/PrettyLog'
import {KeepLoop} from '@/public/HighOrderFunction'
import {debounceRef} from '@/special/Vue/main'

// 要轮训的函数
const loopFunc = (res) => {
  console.log('轮询中...',res)
}


const keepLoop = new KeepLoop({
    interval: 1000,
    run: loopFunc,
    
})


const text  = debounceRef('')

const dragAudioPlayerCallback = (res: string) => {
  console.log(res)
}
const handleClick = () => {
  console.log('点击触发啦~~~')
}

const handleClickTest = () => {
  console.log('点击触发啦~~1~')
  console.log(formatDate(new Date(), 'monthDay'))
  console.log(formatDate(new Date(), 'yyyy'))
  console.log(formatDate(new Date(), 'dateTime'))
  const customFormatter = (dateInfo) => {
  return `${dateInfo.yyyy}年${dateInfo.MM}月${dateInfo.dd}日`;
  
};

// 使用自定义格式化函数
console.log(formatDate(new Date(), customFormatter));

console.log(formatDate(new Date(), 'yyyy-MM月mm日')) // 输出：自定义格式的字符串
}

const handleInput = () => {
  console.log('输入框触发啦~~~')
}

const handleOutsideClick = (e: any) => {
  log.warning('--------------------------------打印字符----------------------------------------')
  log.info('这是一条信息日志')
  log.error('这是一条错误日志')
  log.warning('这是一条警告日志')
  log.success('这是一条成功日志')
  log.warning('--------------------------------打印多参数--------------------------------------')

  log.info('打印信息', 'atom', 'tools')
  log.error('打印错误', 'atom', 'tools')
  log.warning('打印警告', 'atom', 'tools')
  log.success('打印成功', 'atom', 'tools')
  log.warning('--------------------------------打印含有引用类型的多参数-------------------------')

  log.success('打印成功', e, ['atom', 'tools'])
  log.success('打印成功', {
    name: 'atom',
    type: 'tools'
  })
  log.success('打印成功', () => {
    console.log('123')
  })
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
  console.log(getUrlParams('https://account-devops.aliyun.com/logout?a=1&b=99', 'b'))
}
</script>
<template>
  <div id="parent-a" v-waterMarker style="width: 500px; height: 500px; background-color: teal">
    <div
      v-draggable:parent-a
      v-copy="{ content: 'copy指令', type: 'dblclick', callback: dragAudioPlayerCallback }"
    >
      拖拽我~~
    </div>

    <input type="text" v-debounce:input="{ callback: handleInput, wait: 1000 }" />

    <input type="text" v-model="text">

    {{ text }}

    <div class="bg-teal-500" v-highlight="{ keyword: 'Vue', style: { color: 'red' } }">
      学习使用 Vue.js 是一件非常有趣的事情。
      <div>Vue</div>
    </div>

    <button v-debounce:click="{ callback: handleClick, wait: 1000 }">点击我</button>
    <button @click="handleClickTest">点击测试按钮</button>

    <button @click="keepLoop.start()"> 
      点击轮训
    </button>

    <button @click="keepLoop.stop()">
      停止轮训
    </button>

    <button @click="keepLoop.pause()">
      暂停轮训
    </button>

    <button @click="keepLoop.resume()">
      继续轮训
    </button>

    <!-- <button v-outside-click="handleOutsideClick">在外面点击我</button> -->

    <div class="w-[200px] h-[800px]" v-resize="handleResize">观察我的大小变化！</div>

    <div @click="getUrlParamsFun">解析地址栏参数</div>

    <!-- ---------------- -->

    <div v-observe-visibility="visibilityOptions" class="visibility-target">我是否在视口中？</div>

    <img
      v-zoom="{ minScale: 0.5, maxScale: 3, step: 0.2 }"
      src="https://via.placeholder.com/150"
      alt="可缩放的图片"
    />
  </div>
</template>
