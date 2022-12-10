<template>
  <i-layout>
    <i-layout-header>
      <i-navbar collapse="sm">
        <i-navbar-brand to="/">
          <div class="_text:center">
            <h4 class="_margin:0">
              Smelo
            </h4>
            <h6 class="_margin:0">
              online
            </h6>
          </div>
        </i-navbar-brand>
        <i-navbar-collapsible>
          <i-nav class="nav">
            <i-nav-item to="/navody">
              Návody
            </i-nav-item>
            <i-nav-item to="/o-nas" class="fake">
              O projekte
            </i-nav-item>
            <i-nav-item style="font-size: calc(var(--font-size) * 1.5)" @click="increaseFontsize">
              A<sup>+</sup>
            </i-nav-item>
            <i-nav-item @click="decreaseFontsize">
              A<sup>-</sup>
            </i-nav-item>
          </i-nav>

          <i-nav-item>
            <i-button color="primary" class="_width:100%">
              Stiahnuť rozšírenie
            </i-button>
          </i-nav-item>
        </i-navbar-collapsible>
      </i-navbar>
    </i-layout-header>
    <i-layout-content>
      <slot />
    </i-layout-content>
    <i-layout-footer>
      <div class="_background:gray-70 _color:white _padding:1 _text:center">
        <p>Vytvorené cez hackathon.</p>
      </div>
    </i-layout-footer>
  </i-layout>
</template>

<script lang="ts" setup>
const increaseFontsize = () => {
  const root = getComputedStyle(document.documentElement)
  const currentSize = parseFloat(root.getPropertyValue('--font-size'))
  console.log(currentSize)
  document.documentElement.style.setProperty('--font-size', `${currentSize + 0.1}rem`)
}

const decreaseFontsize = () => {
  const root = getComputedStyle(document.documentElement)
  const currentSize = parseFloat(root.getPropertyValue('--font-size'))
  console.log(currentSize)
  document.documentElement.style.setProperty('--font-size', `${currentSize - 0.1}rem`)
}
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  font-weight: bold;
}

.nav {
  cursor: pointer;
}
</style>
