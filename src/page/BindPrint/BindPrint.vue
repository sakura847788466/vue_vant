<template>
    <div>
        <van-field v-model="printNum_new" label="当前打印机:" left-icon="smile-o" readonly/>
        <van-field v-model="ptintType" label="打印机型号:" left-icon="smile-o" readonly/>
        <van-field
            v-model="number"
            center
            maxlength="20"
            label="绑定打印机"
            placeholder="请输入打印机编号"
          >
            <template #button>
              <van-button size="small" type="info" style="width:77px;" @click="bindPrintNumber">绑定</van-button>
            </template>
        </van-field>
        <van-field
            center
            readonly
          >
            <template #button>
              <van-button size="small" type="info"  @click="showPicker = true">选择打印机</van-button>
            </template>
        </van-field>
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"
          >
          <template #button>
              <van-button size="small" type="info"  @click="showPicker = true">选择打印机</van-button>
            </template>
          </van-picker>
        </van-popup>
    </div>
</template>

<script>
import Top from '../../components/Top/Top'
import {Field,Button,Picker,Toast,ActionSheet,Popup,Notify } from 'vant'
import {mapState} from 'vuex'
import {generateBsse64,verificationNumber} from '../../util/tool'
import {findNumberInfo,insertNumber} from '../../api/bindPrinter'

export default {
  name:'bindPrint',
  data(){
    return{
      text:'绑定打印机',
      printNum_new:'0005BF7350022B00',
      ptintType:'DS200L',
      number:'',
      showPicker: false,
      columns: [],
      printerList:[],
      activeIndex:0
    }
  },
  mounted(){
    this.getPrinterValue()

  },
  methods:{
    onChange(picker, value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onConfirm(value) {
      this.printNum_new=value

      this.showPicker = false;
    },
     //初始化打印机
      getPrinterValue() {
        const {userId, Authorization} = this
        const data = generateBsse64({userId})
        findNumberInfo({data, Authorization})
          .then(res => {
            console.log(res)
            if (res.data.length > 0) {
              this.printerList = res.data
              for (let i = 0; i < this.printerList.length; i++) {
                this.columns.push(this.printerList[i].number)
                if (this.printerList[i].isActive) {
                  this.activeIndex = i
                }
                this.printerList[i].index = i
              }
            } else {
              Notify({ type: 'error', message: '打印机为空，请绑定打印机' })

            }
          })
          .catch(err => {
            if (err.code == 1501||err.code ==1502) {
              Toast.fail('操作超时，请重新登陆');
              setTimeout(()=>{
                  this.$router.push({path:'/login'})
              },3000)
              return
            }
              Notify({ type: 'error', message: err.data })
          })

      },
    //绑定打印机
    bindPrintNumber () {
      if (!verificationNumber(this.number)) {
       Toast('请输入正确的打印机编号')
        return
      } else {
        const { userId, Authorization, number } = this
        const data = generateBsse64({ userId, number })
        insertNumber({ data, Authorization })
          .then((res) => {
            this.columns.push(res.data.number)
            Toast('绑定成功')
          })
          .catch(err => {
            Toast(err.data)
          })
      }

    },
  },
  components:{
    Top,
    [Field.name]:Field,
    [Button.name]:Button,
    [Picker.name]:Picker,
    [Toast.name]:Toast,
    [ActionSheet.name]:ActionSheet,
    [Popup.name]:Popup,
    [Notify.name]:Notify

  },
  computed:{
      ...mapState(['user']),

    userId() {
        return this.user.userInfo.data._id
      },
      Authorization() {
        return this.user.userInfo.Authorization
      }
  }
}
</script>

<style>

</style>
