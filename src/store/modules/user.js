import {register, login} from "../../api/login";
// import {findNumberInfo} from "../../api/bindPrinter"
const user = {
  namespaced: true, //开启命令空间模式,
  state: {
   isUser:false,
   userInfo:{},
   goodsList:{},
   num:0
  }
}

const mutations = {
  LOGIN:(state, {user}) => {
    localStorage.setItem('user', JSON.stringify(user))
    state.isUser = true
    state.userInfo = user
  },
  LOGIN_OUT (state) {
    localStorage.clear()
    state.isUser = false
    state.userInfo = {}
  },
  REGISTER(state,{user}){
    localStorage.setItem('user', JSON.stringify(user))
    state.isUser = true
    state.userInfo = user
  },
  SAVEGOODSINFO (state,goods){
    localStorage.setItem('goodsList',goods)
    state.goodsList=goods
  },
};
const actions = {
  goToLogin({commit}, data) {
    return new Promise(async (resolve, reject) => {
      const user = await login(data)
      console.log(user)
      if (user.code === 0) {
      //   let data ={data:'eyJ1c2VySWQiOiI1ZTU2MTU2ZDk2ZWQ1NDNjODIxOTYxMTcifQ=='}
      //  const findNum= await findNumberInfo(data)
      //    if(findNum.code==0){
      //     resolve({code: 0, data: '获取成功'})
      //    }else{
      //     resolve({code: 400, data: '获取失败'})
      //    }
        commit("LOGIN", {user})
        resolve({code: 0, data: '登录成功'})
      } else {
        reject({code: 400, data: '登录失败'})
      }
    })
  },
  goToRegister({commit}, data) {
    return new Promise(async (resolve, reject) => {
      const user = await register(data)
      if (user.code === 0) {
        commit('REGISTER', {user})
        resolve({code: 0, data: '注册成功'})
      } else {
        reject({code: 400, data: user.data})
      }
    })

  },
  //保存商品信息
  saveGoodsInfo({commit},goods){
    commit('SAVEGOODSINFO',goods)
  }


}
export default {
  namespaced: true,//命名空间打开
  state: user.state,
  mutations,
  actions
};
