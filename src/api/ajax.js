/*
* 封装ajax函数
* 返回promise 对象（异步返回的数据是response.data）
* */
import axios from 'axios'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // headers添加密钥Authorization
  //1.判断Authorization是否存在

  if (config.method === 'post' && config.data.hasOwnProperty('Authorization')) {
    //2.设置Authorization
    config.headers.Authorization = config.data.Authorization
    //3.删除传递data数据里的Authorization
    delete config.data.Authorization
  }

  return config;
}, function (error) {
  // 对请求错误做些什么

  return Promise.reject(error);
});
axios.defaults.timeout = 10000
export default function ajax(url, data = {}, type = 'GET', from) {
  return new Promise(function (resolve, reject) {
    //执行异步ajax请求
    let promise
    if (type === 'GET') {
      //准备url query参数数据
      let dataStr = ''//数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
        url = url + '?' + dataStr;
      }
      //发送get请求
      promise = axios.get(url);

    } else {
      //发送post请求
      if (from) {
        promise = axios({
          method: 'post',
          url,
          headers: {
            'Content-Type': 'multipart/form-data;charset=UTF-8'
          },
          data
        });
      } else {
        promise = axios.post(url, data);
      }
    }

    promise.then(response => {
      let result = response.data
      if (result.code == 0) {
        resolve(result);
      } else {
        reject(result);
      }
    }).catch(error => {
      reject(error.response)
    })
  });
}
