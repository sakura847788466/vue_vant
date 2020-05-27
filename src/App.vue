<template>
  <div id="app">
    <!-- <Home/> -->
        <router-view/>
  </div>
</template>

<script>




import Bottom from './components/Bottom/Bottom'
import Home from './page/Home/Home'

export default {
  name: 'App',
  data () {
    return {

    }

  },
  components: {
    Bottom,Home
  }
}
</script>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
}
#app{
  background-color: #f5f5f5;
  width:100%;
  margin-bottom: 51px;
}
</style>
