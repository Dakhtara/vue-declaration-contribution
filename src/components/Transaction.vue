<template>
<div class="transaction">
  <div class="transaction-heading">
    <TransactionType color="red" :transaction="transaction" />
    {{transaction.label}}
  </div>
  <div class="price">
    <span class="price-main" :style="'color:' + transaction.getColoryType()">{{formatPrice(transaction.price, transaction.type)}}</span>
    <span class="price-remaining" v-if="transaction.slices > 0">{{formatPrice(transaction.pendingSlices(), 'debit' )}} restant</span>
  </div>
  <DateTime :date="transaction.dateTime" format="DD/MM/YYYY HH:mm:ss" />
</div>
</template>

<script setup lang="ts">
import Transaction, {TransactionTypeEnum} from "../models/Transaction";
import TransactionType from "./TransactionType.vue";
import DateTime from "./DateTime.vue";
import CurrencyFormatter from "../services/CurrencyFormatter";

defineProps<{transaction:Transaction}>();

const currencyFormatter = CurrencyFormatter.getInstance();
let formatPrice = (price: number, isCredit : TransactionTypeEnum = TransactionTypeEnum.credit): string => {
  const prefix = isCredit == TransactionTypeEnum.credit ? '+': '-'
  return prefix + ' ' + currencyFormatter.formatBasic(price)
}
</script>

<style lang="scss">
@import '../scss/_variables.scss';

.transaction {
  display: grid;
  padding: 24px;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border: 1px solid rgba(168, 168, 168, 0.29);
  filter: drop-shadow(0px 2px 4px rgba(88, 88, 88, 0.25));

  .transaction-heading {
    display: grid;
    grid-template-columns: 10% 90%;
    align-items: center;
  }

  .price {
    display: flex;
    flex-direction: column;
  }

  .price-main {
    font-size: 18px;
  }

  .price-remaining {
    font-size: 14px;
    color: $light-muted-text-color;
  }
}

.dark {
  .transaction {
    background-color: #38415E;
    border: 0;
    filter: none;
    border-bottom: 1px solid #111827;
  }
  .price-remaining {
    color: $dark-muted-text-color;
  }
}
</style>
