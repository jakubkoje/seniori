<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
:root {
    --color--primary--h: 195deg;
    --color--primary--s: 77%;
    --color--primary--l: 39%;
    --font-size: 1rem;
}

header.header {
  height: 472px;
}

.card-image {
  aspect-ratio: 4/3;
  object-fit: cover;
}

.card {
  cursor: pointer;
}

.card:hover {
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

html {
  scroll-behavior: smooth;
}

.fake {
  opacity: 0.3;
  pointer-events: none;
  cursor: default;
}

.card-y {
  margin: 1rem 0;
}
</style>
