<template>
  <div>
    <i-header id="cover-header" cover class="_text-align:center _color:white">
      <h1>S&M Online</h1>
      <p>Naučme sa nebáť na internete</p>
      <tutorial-searchbar />
      <i-row style="margin-top: 3rem" class="_margin-bottom:2">
        <i-column>
          <i-alert size="lg" color="info" to="/navody">
            <template #icon>
              <i-icon name="ink-info" />
            </template>
            <div class="_display:flex _justify-content:space-between">
              <p>Neviete kde začať? Kliknite sem a prevedieme Vás.</p>
              <i-button to="/navody/1/1" outline color="light" class="fake">
                Poďme na to
              </i-button>
            </div>
          </i-alert>
        </i-column>
      </i-row>
    </i-header>
    <i-container class="_margin-top:6">
      <i-row middle>
        <i-column xs="12" md="6">
          <div class="_padding-x:4">
            <img src="~/assets/images/undraw_grandma.svg" alt="babka" class="image -responsive">
          </div>
        </i-column>
        <i-column xs="12" md="6">
          <p>Milý seniori, vzhľadom na to ako sa naša digitálna krajina neustále vyvíja, nie vždy môže byť pre Vás jednoduché udržať krok a plne sa tak zapojiť do moderného sveta. Našou hlavnou úlohou je Vám ukázať a zároveň poskytnúť znalosti, vďaka ktorým sa budete môcť bezpečne a jednoducho pohybovať v digitálnom svete.</p>
        </i-column>
      </i-row>
      <i-row middle center class="_margin-bottom:1 _margin-top:2">
        <i-column>
          <i-button to="/o-nas" color="primary" size="lg" class="fake">
            Zistiť viac
          </i-button>
        </i-column>
      </i-row>
      <i-row middle center>
        <i-column xs="12">
          <h2 class="_margin-bottom:2">
            Vybrané návody
          </h2>
        </i-column>
        <i-column v-for="tutorial in tutorials.slice(0,3)" :key="tutorial.id" xs="12" md="6" lg="4">
          <i-card class="card-y" @click="$router.push(`/navody/${tutorial.category}/${tutorial.slug}`)">
            <template #image>
              <img :src="tutorial.image" alt="Card Image" class="card-image">
            </template>
            <h4 class="card-title">
              {{ tutorial.title }}
            </h4>
            <p class="card-subtitle">
              {{ tutorial.author }}
            </p>
            <p>
              {{ tutorial.summary }}
            </p>
          </i-card>
        </i-column>
      </i-row>
      <i-row middle center class="_margin-bottom:3 _margin-top:2">
        <i-column>
          <i-button to="/navody" color="primary" size="lg">
            Zobraziť všetky
          </i-button>
        </i-column>
      </i-row>
    </i-container>
  </div>
</template>

<script setup lang="ts">
const tutorials = useTutorials()
</script>

<style lang="scss" scoped>
#cover-header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://inkline.io/assets/moonlight.a60c7cc7.jpg');
  height: calc(500px + 100px);
}
</style>
