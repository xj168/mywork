import React, { Component } from 'react'
// 引入路由
import { HashRouter, Switch, Route } from 'react-router-dom'
// 引入路由对应的页面
import Erths from '../pages/erth/Erths'
import Login from '../pages/login/Login'
import Index from '../pages/nav/Index'
import Register from '../pages/register/Register'

export default class MainRouter extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    {/* exact取消抹灰查询 */}
                    <Route path='/' component={Index} exact></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/erth' component={Erths}></Route>
                    <Route path='/register' component={Register}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
