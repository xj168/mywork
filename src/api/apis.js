// 统一调用api

import axios from 'axios';
import qs from 'qs'

// 配置公共路径
axios.defaults.baseURL = 'http://129.211.169.131:33833/';

// 登录
// 暴露出去login 传入一个值进来  传出一个axios
export const login = (pames) => axios.post('login.php', qs.stringify(pames))

// 注册
export const register = (pames) => axios.post('reg.php', qs.stringify(pames))

// 发送验证码
export const valit = () => axios.get('valitecode.php')

// 获取列表
export const homelist = () => axios.get('gethouselist.php')

