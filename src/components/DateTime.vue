<template>
  <time :datetime="formatted">{{formatted}}</time>
</template>

<script setup lang="ts">
import moment from "moment";
import {Ref, ref} from "vue";
const props =  defineProps({
  date: Date,
  format: String
})

let formatted: Ref<String> = ref("");
if (props.date !== undefined && props.format !== undefined) {
  formatted.value = moment(props.date).format(props.format)
}

</script>

<style scoped>

</style>
