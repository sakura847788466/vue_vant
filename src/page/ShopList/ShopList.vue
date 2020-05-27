<template>
  <div class="container">
      <div class="shopList">
           <van-card v-for="(item,index) in this.goodsList" :key="index"
            :num="item.number"
            :tag="item.text"
            :price="item.price"
            :title="item.text"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            origin-price="10.00"
          >
           <template #footer>
            <van-button size="mini">删除</van-button>
          </template>
           </van-card>
      </div>

  </div>
</template>

<script>
import {Card,Button } from 'vant'
import {mapState} from 'vuex'
export default {
  name:'shopList',
  data(){
    return{
    }
  },
  mounted(){
    console.log(this.goodsList)
  },
  methods:{
    onClickLeft(){
      history.back();
    }
  },
  computed:{
    ...mapState('user',['goodsList'])
  },
  components:{
    [Card.name]:Card,
    [Button.name]:Button
  }
}
</script>

<style scoped>


</style>
