<template>
	<div class="login WeirdBox">
		<h3 class="h3">登录</h3>
      <section class="InputArea" @click="focusInp">
         <p class="notice">手机号/邮箱/学习卡</p>
         <p class="cellName page-wrap">
            <input class="cellphone wrap-content username" type="text" v-model="param.phoneNum">
            <i v-if="param.phoneNum" class="cubeic-wrong cubeIcon" @click="clearPhoneNum"></i>
         </p>
      </section>
      <section class="InputArea" @click="focusPw">
         <p class="notice"><span>密码</span><span></span></p>
         <p class="cellName page-wrap">
            <input class="cellphone wrap-content password" type="text" v-model="param.password">
            <i v-if="param.password" class="cubeic-wrong cubeIcon" @click="clearPsw"></i>
         </p>
      </section>
      <p class="forgetPw">忘记密码</p>
      <button class="confirm" :class="{'btnBg': this.param.phoneNum&&this.param.password}" @click="confirm">登录</button>
      <p class="loginTxt">没有账号？立即注册</p>
	</div>
</template>

<script>
import { setCookie, } from "@/api/entry.js";

export default {
	data () {
		return {
			param: {
            phoneNum: '',//
            password: '',//
         }
		}
   },
	methods: {
      focusInp() {
         document.querySelector('.username').focus()
      },
      focusPw() {
         document.querySelector('.password').focus()
      },
      clearPhoneNum() {
         this.param.phoneNum = ''
      },
      clearPsw() {
         this.param.password = ''
      },
      confirm() {
         if (this.param.phoneNum&&this.param.password) {
            // alert('OK，带你去取钱^_^')
            setCookie('Bill Gates')
            this.$router.push({path: '/'})
         } else {
            alert('未经许可，不可擅入')
         }
      }
   },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*------------- 整个页面 -------------*/
.login{
	height: 100%;
   padding: 60px 40px 0;
   font-size: 12px;
}

h3.h3{
   font-size: 26px;
   font-weight: bold;
   margin-bottom: 60px;
}
/*------------- 手机号输入框 -------------*/
.InputArea{
   width: 100%;
   padding: 10px 0;
}
/*------------- 文字提示 -------------*/
.notice{
   margin: 10px 0;
   color: #5D5B5D;
   font-size: 12px;
}
.cellName{
   padding: 6px 0;
   border-bottom: 2px solid #f5f5f5;
}
.cellphone{
   height: 24px;
   margin-right: 10px;
}
.forgetPw{
   width: 100%;
   margin: 10px 0;
   text-align: right;
   color: #29B5EF;
   font-weight: bold;
}
.cubeIcon{
   font-size: 16px;
   color: rgb(180, 180, 180);
   margin: 0 10px;
}
/*------------- 确认按钮 -------------*/
.confirm{
   width: 100%;
   padding: 10px 0;
   background-color: #CCC;
   border: none;
   margin: 20px 0;
   border-radius: 4px;
   color: #FFF;
}
.btnBg{
   background-color: dodgerblue!important;
}
/*------------- 其他登录方式 -------------*/
.loginTxt{
   width: 100%;
   text-align: center;
   color: #29B5EF;
   font-weight: bold;
}
</style>