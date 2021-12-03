<template>
  <time :datetime="isoDate">{{formatted}}</time>
</template>

<script setup lang="ts">
import {DateTime as DateTimeLuxon }  from 'luxon';
const props =  defineProps({
  date: Date,
  format: String
})

let formatted: string
let isoDate: string
if (props.date !== undefined && props.format !== undefined) {
  formatted = DateTimeLuxon.fromJSDate(props.date).toLocaleString(DateTimeLuxon.DATE_MED_WITH_WEEKDAY)
  isoDate = DateTimeLuxon.fromJSDate(props.date).toISO()
}

</script>

<style scoped>

</style>
