<template>
    <div class="container">
          <Top/>
          <div class="web-login">
            <div class="logo">
              <img src="../../assets/logo.png">
            </div>
          <div class="login-form">
              <van-form >
                    <van-field
                      v-model.trim="login.userMobile"
                      name="用户名"
                      label="用户名"
                      left-icon="manager-o"
                      placeholder="请输入手机号"
                    />
                    <van-field
                      v-model.trim="login.passWord"
                      :type="showState?'number':'password'"
                      name="密码"
                      label="密码"
                      placeholder="请输入密码"
                      left-icon="bag-o"
                      @click-right-icon='showPassword'
                      :right-icon="showState?'eye-o':'closed-eye'"
                    />
                      <div style="margin: 16px;">
                        <van-button round block type="info"  @click="goLogin">
                          登录
                        </van-button>
                      </div>
               </van-form>
          <ul class="subline">
              <li><a  @click="register" style="color:#00BCD4;" >立即注册</a></li>
              <li class="pull-right" style="color:#00BCD4;"><a >找回密码</a></li>
         </ul>
          </div>
          </div>
    </div>
</template>

<script>
import { Form,Field,Button,Toast,Notify } from 'vant';
import Top from '../../components/Top/Top'
import {getSendSMS, checkSendSMS} from "../../api/login";
  import {messageMinxins} from '../../mixins'
  import {verificationPhone, verificationPassword, generateBsse64} from '../../util/tool'
  import {mapMutations,mapActions, mapState} from 'vuex'
export default {
  name:'login',
  data(){
    return{
      login: {
          userMobile: '13686035300',
          passWord: '123456...',
        },
        sms:'',
        showState:''
    }
  },
  mounted(){
    const test = {
       ceshi:'11',
       enen:'22'
    }
  },
  methods: {
    ...mapActions('user',['goToLogin']),
    register(){
      this.$router.push({path:'/register'})
    },
    showPassword(){
      this.showState=!this.showState
    },
      //点击登录按钮
    goLogin() {
        if (this.venLogin(this.login)) {
          const data = generateBsse64(this.login)
          this.goToLogin({data})
            .then(res => {
              Notify({ type: 'success', message: res.data })
              this.$router.push({path:'/home/shouye'})
            })
            .catch(err=>{
              Notify({ type: 'success', message: res.data })
            })
        }

      },
      //登录验证
         venLogin(data) {
        const {userMobile, passWord} = data
        if (userMobile && passWord) {
          if (!verificationPhone(userMobile)) {
            Toast('请输入正确的手机号')
            return false
          }
          if (!verificationPassword(passWord)) {
            Toast('请输入8-16位的字符，必须包含两种组合：字母，数字，特殊符号')
            return false
          }
        } else {
          Toast('error', '请输入手机号和密码')
          return false
        }
        return true
      },
  },
  computed:{
    ...mapState(['user'])
  },

  components:{
    [Form.name]:Form,
    [Field.name]:Field,
    [Button.name]:Button,
    Top,[Toast.name]:Toast,
    [Notify.name]:Notify
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
</style>
