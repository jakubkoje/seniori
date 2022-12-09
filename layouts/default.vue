<template>
  <i-layout>
    <i-layout-header>
      <i-navbar collapse="sm">
        <i-navbar-brand to="/">
          S&M Online
        </i-navbar-brand>
        <i-navbar-collapsible>
          <i-nav>
            <i-nav-item to="/navody">
              Návody
            </i-nav-item>
            <i-nav-item to="/o-nas">
              O projekte
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
        <p>S láskou pre Vás vytvoril tím <strong>Pucwoll</strong></p>
      </div>
    </i-layout-footer>
  </i-layout>
</template>

<style lang="scss" scoped>
.router-link-exact-active {
  font-weight: bold;
}
</style>
