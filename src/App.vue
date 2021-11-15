<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import ListAllTransactions from "./components/ListAllTransactions.vue";
import ToggleDarkLightMode from "./components/DarkMode/ToggleDarkLightMode.vue";
</script>

<template>
  <div class="container mx-auto ">

  <toggle-dark-light-mode/>
  <h1>Déclaration des contributions URSSAF</h1>
  <list-all-transactions/>
  </div>
</template>

<stylev lang="scss">

</stylev>
