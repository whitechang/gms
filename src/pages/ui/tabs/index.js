import React, { Component } from 'react';
import { Card, Tabs, message, Icon } from 'antd';
const TabPane = Tabs.TabPane;

class CommonTabs extends Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
            {
                title: 'Tab 1',
                content: '通用管理系统1',
                key: '1'
            },
            {
                title: 'Tab 2',
                content: '通用管理系统2',
                key: '2'
            },
            {
                title: 'Tab 3',
                content: '通用管理系统3',
                key: '3'
            }
        ];
        this.state = {
            panes,
            activeKey: panes[0].key
        }
    }


    handleCallback = (key) => {
        message.info("当前页：" + key);
    };

    handleChange = (activeKey) => {
        this.setState({
            activeKey
        });
        message.info("当前页：" + activeKey);
    };

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    }

    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    }

    render() {
        return (
            <div>
                <Card title="Tab页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab="Tab 1" key="1">通用管理系统 1</TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>通用管理系统 2</TabPane>
                        <TabPane tab="Tab 3" key="3">通用管理系统 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab图标页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab={<span><Icon type="plus" />Tab 1</span>} key="1">通用管理系统 1</TabPane>
                        <TabPane tab={<span><Icon type="edit" />Tab 2</span>} key="2">通用管理系统 2</TabPane>
                        <TabPane tab={<span><Icon type="delete" />Tab 3</span>} key="3">通用管理系统 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab图标页签" className="card-wrap">
                    <Tabs
                        onChange={this.handleChange}
                        type="editable-card"
                        activeKey={this.state.activeKey}
                        onEdit={this.onEdit}
                    >
                        {this.state.panes.map((panel) => {
                            return <TabPane tab={panel.title} key={panel.key}>{panel.content}</TabPane>
                        })}
                    </Tabs>
                </Card>
            </div>
        );
    }
}

export default CommonTabs;
