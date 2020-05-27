<template>
    <div>
        <div class="container">
          <van-nav-bar
            title="用户注册"
            left-text="返回"
             @click-left="onClickLeft"
            left-arrow
          />
           <div class="web-login">
            <div class="logo">
              <img src="../../assets/logo.png">
            </div>
          <div class="login-form">
              <van-form >
                  <van-field
                    v-model.trim="register.userMobile"
                    name="用户名"
                    label="用户名"
                    placeholder="请输入手机号"
                  />
                  <van-field
                    v-model.trim="register.passWord"
                    :type="showState1?'text':'password'"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :right-icon="showState1?'eye-o':'closed-eye'"
                    @click-right-icon='showPassword1'
                  />
                   <van-field
                    v-model.trim="register.againPassword"
                    :type="showState?'text':'password'"
                    name="确认密码"
                    label="确认密码"
                    placeholder="请确认密码"
                    :right-icon="showState?'eye-o':'closed-eye'"
                    @click-right-icon='showPassword'

                  />
                  <!-- 注册验证码 -->
                    <van-field
                        v-model.trim="register.code"
                        center
                        clearable
                        label="短信验证码"
                         maxlength="6"
                        placeholder="请输入短信验证码"
                      >
                        <template #button>
                          <van-button size="small" type="primary" @click="getCode">{{computedTime>0?`${computedTime}s`:'验证码'}}</van-button>
                        </template>
                      </van-field>
                  <div style="margin: 16px;">
                        <van-button round block type="info" @click="goRegister" native-type="submit">
                          注册
                        </van-button>
                        <span class="toLogin" @click="toLogin">已有账号，去登陆</span>
                      </div>
               </van-form>
         </div>
           </div>
        </div>
    </div>
</template>

<script>
import { NavBar,Toast,Field,Form,Button } from 'vant';
import {verificationPhone, verificationPassword, generateBsse64} from '../../util/tool'
import {getSendSMS, checkSendSMS} from "../../api/login";
import {mapActions} from 'vuex'

