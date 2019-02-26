import React, { Component } from 'react';
import { Card, Button, Modal } from 'antd';
import '../ui.less';

class Modals extends Component {

    state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false,
    }

    handleOpen = (type) => {
        this.setState({
            [type]: true
        })
    }

    render() {
        const { showModal1 } = this.state;
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleOpen("showModal1")}>Open</Button>
                    <Button type="primary" onClick={() => this.handleOpen("showModal2")}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.handleOpen("showModal3")}>顶部20px</Button>
                    <Button type="primary" onClick={() => this.handleOpen("showModal4")}>水平垂直居中</Button>
                </Card>
                <Card title="图标按钮" className="card-wrap">
                </Card>
                <Modal
                    title="React"
                    visible={showModal1}
                    onCancel={() => {
                        this.setState({
                            showModal1: false
                        })
                    }}
                >
                    <p>欢迎使用通用管理系统</p>
                </Modal>
            </div>
        );
    }
}

export default Modals;
