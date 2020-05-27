<template>
    <div>
      <van-index-bar>
        <van-index-anchor index="当前定位城市" />
        <div class="address_default">
          <van-button type="default">广州</van-button>
        </div>
        <van-index-anchor index="热门城市" />
        <div class="hot_address">
          <van-button type="default">广州</van-button>
          <van-button type="default">广州</van-button>
          <van-button type="default">广州</van-button>
          <van-button type="default">广州</van-button>
          <van-button type="default">广州</van-button>
          <van-button type="default">广州</van-button>
          <van-button type="default">广州</van-button>
          <van-button type="default">广州</van-button>

        </div>

        <van-index-anchor index="A" />
        <van-cell title="北京" />
        <van-cell title="上海" />
        <van-cell title="广州" />

        <van-index-anchor index="B" />
        <van-cell title="广州" />
        <van-cell title="广西" />
        <van-cell title="广岛" />

        <van-index-anchor index="C" />
        <van-cell title="广州" />
        <van-cell title="广西" />
        <van-cell title="广岛" />
      </van-index-bar>
    </div>
</template>

<script>
import { IndexBar, IndexAnchor, Cell,Button  } from 'vant'
export default {
  name:"location",
  data(){
    return{

    }
  },
  components:{
    [IndexBar.name]:IndexBar,
    [IndexAnchor.name]:IndexAnchor,
    [Cell.name]:Cell,
    [Button.name]:Button
  }
}
</script>

<style scoped>
  .address_default,.hot_address{
    padding:10px;
    background-color: #f5f5f5;
  }
</style>
