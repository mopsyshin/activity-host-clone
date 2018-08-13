<template>
  <div class="container-dashboard container-main-page">
    <gnb-header :option="headerOption"/>
    <div class="card">
      <div class="account-card flex-container flex-align-center-between">
        <div class="left-side">
          <div class="sub-message">개인호스트</div>
          <div class="main-message">서울동물원</div>
        </div>
        <div class="btn-change-account" @click="toggleChangeAccount">
          계정 전환
        </div>
      </div>
    </div>
    <div class="card">
      <div class="dashboard-card">
        <div class="card-title">
          판매현황
        </div>
        <div class="option-item">
          <div class="flex-container flex-align-center-between">
            <div class="option-label">
              어제
            </div>
            <div class="sell-number">
              1,000 건
            </div>
          </div>
          <div class="global-padding sell-number-large emphasys right">1,234,567,890 원</div>
        </div>
        <div class="option-item">
          <div class="flex-container flex-align-center-between">
            <div class="option-label">
              이번 주
            </div>
            <div class="sell-number">
              1,000 건
            </div>
          </div>
          <div class="global-padding sell-number-large right">1,234,567,890 원</div>
        </div>
        <div class="option-item">
          <div class="flex-container flex-align-center-between">
            <div class="option-label">
              이번 달
            </div>
            <div class="sell-number">
              1,000 건
            </div>
          </div>
          <div class="global-padding sell-number-large right">1,234,567,890 원</div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="dashboard-card">
        <div class="card-title">
          상품현황
        </div>
        <div>
          <div class="flex-container flex-align-center-between">
            <div class="horizontal-item">
              <div class="option-label">
                판매 중
              </div>
              <div class="sell-number-large">
                1,234
              </div>
            </div>
            <div class="horizontal-item">
              <div class="option-label">
                판매중지
              </div>
              <div class="sell-number-large">
                1,234
              </div>
            </div>
            <div class="horizontal-item">
              <div class="option-label">
                내일종료
              </div>
              <div class="sell-number-large">
                1,234
              </div>
            </div>
          </div>
        </div>
        <div class="blank-16"></div>
        <div class="card-title">
          예약현황 (최근 3일)
        </div>
        <div>
          <div class="flex-container flex-align-center-between">
            <div class="horizontal-item">
              <div class="option-label">
                신규예약
              </div>
              <div class="sell-number-large">
                1,234
              </div>
            </div>
            <div class="horizontal-item">
              <div class="option-label">
                전체예약
              </div>
              <div class="sell-number-large">
                1,234
              </div>
            </div>
            <div class="horizontal-item">
              <div class="option-label">
                취소신청
              </div>
              <div class="sell-number-large">
                1,234
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="page-up" mode="out-in" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import GnbHeader from '@/commons/components/gnb/GnbHeader';

export default {
  name: 'dashboard',
  data() {
    return {
      headerOption: {
        mainMessage: '대쉬보드',
        subMessage: '서울동물원',
        type: 'main-page',
      },
    };
  },
  methods: {
    toggleChangeAccount() {
      this.$router.push({ name: 'account' });
    },
  },
  components: {
    GnbHeader,
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.account-card {
  width: 100%;
  padding: 0px 16px;
  .left-side {
    max-width: calc(100vw - 140px);
  }
  .btn-change-account {
    color: $alert-red;
    font-size: 0.75rem;
  }
}
.dashboard-card {
  .option-item {
    padding: 8px 16px;
  }
  .sell-number {
    font-size: 0.85rem;
  }
  .horizontal-item {
    width: 33.3%;
    padding: 16px;
  }
  .sell-number-large {
    font-size: 1.15rem;
    margin-top: 0.2rem;
    font-weight: 700;
    &.emphasys {
      color: $active-blue;
    }
  }
}
</style>
