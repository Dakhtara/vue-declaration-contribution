<template>
  <div class="container mx-auto ">

    <toggle-dark-light-mode/>
    <h1>Déclaration des contributions URSSAF</h1>
    <list-all-transactions/>

    <button class="btn btn-primary" @click="logOut">Déconnexion</button>
  </div>
</template>

<script lang="ts" setup>
import ListAllTransactions from "../components/ListAllTransactions.vue";
import ToggleDarkLightMode from "../components/DarkMode/ToggleDarkLightMode.vue";
import AuthProvider from "../security/AuthProvider";


function logOut() {
  let authProvider = new AuthProvider()
      authProvider.logOut()
}
</script>
