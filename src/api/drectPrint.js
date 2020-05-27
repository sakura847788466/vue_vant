import ajax from './ajax'

const URL = window.API.LOGIN_URL


export const findSalerInfo = (data) => ajax(URL + '/saler/findSalerInfo', data, 'POST')//查询销售商
export const updateSaler = (data) => ajax(URL + '/saler/updateSaler', data, 'POST')//修改销售商
export const insertSaler = (data) => ajax(URL + '/saler/insertSaler', data, 'POST')//新增销售商
export const deleteSaler = (data) => ajax(URL + '/saler/deleteSaler', data, 'POST')//删除销售商



