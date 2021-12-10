<template>
  <div class="container mx-auto ">

    <toggle-dark-light-mode/>
    <h1>Déclaration des contributions URSSAF</h1>

    <ul>
      <li><router-link :to="{name: 'trimesterDetails', params: {trimester: previousTrimester.quarter, year: previousTrimester.year}}">{{trimesterAsString(previousTrimester)}}</router-link></li>
      <li><router-link :to="{name: 'trimesterDetails', params: {trimester: currentTrimester.quarter, year: currentTrimester.year}}">{{trimesterAsString(currentTrimester)}}</router-link></li>
      <li><router-link :to="{name: 'trimesterDetails', params: {trimester: nextTrimester.quarter, year: nextTrimester.year}}">{{trimesterAsString(nextTrimester)}}</router-link></li>
    </ul>

    <button class="btn btn-primary" @click="logOut">Déconnexion</button>
  </div>
</template>

<script lang="ts" setup>
import ToggleDarkLightMode from "../components/DarkMode/ToggleDarkLightMode.vue";
import AuthProvider from "../security/AuthProvider";
import {ref, Ref} from "vue";
import {DateTime} from "luxon";
import DateTrimester from "../services/DateTrimester";


function logOut() {
  let authProvider = new AuthProvider()
      authProvider.logOut()
}

let now = new Date()
let currentTrimester: Ref<DateTime> =  ref<DateTime>(DateTrimester.getStartTrimester(now))
let previousTrimester: Ref<DateTime> =  ref<DateTime>(DateTrimester.previousTrimester(now))
let nextTrimester: Ref<DateTime> =  ref<DateTime>(DateTrimester.nextTrimester(now))
let trimesterAsString = DateTrimester.getTrimesterAsString
</script>
