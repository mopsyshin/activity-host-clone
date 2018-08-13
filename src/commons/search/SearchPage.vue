<template>
  <div class="container-search">
    <SearchHeader :option="headerOption" @back="toggleSearchPage"/>
    search
  </div>
</template>

<script>
import SearchHeader from '@/commons/search/components/SearchHeader';

export default {
  data() {
    return {
      headerOption: {
        mainMessage: '검색',
        subMessage: '필라테스 몸매관리',
        type: 'main-page',
        zIndex: 80,
      },
    };
  },
  methods: {
    toggleSearchPage() {
      this.$emit('toggleSearchPage');
    },
  },
  components: {
    SearchHeader,
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.container-search {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  z-index: 40;
  background-color: $light-grey4;
  box-shadow: -2px 0px 16px rgba(0,0,0,0.2);
}
</style>
