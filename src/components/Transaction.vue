<template>
<div class="transaction">
  <div class="transaction-heading">
    <TransactionType color="red" :type="transaction.type" />
    {{transaction.label}}
  </div>
  {{$filters.formatCurrency(transaction.price)}}
  <DateTime :date="transaction.dateTime" format="DD/MM/YYYY HH:mm:ss" />
</div>
</template>

<script setup lang="ts">
import Transaction from "../models/Transaction";

defineProps<{transaction:Transaction}>();
import TransactionType from "./TransactionType.vue";
import DateTime from "./DateTime.vue";
</script>

<style lang="scss">
.transaction {
  display: grid;
  padding: 24px;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
}

.dark {
  .transaction {
    background-color: #38415E;
    border-bottom: 1px solid #111827
  }
}
</style>
