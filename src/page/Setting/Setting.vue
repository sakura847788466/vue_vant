<template>
<div>
    <div>
      <van-nav-bar
          title="设置"
          left-text="返回"
          left-arrow
          @click-left="onClickLeft('/home')"
        />
    </div>
     <div >
      <van-tabs v-model="active">
          <van-tab title="打印机">
              <div class="print_box">
                  <div class="box">
                     <van-cell-group>
                        <van-field label="当前打印机" value="000B735BFE00B00" readonly />
                        <van-field label="当前打印机" value="DSL200" disabled />
                        <van-field label="打印机编号" value="000B735BFE00B00" disabled />
                      </van-cell-group>
                     <div class="item">
                       <van-field
                          v-model="sms"
                          center
                          clearable
                          label="绑定打印机"
                          placeholder="请输入打印机编号"
                        >
                        <template #button>
                          <van-button size="small" type="primary" >绑定</van-button>
                        </template>
                      </van-field>
                      <van-field
                          center
                          clearable
                          disabled
                        >
                        <template #button>
                          <van-button size="small" type="primary" @click="SelectPrint">选择打印机</van-button>
                        </template>
                      </van-field>
                     </div>
                  </div>
              </div>
              <div class="print_box" v-show='isShow'>
                <van-picker :columns="columns"  title="标题"
                              @cancel="onCancel"
                              @confirm="onConfirm"
                              show-toolbar/>
              </div>
          </van-tab>
          <van-tab title="销售方信息">销售方信息</van-tab>
        </van-tabs>
  </div>
</div>

</template>

<script>
import { Tab, Tabs,Card,NavBar,Button,Field,CellGroup,List,Cell,PullRefresh,Picker,Toast,ActionSheet } from 'vant';
export default {
  name:'setting',
  data(){
    return{
       active: 2,
       value:'',
       isShow:false,
       isShow1:true,
       sms:'',
       list: [],
       loading: false,
       finished: false,
       refreshing: false,
        columns: ['000B735BFE00B00', '000B735BFE00B00', '000B735BFE00B00', '000B735BFE00B00', '000B735BFE00B00','000B735BFE00B00','000B735BFE00B00'],
        show: false,
        actions: [
          { name: '选项' },
          { name: '选项' },
          { name: '选项', subname: '描述信息' },
        ],
    }
  },
  methods:{
    SelectPrint(){
      this.isShow =true
      this.isShow1=false
    },
     onClickLeft(path) {
      this.$router.push({path:path})
    },
     onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      Toast(item.name);
    },
    onConfirm(value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel() {
      Toast('取消');
    },
     onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
     onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  },
  components:{
    [Tab.name]:Tab,
    [Tabs.name]:Tabs,
    [Card.name]:Card,
    [NavBar.name]:NavBar,
    [Button.name]:Button,
    [Field.name]:Field,
    [CellGroup.name]:CellGroup,
    [List.name]:List,
    [Cell.name]:Cell,
    [PullRefresh.name]:PullRefresh,
    [Picker.name]:Picker,
    [Toast.name]:Toast,
    [ActionSheet.name]:ActionSheet
  }
}
</script>

<style scoped>
.van-tabs>>>.van-tabs__content{

  background-color: #eaecec;
}
.item>>>.van-button--small{
  width:78px;
}
 .print_box{

   font-size:14px;
   box-shadow: whitesmoke;
 }

</style>
