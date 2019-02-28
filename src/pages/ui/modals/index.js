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

    handleConfirm = (type) => {
        Modal[type]({
            title: '确认？',
            content: 'are you sure？',
            onOk() {
                console.log('OK')
            },
            onCancel() {
                console.log('Cancel')
            }
        })
    }

    render() {
        const { showModal1, showModal2, showModal3, showModal4 } = this.state;
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleOpen("showModal1")}>Open</Button>
                    <Button type="primary" onClick={() => this.handleOpen("showModal2")}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.handleOpen("showModal3")}>顶部20px</Button>
                    <Button type="primary" onClick={() => this.handleOpen("showModal4")}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleConfirm("confirm")}>Confirm</Button>
                    <Button type="primary" onClick={() => this.handleConfirm("info")}>Info</Button>
                    <Button type="primary" onClick={() => this.handleConfirm("success")}>Success</Button>
                    <Button type="primary" onClick={() => this.handleConfirm("warning")}>Warning</Button>
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
                <Modal
                    title="React"
                    visible={showModal2}
                    okText="好的"
                    cancelText="算了"
                    onCancel={() => {
                        this.setState({
                            showModal2: false
                        })
                    }}
                >
                    <p>自定义按钮</p>
                </Modal>
                <Modal
                    title="React"
                    style={{ top: 20 }}
                    visible={showModal3}
                    onCancel={() => {
                        this.setState({
                            showModal3: false
                        })
                    }}
                >
                    <p>20px To Top</p>
                </Modal>
                <Modal
                    title="React"
                    centered
                    visible={showModal4}
                    onCancel={() => {
                        this.setState({
                            showModal4: false
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