export default {
  name:'register',
  data(){
    return{
      computedTime: 0,//验证码时间
       register: {
          code: '',
          userMobile: '15078097896',
          passWord: '123456aaa',
          againPassword: '123456aaa'
        },
        showState:'',
        showState1:''
    }
  },
  methods:{
    ...mapActions('user',['goToRegister']),

     onClickLeft() {
        history.back(); //返回上一页
    },
    toLogin(){
      this.$router.push({path:'/login'})
    },
    showPassword(){
      this.showState=!this.showState
    },
    showPassword1(){
      this.showState1=!this.showState1
    },
     //获取验证码
      async getCode() {
        //1.验证注册信息
        const isGetCode = this.venRegister('getCode')
        console.log(isGetCode)
        // if (!isGetCode) {
        //   return
        // }
        //2.生成发送验证码信息
        const {userMobile} = this.register
        const phoneInfo = {
          "templateId": "143707",
          "autograph": "得实云打印开票系统",
          "params": ["账号注册"],
          phone: userMobile
        }
        //3.生成倒计时
        this.computedTime = 30
        const intervalId = setInterval(() => {
          this.computedTime--
          if (this.computedTime <= 0) {
            //停止计时
            clearInterval(intervalId)
          }
        }, 1000);

        //4.发送验证码
        try {
          //发送ajax(向指定手机号发送)
          const result = await getSendSMS(phoneInfo)
          // 显示提示
          if (result.code == 0) {
            Toast('发送成功')
          } else {
            Toast('发送失败')
          }
        } catch (e) {
          Toast('验证次数已用完')
        }
      },
      //验证注册
      venRegister(type) {
        const {code, userMobile, passWord, againPassword} = this.register
        if (userMobile && passWord && againPassword) {
          if (!verificationPhone(userMobile)) {
            Toast ('请输入检查手机号')
            return false
          }
          if (!verificationPassword(passWord)) {
            Toast ('请输入8-16位的字符，必须包含两种组合：字母，数字，特殊符号')
            return false
          }
          if (passWord !== againPassword) {
            Toast ('请检查确认密码，两次密码不一致')
            return false
          }
        } else {
          Toast ('请检查输入，不能为空')
          console.log(999)
          return false
        }

        if (type === 'register') {
          if (code.length != 6) {
            Toast ('请检查验证码')
            return false
          }
        }
        return true
      },
   //点击注册
     async goRegister() {
        const {userMobile, passWord} = this.register
        //1.验证用户信息是否正确
        const isRegister = this.venRegister('register')
        if (isRegister) {
          //2.验证验证码是否正确
          const isCheckCode = await this.checkCode(this.register)
          if (isCheckCode) {
            //转base64
            const data = generateBsse64({userMobile, passWord})
            this.goToRegister({data})
              .then(res => {
                Toast(res.data)
                this.$router.push({path:'/home/shouye'})
              })
              .catch(err => {
                Toast( err.data)
              })
          } else {
            Toast('验证码不正确')
          }

        }

      },
      //验证注册
      venRegister(type) {
        const {code, userMobile, passWord, againPassword} = this.register
        if (userMobile && passWord && againPassword) {
          if (!verificationPhone(userMobile)) {
            Toast('请输入检查手机号')
            return false
          }
          if (!verificationPassword(passWord)) {
            Toast('请输入8-16位的字符，必须包含两种组合：字母，数字，特殊符号')
            return false
          }
          if (passWord !== againPassword) {
            Toast('请检查确认密码，两次密码不一致')
            return false
          }
        } else {
          Toast('请检查输入，不能为空')
          return false
        }

        if (type === 'register') {
          if (code.length != 6) {
            Toast('请检查验证码')
            return false
          }
        }
        return true
      },
      //获取验证码
      async getCode() {
        //1.验证注册信息
        const isGetCode = this.venRegister('getCode')
        if (!isGetCode) {
          return
        }
        //2.生成发送验证码信息
        const {userMobile} = this.register
        const phoneInfo = {
          "templateId": "143707",
          "autograph": "得实云打印开票系统",
          "params": ["账号注册"],
          phone: userMobile
        }
        //3.生成倒计时
        this.computedTime = 30
        const intervalId = setInterval(() => {
          this.computedTime--
          if (this.computedTime <= 0) {
            //停止计时
            clearInterval(intervalId)
          }
        }, 1000);

        //4.发送验证码
        try {
          //发送ajax(向指定手机号发送)
          const result = await getSendSMS(phoneInfo)
          // 显示提示
          if (result.code == 0) {
            Toast('发送成功')
          } else {
            this.myMessage('发送失败')
          }
        } catch (e) {
          this.myMessage('验证次数已用完')
        }
      },
      //验证验证码是否是正确
      async checkCode(data) {
        let flag = true
        const {userMobile, code} = data
        const codeInfo = {
          mobile: userMobile,
          verifcationCode: code
        }
        try {
          const result = await checkSendSMS(codeInfo)
          if (result.code != 0) {
            flag = false
          }
        } catch (e) {
          flag = false
        }
        return flag
      },
  },
  components:{
    [NavBar.name]:NavBar,
    [Toast.name]:Toast,
    [Field.name]:Field,
    [Form.name]:Form,
    [Button.name]:Button,
    [Toast.name]:Toast
  }
}
</script>

<style scoped>
  .web-login {
    font-size: 15px;
}
 .web-login .logo {
    margin: 79px auto 40px;
    text-align: center;
    height: 60px;
    line-height: 60px;
}
.web-login .logo img {
    height: 60px;
}
.subline {
    margin: 20px 16px;
    list-style-type: none;
}
.subline li {
    display: inline-block;
}
.toLogin{
    display: block;
    color: #00BCD4;
    text-align: right;
    text-decoration: underline;
    margin-top: 10px;
}
</style>
