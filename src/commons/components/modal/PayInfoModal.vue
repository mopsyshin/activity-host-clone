<template>
  <div class="container-pay-info-modal">
      <div class="wrapper-modal">
        <div class="wrapper-form">
          <div class="form-pay-info flex-container flex-align-center-between"
                v-if="productPrice">
            <div class="label">상품가격</div>
            <div>{{ productPrice }}원</div>
          </div>
          <div class="form-pay-info flex-container flex-align-center-between"
                v-if="couponDC">
            <div class="label">쿠폰할인</div>
            <div>-{{ couponDC }}원</div>
          </div>
          <div class="form-pay-info flex-container flex-align-center-between"
                v-if="pointDC">
            <div class="label">포인트할인</div>
            <div>-{{ pointDC }}원</div>
          </div>
        </div>
        <div class="bar"></div>
        <div class="wrapper-form">
          <div class="form-pay-info emphasys flex-container flex-align-center-between"
                v-if="payPrice">
            <div class="label">결제금액</div>
            <div>{{ payPrice }}원</div>
          </div>
          <div class="form-pay-info emphasys flex-container flex-align-center-between"
                v-if="refundPrice">
            <div class="label">환불금액</div>
            <div class="refund">{{ refundPrice }}원</div>
          </div>
          <div class="form-pay-info emphasys flex-container flex-align-center-between"
                v-if="refundPoint">
            <div class="label">포인트환불</div>
            <div class="refund">{{ refundPoint }}원</div>
          </div>
        </div>
        <div class="wrapper-button">
          <button class="confirm" @click="closePayInfoModal">확인</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productPrice: false,
      couponDC: false,
      pointDC: false,
      payPrice: false,
      refundPrice: false,
      refundPoint: false,
    };
  },
  mounted() {
    this.mappingInfo();
  },
  methods: {
    mappingInfo() {
      const obj = this.$store.state.ui.payInfo.payload;
      this.productPrice = this.addCommas(obj.productPrice);
      this.couponDC = this.addCommas(obj.couponDC);
      this.pointDC = this.addCommas(obj.pointDC);
      this.payPrice = this.addCommas(obj.payPrice);
      this.refundPrice = this.addCommas(obj.refundPrice);
      this.refundPoint = this.addCommas(obj.refundPoint);
    },
    addCommas(x) {
      if (typeof x === 'number') {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return false;
    },
    closePayInfoModal() {
      this.$store.commit({
        type: 'togglePayInfoModalState',
      });
    },
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.container-pay-info-modal {
  position: fixed;
  z-index: 70;
  width: 100vw;
  height: 100vh;
  top: 0%;
  left: 0%;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper-modal {
    z-index: 80;
    border-radius: 8px;
    background-color: $white;
    width: calc(100vw - 48px);
    .wrapper-button {
      padding: 8px 16px 16px;
      button {
        width: 100%;
        background-color: $button-bg-main;
        color: $white;
        padding: 12px;
        border-radius: 8px;
      }
    }
    .bar {
      width: 100%;
      height: 1px;
      background-color: $light-grey3;
    }
    .wrapper-form {
      padding: 16px;
    }
    .form-pay-info {
      padding: 4px 0px;
      font-size: 0.85rem;
      &.emphasys {
        font-weight: 700;
        font-size: 1rem;
      }
      .label {
        color: $light-grey2;
      }
      .refund {
        color: $cancel-red;
      }
    }
  }
}
</style>
