import React from 'react';
import { Layout, Row, Col } from 'antd';
import Util from '../../../utils/utils';
// import axios from '../../../axios';
import './Header.less';

const { Header } = Layout;

export default class CommonHeader extends React.Component {
    state = {
        userName: '',
        sysTime: null
    }
    componentWillMount() {
        this.setState({
            userName: '张某人'
        });
        setInterval(() => {
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            });
        }, 1000);
        this.getWeatherAPIData();
    }

    getWeatherAPIData = () => {
        // axios.jsonp({
        //     url: ''
        // }).then((res) => {
        //     console.log(res);
        // });
    }

    render() {
        return (
            <div>
                <Header className="header">
                    <Row className="header-top">
                        <Col span={24}>
                            <span>欢迎,{this.state.userName}</span>
                            <a href="localhost:8000">退出</a>
                        </Col>
                    </Row>
                    <Row className="breadcrumb">
                        <Col span={4} className="breadcrumb-title">
                            首页
                        </Col>
                        <Col span={20} className="breadcrumb-weather">
                            <span className="date">{this.state.sysTime}</span>
                            <span className="weather">晴转多云</span>
                        </Col>
                    </Row>
                </Header>
            </div>
        )
    }
}