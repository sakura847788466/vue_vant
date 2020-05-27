import ajax from './ajax'

const CODE_URL = "https://m.maoyan.com"


export const getMovieList = (data) => ajax(CODE_URL+'/ajax/movieOnInfoList',data)//校验验证码
