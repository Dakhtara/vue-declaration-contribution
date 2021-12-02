<template>
  <div class="transaction-type" :style="`background-color:` + color"></div>
</template>

<script setup lang="ts">

import {ref, Ref} from "vue";
import Transaction from "../models/Transaction";

const props = defineProps({
  type: String,
  transaction: Transaction
});

let color: Ref<string> = ref('');

if (props.transaction !== undefined) {
  color.value = props.transaction.getColoryType()
} else {
  if (props.type === 'credit') {
    color.value = '#34D399';
  } else {
    color.value = '#60A5FA';
  }
}


</script>

<style lang="scss" scoped>
.transaction-type {
  border-radius: 50%;
  display: inline-block;
  padding: 8px 8px;
  width: 42px;
  height: 42px;
  font-size: 0.8rem;
  color: #000;
}
</style>
