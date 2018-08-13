<template>
  <div class="card container-reservation-card">
    <div class="header flex-container flex-align-center-between"
        :class="{ 'un-used': type === 'un-used',
                  'cancel-request': type === 'cancel-request',
                  'cancel-confirm': type === 'cancel-confirm' }">
      <div>
        <p>예약번호</p>
        <p>58271903271</p>
      </div>
      <div>
        <div class="status-label"
            :class="{ 'cancel-request': type === 'cancel-request' }"
            v-if="type !== 'un-used'">
          {{ type === 'cancel-request' ? '취소요청' : '취소완료' }}
        </div>
      </div>
    </div>
    <div class="user-info">
      <div class="info-form flex-container">
        <div class="label">
          예약자
        </div>
        <div class="value">
          조알렌
        </div>
      </div>
      <div class="info-form flex-container">
        <div class="label">
          연락처
        </div>
        <div class="value">
          010-****-1521
        </div>
      </div>
    </div>
    <div class="wrapper-btn-set flex-container flex-align-center-between"
        :class="{ 'one-button' : type === 'un-used',
                  'two-button' : type === 'cancel-request'}"
        v-if="type !== 'cancel-confirm'">
      <button class="btn-use-all-ticket"
              @click="useAllTickets"
              v-if="type === 'un-used'">
        전체사용처리
      </button>
      <button class="btn-confirm-request"
              v-if="type === 'cancel-request'">
        취소처리
      </button>
      <button class="btn-deny-request"
              v-if="type === 'cancel-request'">
        취소요청반려
      </button>
    </div>
    <div class="list-ticket">
      <div class="ticket-item flex-container"
            v-for="ticket in tickets"
            :key="ticket.index">
        <div class="ticket-info flex-container flex-sort-column flex-v-align-center"
            :class="{ fullsize: type !== 'un-used' }">
          <p class="ticket-name">{{ ticket.ticketName }}</p>
          <p class="pin-number">{{ ticket.ticketId }}</p>
        </div>
        <button class="btn-use-ticket"
                :class="{ active: ticket.state, 'disabled': !ticket.state }"
                v-if="type === 'un-used'"
                @click="ticket.state = !ticket.state">
          {{ ticket.state ? '사용처리' : '사용됨' }}
        </button>
      </div>
    </div>
    <div class="pay-info flex-container flex-align-center-between"
          v-if="type !== 'cancel-confirm'"
          @click="togglePayInfoModal">
      <div class="info-form flex-container">
        <div class="label">
          결제금액
        </div>
        <div class="value">
          34,200원
        </div>
      </div>
      <div class="btn-more">
        <img src="@/assets/images/icn-more.svg" alt="">
      </div>
    </div>
    <div class="pay-info flex-container flex-align-center-between"
          v-if="type === 'cancel-confirm'"
          @click="togglePayInfoModal">
      <div>
        <div class="info-form flex-container">
          <div class="label">
            환불금액
          </div>
          <div class="value refund">
            34,200원
          </div>
        </div>
        <div class="info-form flex-container">
          <div class="label">
            포인트환불
          </div>
          <div class="value refund">
            34,200원
          </div>
        </div>
      </div>
      <div class="btn-more">
        <img src="@/assets/images/icn-more.svg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['type'],
  data() {
    return {
      tickets: [
        {
          state: true,
          ticketName: '삼성역점 / 1시간 이용권',
          ticketId: 'Ka2981Kasdfeoop',
        },
        {
          state: true,
          ticketName: '삼성역점 / 오후 3시 / 성인 / 락커 및 운동복 대여',
          ticketId: 'Ka2981Kasdfeo421',
        },
        {
          state: true,
          ticketName: '봉은사역점 / 1시간 이용권',
          ticketId: 'Ka2981Kasdfeo114',
        },
      ],
      payInfo: {
        productPrice: 44800,
        couponDC: 3000,
        pointDC: 2000,
        payPrice: 39800,
        refundPrice: 38700,
        refundPoint: 6000,
      },
    };
  },
  methods: {
    togglePayInfoModal() {
      this.$store.commit({
        type: 'togglePayInfoModalState',
        payload: this.payInfo,
      });
    },
    useAllTickets() {
      const arr = this.tickets;
      arr.forEach((e) => {
        e.state = false;
      });
    },
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.container-reservation-card {
  padding: 0 0 8px;
  .header {
    color: $white;
    background-color: $light-grey4;
    padding: 8px 16px;
    font-weight: 700;
    font-size: 0.85rem;
    &.un-used {
      background-color: $active-blue;
    }
    &.cancel-request {
      background-color: $cancel-red;
    }
    &.cancel-confirm {
      background-color: $light-grey3;
      color: $text-main;
    }
    .status-label {
      font-size: 0.75rem;
      border-radius: 2px;
      padding: 2px 6px;
      &.cancel-request {
        color: $cancel-red;
        background-color: $white;
      }
    }
  }
  .user-info, .pay-info {
    padding: 8px 0px;
    font-size: 0.8rem;
    .info-form {
      padding: 4px 16px;
      .label {
        min-width: 68px;
        color: $light-grey2;
      }
      .value {
        font-weight: 700;
        &.refund {
          color: $cancel-red;
        }
      }
    }
    .btn-more {
      padding-right: 16px;
    }
  }
  .wrapper-btn-set {
    padding: 0px 16px 8px;
    button {
      background-color: $light-grey4;
      border-radius: 30px;
      height: 36px;
      font-size: 0.9rem;
      width: 100%;
      color: $active-blue;
    }
    &.one-button {
      width: 100%;
    }
    &.two-button {
      button {
        width: 48%;
        &.btn-deny-request {
          color: $cancel-red;
        }
      }
    }
  }
  .list-ticket {
    .ticket-item {
      margin: 8px 0px;
      min-height: 68px;
      font-size: 0.85rem;
      border-bottom: 1px solid $light-grey4;
      border-top: 1px solid $light-grey4;
      .ticket-info {
        padding: 8px 16px;
        width: 75%;
        &.fullsize {
          width: 100%;
        }
        .pin-number {
          color: $text-caption;
        }
      }
      .btn-use-ticket {
        background-color: $light-grey4;
        width: 25%;
        font-size: 0.85rem;
        &.active {
          color: $active-blue;
        }
        &.disabled {
          color: $text-disabled;
        }
      }
    }
  }
}
</style>
