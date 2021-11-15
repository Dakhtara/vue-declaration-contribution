<template>
  <input id="change-theme-checkbox" type="checkbox" v-on:change="changeMode" :checked="darkMode === 'dark'" value="darkMode"/>
  <label for="change-theme-checkbox">Dark mode {{darkMode === 'dark' ? 'On': 'Off'}}</label>
</template>

<script lang="ts" setup>
import {ref, Ref} from "vue";

let darkMode : Ref<string> = ref<string>('')

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
  darkMode.value = 'dark'
} else {
  document.documentElement.classList.remove('dark')
  darkMode.value = 'light'
}

function changeMode(): void  {
  if (darkMode.value === 'dark') {
    document.documentElement.classList.remove('dark')
    darkMode.value = 'light'
    localStorage.theme = 'light'
  } else {
    document.documentElement.classList.add('dark')
    darkMode.value = 'dark'
    localStorage.theme = 'dark'
  }
}

</script>

