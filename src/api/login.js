import ajax from './ajax'

const URL = 'https://test.dascomyun.cn/nuonuo_account'
const CODE_URL = "https://www.dascomyun.cn/14_account"

export const register = (data) => ajax(URL + '/user/userRegister', data, 'POST')//注册
export const login = (data) => ajax(URL + '/user/userLogin', data, 'POST')//登录

export const getSendSMS = (data) => ajax(CODE_URL+'/v2.0/account/sendSMS',data,'POST')//验证码
export const checkSendSMS = (data) => ajax(CODE_URL+'/CheckMobile',data,'POST')//校验验证码
