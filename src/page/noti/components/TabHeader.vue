<template>
  <div class="container-tab-header flex-container">
    <div class="tab-item flex-container flex-align-center"
        :class="{ 'active': currentTab === tabItem }"
        v-for="tabItem in tabItems"
        :key="tabItem.index"
        @click="selectTab(tabItem)">
      {{ tabItem === 'notification' ? '알림' : null }}
      {{ tabItem === 'notice' ? '공지' : null }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabItems: [
        'notification',
        'notice',
      ],
      currentTab: 'notification',
    };
  },
  methods: {
    selectTab(tabItem) {
      this.currentTab = tabItem;
      this.$router.push({ name: tabItem });
    },
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.container-tab-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 56px;
  background-color: $white;
  border-bottom: 1px solid $light-grey4;
  .tab-item {
    width: 50%;
    font-weight: 700;
    border-bottom: 4px solid $white;
    color: $text-hint;
    &.active {
      border-bottom: 4px solid $text-main;
      color: $text-main;
    }
  }
}
</style>
