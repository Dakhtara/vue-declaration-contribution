<template>
  <div class="theme-switch-wrapper">
    <label class="theme-switch" for="change-theme-checkbox">
      <input id="change-theme-checkbox" type="checkbox" v-on:change="changeMode" :checked="darkMode === 'dark'"
             value="darkMode"/>
      <div class="slider round"></div>
    </label>
    <em>Enable Dark Mode!</em>
  </div>
</template>

<script lang="ts" setup>
import {ref, Ref} from "vue";

let darkMode: Ref<string> = ref<string>('')

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
  darkMode.value = 'dark'
} else {
  document.documentElement.classList.remove('dark')
  darkMode.value = 'light'
}

function changeMode(): void {
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

<style lang="scss">
.theme-switch-wrapper {
  display: flex;
  align-items: center;

  em {
    margin-left: 10px;
    font-size: 1rem;
  }
}

.theme-switch {
  display: inline-block;
  height: 24px;
  position: relative;
  width: 40px;
}

.theme-switch input {
  display: none;
}

.slider {
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: .3s;
}

.slider:before {
  background-color: #fff;
  bottom: 4px;
  content: "";
  height: 17px;
  left: 4px;
  position: absolute;
  transition: .3s;
  width: 17px;
}

input:checked + .slider {
  background-color: #66bb6a;
}

input:checked + .slider:before {
  transform: translateX(16px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}</style>
