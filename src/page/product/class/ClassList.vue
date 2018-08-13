<template>
  <div class="container-product-detail container-sub-page">
    <detail-header :option="headerOption"/>
    <ClassListItem v-for="classItem in classItems"
                    :key="classItem.index"
                    :content="classItem"/>
    <transition name="rtl" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import DetailHeader from '@/commons/components/gnb/DetailHeader';
import ClassListItem from './components/ClassListItem';

export default {
  data() {
    return {
      headerOption: {
        mainMessage: '필라테스 몸매관리필라테스 몸매관리필라테스 몸매관리',
        subMessage: '서울동물원',
        type: 'class',
      },
    };
  },
  computed: {
    classInfo() {
      return this.$store.state.account.hosts.find(this.findHost).product.find(this.findClass);
    },
    classItems() {
      return this.classInfo.classItem;
    },
  },
  methods: {
    findHost(el) {
      return el.hostName === this.$route.params.hostname;
    },
    findClass(el) {
      return el.productType === 'class';
    },
  },
  components: {
    DetailHeader,
    ClassListItem,
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.container-product-detail {
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  top: 0;
  left: 0;
  z-index: 20;
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
