<template>
  <div class="container-noti container-main-page">
    <TabHeader/>
    <transition  name="fade-out-in" mode="out-in">
      <router-view class="container-noti-page"></router-view>
    </transition>
  </div>
</template>
<script>
import TabHeader from './components/TabHeader';

export default {
  components: {
    TabHeader,
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.container-noti {
  padding: 56px 0px;
  .container-noti-page {
    position: absolute;
    width: 100vw;
  }
}
</style>
