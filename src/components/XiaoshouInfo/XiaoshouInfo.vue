<template>
    <van-panel title="销售方信息" class="there" style="padding: 12px;border-radius: 8px;width: 90%;margin: 0 auto;margin-top: 5px;" >
        <div class="container">
          <van-field v-model="order.payee" label="收 款 人 :" readonly />
          <van-field v-model="order.clerk" type="tel" label="开 票 人 :" readonly />
          <van-field v-model="order.checker"  label="复 核 人 :" readonly />
          <van-field v-model="order.salerAccount" type="number" label="开户银行:" readonly />
          <van-field v-model="order.salerAccount" type="" label="银行账号:" readonly />
          <van-field v-model="order.salerTaxNum" type="" label="销方税号:" readonly />
          <van-field v-model="order.salerTel" type="" label="销方电话:" readonly />
          <van-field v-model="order.salerAddress" type="" label="销方地址:" readonly />
          <van-field
                v-model="message"
                rows="1"
                autosize
                label="备注信息"
                type="textarea"
                placeholder="请输入备注信息"
              />
          <van-field name="Button">
              <template #button>
                          <van-button size="small" type="primary" @click="Update">修改</van-button>
                          <van-button size="small" type="primary">选择修改信息</van-button>
                        </template>
          </van-field>
          <van-popup v-model="show" round style="width: 90%;height: 80%;">
              <van-field v-model="order.payee" label="收 款 人 :"  />
              <van-field v-model="order.clerk" type="tel" label="开 票 人 :"  />
              <van-field v-model="order.checker"  label="复 核 人 :"  />
              <van-field v-model="order.salerAccount" type="number" label="开户银行:"  />
              <van-field v-model="order.salerAccount" type="" label="银行账号:"  />
              <van-field v-model="order.salerTaxNum" type="" label="销方税号:"  />
              <van-field v-model="order.salerTel" type="" label="销方电话:"  />
              <van-field v-model="order.salerAddress" type="" label="销方地址:"  />
              <van-field
                v-model="message"
                rows="1"
                autosize
                label="备注信息"
                type="textarea"
                placeholder="请输入备注信息"
              />
              <van-field name="Button">
              <template #button>
                          <van-button size="small" type="info" @click="Canle">取消</van-button>
                          <van-button size="small" type="info" @click="SaveInfo">保存</van-button>
                        </template>
          </van-field>
          </van-popup>
        </div>
    </van-panel>
</template>

<script>
import {Panel,Field,Cell,Button,Popup,Dialog} from 'vant'
export default {
     name:'xiaoshouInfo',
     data(){
       return{
          order:{
          payee:'张三',
          clerk:'老刘',
          checker:'李四',
          salerAccount:'120200590990432278 杭州银行彭埠支行',
          salerTaxNum:'339901999999142',
          salerTel:'0571-81029365',
          salerAddress:'杭州市西湖区万塘路 30号高新东方科技园'
      },
      show: false,
      message:'请前往诺诺网(www.jss.com.cn)查询发票详情'
       }
     },
     methods:{
       Update() {
          this.show = !this.show
       },
      //  取消
       Canle(){
         this.show = false
       },
       //保存
       SaveInfo(){
           Dialog.confirm({
              title: '提醒',
              message: '是否保存修改的内容',
            }).then(() => {
                this.show = false
            });
       }
     },
     components:{
       [Panel.name]:Panel,
       [Field.name]:Field,
       [Cell.name]:Cell,
       [Button.name]:Button,
       [Popup.name]:Popup,
       [Dialog.name]:Dialog
     }
}
</script>

<style>

</style>
