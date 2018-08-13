<template>
  <div class="container-gnb-footer flex-container flex-align-container">
    <div class="footer-gnb-item"
      @click="toRouter(gnbItem)"
      v-for="gnbItem in gnbItemList"
      :key="gnbItem.key">
      <img :src='"@/assets/images/gnb-" + gnbItem + "-active.svg"'
      :class="{active: gnbItem === currentTab}">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gnbItemList: [
        'dashboard',
        'product',
        'noti',
      ],
      currentTab: '',
    };
  },
  watch: {
    $route() {
      this.routeCheck();
    },
  },
  mounted() {
    this.routeCheck();
  },
  methods: {
    routeCheck() {
      const routeName = this.$route.name;
      if (routeName === 'dashboard' || routeName === 'product' || routeName === 'noti') {
        this.currentTab = routeName;
      }
    },
    toRouter(targetUrl) {
      const hostName = this.$route.params.hostName;
      this.$router.push({ name: targetUrl, params: { hostName } });
      this.currentTab = targetUrl;
    },
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.container-gnb-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 48px;
  border-top: $light-border;
  z-index: 30;
  background-color: $white;
  .footer-gnb-item {
    width: 33.3%;
    display: flex;
    justify-content: center;
    img {
      opacity: 0.4;
      filter: grayscale(1);
      transition: all 0.3s;
      &.active {
        opacity: 1;
        filter: grayscale(0);
      }
    }
  }
}
</style>
