<template>
  <div>
    <div>
        <div class="top">
            <div class="topBox">
              <div class="user_img">
                  <van-image
                      round
                      width="100px"
                      height="100px"
                      src="https://img.yzcdn.cn/vant/cat.jpeg"
                    />
                    <span>{{this.userInfo.data.userMobile}}</span>
              </div>

              </div>
            <div class="banyuan"></div>
        </div>
    </div>
    <div class="itemList">
        <van-cell title="我的" is-link   icon="friends-o"/>
        <van-cell title="打印机" is-link  icon="logistics"/>
        <van-cell title="设置" is-link  icon="setting-o"/>
        <van-cell title="退出登录" is-link  icon="replay" @click="loginOut"/>


    </div>
  </div>
</template>

<script>
import {getMovieList} from '../../api/maoyan'
import { Toast,Cell, CellGroup,Button,Dialog,Notify,Image as VanImage} from 'vant';
import {mapState,mapMutations} from 'vuex'
export default {
  name:"mine",
  data(){
    return{

    }
  },
  mounted(){
    this.getMessByMaoYan()
  },
  methods:{
    ...mapMutations('user',['LOGIN_OUT']),
     onClickLeft() {
      Toast('返回');
    },
    // loginOut(){
    //   this.$router.push({path:'/login'})
    // }
    //点击退出登录
    loginOut () {
      Dialog.confirm({
        title: '提醒',
        message: '此操作将退出登录, 是否继续?',
      }).then(() => {
          Notify({ type: 'success', message: '退出成功！' });
        this.LOGIN_OUT()
        this.$router.push({path:'/login'})
      });

    },
    //测试获取猫眼电影接口
    getMessByMaoYan(){
      const data ={
        token:'',
        optimus_uuid: 'A7FA36F0982011EABF17150310767ABA3ECB6EE3F6FC4EA4A13FDD8E45C60CCB',
        optimus_risk_level: 71,
        optimus_code: 10
      }
      getMovieList(data).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    },
  },
  components:{
    [Toast .name]:Toast,
    [Cell.name]:Cell,
    [CellGroup.name]:CellGroup,
    [Button.name]:Button,
    [VanImage.name]:VanImage,
    [Dialog.name]:Dialog,
    [Notify.name]:Notify

  },
  computed:{
    ...mapState('user',['userInfo'])
  }
}
</script>

<style scoped>
.top{
      position: relative;
}
    .topBox{
      width:100%;
      height:200px;
      background: red;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .banyuan{
          width: 100%;
          height: 100px;
          background: red;
          border-radius: 50%;
          position: absolute;
          bottom: -48px;
          left: 0;
    }
    .itemList{
      margin-top:63px;
    }

    .user_img{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 23px;
      z-index: 100;
      color: #fff;
    }

</style>
