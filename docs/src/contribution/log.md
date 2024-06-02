<script setup>
import { ref } from 'vue'
import {commitHistory} from '../commitInfo'

const log = ref(commitHistory)

/**
 * 跳转到github
 * @param {*} hash 
 */
const handleToGitHub = (hash) => {
  window.open(`https://github.com/LinHanlove/atom-tools/commit/${hash}`)
}

</script>

<div class="max-w-lg mx-auto my-4 text-center text-[20px] font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:text-teal duration-300">
  历史提交记录
</div>

::: danger

<div class="p-4 mb-4 bg-red-100 border border-red-400 rounded-lg text-red-800">
  <p class="text-sm">下面是关于 <code>atom-tools</code> 的历史提交记录，其中包含 <code>hash</code> 提交记录的哈希值，提交记录的描述信息，以及提交时间，点击可查看具体的提交</p>
</div>
:::
<div class="w-full h-[340px] overflow-y-scroll ">
  <div  class="flex w-full h-auto text-[14px] rounded-lg transition ease-in-out delay-150   hover:text-[teal] duration-300 hover:cursor-pointer hover:-translate-y-2  p-[10px]  "  v-for="item in log" :key="item.hash" @click="handleToGitHub(item.hash)">
    <!-- hash -->
    <div class="w-2/5">
      <div class="mt-1">
        {{item.hash}}
        <span class="bg-[var(--vp-custom-block-danger-bg)] p-[4px_8px] rounded-[12px] text-[12px]">hash</span>
        </div>
    </div>
    <!-- message -->
    <div class="w-3/5">
      <div class="w-full transition duration-150 ease-in-out">
        {{item.message}}
      </div>
      <!-- message -->
     <div>
        {{item.commitTime}}
      </div>
    </div>
   
  </div>

</div>

<style>
  .has-aside{
    padding-top: 20px !important;
  }
</style>
