<template>
  <div id="app">
    <transition name="fade-out-in" mode="out-in" appear>
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@font-face {
  font-family: 'NotoSans';
  src: url('./assets/fonts/NotoSansKR/woff/NotoSansKR-Bold-Hestia.woff');
  font-weight: 700;
}
@font-face {
  font-family: 'NotoSans';
  src: url('./assets/fonts/NotoSansKR/woff/NotoSansKR-Regular-Hestia.woff');
  font-weight: 300;
}
@import './assets/css/variables.scss';
@import './assets/css/init.scss';
@import './assets/css/global.scss';
@import './assets/css/grid.scss';
@import './assets/css/animation.scss';
body {
  background-color: $light-grey4;
}
</style>
