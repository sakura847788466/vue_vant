<template>
  <div class="container">
      <van-panel title="购票方信息" class="there" style="padding: 12px;border-radius: 8px;width: 90%;margin: 0 auto;margin-top: 5px;" >
        <div class="container">
          <van-field v-model="order.buyerName" label="购票方名称:" readonly />
          <van-field v-model="order.buyerTaxNum" type="tel" label="购票方税号:" readonly />
          <van-field v-model="order.buyerTel" type="digit" label="购票方电话:" readonly />
          <van-field v-model="order.buyerPhone" type="number" label="购票方手机:" readonly />
          <van-field v-model="order.buyerAddress" type="" label="购票方地址:" readonly />
          <van-field v-model="order.buyerAccount" type="" label="开户银行号:" readonly />
          <van-cell center title="开启微信开票" style="color:red;">
          <template #right-icon>
            <van-switch :value="checked" @input="openWxTikect"  />
          </template>
        </van-cell>
        <van-cell title="发票预览" >
          <template #right-icon >
            <van-button type="primary" style="height: 30px;line-height: 30px;" @click="preview">预览</van-button>
          </template>
        </van-cell>
        <van-image-preview v-model="show" :images="images" @change="onChange"  :closeable='true'>
        </van-image-preview>
        </div>
    </van-panel>
  </div>

</template>

<script>
import { Panel,Button,Field,Cell,Switch,Dialog,ImagePreview} from 'vant';
import photo from '../../assets/img'

export default {
  name:'gouInfo',
  data(){
    return{
       order:{
         buyerTel: "",
        listFlag: "0",
        pushMode: "1",
        buyerAddress: "",
        buyerTaxNum: "",
        invoiceType: "1",
        invoiceLine: "p",
        email: "846722718@qq.com",
        buyerName: "",
        buyerPhone: "",
        buyerAccount: "",
        productOilFlag: "0",
        proxyInvoiceFlag: "0",
        userId: '4ed208ef1ea14466828bc915abb4dfc4'
      },
      checked:false,//开关状态
      show: false,
      index: 0,
      images: [photo.moban_png],
    }
  },
  methods:{
    onChange(index) {
      this.index = index;
    },
    preview(){
      this.show = true
    },
      openWxTikect(checked) {
      Dialog.confirm({
        title: '提醒',
        message: '是否开启微信开票？',
      }).then(() => {
        this.checked = checked;
        this.getWxInfo()
      });
    },
    //拿到微信抬头信息
    getWxInfo(){
      const  order ={
          buyerName:'广州得实电子科技有限公司',
          buyerTaxNum:'91440116786095979F',
          buyerTel:'15078097896',
          buyerPhone:'10012013',
          buyerAddress:'广州高新技术产业开发区科学城南翔三路46号',
          buyerAccount:'广州建设银行元岗分行',
      }
      this.order = order
    }
  },
  components:{
      [Panel .name]:Panel,
      [Button.name]:Button,
      [Field .name]:Field,
      [Cell.name]:Cell,
      [Switch.name]:Switch,
      [Dialog.name]:Dialog,
      [ImagePreview.name]:ImagePreview
  }
}
</script>

<style>

</style>
