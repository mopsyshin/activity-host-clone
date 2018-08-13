<template>
  <div class="container-notification">
    <div class="notification-item flex-container flex-align-center-between"
        v-for="item in notifications"
        :key="item.index">
      <div>
        <div class="title">
          {{ item.title }}
        </div>
        <div class="blank-8"></div>
        <div class="date">
          {{  item.date }}
        </div>
      </div>
      <div>
        <div class="new" v-if="item.new">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notifications: [
        {
          title: '청담 필라테스 4시 클래스가 마감되었습니다.',
          date: '2018-05-14 13:24:22',
          new: true,
        },
        {
          title: '청담 필라테스 4시 클래스가 마감되었습니다.',
          date: '2018-05-14 13:24:22',
          new: true,
        },
        {
          title: '청담 필라테스 4시 클래스가 마감되었습니다.',
          date: '2018-05-14 13:24:22',
          new: false,
        },
        {
          title: '청담 필라테스 4시 클래스가 마감되었습니다.',
          date: '2018-05-14 13:24:22',
          new: false,
        },
        {
          title: '청담 필라테스 4시 클래스가 마감되었습니다.',
          date: '2018-05-14 13:24:22',
          new: false,
        },
      ],
    };
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.notification-item {
  width: 100%;
  background-color: $white;
  border-bottom: 1px solid $light-grey4;
  padding: 16px 24px;
  .title {
    font-size: 0.9rem;
  }
  .date {
    font-size: 0.75rem;
    color: $light-grey2;
  }
  .new {
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background-color: $active-blue;
  }
}
</style>
