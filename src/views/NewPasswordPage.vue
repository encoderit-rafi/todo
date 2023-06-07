<template>
  <div class="new-password-page">NewPasswordPage {{ counter.count }}</div>
  <v-btn @click="counter.increment"> + 1 </v-btn>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
</script>

<style lang="scss" scoped></style>
