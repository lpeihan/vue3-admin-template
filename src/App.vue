<template>
  <div class="app-root">
    <router-view v-slot="{ Component }" :key="state.key">
      <component :is="Component" :key="$route.name" />
    </router-view>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
  key: 0,
});
</script>
