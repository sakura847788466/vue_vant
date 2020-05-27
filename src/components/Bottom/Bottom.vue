<template>
    <div class="my-bar flex">
        <ul class="bar" data-id='0' @click="handleClick(0)" ref="data">
          <div class="bar-img">
            <img :src="index==0?require('../../assets/home_on.png'):require('../../assets/home.png')" alt="">
          </div>
          <div :class="index==0?'bar-text heightL':'bar-text old_c'">首页</div>
        </ul>
        <ul class="bar" data-id='1' @click="handleClick(1)" ref="data">
          <div class="bar-img">
             <img :src="index==1?require('../../assets/recruit_on.png'):require('../../assets/recruit.png')" alt="">
          </div>
          <div :class="index==1?'bar-text heightL':'bar-text old_c'">机型</div>
        </ul>
        <ul class="bar" >
          <div class="bar-img printer" @click="printf">
             <img :src="true?require('../../assets/publish.png'):require('../../assets/publish.png')" alt="">
          </div>
          <div class="bar-text" style="margin-top: 16px;width: 83px;font-size: 20px;">打印</div>
        </ul>
        <ul class="bar" data-id='3' @click="handleClick(2)" ref="data">
          <div class="bar-img">
             <img :src="index==2?require('../../assets/msg_on.png'):require('../../assets/msg.png')" alt="">
          </div>
          <div :class="[index==2?'bar-text heightL':'bar-text old_c']">商品</div>
        </ul>
        <ul class="bar"  @click="handleClick(3)" ref="data">
          <div class="bar-img">
             <img :src="index==3?require('../../assets/me_on.png'):require('../../assets/me.png')" alt="">
          </div>
          <div :class="[index==3?'bar-text heightL':'bar-text old_c']">我的</div>
        </ul>

    </div>
</template>

<script>
import {Dialog,Notify } from 'vant'
export default {
  name: 'bottom',
  data(){
    return{
      index:0
    }
  },
  methods:{
    handleClick(num){
      let currentId = num
      switch(currentId){
        case 0 :
          this.index=currentId
          this.$router.push({path:'/home/shouye'})
          break;
        case 1:
          this.index=currentId
          this.$router.push({path:'/home/bindPrint'})

          break;
        case 2:
          this.index=currentId
          this.$router.push({path:'/home/shopList'})
          break;
        case 3:
          this.index=currentId
           this.$router.push({path:'/home/mine'})
          break;
      }
    },
    printf(){
       Dialog.confirm({
        title: '提醒',
        message: '是否打印发票',
      }).then(() => {
          Notify({ type: 'success', message: '打印成功' });
      });
    }
  },
  components:{
    [Dialog.name]:Dialog,
    [Notify.name]:Notify
  }
}
</script>

<style scoped>
.my-bar {
  position:fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  background: #fff;
  border-top: 1px solid #f2f2f2;
  z-index: 9999;

}
.flex{
  display: flex;
}
.bar{
  flex:1;
  flex-direction: column;
  display: flex;
  justify-content: center;


}
.heightL{
  color:#03a9f4;
}
.old_c{
color: #999;
}
.bar-img{
  display:inline-block;
}
.printer{
      position: absolute;
      top: -18px;
      left: 46%;
      margin-left: -25px;
      width: 83px;
      height: 40px;
      background: #fff;
      border-radius: 100%;
      border-top: 1px solid #f2f2f2;

}
.bar-img img {
display: block;
width: 23px;
height: 23px;
margin: 0 auto;

}

.bar-text {
font-size: 11px;
line-height: 1;
text-align: center;
padding-top: 4px;

}

</style>
