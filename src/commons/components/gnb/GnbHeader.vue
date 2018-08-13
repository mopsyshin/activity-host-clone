<template>
  <div class="container-gnb-header">
    <div class="gnb-header-base flex-container flex-align-center-between">
      <div>
        <div v-if="getType === 'main-page'">
          <div class="sub-message">
            {{ option.subMessage }}
          </div>
          <div class="main-message">
            {{ option.mainMessage }}
          </div>
        </div>
        <div v-if="getType === 'host'">
          <div class="main-message">호스트계정 선택</div>
        </div>
      </div>
      <div>
        <div class="btn-logout" v-if="getType === 'host'" @click="logout">
          로그아웃
        </div>
        <img src="@/assets/images/icn-refresh.svg" alt=""
              v-if="getType === 'main-page' || getType === 'sub-page'">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GnbHeader',
  props: ['option'],
  computed: {
    getType() {
      if (this.option.type !== undefined) {
        return this.option.type;
      }
      return 'main-page';
    },
  },
  methods: {
    logout() {
      this.$router.push({ name: 'login' });
    },
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.container-gnb-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: $white;
  border-bottom: $light-border;
  z-index: 10;
  .gnb-header-base {
    height: 56px;
    padding: 0px 16px;
  }
  .btn-logout {
    color: $alert-red;
    font-size: 0.8rem;
  }
}
</style>
