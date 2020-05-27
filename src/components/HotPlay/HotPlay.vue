<template>
  <div>
    <van-panel title="当前打印机:0005BF7350022B00" >
          <van-button size="small" type="danger" style="position: absolute;top: 8px;right: 7px;">去设置</van-button>
    </van-panel>
    <van-panel title="销售方信息:广州得实信息科技有限公司" class="two" >
    </van-panel>
    <GouInfo/>
    <ShopInfo/>
    <XiaoshouInfo/>

  </div>
</template>

<script>
import XiaoshouInfo from '../XiaoshouInfo/XiaoshouInfo'
import GouInfo from '../GouInfo/GouInfo'
import ShopInfo from '../ShopInfo/ShopInfo'
import { Panel,Lazyload, SwipeItem,Swipe ,Button,Field,Cell,Switch,Dialog,Stepper } from 'vant';
export default {
  name:'hotPlay',
  data(){
    return{

    }
  },
  methods:{
    openWxTikect(){
       Dialog.confirm({
        title: '提醒',
        message: '已开启微信开票',
      }).then(() => {
        this.getWxInfo()
      });
    },
    //拿到微信抬头信息
    getWxInfo(){
      const  order ={
          text:'广州得实电子科技有限公司',
          tel:'91440116786095979F',
          digit:'15078097896',
          number:'10012013',
          address:'广州高新技术产业开发区科学城南翔三路46号',
          password:'广州建设银行元岗分行',
      }
      this.order = order
    }
  },
  components:{
    XiaoshouInfo,ShopInfo,
    GouInfo,
    [Panel .name]:Panel,
    [Button.name]:Button,
    [Field .name]:Field,
    [Cell.name]:Cell
  }
}
</script>

<style  scoped>
img{
  height:227px;
  width:100%;
}
.my-swipe .van-swipe-item {
  height: 168px;
    width: 100%;
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .two .van-panel__content{
    padding:0 10px;
    /* height: 300px; */
    overflow: scroll;
  }
  .hot-news-list{
    font-size: 14px;
  }
  .news-item{
    margin-top:5px;
  }
.news-item p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 95%;
}
</style>
