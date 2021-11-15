<template>
<div>
  <TransactionType color="red" :type="transaction.type" />
  {{transaction.label}}
  {{$filters.formatCurrency(transaction.price)}}
  <DateTime :date="transaction.dateTime" format="D/M/YYYY HH:mm:ss" />
</div>
</template>

<script setup lang="ts">
import Transaction from "../models/Transaction";

defineProps<{transaction:Transaction}>();
import TransactionType from "./TransactionType.vue";
import DateTime from "./DateTime.vue";
</script>
