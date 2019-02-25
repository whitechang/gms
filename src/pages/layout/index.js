import React from 'react';
import { Layout } from 'antd';
import CommonHeader from './Header/Header';
import CommonFooter from './Footer/Footer';
import NavLeft from './NavLeft/NavLeft';

const { Content } = Layout;

export default class Default extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <NavLeft />
                    <Layout>
                        <CommonHeader />
                        <Content style={{height: 'calc(100vh - 289px)'}}>Content</Content>
                        <CommonFooter />
                    </Layout>
                </Layout>
            </div>
        )
    }
}