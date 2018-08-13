<template>
  <div class="item-date" @click="selectDay">
    <div :class="{ 'holiday' : index % 7 === 0,
          'active' : content === currentDate && content !== '',
          'disabled' : disableState }">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['content', 'date', 'month', 'year', 'disableList', 'index'],
  data() {
    return {
      disableState: null,
    };
  },
  computed: {
    currentDate() {
      return this.date;
    },
    currentMonth() {
      return this.month;
    },
    currentYear() {
      return this.year;
    },
    currentDisableList() {
      return this.disableList;
    },
  },
  watch: {
    currentMonth() {
      this.isDisabled();
    },
  },
  mounted() {
    this.isDisabled();
  },
  methods: {
    isDisabled() {
      const fullDate = this.getFullDate(this.content);
      for (let i = 0; i < this.currentDisableList.length; i += 1) {
        if (this.currentDisableList[i] === fullDate) {
          this.disableState = true;
          return;
        }
        this.disableState = false;
      }
    },
    getFullDate(dateNum) {
      const month = this.numberToString(this.currentMonth);
      const date = this.numberToString(dateNum);
      const fullDate = `${this.currentYear}-${month}-${date}`;
      return fullDate;
    },
    numberToString(el) {
      const value = el.toString();
      if (value.length === 1) {
        return `0${value}`;
      }
      return value;
    },
    selectDay() {
      if (this.content !== '' && this.disableState === false) {
        this.$emit('selectDay', this.content);
      }
    },
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

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
</style>
