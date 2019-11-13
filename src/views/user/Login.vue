<template>
  <div class="login">
    <div class="tabList">
      <div>
        <div :class="[isLoginByAccount ? 'active' : '']" @click="loginByAccount">账户密码登录</div>
      </div>
      <div>
        <div :class="[isLoginByPhone ? 'active' : '']" @click="loginByPhone">手机号登录</div>
      </div>
    </div>
    <div class="inputList">
      <div v-if="isLoginByAccount">
        <input type="text" placeholder="用户名" />
        <input type="text" placeholder="密码" />
      </div>
      <div v-if="isLoginByPhone">
        <input type="text" placeholder="手机号" />
        <div class="yzm">
          <input type="text" placeholder="验证码" />
          <button>获取验证码</button>
        </div>
      </div>
      <p>
        <span>
          <input type="checkbox" /> 自动登录
        </span>
        <span>
          <a href>忘记密码</a>
        </span>
      </p>
      <button>登 录</button>
      <p>
        <span>
          其他登录方式
          <img src="../../assets/logo.png" />
          <img src="../../assets/logo.png" />
          <img src="../../assets/logo.png" />
        </span>
        <span>
          <router-link to="/user/register">注册账户</router-link>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isLoginByAccount: true,
      isLoginByPhone: false
    };
  },
  methods: {
    loginByAccount: function() {
      this.isLoginByAccount = true;
      this.isLoginByPhone = false;
    },
    loginByPhone: function() {
      this.isLoginByPhone = true;
      this.isLoginByAccount = false;
    }
  }
};
</script>

<style scoped>
* {
  transition: all 0.3s, border-width 0s;
}
a {
  text-decoration: none;
}
.active {
  color: slateblue;
  border-bottom: 3px solid slateblue;
}
.login {
  width: 368px;
  /* background-color: skyblue; */
  margin: 0 auto;
}
.tabList {
  display: flex;
}
.tabList > div {
  flex: 1;
  padding: 0 10px;
}
.tabList > div > div {
  text-align: center;
  height: 60px;
  line-height: 60px;
}
.tabList > div > div:hover {
  cursor: pointer;
}
.inputList {
  padding: 20px 0;
}
.inputList > div > input {
  display: block;
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  padding-left: 20px;
  border-radius: 3px;
  border: 1px solid #cccccc;
}
.inputList > div > input:hover,
.yzm > input:hover,
.yzm > button:hover {
  border-color: slateblue;
}
.inputList > div > input:focus,
.yzm > input:hover,
.yzm > button:hover {
  border-color: slateblue;
  box-shadow: 0 0 4px 0 skyblue;
}
.yzm {
  display: flex;
  justify-content: space-between;
}
.yzm > input {
  width: 70%;
  height: 40px;
  margin-bottom: 20px;
  padding-left: 20px;
  border-radius: 3px;
  border: 1px solid #cccccc;
}
.yzm > button {
  width: 25%;
  height: 40px;
  margin-bottom: 20px;
  border-radius: 3px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  cursor: pointer;
}
.inputList > p {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.inputList > p > span > img {
  width: 30px;
  border-radius: 50%;
  margin-left: 10px;
  border: 1px solid #ffffff;
  cursor: pointer;
}
.inputList > p > span {
  display: flex;
  align-items: center;
}
.inputList > button {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  border-radius: 3px;
  border: 1px solid #cccccc;
  background-color: slateblue;
  color: #ffffff;
  font-size: 1em;
  letter-spacing: 10px;
  cursor: pointer;
}
.inputList > button:hover {
  background-color: rgb(49, 35, 143);
}
</style>