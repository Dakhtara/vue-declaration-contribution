<script setup lang="ts">
import {Ref, ref} from 'vue'
import {transactionManager} from "../managers/TransactionManager";
import TransactionModel from "../models/Transaction";
import Transaction from "./Transaction.vue";
// defineProps<{ msg: string }>()

const count = ref(0)
let transactions: Ref<TransactionModel[]> = ref([]);
transactionManager.fetchAll().then((fetched) => transactions.value = fetched);

</script>

<template>
  <h2>Liste des transactions</h2>

  <ul>
    <li v-for="transaction in transactions">
      <Transaction :transaction="transaction" />
    </li>
  </ul>
</template>

<style scoped>

</style>
