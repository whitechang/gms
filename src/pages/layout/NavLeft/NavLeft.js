import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import menuList from '../../../resource/menuConfig';
import './NavLeft.less';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class NavLeft extends React.Component {

    componentWillMount() {
        const menuTreeNode = this.renderMenu(menuList);
        this.setState({
            menuTreeNode
        });
    }

    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu key={item.key} title={<span><Icon type="mail" /><span>{item.title}</span></span>}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (<Menu.Item key={item.key}>
                <Icon type="pie-chart" />
                <span>{item.title}</span>
            </Menu.Item>)
        });
    }

    render() {
        return (
            <div>
                <Sider>
                    <div className="logo">
                        <img style={{ height: 32, marginRight: 16 }} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="logo" />
                        <span style={{ color: '#fff', fontSize: 18 }}>GMS</span>
                    </div>
                    <div style={{ width: 200, height: "calc(100vh - 64px)" }}>
                        <Menu
                            mode="inline"
                            theme="dark"
                        >
                            {this.state.menuTreeNode}
                        </Menu>
                    </div>
                </Sider>
            </div>
        )
    }
}