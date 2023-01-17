<template>
  <div class="service-card">

    <div class="flex items-end">
      <slot name="icon" />
      <h3>{{ title }}</h3>
    </div>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  link: String,
});
</script>

<style scoped>
.service-card {
  @apply
    border-2
  border-neutral-800 
    rounded-xl 
    p-4;
}
</style>