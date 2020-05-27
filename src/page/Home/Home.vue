<template>
  <div>
        <router-view/>
        <Bottom/>
  </div>
</template>

<script>
import { AddressEdit } from 'vant';
import Bottom from '../../components/Bottom/Bottom'
import Bus from '../../util/bus'
export default {
  name: 'home',
  mounted(){
    Bus.$on('msg',(e)=>{
      this.msg =e
    })
  },
  data () {
    return {
      areaList: {address:'广州',address:'广州西'},
      searchResult: [],
      msg:'',
       order: {
          "buyerTel": "0571-88888888",
          "listFlag": "0",
          "pushMode": "1",
          "remark": "请前往诺诺网(www.jss.com.cn)查询发票详情",//备注
          "checker": "朱燕1",//复核人
          "payee": "络克1",//收款人
          "buyerAddress": "杭州市万塘路30号东方科技园12幢2楼",
          "buyerTaxNum": "91330000692368905R",
          "invoiceType": "1",
          "invoiceLine": "p",
          "email": "846722718@qq.com",
          "salerAccount": "东亚银行杭州分行,131001088303400",//销售方开户行及账号
          "orderNo": "",
          "salerTel": "0571-87022168",//销售方电话
          "buyerName": "浙江爱信诺航天信息有限公司",//销售方名称
          "invoiceDate": "",
          "salerAddress": "杭州市中河中路222号平海国际商务大厦5楼",//销售方地址
          "clerk": "袁牧庆",//开票人
          "buyerPhone": "18814094002",
          "buyerAccount": "125000590990435128 杭州银行石桥支行",
          "productOilFlag": "0",
          "salerTaxNum": "339901999999142",//销售方纳税人识别号
          "proxyInvoiceFlag": "0"
        },
    }
  },
  methods: {
    onSave () {
      Toast('save');
    },
    onDelete () {
      Toast('delete');
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  },
  computed: {

  },
  components: {
    [AddressEdit.name]: AddressEdit,
    Bottom
  }
}
</script>

<style>
</style>
