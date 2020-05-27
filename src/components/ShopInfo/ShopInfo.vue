<template>
   <van-panel title="商品信息" class="there" style="padding: 12px;border-radius: 8px;width: 90%;margin: 0 auto;margin-top: 5px;" >
        <div class="container">
          <van-field v-model="shop.text" label="名称:"  />
          <van-field v-model="shop.unit" type="tel" label="单位:"  />
          <van-field  type="digit" label="数量:" v-model="shop.number" >
             <template #button>
                <van-stepper v-model="shop.number" />
            </template>
           </van-field>
          <van-field  type="number" label="单价:" v-model="shop.price" >
              <template #button>
                    <van-stepper v-model="shop.price" />
                </template>
          </van-field>
           <van-cell title="金额" :value="shop.price*shop.number" />
           <van-cell title="税率" :value="shop.digit" />
        </div>
        <!-- <van-cell :value="(shop.price*shop.number*(1-(shop.digit/100))).toFixed(2)+'元'" value-class='total' > -->
        <!-- 使用 title 插槽来自定义标题 -->
        <!-- <template #title> -->
          <!-- <span class="custom-title">税后</span> -->
          <!-- <van-tag type="danger">总金额</van-tag> -->
        <!-- </template> -->
      <!-- </van-cell> -->
      <van-submit-bar :price="shop.price*shop.number*(1-(shop.digit/100))*100" button-text="提交商品" style="position:relative;" @submit="onSubmit">
        <van-checkbox v-model="checked">全选</van-checkbox>
      </van-submit-bar>
    </van-panel>
</template>

<script>
import {Panel,Field,Cell,Button,Stepper,Tag,SubmitBar,Checkbox } from 'vant'
import { mapActions, mapMutations} from 'vuex'

export default {
  name:'shopInfo',
  data(){
    return{
      shop:{
          text:'电脑',
          unit:'台',
          digit:0.3,
          number:1,
          price:22,
      },
      checked:false,
      goodsList:[]
    }
  },
  mounted(){
  },
  methods:{
    ...mapActions('user',['saveGoodsInfo']),
    onSubmit(){
        this.goodsList.push(this.shop)
        console.log(this.goodsList)
        this.saveGoodsInfo(this.goodsList)
        
    }
  },
  components:{
       [Panel.name]:Panel,
       [Field.name]:Field,
       [Cell.name]:Cell,
       [Button.name]:Button,
       [Stepper.name]:Stepper,
       [Tag.name]:Tag,
       [SubmitBar.name]:SubmitBar,
       [Checkbox.name]:Checkbox

     }
}
</script>

<style scoped>
 .total{
   color:red;
 }

</style>
