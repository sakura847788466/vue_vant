<template>
  <div>
    <van-card
        :num="item.num"
        :price="item.price"
        :desc="item.desc"
        :title="item.title"
        :thumb="item.thumb"
        v-for="(item,index) in shopList"  :key="index"
    >
    <template #tags>
      <van-tag plain type="danger">{{item.sign1}}</van-tag>
      <van-tag plain type="danger">{{item.sign2}}</van-tag>
    </template>
    <template #footer>
      <van-button size="mini">添加</van-button>
      <van-button size="mini">删除</van-button>
    </template>
   
      </van-card>
       <van-submit-bar
        disabled
        :price="3050"
        button-text="提交订单"
        tip="你的收货地址不支持同城送, 我们已为你推荐快递"
        tip-icon="info-o"
        @submit="onSubmit"
      />
  </div>
</template>

<script>
import { SubmitBar,Card,Tag, Button} from 'vant';

export default {
  name:'find',
  data(){
    return{
      shopList:[
        {
        num:2,
        price:2.00,
        desc:"这是一个很好的手机",
        title:"iphone11",
        thumb:"https://img.yzcdn.cn/vant/ipad.jpeg",
        sign1:'大气',
        sign2:'漂亮'
        }, {
        num:2,
        price:2.00,
        desc:"这是一个很好的手机",
        title:"iphone11",
        thumb:"https://img.yzcdn.cn/vant/ipad.jpeg",
        sign1:'大气',
        sign2:'漂亮'
        }, {
        num:2,
        price:2.00,
        desc:"这是一个很好的手机",
        title:"iphone11",
        thumb:"https://img.yzcdn.cn/vant/ipad.jpeg",
        sign1:'大气',
        sign2:'漂亮'
        }
      ]
    }
  },
  components:{
    [SubmitBar.name]:SubmitBar,
    [Card.name]:Card,
    [Tag.name]:Tag,
    [Button.name]:Button,
  },
  methods:{
    onSubmit(){

    }
  }
}
</script>

<style>

</style>
