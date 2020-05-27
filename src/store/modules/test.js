// import api from '@/api/hot_topic'
const api ='http'
const {
  getHotTopicList,
  getHotMessage,
  getCarBrand
} = api

export default {
  namespaced: true,
  state: {
    hotTopicList: {},
    brand_name: '', // 品牌
    series_name: '', // 车系
    day_size: 7, // 多少天内
    tableHotCar: [],
    carBrand: [], // 车品牌
    carStyle: [], // 车型
    text: ''
  },

  mutations: {
    changeState(state, payload) {
      const {
        data,
        name
      } = payload
      state[name] = data
    }
  },

  actions: {
    topicListData({ commit, state }) {
      const obj = { current: 1, page_size: 25 }
      return getHotTopicList(obj)
        .then((res) => {
          console.log(res)
          commit('changeState', {
            data: res.data,
            name: 'hotTopicList'
          })
        })
    },
    getHotMessage({ commit, state }) {
      const { brand_name, series_name, day_size } = state
      return getHotMessage({ brand_name: brand_name, series_name: series_name, day_size: day_size })
        .then((res) => {
          console.log(res)
          commit('changeState', {
            data: res.data,
            name: 'tableHotCar'
          })
        })
    },
    getCarBrand({ commit, state }) {
      const { text } = state
      return getCarBrand(text)
        .then((res) => {
          commit('changeState', {
            data: res.data,
            name: 'carBrand'
          })
        })
    }
  }
}