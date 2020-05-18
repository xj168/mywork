import React, { Component } from 'react'
import './my.scss'
import { WingBlank, Flex, WhiteSpace, Icon } from 'antd-mobile';

export default class My extends Component {
    render() {
        return (
            <div>
                <div className="head">
                    <WhiteSpace size="lg" />
                    <WingBlank size="md">
                        <Flex className="head_user" align="start" justify="between">
                            <Flex.Item align="center">
                                <img src={require('../../../assets/imgs/6_03.png')} />
                            </Flex.Item>
                            <Flex.Item className="flex2">
                                <p className="fo20">登录/注册</p>
                                <p>可以与经济人发起聊天</p>
                            </Flex.Item>
                            <Flex.Item align="end">
                                <img src={require('../../../assets/imgs/6_04.png')} style={{ width: '30px', marginTop: "10px" }} />
                            </Flex.Item>
                        </Flex>
                    </WingBlank>
                    {/* 钱包 */}
                    <WhiteSpace size="lg" />
                    <WingBlank size="md">
                        <Flex className="head_nav" justify="between">
                            <Flex.Item align="center">
                                <p>0</p>
                                <img src={require('../../../assets/imgs/6_07.png')} />钱包
                            </Flex.Item>
                            <Flex.Item align="center">
                                <p>0</p>
                                <img src={require('../../../assets/imgs/6_09.png')} />优惠
                            </Flex.Item>
                            <Flex.Item align="center">
                                <p>0</p>
                                <img src={require('../../../assets/imgs/6_11.png')} />积分
                            </Flex.Item>
                        </Flex>
                    </WingBlank>
                </div>
                {/* 积分 */}
                <WhiteSpace size="md" />
                <div className="list">
                    <Flex className="list_cont">
                        <Flex.Item align="center">
                            <img src={require('../../../assets/imgs/6_17.png')} />
                        </Flex.Item>
                        <Flex.Item className="flx">
                            我的积分
                            </Flex.Item>
                        <Flex.Item align="center">
                            <Icon type="right"></Icon>
                        </Flex.Item>
                    </Flex>
                    <Flex  className="list_cont">
                        <Flex.Item align="center">
                            <img src={require('../../../assets/imgs/6_19.png')} style={{ width: "28px" }} />
                        </Flex.Item>
                        <Flex.Item className="flx">
                            我的订阅
                            </Flex.Item>
                        <Flex.Item align="center">
                            <Icon type="right"></Icon>
                        </Flex.Item>
                    </Flex>
                    <Flex className="list_cont">
                        <Flex.Item align="center">
                            <img src={require('../../../assets/imgs/6_21.png')} />
                        </Flex.Item>
                        <Flex.Item className="flx">
                            微聊联系人
                            </Flex.Item>
                        <Flex.Item align="center">
                            <Icon type="right"></Icon>
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="md" style={{ background: '#ececec' }}></WhiteSpace>
                    <Flex  className="list_cont">
                        <Flex.Item align="center">
                            <img src={require('../../../assets/imgs/6_23.png')} />
                        </Flex.Item>
                        <Flex.Item className="flx">
                            房贷计算器
                            </Flex.Item>
                        <Flex.Item align="center">
                            <Icon type="right"></Icon>
                        </Flex.Item>
                    </Flex>
                    <Flex  className="list_cont">
                        <Flex.Item align="center">
                            <img src={require('../../../assets/imgs/6_25.png')} />
                        </Flex.Item>
                        <Flex.Item className="flx">
                            我的房子
                            </Flex.Item>
                        <Flex.Item align="center">
                            <Icon type="right"></Icon>
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="md" style={{ background: '#ececec' }}></WhiteSpace>
                    <Flex  className="list_cont">
                        <Flex.Item align="center">
                            <img src={require('../../../assets/imgs/6_27.png')} />
                        </Flex.Item>
                        <Flex.Item className="flx">
                            我的看房记录
                            </Flex.Item>
                        <Flex.Item align="center">
                            <Icon type="right"></Icon>
                        </Flex.Item>
                    </Flex>
                    <Flex  className="list_cont">
                        <Flex.Item align="center">
                            <img src={require('../../../assets/imgs/6_30.png')} />
                        </Flex.Item>
                        <Flex.Item className="flx">
                            我的问答
                            </Flex.Item>
                        <Flex.Item align="center">
                            <Icon type="right"></Icon>
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="md" style={{ background: '#ececec' }}></WhiteSpace>
                    <Flex  className="list_cont">
                        <Flex.Item align="center">
                            <img src={require('../../../assets/imgs/6_32.png')} />
                        </Flex.Item>
                        <Flex.Item className="flx">
                            设置
                            </Flex.Item>
                        <Flex.Item align="center">
                            <Icon type="right"></Icon>
                        </Flex.Item>
                    </Flex>
                    <Flex className="list_cont">
                        <Flex.Item align="center">
                        <img src={require('../../../assets/imgs/email.png')} />
                        </Flex.Item>
                        <Flex.Item className="flx">
                            意见反馈
                            </Flex.Item>
                        <Flex.Item align="center">
                            <Icon type="right"></Icon>
                        </Flex.Item>
                    </Flex>
                </div>
            </div>
        )
    }
}
