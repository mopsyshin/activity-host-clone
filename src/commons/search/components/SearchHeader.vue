<template>
  <div class="container-search-header" :style="{ 'z-index': option.zIndex }">
    <div class="detail-header flex-container flex-align-center-between">
      <div>
        <div class="flex-container flex-align-center">
          <button class="btn-back" @click="back">
            <img src="@/assets/images/icn-back.svg">
          </button>
          <div>
            <div class="sub-message">
              {{ option.subMessage }}
            </div>
            <div class="main-message">
              {{ option.mainMessage }}
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="@/assets/images/icn-refresh.svg">
      </div>
    </div>
    <div class="wrapper-input-search flex-container flex-align-center-between">
      <div class="left-item flex-container flex-align-center-between">
        <div class="icn-search flex-container flex-align-center">
          <img src="@/assets/images/icn-search.svg">
        </div>
        <input class="input-search" type="text"
              placeholder="예약자명, 예약번호 혹은 연락처 뒷 4자리"
              v-model="searchText">
      </div>
      <div class="btn-search" :class="{ disabled: searchText === '' }">
        검색
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['option'],
  data() {
    return {
      searchText: '',
    };
  },
  methods: {
    back() {
      this.$emit('back');
    },
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.container-search-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: $white;
  border-bottom: $light-border;
  z-index: 30;
  .detail-header {
    height: 56px;
    padding: 0px 16px;
  }
  .btn-back {
    height: 32px;
    padding-right: 16px;
    img {
      position: relative;
      top: 3px;
    }
  }
  .wrapper-input-search {
    padding: 8px 16px 8px;
    .left-item {
      width: calc(100% - 50px);
      .icn-search {
        width: 28px;
        height: 28px;
      }
      input {
        padding-left: 8px;
        width: 100%;
        font-size: 0.75rem;
        &::placeholder {
          color: $text-caption;
        }
      }
    }
    .btn-search {
      font-size: 0.85rem;
      color: $active-blue;
      &.disabled {
        color: $text-disabled;
      }
    }
  }
}
</style>
