import React, { Component } from 'react';
import { Card, Button, Radio } from 'antd';
import '../ui.less';

class Buttons extends Component {

    state = {
        loading: true,
        size: 'default'
    };

    handleCloseLoading = () => {
        this.setState({
            loading: !this.state.loading
        });
    };

    handleChange = (e) => {
        this.setState({
            size: e.target.value
        });
    };

    render() {
        const { loading, size } = this.state;
        return (
            <div>
                <Card title="基础按钮" className="card-wrap">
                    <Button type="primary">通用管理系统</Button>
                    <Button>通用管理系统</Button>
                    <Button type="dashed">通用管理系统</Button>
                    <Button type="danger">通用管理系统</Button>
                    <Button disabled>通用管理系统</Button>
                </Card>
                <Card title="图标按钮" className="card-wrap">
                    <Button type="primary" icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button icon="search" shape="circle"></Button>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="download">下载</Button>
                </Card>
                <Card title="Loading按钮" className="card-wrap">
                    <Button type="primary" loading={loading}>确定</Button>
                    <Button type="primary" shape="circle" loading={loading}></Button>
                    <Button loading={loading} >点击加载</Button>
                    <Button shape="circle" loading={loading}></Button>
                    <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
                </Card>
                <Card title="按钮组" style={{margin:'10px 20px'}}>
                    <Button.Group>
                        <Button icon="left" type="primary">返回</Button>
                        <Button icon="right" type="primary">前进</Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸" className="card-wrap">
                    <Radio.Group value={size} onChange={this.handleChange}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={size}>通用管理系统</Button>
                    <Button size={size}>通用管理系统</Button>
                    <Button type="dashed" size={size}>通用管理系统</Button>
                    <Button disabled size={size}>通用管理系统</Button>
                </Card>
            </div>
        );
    }
}

export default Buttons;
