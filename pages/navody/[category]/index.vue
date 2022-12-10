<template>
  <div>
    <i-header id="cover-header" cover class="_text-align:center _color:white _background:primary">
      <h1>Návody</h1>
      <p>Potrebujete s niečím pomôcť? Skúste vyhľadať Váš problém:</p>
      <i-input v-model="searchInput" placeholder="Spýtajte sa niečo..." size="lg">
        <template #append>
          <i-button color="success">
            Vyhľadať
          </i-button>
        </template>
      </i-input>
    </i-header>
    <i-container class="_margin-bottom:5">
      <i-row>
        <i-column>
          <i-breadcrumb class="_margin-top:2">
            <i-breadcrumb-item :to="'/navody'" @click="$router.push('/navody')">
              Kategórie
            </i-breadcrumb-item>
            <i-breadcrumb-item active :to="`/navody/${currentCategory.slug}`" @click="$router.push(`/navody/${currentCategory.slug}`)">
              {{ currentCategory.title }}
            </i-breadcrumb-item>
          </i-breadcrumb>
        </i-column>
      </i-row>
      <i-row class="_margin-bottom:1">
        <i-column>
          <h2 class="_margin-top:0">
            {{ currentCategory.title }}
          </h2>
        </i-column>
      </i-row>
      <i-row v-if="categoryTutorials.length" middle center>
        <i-column
          v-for="tutorial in categoryTutorials"
          :key="tutorial.id"
          xs="12"
          md="6"
          lg="4"
          xl="3"
        >
          <i-card @click="router.push(`/navody/${currentCategory.slug}/${tutorial.slug}`)">
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
      <i-row v-else center middle>
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
const searchInput = useState('searchInput', () => '')
const categories = useCategories()
const currentCategory = categories.value.find(category => category.slug === route.params.category)
const tutorials = useTutorials()
const categoryTutorials = tutorials.value.filter(tutorial => tutorial.category === currentCategory.slug)

useHead({
  title: `Smelo | ${currentCategory.title}`
})
</script>
