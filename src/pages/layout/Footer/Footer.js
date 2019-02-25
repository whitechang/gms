import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export default class CommonFooter extends React.Component {
    render() {
        return (
            <div>
                <Footer>copyright@white_zhang</Footer>
            </div>
        )
    }
}