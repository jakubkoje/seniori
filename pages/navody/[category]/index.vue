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
            <i-breadcrumb-item to="/navody">
              Kategórie
            </i-breadcrumb-item>
            <i-breadcrumb-item active :to="`/navody/${$route.params.category}`">
              {{ $route.params.category }}
            </i-breadcrumb-item>
          </i-breadcrumb>
        </i-column>
      </i-row>
      <i-row class="_margin-bottom:1">
        <i-column>
          <h2 class="_margin-top:0">
            Doprava
          </h2>
        </i-column>
      </i-row>
      <i-row middle center>
        <i-column xs="12" md="6" lg="3">
          <i-card @click="$router.push('/navody/1/1')">
            <template #image>
              <img src="~/assets/images/public-transport.jpg" alt="Card Image" class="card-image">
            </template>
            <h4 class="card-title">
              Ako nájsť čas odchodu autobusu
            </h4>
            <p class="card-subtitle">
              cp.hnonline.sk
            </p>
            <p>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </i-card>
        </i-column>
      </i-row>
    </i-container>
  </div>
</template>

<script lang="ts" setup>
const searchInput = useState('searchInput', () => '')
</script>
