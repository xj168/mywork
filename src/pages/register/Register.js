import React, { Component } from 'react'
import { InputItem, WhiteSpace, Button, Flex, WingBlank, Checkbox, Toast } from 'antd-mobile';
import { Link } from 'react-router-dom'
import './register.scss'
import { register } from '../../api/apis';
const CheckboxItem = Checkbox.CheckboxItem;

export default class Register extends Component {
    state = {
        hasname: 'none',
        acc: '',
        haspwd: 'none',
        pwd: ''
    }
    onChange = (acc) => {
        if ((/^1[3456789]\d{9}$/.test(acc))) {
            this.setState({
                hasname: 'none',
            });
        } else {
            this.setState({
                hasname: 'block',
            });
        }
        this.setState({
            acc,
        });
    }
    onPassword = (pwd) => {
        if ((/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(pwd))) {
            this.setState({
                haspwd: 'none',
            });
        } else {
            this.setState({
                haspwd: 'block',
            });
        }
        this.setState({
            pwd,
        });
    }
    render() {
        let { hasname, haspwd } = this.state
        return (
            <div id='box1'>
                <WingBlank size="md"><InputItem
                    onChange={this.onChange}
                    value={this.state.acc}
                    clear='true'
                    placeholder="请输入手机号码">
                    <div style={{ backgroundImage: `url(${require('../../assets/imgs/m.png')})`, backgroundSize: 'cover', height: '25px', width: '22px' }} />
                </InputItem>
                    
                    <Flex justify="center">
                        <p style={{ display: hasname }} className="err">请输入正确的手机号码</p>
                    </Flex>
                    <WhiteSpace size="lg" />
                    <InputItem
                        onChange={this.onPassword}
                        type="password"
                        value={this.state.pwd}
                        placeholder="请输入密码"
                        clear='true'>
                        <div style={{ backgroundImage: `url(${require('../../assets/imgs/s.png')})`, backgroundSize: 'cover', height: '25px', width: '22px' }} />
                    </InputItem>
                    <Flex justify="center">
                        <p style={{ display: haspwd }} className="err">请输入至少一位字母和数组大于6的密码</p>
                    </Flex>
                    <WhiteSpace size="lg" />
                    <InputItem
                        type="text"
                        placeholder="输入验证码">
                    </InputItem>
                    <CheckboxItem>我已同意<span>《用户隐私》及《隐私权政策》</span></CheckboxItem>
                </WingBlank>

                <WingBlank size="md">
                    <WhiteSpace size="lg" />
                    <Button className="btn" onClick={this.btn.bind(this)}>注册</Button>
                </WingBlank>
                <WhiteSpace size="lg" />
                <WingBlank size="md">
                <p className='text'>
                    <span><Link to='/login'>已有账号</Link></span>
                </p>
                </WingBlank>
            </div>
        )
    }
    btn() {
        let pames = this.state;
        if (this.state.acc == '' && this.state.pwd == '') {
            this.setState({
                hasname: this.state.hasname = 'block',
                haspwd: this.state.haspwd = 'block'
            })
        }
        // register(pames).then((res) => {
        //     if (res.data == 'ok') {
        //         this.props.history.push('/login')
        //     } else {
        //         Toast.info(res);
        //     }
        // })
    }
}
