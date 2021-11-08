<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import ListAllTransactions from "./components/ListAllTransactions.vue";
</script>

<template>
  <h1>Déclaration des contributions URSSAF</h1>
  <list-all-transactions></list-all-transactions>
</template>

<style>
* {
  background: #222;
  color: #ccc;
}
</style>
