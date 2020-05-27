<template>
      <van-panel title="重要信息" class="there" style="padding: 12px;border-radius: 8px;width: 90%;margin: 0 auto;margin-top: 5px;" >
        <div class="container">
          <van-field label="推送方式:" readonly >
              <template #right-icon>
              <van-dropdown-menu style="height:0;">
                <van-dropdown-item v-model="value1" :options="option1" />
              </van-dropdown-menu>
              </template>
          </van-field>
           <van-field label="发票种类:" readonly >
              <template #right-icon>
              <van-dropdown-menu style="height:0;">
                <van-dropdown-item v-model="value2" :options="option2" />
              </van-dropdown-menu>
              </template>
          </van-field>
          <van-field v-model="email" label="推送邮箱:"  input-align="right"/>
          <van-radio-group v-model="radio">
              <van-cell-group>
                <van-cell title="清单标志" clickable @click="radio = '1'">
                  <template #right-icon>
                    <div class="radio_m">
                        <van-radio name="1" />自动产生
                        <van-radio name="2" style="margin-left:10px;"/>手动产生
                    </div>
                  </template>
                </van-cell>
                <van-cell title="代开标志" clickable @click="radio = '2'">
                  <template #right-icon>
                    <div class="radio_m">
                         <van-radio name="1" />非代开
                          <van-radio name="2" style="margin-left:23px;"/>代开
                    </div>
                  </template>
                </van-cell>
                <van-cell title="开票类型" clickable @click="radio = '2'">
                  <template #right-icon>
                    <div class="radio_m">
                         <van-radio name="1" />正票
                          <van-radio name="2" style="margin-left:36px;"/>红票
                    </div>
                  </template>
                </van-cell>
                <van-cell title="代开标志" clickable @click="radio = '2'">
                  <template #right-icon>
                    <div class="radio_m">
                         <van-radio name="1" />非成品油
                          <van-radio name="2" style="margin-left:8px;"/>成品油
                    </div>
                  </template>
                </van-cell>
              </van-cell-group>
            </van-radio-group>
        </div>
    </van-panel>
</template>

<script>
import { Panel,Button,Field,Cell,Switch,Dialog, DropdownMenu, DropdownItem,RadioGroup, Radio, CellGroup  } from 'vant';

export default {
  name:'inportInfo',
  data(){
    return{
      order:1,
      value1: 1,
      value2: 'b',
      option1: [
        { text: '不推送', value: 0 },
        { text: '手机(默认)', value: 1 },
        { text: '邮箱', value: 2 },
        { text: '邮箱、手机', value: 3 },

      ],
      option2: [
        { text: '专用发票', value: 'a' },
        { text: '普通发票(电票)', value: 'b' },
        { text: '普通发票(纸票)', value: 'c' },
        { text: '收购发票(电票)', value: 'd' },
        { text: '收购发票(纸票)', value: 'e' },

      ],
      email:'846722718@qq.com',
      radio: '1',
    }
  },
  components:{
      [Panel .name]:Panel,
      [Button.name]:Button,
      [Field .name]:Field,
      [Cell.name]:Cell,
      [CellGroup.name]:CellGroup,
      [Switch.name]:Switch,
      [Dialog.name]:Dialog,
      [DropdownMenu.name]:DropdownMenu,
      [DropdownItem.name]:DropdownItem,
      [RadioGroup.name]:RadioGroup,
      [Radio.name]:Radio
  }
}
</script>

<style scoped>
 .container>>>.van-overlay{
   top:22px;
 }
 .container>>>.van-popup--top{
   top:22px;
 }
 /* .container>>>.van-cell--clickable {
   padding:10px 34px;
 } */
 .radio_m{
   display: flex;
   width:170px;

 }
</style>
