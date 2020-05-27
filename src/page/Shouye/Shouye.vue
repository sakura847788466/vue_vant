<template>
  <div>
    <van-panel title="当前打印机:0005BF7350022B00" >
          <van-button size="small" type="danger" style="position: absolute;top: 8px;right: 7px;">去设置</van-button>
    </van-panel>
    <van-panel title="销售方信息:广州得实信息科技有限公司" class="two" >
    </van-panel>
    <GouInfo ref="GouInfo"/>
    
    <ShopInfo ref="ShopInfo"/>
    <XiaoshouInfo ref="XiaoshouInfo"/>
    <InportInfo ref="InportInfo"/>
  </div>
</template>

<script>
import XiaoshouInfo from '../../components/XiaoshouInfo/XiaoshouInfo'
import GouInfo from '../../components/GouInfo/GouInfo'
import ShopInfo from '../../components/ShopInfo/ShopInfo'
import InportInfo from '../../components/InportInfo/InportInfo'
import { Panel,Lazyload, SwipeItem,Swipe ,Button,Field,Cell,Switch,Dialog,Stepper,Notify } from 'vant';
export default {
  name:'shouye',
  data(){
    return{

    }
  },
  mounted(){
    const GouInfo =  this.$refs.GouInfo.order
    const ShopInfo =this.$refs.ShopInfo.shop
    const XiaoshouInfo =this.$refs.XiaoshouInfo.order
    const AllInfo = {...GouInfo,...ShopInfo,...XiaoshouInfo}
    console.log(AllInfo)

  },
  methods:{




  },
  components:{
    XiaoshouInfo,ShopInfo,
    GouInfo,InportInfo,
    [Panel .name]:Panel,
    [Button.name]:Button,
    [Field .name]:Field,
    [Cell.name]:Cell,
    [Notify.name]:Notify
  },
  computed:{

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
