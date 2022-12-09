<template>
  <i-input v-model="searchInput" placeholder="Spýtajte sa niečo..." size="lg">
    <template #append>
      <i-button color="success" @click="$router.push(`/navody/hladat?q=${encodeURI(searchInput)}`)">
        Vyhľadať
      </i-button>
    </template>
  </i-input>
</template>

<script lang="ts" setup>
const route = useRoute()
const searchInput = useState('searchInput', () => route.query.q || '')
</script>
