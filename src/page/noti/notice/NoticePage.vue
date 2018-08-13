<template>
  <div class="container-notice">
    <div class="notification-item flex-container flex-align-center-between"
        v-for="item in notice"
        :key="item.index"
        @click="toNoticeDetail(item)">
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
    <transition name="rtl">
      <router-view></router-view>
    </transition>
  </div>
</template>


<script>
export default {
  data() {
    return {
      notice: [
        {
          title: '여기어때 액티비티 호스트센터 모바일 오픈여기어때 액티비티 호스트센터 모바일 오픈여기어때 액티비티 호스트센터 모바일 오픈여기어때 액티비티 호스트센터 모바일 오픈',
          date: '2018-05-14 13:24:22',
          new: true,
          id: 'abc',
        },
        {
          title: '여기어때 액티비티 호스트센터 모바일 오픈',
          date: '2018-05-14 13:24:22',
          new: true,
          id: 'cde',
        },
        {
          title: '여기어때 액티비티 호스트센터 모바일 오픈',
          date: '2018-05-14 13:24:22',
          new: false,
          id: 'fgh',
        },
        {
          title: '여기어때 액티비티 호스트센터 모바일 오픈여기어때 액티비티 호스트센터 모바일 오픈여기어때 액티비티 호스트센터 모바일 오픈여기어때 액티비티 호스트센터 모바일 오픈',
          date: '2018-05-14 13:24:22',
          new: false,
          id: 'ijk',
        },
        {
          title: '여기어때 액티비티 호스트센터 모바일 오픈',
          date: '2018-05-14 13:24:22',
          new: false,
          id: 'lmn',
        },
      ],
    };
  },
  methods: {
    toNoticeDetail(item) {
      this.$router.push({ name: 'noticeDetail', params: { noticeId: item.id } });
    },
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
    margin-left: 16px;
    background-color: $active-blue;
  }
}
</style>
