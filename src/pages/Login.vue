<template>
  <div class="login-container">

    <div class="login-box">
      <div class="alert alert-error" v-show="errorAuth">
        <span>{{ errorAuth }}</span>
      </div>
      <form class="login-form" @submit.prevent="authenticate()">
        <InputField label="Identifiant" v-model="username" type="text"/>
        <InputField label="Mot de passe" v-model="password" type="password"/>

        <input type="submit" class="btn btn-primary btn-full" value="Connexion"/>
      </form>
<!--      <a>Mot de passe oublié ?</a>-->
    </div>
    <toggle-dark-light-mode class="toggle-login"/>
  </div>

</template>

<script lang="ts" setup>
import {ref, Ref} from "vue";
import ToggleDarkLightMode from "../components/DarkMode/ToggleDarkLightMode.vue";
import InputField from "../components/InputField.vue";
import AuthProvider, {ErrorAuth} from "../security/AuthProvider";
import {useRouter} from "vue-router";

let username: Ref<string> = ref<string>('')
let password: Ref<string> = ref<string>('')
let errorAuth: Ref<string | null> = ref<string | null>(null)
const router = useRouter()

async function authenticate() {
  let authProvider: AuthProvider = new AuthProvider()

  let isAuth: true | ErrorAuth = await authProvider.authenticate(username.value, password.value)
  if (isAuth === true) {
    router.push({path: '/dashboard'})
  } else {
    errorAuth.value = isAuth.message
    password.value = ''
  }
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
