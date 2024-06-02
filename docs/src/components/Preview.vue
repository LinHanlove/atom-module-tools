<script setup>
import PhoneModel from './PhoneModel.vue'
</script>

<template>
  <div class="w-[var(--lh-content-width)] h-full flex justify-between">
    <div class="bg-teal-200 w-[100% - 340rpx]"><slot name="content" />5555</div>
    <PhoneModel class="w-[300rpx]">adh</PhoneModel>
  </div>
</template>
