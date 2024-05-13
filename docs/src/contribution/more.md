---
title
---

<script setup>
import { ref } from 'vue'
import chineseMarkdown from './moreDetails/CH.md';
import englishMarkdown from './moreDetails/EN.md';

const active = ref('chinese')

const handleChange = (language) => {
    active.value = language
}
</script>

  <div class="w-full h-[40px] flex items-center justify-center">
    <button
       class="w-[100px] h-full rounded-[50px] border-dashed border-[1px] border-[teal]  text-[var(--vp-c-text-1)]"
       @click="handleChange('chinese')"
    >
      Chinese
    </button>
    <button
        class="w-[100px] h-full ml-[40px] rounded-[50px] border-dashed border-[1px] border-[teal]  text-[var(--vp-c-text-1)]"
       @click="handleChange('english')"
    >
      English
    </button>
  </div>
  <div v-if="active === 'chinese'">
  <chineseMarkdown/>
  </div>
  <div v-else-if="active === 'english'">
   <englishMarkdown/>
  </div>
