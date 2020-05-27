import ajax from './ajax'

const URL = 'https://test.dascomyun.cn/nuonuo_account'


export const findNumberInfo = (data) => ajax(URL + '/number/findNumberInfo', data, 'POST')//查询打印机number
export const insertNumber = (data) => ajax(URL + '/number/insertNumber', data, 'POST')//增加打印机number
export const updateNumber = (data) => ajax(URL + '/number/updateNumber', data, 'POST')//修改打印机number
export const deleteNumber = (data) => ajax(URL + '/number/deleteNumber', data, 'POST')//删除打印机number


