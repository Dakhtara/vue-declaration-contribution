<script setup lang="ts">
import {Ref, ref} from 'vue'
import {transactionManager, Trimester} from "../managers/TransactionManager";
import TransactionModel from "../models/Transaction";
import Transaction from "./Transaction.vue";
// defineProps<{ msg: string }>()

const count = ref(0)
let trimesters: Ref<Trimester[]> = ref([]);
transactionManager.fetchAllByTrimester().then((fetched) => trimesters.value = fetched);

</script>

<template>
  <h2>Liste des transactions</h2>
  <div v-for="trimester in trimesters" class="trimesters">
    <p>{{trimester.date.format('DD/MM/YYYY')}}</p>
    <Transaction v-for="transaction in trimester.transactions" :transaction="transaction"/>
  </div>
</template>

<style scoped>

</style>
