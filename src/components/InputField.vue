<template>
  <div class="form-control">
    <label :for="id" class="form-label">{{label}}</label>
    <input :id="id" :value="props.modelValue" v-on:input="updateValue($event.target.value)" class="text-black dark:text-white form-input" :type="type"/>
  </div>
</template>

<script setup lang="ts">
import {ref, Ref} from "vue";

  const props = defineProps<{modelValue: string, label: string, type: string}>()
  let id : Ref<string> = ref<string>(props.type + props.label)

const emit = defineEmits(['update:modelValue'])

function updateValue (value: string) {
    emit('update:modelValue', value)
}
</script>

<style lang="scss">
  .form-control {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
  }

  .form-label {
    margin-bottom: 10px;
    margin-left: 8px;
  }
</style>
