<template>
  <div class="container-product container-main-page">
    <gnb-header :option="headerOption"/>
    <div class="card product-list-summary">
      <div class="card-title">
        판매중 상품 4건
      </div>
      <div class="caption-block">
        예약을 확인할 상품을 선택하세요
      </div>
    </div>
    <ProductListItem v-for="productContent in productContents"
                    :productContent="productContent"
                    :key="productContent.productId"/>
    <transition name="rtl" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import GnbHeader from '@/commons/components/gnb/GnbHeader';
import ProductListItem from './components/ProductListItem';

export default {
  data() {
    return {
      headerOption: {
        mainMessage: '예약/취소 관리',
        subMessage: '서울동물원',
        type: 'main-page',
      },
    };
  },
  computed: {
    productContents() {
      return this.$store.state.account.hosts.find(this.findHost).product;
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
    GnbHeader,
    ProductListItem,
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.product-list-summary {
  padding: 8px 0px;
}
</style>
