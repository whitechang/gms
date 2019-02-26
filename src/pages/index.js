import React from 'react';
import { Layout } from 'antd';
// import Home from '../pages/home/route_demo/route1/Home';
// import HomeRoute from '../pages/home/route_demo/route2/route';
import CommonHeader from './layout/Header/Header';
import CommonFooter from './layout/Footer/Footer';
import NavLeft from './layout/NavLeft/NavLeft';
import './index.less'

const { Content } = Layout;

export default class Index extends React.Component {

    render() {
        return (
            <div>
                {/* <Home />
                <HomeRoute /> */}
                <Layout>
                    <NavLeft />
                    <Layout>
                        <CommonHeader />
                        <Content style={{ height: 'calc(100vh - 171px)', overflow: 'auto', backgroundColor: '#f1f3f5' }}>
                            {this.props.children}
                        </Content>
                        <CommonFooter />
                    </Layout>
                </Layout>
            </div>
        )
    }
}