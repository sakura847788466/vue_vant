export const messageMinxins = {
  methods: {
    /*
     * 封装element-UI的message
     * @type 类型
     * @msg  消息内容
     * @duration 停留时间
     * */
    myMessage(type, msg, duration = 3000) {
      this.$message({
        message: msg,
        type,
        duration,
        showClose: true,
        offset: 54,
      });
    }
  }
}
