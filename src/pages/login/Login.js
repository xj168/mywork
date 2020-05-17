import React, { Component } from 'react'
import { InputItem, WhiteSpace, Button, Flex, WingBlank } from 'antd-mobile';
import { Link } from 'react-router-dom'
import url from '../../assets/imgs/1_03.png'
import './login.scss'
// 引入过来需要解构
import { login } from '../../api/apis';

export default class Login extends Component {
    state = {
        acc: '',
        pwd: '',
        erre: 'none'
    }
    render() {
        let erre = this.state.erre
        return (
            <div className='login'>
                <Flex justify="center">
                    <img src={url}></img>
                </Flex>
                <WingBlank size="md"><InputItem
                    onChange={this.onChange}
                    value={this.state.acc}
                    clear='true'
                    placeholder="请输入手机号码"
                >
                    <div style={{ backgroundImage: `url(${require('../../assets/imgs/m.png')})`, backgroundSize: 'cover', height: '25px', width: '22px' }} />
                </InputItem>
                    <InputItem
                        onChange={this.onPassword}
                        type="password"
                        value={this.state.pwd}
                        placeholder="请输入密码"
                        clear='true'
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/imgs/s.png')})`, backgroundSize: 'cover', height: '25px', width: '22px' }} />
                    </InputItem></WingBlank>
                <WingBlank size="md">
                    <WhiteSpace size="lg" />
                    <Button className="btn" onClick={this.btn.bind(this)}>登录</Button>
                </WingBlank>
                <WhiteSpace size="lg" />
                <Flex justify="center">
                    <p style={{ display: erre }} className="err">请输入正确的用户和密码</p>
                </Flex>
                <WhiteSpace size="lg" />
                <WingBlank size="md">
                    <Flex justify="between">
                        <Link to='/register'>手机快速注册</Link>
                        <Link to='/'>忘记密码</Link>
                    </Flex>
                </WingBlank>
                <p className='bton'>
                    注册/登录即表示同意《源码房产协议》
                </p>
            </div>
        )
    }
    onChange = (acc) => {
        this.setState({
            acc,
        });
    }
    onPassword = (pwd) => {
        this.setState({
            pwd,
        });
    }
    btn() {
        // 防抖节流
        // 防止用户或机器人进行多次点击，浪费资源
        // 设置一个计时函数，多少秒才能发一次
        // 创建一个判断是否发送请求
        // let isClick = true;
        if (this.isClick) return
        this.isClick = true;
        setTimeout(() => {
            this.isClick = false;
        }, 2000)
        let pames = this.state
        // 调用传过来的接口
        login(pames).then(res => {
            // console.log(res);
            // 判断成功就跳转到首页
            if (res.data == 'ok') {
                this.props.history.push('/')
            } else {
                // 显示提示信息
                this.setState({
                    erre: this.state.erre = 'block'
                })
            }
        })
    }
}
