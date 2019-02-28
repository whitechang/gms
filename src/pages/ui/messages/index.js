import React, { Component } from 'react';
import { Card, Button, message } from 'antd';

class Messages extends Component {

    showMessage = (type, duration) => {
        message[type]("操作成功", duration);
    }

    render() {
        return (
            <div>
                <Card title="全局提示框" className="card-wrap">
                    <Button type="primary" onClick={() => this.showMessage('success', 1)}>Success</Button>
                    <Button type="primary" onClick={() => this.showMessage('info', 2)}>Info</Button>
                    <Button type="primary" onClick={() => this.showMessage('warning', 3)}>Warning</Button>
                    <Button type="primary" onClick={() => this.showMessage('error', 4)}>Error</Button>
                    <Button type="primary" onClick={() => this.showMessage('loading', 4)}>Loading</Button>
                </Card>
            </div>
        );
    }
}

export default Messages;
