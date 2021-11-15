<template>
  <span class="transaction-type" :style="`background-color:` + color">{{type}}</span>
</template>

<script setup lang="ts">

import {ref, Ref} from "vue";

const props = defineProps({
  type: String
});

let color: Ref<string> = ref('');

if (props.type === 'credit') {
  color.value = '#fff';
} else {
  color.value = '#a13535';
}


</script>

<style lang="scss" scoped>
.transaction-type {
  @apply rounded;
  display: inline-block;
  padding: 4px 8px;
  font-size: 0.8rem;
  color: #000;
}
</style>
