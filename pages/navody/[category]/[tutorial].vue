<template>
  <div>
    <i-header
      cover
      class="_text-align:center _color:white _background:primary"
      :style="`background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${currentTutorial.image});`"
    >
      <h1>{{ currentTutorial.title }}</h1>
      <h4>Vytvorené v spolupráci s {{ currentTutorial.author }}</h4>
    </i-header>
    <i-container class="_margin-bottom:3">
      <i-row>
        <i-column>
          <i-breadcrumb class="_margin-top:2">
            <i-breadcrumb-item to="/navody">
              Kategórie
            </i-breadcrumb-item>
            <i-breadcrumb-item :to="`/navody/${currentCategory.slug}`">
              {{ currentCategory.title }}
            </i-breadcrumb-item>
            <i-breadcrumb-item active :to="`/navody/${currentCategory.slug}/${currentTutorial.slug}`">
              {{ currentTutorial.title }}
            </i-breadcrumb-item>
          </i-breadcrumb>
        </i-column>
      </i-row>
      <i-row>
        <i-column v-if="currentTutorial.content.length" xs="8">
          <div v-for="content in currentTutorial.content" :id="content.slug" :key="content.id">
            <div v-if="content.type === 'paragraph'">
              <h2 class="_margin-top:0">
                {{ content.title }}
              </h2>
              <p>
                {{ content.text }}
              </p>
            </div>
            <div v-if="content.type === 'ordered-list'">
              <h2 class="_margin-top:0">
                {{ content.title }}
              </h2>
              <ol>
                <li v-for="item in content.text" :key="item">
                  {{ item }}
                </li>
              </ol>
            </div>
            <div v-if="content.type === 'questions'">
              <h2>{{ content.title }}</h2>
              <ul>
                <li v-for="question in content.questions">
                  <div>
                    <p>{{ question.question }}</p>
                    <i-input v-model="question.answer" placeholder="Zadajte odpoved..." @input="question.answered = false">
                      <template #append>
                        <i-button color="primary" @click="question.answered = true">
                          Skontrolovať
                        </i-button>
                      </template>
                    </i-input>
                    <i-alert v-if="question.answered && question.answers.includes(question.answer)" class="_margin-y:1" color="success">
                      Správna odpoveď.
                    </i-alert>
                    <i-alert v-if="question.answered && !question.answers.includes(question.answer)" class="_margin-y:1" color="warning">
                      Nesprávna odpoveď.
                    </i-alert>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </i-column>
        <i-column v-else xs="8">
          <not-found text="Tento návod je zatiaľ prázdny." />
        </i-column>
        <i-column xs="4">
          <i-list-group>
            <i-list-group-item class="_text:bold">
              Obsah
            </i-list-group-item>
            <i-list-group-item v-for="content in currentTutorial.content" :key="content.id">
              <a :href="`#${content.slug}`">{{ content.title }}</a>
            </i-list-group-item>
          </i-list-group>
          <i-list-group class="_margin-top:4">
            <i-list-group-item class="_text:bold">
              Odporúčané aplikácie
            </i-list-group-item>
            <i-list-group-item v-for="recommended in currentTutorial.recommended" :key="recommended.id">
              <a :href="recommended.url">{{ recommended.url }}</a>
            </i-list-group-item>
          </i-list-group>
        </i-column>
      </i-row>
    </i-container>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const categories = useCategories()
const currentCategory = categories.value.find(category => category.slug === route.params.category)

const tutorials = useTutorials()
const currentTutorial = tutorials.value.find(tutorial => tutorial.slug === route.params.tutorial)

useHead({
  title: `Seniori | ${currentTutorial.title}`
})
</script>

<style lang="scss" scoped>
</style>
