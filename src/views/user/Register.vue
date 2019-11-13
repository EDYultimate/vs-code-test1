<template>
  <div class="register">
    <div>
      <p>注册</p>
    </div>
    <div>
      <input type="text" placeholder="邮箱" />
    </div>
    <div>
      <input type="text" placeholder="至少六位密码，区分大小写" />
    </div>
    <div>
      <input type="text" placeholder="确认密码" />
    </div>
    <div class="phone">
      <select>
        <option value="+86">+86</option>
        <option value="+87">+87</option>
      </select>
      <input type="text" placeholder="手机号" />
    </div>
    <div class="email">
      <input type="text" placeholder="邮箱" />
      <button>获取验证码</button>
    </div>
    <div class="tabList">
      <button>注册</button>
      <router-link to="/user/login">使用已有账户登录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.marginB20 {
  margin-bottom: 20px;
}
a {
  text-decoration: none;
}
.register {
  width: 368px;
  margin: 0 auto;
}
.register > * {
  display: block;
  width: 100%;
}
.register > div {
  margin-bottom: 20px;
}
input,
select,
button {
  width: 100%;
  height: 40px;
  padding-left: 20px;
  border-radius: 3px;
  border: 1px solid #cccccc;
}
button {
  padding: 0;
  background-color: blueviolet;
}
.phone > input {
  width: 80%;
  border-radius: 0 3px 3px 0;
}
.phone > select {
  width: 20%;
  border-radius: 3px 0 0 3px;
}
.email {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.email > input {
  width: 70%;
}
.email > button {
  width: 25%;
  background-color: #ffffff;
  cursor: pointer;
}
.tabList{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.tabList>button{
    width: 50%;
    letter-spacing: 10px;
    color: #ffffff;
    font-size: 1em;
    cursor: pointer;
}
</style>