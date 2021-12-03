<template>
  <div class="trimester-heading">
    <h1>{{title}}</h1>
    <p class="trimester-sum">
      Somme à déclarer
      <span class="trimester-amount-total">{{formatPrice(trimesterAmount)}}  100,00 €</span>
    </p>
  </div>
  <div class="trimester-transactions">
    {{trimesterTransaction}}
  </div>
</template>

<script lang="ts" setup>
import DateTrimester from "../services/DateTrimester";
import {ref, Ref} from "vue";
import Transaction from "../models/Transaction";
import {transactionManager} from "../managers/TransactionManager";
import TransactionCalculator from "../services/TransactionCalculator";
import usePriceFormatter from "../functions/usePriceFormatter";

const props = defineProps<{date: Date}>()

let title = DateTrimester.getTrimesterAsString(props.date)
let trimesterTransaction: Ref<Transaction[]> = ref([])
let trimesterAmount: Ref<number> = ref(0)


let {formatPrice} = usePriceFormatter()

transactionManager.fetchByTrimester(props.date)
    .then((transactions) => {trimesterTransaction.value = transactions})
    .then(() => TransactionCalculator.calculate(trimesterTransaction.value, props.date))
    .then((amount) => trimesterAmount.value = amount)


</script>

<style lang="scss">
.trimester-amount-total {
  font-weight: bold;
  color: #D4AB1A;
}


</style>
