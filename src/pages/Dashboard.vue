<template>
  <div class="container mx-auto ">

    <toggle-dark-light-mode/>
    <h1>Déclaration des contributions URSSAF</h1>
    <list-all-transactions/>
  </div>
</template>

<script lang="ts" setup>
import ListAllTransactions from "../components/ListAllTransactions.vue";
import ToggleDarkLightMode from "../components/DarkMode/ToggleDarkLightMode.vue";
</script>
