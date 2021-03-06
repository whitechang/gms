import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Admin from './pages/index';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Loadings from './pages/ui/loadings';
import Notice from './pages/ui/notice';
import Messages from './pages/ui/messages';
import CommonTabs from './pages/ui/tabs';
import Carousels from './pages/ui/carousel';
import LoginForm from './pages/form/login';
import RegisterForm from './pages/form/register';
import NoMatch from './pages/nomatch';
import BasicTable from './pages/table/basic';
import HighTable from './pages/table/high';
import City from './pages/city';
import Order from './pages/order';
import Common from './pages/common';
import OrderDetail from './pages/order/detail';
import Bar from './pages/echarts/bar';
import Pie from './pages/echarts/pie';
import Line from './pages/echarts/line';
import RichText from './pages/rich';

export default class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route exact path="/" component={Admin} />
                    <Route path="/login" component={Login} />
                    <Route path="/admin" render={() =>
                        <Admin>
                            <Switch>
                                <Route path="/admin/ui/buttons" component={Buttons} />
                                <Route path="/admin/ui/modals" component={Modals} />
                                <Route path="/admin/ui/loadings" component={Loadings} />
                                <Route path="/admin/ui/notification" component={Notice} />
                                <Route path="/admin/ui/messages" component={Messages} />
                                <Route path="/admin/ui/tabs" component={CommonTabs} />
                                <Route path="/admin/ui/carousel" component={Carousels} />
                                <Route path="/admin/form/login" component={LoginForm} />
                                <Route path="/admin/form/reg" component={RegisterForm} />
                                <Route path="/admin/table/basic" component={BasicTable} />
                                <Route path="/admin/table/high" component={HighTable} />
                                <Route path="/admin/city" component={City} />
                                <Route path="/admin/order" component={Order} />
                                <Route path="/admin/charts/bar" component={Bar} />
                                <Route path="/admin/charts/pie" component={Pie} />
                                <Route path="/admin/charts/line" component={Line} />
                                <Route path="/admin/rich" component={RichText} />
                                <Route component={NoMatch} />
                            </Switch>
                        </Admin>
                    } />
                    <Route path="/common" render={() =>
                        <Common>
                            <Switch>
                                <Route path="/common/order/detail/:orderId" component={OrderDetail} />
                            </Switch>
                        </Common>
                    } />
                    <Route path="/order/detail" component={Login} />
                </App>
            </HashRouter>
        );
    }
}