<template>
  <div class="card container-class-list-item">
    <div class="header flex-container flex-align-center-between"
        :class="{ 'confirm': content.state === 'confirm',
                  'in-progress': content.state === 'in-progress',
                  'cancel': content.state === 'cancel', }"
        @click="toClassDetail">
      <div class="title">
        {{ content.classItemName }}
      </div>
      <div class="state">
        {{ content.state === 'confirm' ? '진행 확정' : null }}
        {{ content.state === 'in-progress' ? '모집중' : null }}
        {{ content.state === 'cancel' ? '진행 불가' : null }}
      </div>
    </div>
    <div class="class-info">
      <div class="info-form flex-container">
        <div class="label">
          예약인원
        </div>
        <div class="value">
          {{ content.classReservation.length }}명
          <span>
            (최소인원 {{ content.minimumNumber }}명)
          </span>
        </div>
      </div>
      <div class="info-form flex-container">
        <div class="label">
          시간
        </div>
        <div class="value">
          {{ content.classTime }}
        </div>
      </div>
    </div>
    <div class="wrapper-btn-set flex-container flex-align-center-between"
          v-if="!(content.state === 'cancel')">
      <button class="btn-negative"
              v-if="content.state === 'confirm'">
        임의 취소
      </button>
      <button class="btn-positive"
              v-if="content.state === 'in-progress'">
        진행 확정
      </button>
    </div>
    <div class="caption"
          v-if="content.state === 'in-progress'">
      진행 확정을 하지 않으면, 최소인원 미달 시 자동으로 진행 불가처리됩니다.
    </div>
  </div>
</template>

<script>
export default {
  props: ['content'],
  methods: {
    toClassDetail() {
      this.$router.push({ name: 'classDetail', params: { classid: this.content.classId } });
    },
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.container-class-list-item {
  padding: 0 0 8px;
  margin-top: 16px;
  .header {
    color: $white;
    background-color: $active-blue;
    padding: 14px 16px;
    font-weight: 700;
    font-size: 1rem;
    &.confirm {
      background-color: $active-blue;
    }
    &.in-progress {
      background-color: $color-class;
    }
    &.cancel {
      background-color: $cancel-red;
    }
    .state {
      font-size: 0.8rem;
    }
  }
  .class-info {
    padding: 8px 0px;
    font-size: 0.8rem;
    .info-form {
      padding: 4px 16px;
      .label {
        min-width: 68px;
        color: $light-grey2;
      }
      .value {
        &.positive {
          color: $active-blue;
        }
        &.negative {
          color: $cancel-red;
        }
        span {
          color: $text-caption;
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
      &.btn-negative {
        color: $point-red;
      }
      &.btn-positive {
        color: $active-blue;
      }
    }
  }
  .caption {
    color: $text-caption;
    font-size: 0.75rem;
    padding: 8px 16px;
  }
}

</style>
