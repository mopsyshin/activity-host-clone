<template>
  <div class="container-account container-main-page">
    <gnb-header :option="headerOption"/>
    <div class="account-item" v-for="host in hostList" :key="host.index">
      <div class="flex-container flex-align-center-between">
        <div class="sub-message">{{ host.hostType }}</div>
        <div>
          <span class="btn-select-account" @click="selectHost(host.hostName)">선택</span>
        </div>
      </div>
      <div class="main-message">
        {{ host.hostName }}
      </div>
      <div class="caption">
        {{ host.product.length }}개의 액티비티 상품을 판매 중입니다.
      </div>
    </div>
  </div>
</template>
<script>
import GnbHeader from '@/commons/components/gnb/GnbHeader';

export default {
  data() {
    return {
      headerOption: {
        mainMessage: '호스트계정 선택',
        type: 'host',
      },
    };
  },
  computed: {
    hostList() {
      return this.$store.state.account.hosts;
    },
  },
  methods: {
    selectHost(hostName) {
      this.$router.push({ name: 'dashboard', params: { hostname: hostName } });
    },
  },
  components: {
    GnbHeader,
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.container-account {
  top: 0;
  left: 0;
  width: 100vw;
  position: fixed;
  z-index: 40;
  background-color: $light-grey4;
  .container-gnb-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: $white;
    border-bottom: $light-border;
    z-index: 45;
    .gnb-header-base {
      height: 56px;
      padding: 0px 16px;
    }
    .btn-logout {
      color: $alert-red;
      font-size: 0.8rem;
    }
  }
  .account-item {
    background-color: $white;
    width: 100%;
    border-radius: 4px;
    margin: 8px 0px;
    box-shadow: $shadow-2;
    padding: 16px;
    .caption {
      margin-top: 8px;
      font-size: 0.8rem;
    }
    .btn-select-account {
      font-size: 0.85rem;
      color: $active-blue;
    }
  }
}
</style>
