<script setup lang="ts">
import {Ref, ref} from 'vue'
import {transactionManager} from "../managers/TransactionManager";
import Transaction from "../models/Transaction";
import TransactionType from "./TransactionType.vue";
import moment from "moment";
import DateTime from "./DateTime.vue";
// defineProps<{ msg: string }>()

const count = ref(0)
let transactions: Ref<Transaction[]> = ref([]);
transactionManager.fetchAll().then((fetched) => transactions.value = fetched);

</script>

<template>
  <h2>Liste des transactions</h2>

  <ul>
    <li v-for="transaction in transactions">
      <TransactionType color="red" :type="transaction.type" />
      {{transaction.label}}
      {{$filters.formatCurrency(transaction.price)}}
      <DateTime :date="transaction.dateTime" format="D/M/YYYY HH:mm:ss" />
    </li>
  </ul>
</template>

<style scoped>

</style>
