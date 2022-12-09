<template>
  <div>
    <i-header id="cover-header" cover class="_text-align:center _color:white _background:primary">
      <h1>Návody</h1>
      <p>Potrebujete s niečím pomôcť? Skúste vyhľadať Váš problém:</p>
      <tutorial-searchbar />
    </i-header>
    <i-container class="_margin-bottom:5">
      <i-row>
        <i-column>
          <i-breadcrumb class="_margin-top:2">
            <i-breadcrumb-item active to="/navody">
              Kategórie
            </i-breadcrumb-item>
          </i-breadcrumb>
        </i-column>
      </i-row>
      <i-row class="_margin-bottom:1">
        <i-column>
          <h2 class="_margin-top:0">
            Kategórie
          </h2>
        </i-column>
      </i-row>
      <i-row v-if="categories.length" middle center>
        <i-column
          v-for="category in categories"
          :key="category.id"
          xs="12"
          md="6"
          lg="4"
          xl="3"
        >
          <i-card @click="$router.push(`/navody/${category.slug}`)">
            <template #header>
              <h4>
                {{ category.title }}
              </h4>
            </template>

            Some quick example text to build on the card title and make up the bulk of the card's content.
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
const categories = useCategories()
</script>
