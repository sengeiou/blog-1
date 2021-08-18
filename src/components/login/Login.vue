<template>
  <div class="login">
    <div class="container">
      <div class="form">
        <div class="wrapper">
          <p class="title">Log in</p>
          <div><input class="input" placeholder="请输入手机号" ref="phone" type="text"></div>
          <div><input class="input" placeholder="请输入密码" ref="password" type="text"></div>
        </div>
        <button class="button" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Login",
  methods: {
    login() {
      console.log("Login")
    }
  }
}
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: rgba(25, 25, 25, 0.04);
}
.container {
  height: calc(90vh - 40px - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.form {
  box-shadow: 3px 4px 25px 5px rgba(0, 0, 0, 0.1);
  width: 80%;
  border-radius: 4px;
  margin: 0 auto;
  background-color: #fff;
}
.wrapper {
  padding: 20px 20px 0 20px;
}
.title {
  display: block;
  font-family: Helvetica, "Open sans", sans-serif;
  color: #444;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0 30px 0;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
}
.input {
  font-size: 1.1rem;
  width: 100%;
  padding: 15px 10px;
  margin-bottom: 30px;
  border: 1px solid #ddd;
  color: #ccc;
  border-radius: 2px;
  transition: border-color 0.2s ease;
  outline: none;
}
.input:focus {
  color: #444;
  border-color: #2196F3;
}
.button {
  font-size: 1.2rem;
  width: 100%;
  color: white;
  background: #2196F3;
  border: 2px solid #2196F3;
  outline: none;
  padding: 10px;
  margin-top: 20px;
}
</style>