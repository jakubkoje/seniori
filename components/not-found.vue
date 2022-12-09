<template>
  <div>
    <img src="~/assets/images/undraw_not_found.svg" class="image -responsive _margin-x:auto">
    <h4 class="_text-align:center">
      {{ text ?? 'Žiadne návody sa nenašli.' }}
    </h4>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  text?: string
}>()
</script>
