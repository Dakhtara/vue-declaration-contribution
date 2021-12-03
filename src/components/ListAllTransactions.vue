<script setup lang="ts">
import {Ref, ref} from 'vue'
import {transactionManager, Trimester} from "../managers/TransactionManager";
import Transaction from "./Transaction.vue";
import DateTrimester from "../services/DateTrimester";
import {DateTime} from "luxon";

let trimesters: Ref<Trimester[]> = ref([]);
transactionManager.fetchAllByTrimester().then((fetched) => trimesters.value = fetched);
const toTrimesterString = (date: Date|DateTime): string => {
  return DateTrimester.getTrimesterAsString(date)
}
</script>

<template>
  <h2>Liste des transactions</h2>
  <div v-for="trimester in trimesters" class="trimesters">
    <p>{{toTrimesterString(trimester.date)}}</p>
    <Transaction v-for="transaction in trimester.transactions" :transaction="transaction"/>
  </div>
</template>

<style scoped>

</style>
