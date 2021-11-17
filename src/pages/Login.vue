<template>
  <div class="login-container">

    <div class="login-box">
      <form class="login-form" @submit.prevent="authenticate()">
        <InputField label="Identifiant" v-model="username" type="text"/>
        <InputField v-model="password" label="Mot de passe" type="password"/>

        <input type="submit" class="btn btn-primary btn-full" value="Connexion"/>
      </form>

      <a>Mot de passe oublié ?</a>
    </div>
    <toggle-dark-light-mode class="toggle-login"/>
  </div>

</template>

<script lang="ts" setup>

import {ref, Ref} from "vue";
import ToggleDarkLightMode from "../components/DarkMode/ToggleDarkLightMode.vue";
import InputField from "../components/InputField.vue";

let username: Ref<string> = ref<string>('')
let password: Ref<string> = ref<string>('')

function authenticate() {
  console.log(username.value, password.value)
}

</script>

<style lang="scss">
@import '../scss/_variables.scss';

.login-box {
  display: grid;
  grid-row-gap: 50px;
  max-width: 400px;
  padding: 24px 12px;
  border-radius: 3px;
  background: $light-background-solid-color;
  box-shadow: 0 2px 4px 0 rgba(88, 88, 88, 0.25);
  margin: auto;
  margin-top: 10vh;
}

.login-container {
  margin: auto;
}

.toggle-login {
  margin-top: 24px;
  justify-content: center;
}

.dark .login-box {
  box-shadow: none;
  background: $dark-background-solid-color;
}
</style>
