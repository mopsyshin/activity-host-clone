<template>
  <div class="container-main-view">
    <gnb-footer/>
    <transition name="fade-out-in" mode="out-in" appear>
      <router-view></router-view>
    </transition>
    <transition name="fade-out-in" appear>
      <PayInfoModal v-if="payInfoModalState"/>
    </transition>
    <transition name="opacity" mode="out-in" appear>
      <div class="dim" v-if="payInfoModalState"></div>
    </transition>
  </div>
</template>

<script>
import GnbFooter from '@/commons/components/gnb/GnbFooter';
import PayInfoModal from '@/commons/components/modal/PayInfoModal';

export default {
  computed: {
    payInfoModalState() {
      return this.$store.state.ui.payInfoModalState;
    },
  },
  components: {
    GnbFooter,
    PayInfoModal,
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.container-main-view {
  color: $text-main;
}
.dim {
  position: fixed;
  z-index: 60;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.2);
}
</style>
