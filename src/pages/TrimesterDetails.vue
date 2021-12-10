<template>
  <div class="trimester-heading">
    <h1>{{title}}</h1>
    <p class="trimester-sum">
      Somme à déclarer
      <span class="trimester-amount-total">{{formatPrice(trimesterAmount)}}</span>
    </p>
  </div>
  <div class="trimester-transactions">
    <div v-for="transaction in trimesterTransaction">
      <Transaction :transaction="transaction" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import DateTrimester from "../services/DateTrimester";
import {ref, Ref} from "vue";
import TransactionModel from "../models/TransactionModel";
import Transaction  from "../components/Transaction.vue";
import {transactionManager} from "../managers/TransactionManager";
import TransactionCalculator from "../services/TransactionCalculator";
import usePriceFormatter from "../functions/usePriceFormatter";
import {useRoute} from "vue-router";

const route = useRoute()

const trimester: string = route.params.trimester;
const year: string = route.params.year;
let date = DateTrimester.getDateByTrimesterAndYear(parseInt(trimester), parseInt(year))
console.log(date)
let title = DateTrimester.getTrimesterAsString(date)
let trimesterTransaction: Ref<TransactionModel[]> = ref([])
let trimesterAmount: Ref<number> = ref(0)


let {formatPrice} = usePriceFormatter()

transactionManager.fetchByTrimester(date)
    .then((transactions) => {trimesterTransaction.value = transactions})
    .then(() => TransactionCalculator.calculate(trimesterTransaction.value, date))
    .then((amount) => trimesterAmount.value = amount)


</script>

<style lang="scss">
.trimester-amount-total {
  font-weight: bold;
  color: #D4AB1A;
}
</style>
