import React from 'react';
import { Layout } from 'antd';
import './Footer.less';

const { Footer } = Layout;

export default class CommonFooter extends React.Component {
    render() {
        return (
            <div>
                <Footer className="footer">copyright@white_zhang</Footer>
            </div>
        )
    }
}