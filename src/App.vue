<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>

<router-view v-slot="{ Component }">
    <component :is="Component" />
</router-view>

  <div id="teleport-home" class="overflow-hidden"></div>
</template>

<style scoped>

</style>
