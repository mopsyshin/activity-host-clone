<template>
  <div class="card product-item" @click="toProductDetail">
    <div class="product-type"
      :class="{ 'ticket': productContent.productType === 'ticket',
      'class': productContent.productType === 'class'}">
      {{ productContent.productType == 'class' ? '클래스' : '' }}
      {{ productContent.productType == 'ticket' ? 'E-티켓' : '' }}
    </div>
    <div class="product-title">
      {{ productContent.productName }}
    </div>
    <div class="blank-8"></div>
    <div class="product-info" v-if="productContent.productType === 'ticket'">
      미사용 : {{ unUsedCount }}명 /
      취소신청 : {{ cancelRequestCount }}명
    </div>
    <div class="product-info" v-if="productContent.productType === 'class'">
      진행확정 : {{ confirmCount }}건 /
      미확정 : {{ inProgressCount }}건 /
      진행불가 : {{ cancelCount }}건
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductListItem',
  props: ['productContent'],
  computed: {
    unUsedCount() {
      return this.findTicketState('un-used');
    },
    cancelRequestCount() {
      return this.findTicketState('cancel-request');
    },
    confirmCount() {
      return this.findClassState('confirm');
    },
    cancelCount() {
      return this.findClassState('cancel');
    },
    inProgressCount() {
      return this.findClassState('in-progress');
    },
  },
  methods: {
    toProductDetail() {
      if (this.productContent.productType === 'ticket') {
        this.$router.push({ name: 'productDetail', params: { id: this.productContent.productId } });
      } else if (this.productContent.productType === 'class') {
        this.$router.push({ name: 'classList', params: { id: this.productContent.productId } });
      }
    },
    findTicketState(el) {
      let count = 0;
      const path = this.productContent.reservation;
      for (let i = 0; i < path.length; i += 1) {
        if (path[i].state === el) {
          count += 1;
        }
      }
      return count;
    },
    findClassState(el) {
      let count = 0;
      const path = this.productContent.classItem;
      for (let i = 0; i < path.length; i += 1) {
        if (path[i].state === el) {
          count += 1;
        }
      }
      return count;
    },
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.product-item {
  padding: 10px 16px;
  .product-type {
    font-size: 0.8rem;
    font-weight: 700;
    &.ticket {
      color: $color-ticket;
    }
    &.class {
      color: $color-class;
    }
  }
  .product-title {
    font-size: 1rem;
    font-weight: 700;
  }
  .product-info {
    font-size: 0.8rem;
  }
}
</style>
