<template>
  <div class="container-notice-detail container-sub-page">
    <detail-header :option="headerOption"/>
    <div class="body">
      {{ body }}
    </div>
    <div class="date">
      {{ date }}
    </div>
  </div>
</template>

<script>
import DetailHeader from '@/commons/components/gnb/DetailHeader';

export default {
  data() {
    return {
      headerOption: {
        mainMessage: '필라테스 몸매관리',
        subMessage: '서울동물원',
        type: 'noticedetail',
      },
      body: '스타트업 업계에 있다보면, ‘풀스택 개발자’ 라는 개념/지시어/호칭(?)을 자주 접하게 된다. 하지만 그 단어를 자주 접하는 것에 비해, 당사자를 접하는 경우는 극히 드문데다가 사실 사람마다 정의도 다양하다. 혹자는 MEAN스택을 활용한 서버와 클라이언트단을 고루 활용할 수 있는 개발자라 하고, 또다른 사람은 거기에 주요 모바일 플랫폼 (안드로이드/iOS) 의 어플리케이션까지 모두 구현할 수 있어야 한다는 무시무시한 주장을 하기도 한다. 이쯤되면 존재하는지조차 의심하게되는 존재라고 할 수 있다.',
      date: '2018-05-15 14:24:13',
    };
  },
  components: {
    DetailHeader,
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.container-notice-detail {
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: $white;
  box-shadow: -2px 0px 16px rgba(0,0,0,0.2);
  .body {
    font-size: 1rem;
    line-height: 1.9;
    color: $dark-grey2;
  }
  .date {
    margin-top: 16px;
    font-size: 0.85rem;
    color: $dark-grey1;
  }
}
</style>
