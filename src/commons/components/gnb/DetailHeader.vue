<template>
  <div class="container-detail-header">
    <div class="detail-header flex-container flex-align-center-between">
      <div class="left-side">
        <div class="flex-container flex-align-center">
          <button class="btn-back" @click="toProductList"
                  v-if="option.type === 'ticket' || option.type === 'class'">
            <img src="@/assets/images/icn-back.svg">
          </button>
          <button class="btn-back" @click="toClassList"
                  v-if="option.type === 'classdetail'">
            <img src="@/assets/images/icn-back.svg">
          </button>
          <button class="btn-back" @click="toNotice"
                  v-if="option.type === 'noticedetail'">
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
      <div class="right-side">
        <img src="@/assets/images/icn-refresh.svg">
      </div>
    </div>
    <div class="button-set two-button flex-container flex-align-center"
          v-if="option.type === 'ticket'">
      <div class="wrapper-button">
        <button class="btn-search" @click="toggleSearchPage">
          <img src="@/assets/images/icn-search.svg" alt="">
          <div class="label">검색</div>
        </button>
      </div>
      <div class="wrapper-button" @click="toggleCalendar">
        <button class="btn-calendar">
          <img src="@/assets/images/icn-calendar.svg" alt="">
          <div class="label">{{ selectedDate }}</div>
        </button>
      </div>
    </div>
    <div class="button-set flex-container flex-align-center"
          v-if="option.type === 'class'">
      <div class="wrapper-button" @click="toggleCalendar">
        <button class="btn-calendar">
          <img src="@/assets/images/icn-calendar.svg" alt="">
          <div class="label">{{ selectedDate }}</div>
        </button>
      </div>
    </div>
    <div class="button-set flex-container flex-align-center"
          v-if="option.type === 'classdetail'">
      <div class="wrapper-button">
        <button class="btn-search" @click="toggleSearchPage">
          <img src="@/assets/images/icn-search.svg" alt="">
          <div class="label">검색</div>
        </button>
      </div>
    </div>
    <keep-alive>
      <transition name="calendar" appear>
        <Calendar @pickDate="setDate" v-show="calendarState"/>
      </transition>
    </keep-alive>
  </div>
</template>

<script>
import Calendar from '@/commons/components/calendar/Calendar';

export default {
  name: 'DetailHeader',
  props: ['option'],
  data() {
    return {
      selectedDate: '',
      calendarState: false,
    };
  },
  created() {
    this.initDate();
  },
  methods: {
    toggleCalendar() {
      this.calendarState = !this.calendarState;
    },
    initDate() {
      const newDate = new Date();
      const year = newDate.getFullYear();
      let month = newDate.getMonth() + 1;
      let date = newDate.getDate();
      month = this.numberToString(month);
      date = this.numberToString(date);
      this.selectedDate = `${year}-${month}-${date}`;
    },
    numberToString(el) {
      const value = el.toString();
      if (value.length === 1) {
        return `0${value}`;
      }
      return value;
    },
    toggleSearchPage() {
      this.$emit('toggleSearchPage');
    },
    toProductList() {
      this.$router.push({ name: 'product' });
    },
    toClassList() {
      this.$router.push({ name: 'classList', params: this.$route.params.id });
    },
    toNotice() {
      this.$router.push({ name: 'notice' });
    },
    setDate(value) {
      this.selectedDate = value;
      this.calendarState = false;
    },
  },
  components: {
    Calendar,
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.container-detail-header {
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
  .button-set {
    padding: 0px 8px;
    .wrapper-button {
      width: 100%;
      padding: 2px 8px 8px;
      &.two-button {
        width: 50%;
      }
      button {
        width: 100%;
        padding: 4px;
        background-color: $light-grey4;
        border-radius: 20px;
        font-size: 0.8rem;
        color: $text-sub;
        display: flex;
        align-items: center;
        justify-content: center;
        .label {
          padding-left: 8px;
        }
      }
    }
  }
}
</style>
