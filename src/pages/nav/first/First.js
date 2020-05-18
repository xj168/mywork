import React, { Component } from 'react'
import './first.scss'
import { NavBar, Icon, Carousel, WingBlank, Flex, WhiteSpace } from 'antd-mobile';
import { homelist } from '../../../api/apis';

export default class First extends Component {
    state = {
        data: ['banner_01', 'banner_02', 'banner_03'],
        imgHeight: 176,
        list: []
    }

    componentDidMount() {
        homelist().then((res) => {
            console.log(res);

            this.setState({
                list: res.data
            })
        })
    }
    render() {
        let list = this.state.list
        return (
            <div className="first">
                <NavBar
                    // className="navbar"
                    mode="dark"
                    leftContent="Back"
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                ></NavBar>
                <Carousel
                    autoplay={true}
                    infinite={true}
                    // style={{ marginTop: '45px' }}
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={require('../../../assets/imgs/' + val + '.jpg')}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                            />
                        </a>
                    ))}
                </Carousel>
                <WhiteSpace size="lg" />
                <WingBlank size="md">
                    <Flex>
                        <Flex.Item align="center">
                            <img src={require('../../../assets/imgs/3_03.png')} />
                            <WhiteSpace size="xs" />
                            <WingBlank size="md" >新房</WingBlank>
                        </Flex.Item>
                        <Flex.Item align="center">
                            <img src={require('../../../assets/imgs/3_05.png')} />
                            <WhiteSpace size="xs" />
                            <WingBlank size="md" >二手房</WingBlank>
                        </Flex.Item>
                        <Flex.Item align="center">
                            <img src={require('../../../assets/imgs/3_07.png')} />
                            <WhiteSpace size="xs" />
                            <WingBlank size="md" >租房</WingBlank>
                        </Flex.Item>
                        <Flex.Item align="center">
                            <img src={require('../../../assets/imgs/3_09.png')} />
                            <WhiteSpace size="xs" />
                            <WingBlank size="md" >商铺写字楼</WingBlank>
                        </Flex.Item>
                    </Flex>
                </WingBlank>
                <WhiteSpace size="md" />
                <WingBlank size="md">
                    <Flex>
                        <Flex.Item align="center">
                            <img src={require('../../../assets/imgs/3_15.png')} />
                            <WhiteSpace size="xs" />
                            <WingBlank size="md" >卖房</WingBlank>
                        </Flex.Item>
                        <Flex.Item align="center">
                            <img src={require('../../../assets/imgs/3_16.png')} />
                            <WhiteSpace size="xs" />
                            <WingBlank size="md" >海外房产</WingBlank>
                        </Flex.Item>
                        <Flex.Item align="center">
                            <img src={require('../../../assets/imgs/3_17.png')} />
                            <WhiteSpace size="xs" />
                            <WingBlank size="md" >小区房价</WingBlank>
                        </Flex.Item>
                        <Flex.Item align="center">
                            <img src={require('../../../assets/imgs/3_18.png')} />
                            <WhiteSpace size="xs" />
                            <WingBlank size="md" >问答</WingBlank>
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg" />

                </WingBlank>
                <WhiteSpace size="lg" className="bgcor" />
                <WingBlank size="lg">
                    <WhiteSpace size="md" />
                    <p className="wiki"><span>房产全百科</span>专业的买房攻略</p>
                    <WhiteSpace size="md" />
                    <Flex className="wiki_contnt">
                        <Flex.Item align="center">
                            <img src={require('../../../assets/imgs/dk.png')} />
                            <WhiteSpace size="xs" />
                            <WingBlank size="md" className="fon14">我要贷款</WingBlank>
                        </Flex.Item>
                        <Flex.Item align="center">
                            <img src={require('../../../assets/imgs/js.png')} />
                            <WhiteSpace size="xs" />
                            <WingBlank size="md" className="fon14">房贷计算</WingBlank>
                        </Flex.Item>
                        <Flex.Item align="center">
                            <img src={require('../../../assets/imgs/zs.png')} />
                            <WhiteSpace size="xs" />
                            <WingBlank size="md" className="fon14">知识</WingBlank>
                        </Flex.Item>
                        <Flex.Item align="center">
                            <img src={require('../../../assets/imgs/sas.png')} />
                            <WhiteSpace size="xs" />
                            <WingBlank size="md" className="fon14">扫一扫</WingBlank>
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg" />
                </WingBlank>
                <WhiteSpace size="lg" className="bgcor" />
                <WingBlank size="lg">
                    <h3>猜你喜欢</h3>
                    {list.map((name, i) => {
                        return <Flex className="list" align="start" key={i}>
                                <Flex.Item>
                                    <img src={`http://129.211.169.131:33833${name.imgs}`} />
                                </Flex.Item>
                                <Flex.Item className="flex2">
                                    <p>{name.name}</p>
                                    <p><span>{name.area}</span>{name.range}</p>
                                    <p><span>{name.type}</span>{name.point}平</p>
                                </Flex.Item>
                                <Flex.Item className="flex3">
                                    {name.price}/平
                        </Flex.Item>
                            </Flex>
                    })}
                </WingBlank>
            </div>
        )
    }
}
