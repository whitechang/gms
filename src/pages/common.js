import React from 'react';
import { Row } from 'antd';
import CommonHeader from './layout/Header/Header';
import './index.less';
import '../styles/common.less';

export default class Common extends React.Component {
    render() {
        return (
            <div>
                <Row className="simple-page">
                    <CommonHeader menuType="second" />
                </Row>
                <Row className="content">
                    {this.props.children}
                </Row>
            </div>
        )
    }
}