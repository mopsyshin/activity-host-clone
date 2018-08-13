<template>
  <div class="container-class-detail container-sub-page">
    <detail-header :option="headerOption" @toggleSearchPage="toggleSearchPage"/>
    <div class="card product-detail-tab three-item-type flex-container flex-align-center">
      <div class="tab-item center" v-for="item in tabItems"
        :key="item.key"
        @click="item.state = !item.state">
        <div :class="{ active: item.state }">{{ item.label }}</div>
        <div :class="{ active: item.state }">{{ item.count }}</div>
      </div>
    </div>
    <ReservationCard :type="'un-used'"/>
    <ReservationCard :type="'cancel-request'"/>
    <ReservationCard :type="'cancel-confirm'"/>
    <transition name="rtl" appear>
      <SearchPage v-if="searchState" @toggleSearchPage="toggleSearchPage"/>
    </transition>
  </div>
</template>

<script>
import SearchPage from '@/commons/search/SearchPage';
import DetailHeader from '@/commons/components/gnb/DetailHeader';
import ReservationCard from '../../components/ReservationCard';

export default {
  data() {
    return {
      searchState: false,
      headerOption: {
        mainMessage: '콩콩이 PC방',
        subMessage: '서울동물원',
        type: 'classdetail',
      },
      tabItems: [
        {
          label: '미사용',
          count: 40,
          state: false,
          value: 'un-used',
        },
        {
          label: '취소요청',
          count: 50,
          state: false,
          value: 'cancel-request',
        },
        {
          label: '취소완료',
          count: 21,
          state: false,
          value: 'cancel-confirm',
        },
      ],
    };
  },
  computed: {
    payInfoModalState() {
      return this.$store.state.ui.payInfoModalState;
    },
  },
  methods: {
    toggleSearchPage() {
      this.searchState = !this.searchState;
    },
    getContent() {
    },
  },
  components: {
    DetailHeader,
    ReservationCard,
    SearchPage,
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';


.container-class-detail {
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  top: 0;
  left: 0;
  z-index: 30;
  background-color: $light-grey4;
  box-shadow: -2px 0px 16px rgba(0,0,0,0.2);
  .product-detail-tab {
    padding: 4px 0px;
    &.three-item-type {
      .tab-item {
        width: 33.3%;
        font-size: 0.8rem;
        div {
          opacity: 0.4;
          &.active {
            color: $active-blue;
            opacity: 1;
          }
        }
      }
    }
    &.two-item-type {
      .tab-item {
        width: 50%;
        font-size: 0.9rem;
        div {
          opacity: 0.4;
          &.active {
            color: $active-blue;
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
