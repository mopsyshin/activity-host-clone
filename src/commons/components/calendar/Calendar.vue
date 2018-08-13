<template>
  <div class="container-calendar">
    <div class="month-picker flex-container flex-align-center-between">
      <div @click="toPrevMonth">
        <img src="@/assets/images/cal-before.svg">
      </div>
      <div class="month">
        {{ year }}년 {{ month }}월
      </div>
      <div @click="toNextMonth">
        <img src="@/assets/images/cal-next.svg">
      </div>
    </div>
    <div class="day-picker">
      <div class="wrapper-day-names flex-container">
        <div class="item-day-name flex-container flex-align-center"
              v-for="day in dayNames"
              :key="day.index">
          <div>
           {{ day }}
          </div>
        </div>
      </div>
      <div class="wrapper-dates">
        <DateItem class="item-date"
            v-for="(dateNum, index) in dates"
            :key="dateNum.index"
            @selectDay="selectDay"
            :index="index"
            :content="dateNum"
            :date="date"
            :month="month"
            :year="year"
            :disableList="disableList"/>
      </div>
    </div>
    <div class="btn-confirm flex-container flex-align-center" @click="confirm">
      확인
    </div>
  </div>
</template>

<script>
import DateItem from './components/DateItem';

export default {
  data() {
    return {
      dayNames: [
        '일', '월', '화', '수', '목', '금', '토',
      ],
      dates: [],
      selectedDay: '',
      year: null,
      month: null,
      date: null,
      day: null,
      dayFirst: null,
      dayLength: null,
      disableList: [
        '2018-05-15', '2018-05-16', '2018-05-17', '2017-12-01',
      ],
    };
  },
  computed: {
    prevMonth() {
      if (this.month !== null) {
        if (this.month === 1) {
          return 12;
        }
        return this.month - 1;
      }
      return null;
    },
    nextMonth() {
      if (this.month !== null) {
        if (this.month === 12) {
          return 1;
        }
        return this.month + 1;
      }
      return null;
    },
  },
  mounted() {
    this.initCalendar();
  },
  methods: {
    // 달력 최초 생성 메소드 모음입니다.
    initCalendar() {
      this.setToday();
      this.drawCalendar();
      this.initToday();
    },
    // 오늘 날짜를 세팅해 달력 출력기준을 만듭니다.
    setToday() {
      const newDate = new Date();
      this.year = newDate.getFullYear();
      this.month = newDate.getMonth() + 1;
      this.date = newDate.getDate();
      this.day = newDate.getDay();
      this.dayFirst = this.day - ((this.date - 1) % 7);
      if (this.dayFirst < 0) {
        this.dayFirst += 7;
      }
    },
    // 날짜 길이와 1일의 요일 기준으로 해당 월의 달력 배열을 만듭니다.
    drawCalendar() {
      this.dayLength = this.getDaysLength();
      this.dates = [];
      for (let i = 0; i < this.dayFirst % 7; i += 1) {
        this.dates.push('');
      }
      for (let i = 1; i < this.dayLength; i += 1) {
        this.dates.push(i);
      }
    },
    // 세팅된 현재 날짜 값을 string으로 변환해 넣어줍니다.
    initToday() {
      this.selectedDay = this.getFullDate(this.date);
    },
    // 현재 month 기준 날짜 길이를 리턴합니다.
    getDaysLength() {
      if (this.month === 4 || this.month === 6 || this.month === 9 || this.month === 11) {
        return 31;
      } else if (this.month === 2) {
        if (this.year % 4 === 0) {
          if (this.year % 100 === 0) {
            if (this.year % 400 === 0) {
              return 30;
            }
            return 29;
          }
          return 30;
        }
        return 29;
      }
      return 32;
    },
    toPrevMonth() {
      this.date = null;
      if (this.month === 1) {
        this.month = 12;
        this.year -= 1;
        const prevMonthLength = this.getDaysLength() - 1;
        this.dayFirst = 7 - ((prevMonthLength - this.dayFirst) % 7);
        this.drawCalendar();
      } else {
        this.month -= 1;
        const prevMonthLength = this.getDaysLength() - 1;
        this.dayFirst = 7 - ((prevMonthLength - this.dayFirst) % 7);
        this.drawCalendar();
      }
    },
    toNextMonth() {
      this.date = null;
      if (this.month === 12) {
        this.month = 1;
        this.year += 1;
        this.dayFirst = (this.dates.length % 7);
        this.drawCalendar();
      } else {
        this.month += 1;
        this.dayFirst = (this.dates.length % 7);
        this.drawCalendar();
      }
    },
    selectDay(dateNum) {
      this.date = dateNum;
      this.selectedDay = this.getFullDate(dateNum);
    },
    numberToString(el) {
      const value = el.toString();
      if (value.length === 1) {
        return `0${value}`;
      }
      return value;
    },
    isDisabled(dateNum) {
      const fullDate = this.getFullDate(dateNum);
      this.disableList.forEach(el => el === fullDate);
    },
    getFullDate(dateNum) {
      const month = this.numberToString(this.month);
      const date = this.numberToString(dateNum);
      const fullDate = `${this.year}-${month}-${date}`;
      return fullDate;
    },
    confirm() {
      this.$emit('pickDate', this.selectedDay);
    },
  },
  components: {
    DateItem,
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.container-calendar {
  box-shadow: $shadow-2;
  .month-picker {
    padding: 16px 24px;
    .month {
      font-weight: 700;
    }
  }
  .day-picker {
    padding-bottom: 16px;
    .wrapper-day-names {
      justify-content: space-around;
      .item-day-name {
        font-size: 0.8rem;
        height: 30px;
      }
    }
    .wrapper-dates {
      padding-top: 8px;
      display: flex;
      flex-wrap: wrap;
      .item-date {
        font-size: 0.85rem;
        width: calc(100% / 7);
        display: inline-block;
        line-height: 42px;
        text-align: center;
        font-weight: 700;
        div {
          width: 46px;
          height: 46px;
          margin: 0 auto;
          &:before {
            content: '';
            display: block;
            position: absolute;
            width: 46px;
            height: 46px;
            border-radius: 48px;
            background-color: $white;
            z-index: -1;
            transform: scale(0);
            opacity: 0;
            transition: all 0.2s;
          }
          &.holiday {
            color: $cancel-red;
          }
          &.active {
            color: $white;
            &:before {
              transform: scale(1);
              opacity: 1;
              background-color: $active-blue;
            }
          }
          &.disabled {
            color: $light-grey3;
          }
        }
      }
    }
  }
  .btn-confirm {
    width: 100%;
    height: 48px;
    background-color: $active-blue;
    color: $white;
    font-weight: 700;
  }
}

</style>
