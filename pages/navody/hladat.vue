<template>
  <div>
    <i-header id="cover-header" cover class="_text-align:center _color:white _background:primary">
      <h1>Návody</h1>
      <p>Potrebujete s niečím pomôcť? Skúste vyhľadať Váš problém:</p>
      <tutorial-searchbar />
    </i-header>
    <i-container class="_margin-bottom:5">
      <i-row class="_margin-bottom:1">
        <i-column>
          <h2 class="">
            Výsledky vyhľadávania pre: {{ searchInput }}
          </h2>
        </i-column>
      </i-row>
      <i-row v-if="searchResults.length" middle center>
        <i-column
          v-for="tutorial in searchResults"
          :key="tutorial.id"
          xs="12"
          md="6"
          lg="4"
          xl="3"
        >
          <i-card :class="tutorial.fake ? 'fake' : ''" @click="router.push(`/navody/${tutorial.category}/${tutorial.slug}`)">
            <template #image>
              <img :src="tutorial.image" alt="Card Image" class="card-image">
            </template>
            <h4 class="card-title">
              {{ tutorial.title }}
            </h4>
            <p class="card-subtitle">
              {{ tutorial.author }}
            </p>
          </i-card>
        </i-column>
      </i-row>
      <i-row v-else middle center>
        <i-column>
          <not-found />
        </i-column>
      </i-row>
    </i-container>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const router = useRouter()
const tutorials = useTutorials()

const searchInput = computed(() => decodeURI(route.query.q as string))

const searchResults = computed(() => {
  return tutorials.value.filter(tutorial => tutorial.title.toLowerCase().includes(searchInput.value.toLowerCase()))
})

useHead({
  title: 'Smelo | Vyľadávanie'
})

</script>
