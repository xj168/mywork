import React, { Component } from 'react'
import { InputItem, WhiteSpace, Button, Flex, WingBlank, Checkbox, Toast } from 'antd-mobile';
import { Link } from 'react-router-dom'
import './register.scss'
import { register, valit, login } from '../../api/apis';
const CheckboxItem = Checkbox.CheckboxItem;

export default class Register extends Component {
    state = {
        hasname: 'none',
        acc: '',
        haspwd: 'none',
        pwd: '',
        num: '获取验证码',
        diable: false,
        // 验证码
        valitecode: '',
        // 验证验证嘛
        code: 1,
        valite: 'none',
        // 判断是否验证
        chack: false
    }
    render() {
        let { hasname, haspwd, valitecode, diable, valite } = this.state
        return (
            <div id='box1'>
                <WingBlank size="md"><InputItem
                    onBlur={this.nameblur}
                    onChange={this.onChange}
                    value={this.state.acc}
                    clear='true'
                    placeholder="请输入手机号码">
                    <div style={{ backgroundImage: `url(${require('../../assets/imgs/m.png')})`, backgroundSize: 'cover', height: '25px', width: '22px' }} />
                </InputItem>
                    <Flex justify="center">
                        <Flex.Item style={{ display: hasname }} className="err">请输入正确的手机号码</Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg" />
                    <InputItem
                        onBlur={this.pwdblur}
                        onChange={this.onPassword}
                        type="password"
                        value={this.state.pwd}
                        placeholder="请输入密码"
                        clear='true'>
                        <div style={{ backgroundImage: `url(${require('../../assets/imgs/s.png')})`, backgroundSize: 'cover', height: '25px', width: '22px' }} />
                    </InputItem>
                    <Flex justify="center">
                        <Flex.Item style={{ display: haspwd }} className="err">请输入至少一位字母和数组大于6的密码</Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg" />
                    <div className="Verification">
                        <InputItem
                            onChange={this.valitecodeChange}
                            value={valitecode}
                            type="text"
                            placeholder='请输入验证码'>
                        </InputItem>
                        <button onClick={this.valitecode.bind(this)} disabled={diable}>{this.state.num}</button>
                    </div>
                    <Flex justify="center">
                        <Flex.Item style={{ display: valite }} className="err">验证码错误</Flex.Item>
                    </Flex>
                    <CheckboxItem
                        onChange={this.Check.bind(this)}
                    >我已同意<span>《用户隐私》及《隐私权政策》</span></CheckboxItem>
                </WingBlank>

                <WingBlank size="md">
                    <WhiteSpace size="lg" />
                    <Button className="btn" onClick={this.btn.bind(this)} >注册</Button>
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
    nameblur = (acc) => {
        if ((/^1[3456789]\d{9}$/.test(acc))) {
            this.setState({
                hasname: 'none',
            });
        } else {
            this.setState({
                hasname: 'block',
            });
        }
    }
    pwdblur = (pwd) => {
        if ((/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(pwd))) {
            this.setState({
                haspwd: 'none',
            });
        } else {
            this.setState({
                haspwd: 'block',
            });
        }
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
    // 写入value值
    valitecodeChange = (valitecode) => {
        this.setState({
            valitecode,
        });
        if (this.state.code != valitecode) {
            this.setState({
                valite: 'block',
            });
        } else {
            this.setState({
                valite: 'none'
            });

        }
    }
    // 判断是否同意
    // Check
    Check() {
        this.setState({
            chack: !this.state.chack
        })
    }
    // 注册
    btn() {
        let pames = this.state;
        if (this.state.acc == '') {
            this.setState({
                hasname: this.state.hasname = 'block'

            })
        } else if (this.state.pwd == '') {
            this.setState({
                haspwd: this.state.haspwd = 'block'
            })

        } else if (this.state.code != this.state.valitecode) {
            this.setState({
                valite: 'block'
            })

        } else if (this.state.chack == false) {
            Toast.info('同意用户隐私才能注册')
        } else {
            register(pames).then((res) => {
                console.log(res);
                if (res.data == 'ok') {
                    this.props.history.push('/login')
                } else {
                    return;
                }
            })
        }

    }
    // 我们不能在组件销毁后设置state，防止出现内存泄漏的情况

    // 在卸载的时候对所有的操作进行清除（例如：abort你的ajax请求或者清除定时器）
    componentDidMount = () => {
        let num = 60;
        let setIn = setInterval(() => {
            this.setState({
                num: --num + 's后可重发',
                diable: true
            })
            if (num == 0) {
                this.setState({
                    num: "获取验证码",
                    diable: false
                })
                clearInterval(setIn);
            }
        }, 1000)
        valit().then((res) => {
            console.log(res.data);
            this.setState({
                code: res.data
            })
        })
    }
    // 最简单的方式（万金油）
    componentWillUnmount = () => {
        //处理逻辑
        this.setState = (state, callback) => {
            return;
        };
    }
    // 验证码
    valitecode() {
        let num = 60;
        let setIn = setInterval(() => {
            this.setState({
                num: --num + 's后可重发',
                diable: true
            })
            if (num == 0) {
                this.setState({
                    num: "获取验证码",
                    diable: false
                })
                clearInterval(setIn);
            }
        }, 1000)
        valit().then((res) => {
            // console.log(res.data);
            this.setState({
                code: res.data
            })
        })
    }
}
