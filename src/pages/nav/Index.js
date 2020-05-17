import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import './Index.scss';
import { Link } from 'react-router-dom'

export default class TabBarExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
        };
    }

    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#06c540"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="首页"
                        key="First"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${require('../../assets/imgs/ind.png')}) center center /  21px 21px no-repeat`
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${require('../../assets/imgs/in.png')}) center center /  21px 21px no-repeat`
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'blueTab'}
                        // badge={1}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                        }}
                        data-seed="logId"
                    >
                    <p>123</p>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${require('../../assets/imgs/lt.png')}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${require('../../assets/imgs/l.png')}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        title="微聊"
                        key="chat"
                        // badge={'new'}
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                        data-seed="logId1"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${require('../../assets/imgs/xx.png')}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${require('../../assets/imgs/x1.png')}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        title="推荐"
                        key="pat"
                        // dot
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                        }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: require('../../assets/imgs/my.png') }}
                        selectedIcon={{ uri: require('../../assets/imgs/m.png') }}
                        title="我的"
                        key="my"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                        }}
                    >
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}
