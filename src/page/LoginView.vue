<template>
  <div class="container-login">
    <div class="wrapper-logo flex-container flex-align-center">
      <img src="@/assets/images/logo.svg" alt="">
    </div>
    <div class="wrapper-login-input">
      <input type="email" placeholder="admin@within.co.kr" autocomplete="nope">
      <input type="password" placeholder="password" autocomplete="nope">
      <div class="caption">
        {{ inputCaption }}
      </div>
    </div>
    <div class="wrapper-login-button">
      <button @click="login">로그인</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputCaption: '일치하는 정보가 없습니다',
    };
  },
  methods: {
    login() {
      this.$router.push({ name: 'account' });
    },
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.container-login {
  background-color: $white;
  min-height: 100vh;
  .wrapper-logo {
    width: 100%;
    padding: 80px 0px 50px;
  }
  .wrapper-login-input {
    width: 100%;
    padding: 0px 24px;
    input {
      font-size: 16px;
      margin-top: 16px;
      width: 100%;
      padding: 15px 8px;
      border: none;
      border-bottom: 1px solid $light-grey3;
      transition: all 0.3s;
      &::placeholder {
        color: $light-grey3;
      }
      &:focus {
        border-bottom: 1px solid $button-bg-main;
      }
    }
    .caption {
      margin-top: 8px;
      font-size: 12px;
      color: $alert-red;
    }
  }
  .wrapper-login-button {
    padding: 16px 24px;
    margin-top: 16px;
    button {
      color: $white;
      background-color: $button-bg-main;
      border-radius: 8px;
      width: 100%;
      height: 48px;
      font-weight: 700;
    }
  }
}
</style>
