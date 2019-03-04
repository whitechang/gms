import React, { Component } from 'react';
import { Card, Table, message } from 'antd';
import axios from './../../axios';
import Utils from './../../utils/utils';

class HighTable extends Component {

    state = {
        dataSource2: [],
        loading: false,
    }

    componentDidMount() {
        const dataSource = [
            {
                key: '0',
                id: '0',
                userName: 'Jack',
                sex: '1',
                state: '1',
                hoppy: '1',
                birthday: '1999-09-09',
                address: 'suzhou',
                time: '9:00'
            },
            {
                key: '1',
                id: '1',
                userName: 'Hello',
                sex: '1',
                state: '1',
                hoppy: '1',
                birthday: '1999-09-09',
                address: 'suzhou',
                time: '9:00'
            }, {
                key: '2',
                id: '2',
                userName: 'Kitty',
                sex: '1',
                state: '1',
                hoppy: '1',
                birthday: '1999-09-09',
                address: 'suzhou',
                time: '9:00'
            }
        ];
        this.setState({
            dataSource
        });
        this.request();
    }

    //动态获取mock数据
    request = () => {
        let me = this;
        this.setState({
            loading: true,
        });
        axios.ajax({
            url: '/table/list',
            data: {
                params: {
                    page: 1
                }
            }
        }).then((res) => {
            if (res.code === 0) {
                this.setState({
                    dataSource2: res.result,
                    loading: false,
                });
            }
        }, (res) => {
            message.error("请求错误");
            this.setState({
                dataSource2: [],
                loading: false,
            });
        })
    }

    handleChange = (pagination, filters, sorter) => {
        this.setState({
            sortOrder: sorter.order
        })
    }

    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80
            },
            {
                title: '性别',
                dataIndex: 'sex',
                width: 80,
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                width: 120,
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '江南才子',
                        '5': '东北汉子'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                dataIndex: 'hoppy',
                width: 80,
                render(data) {
                    let config = {
                        '1': '游泳',
                        '2': '篮球',
                        '3': '足球',
                        '4': '跑步',
                        '5': '喝茶',
                        '6': '爬山',
                        '7': '骑行',
                        '8': '健身',
                        '9': '瑜伽'
                    }
                    return config[data];
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday',
                width: 120
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 80
            },
            {
                title: '时间',
                dataIndex: 'time',
                width: 80
            }
        ];
        const columns2 = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80,
                fixed: 'left'
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80,
                fixed: 'left'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                width: 80,
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                width: 120,
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '江南才子',
                        '5': '东北汉子'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                dataIndex: 'hoppy',
                width: 80,
                render(data) {
                    let config = {
                        '1': '游泳',
                        '2': '篮球',
                        '3': '足球',
                        '4': '跑步',
                        '5': '喝茶',
                        '6': '爬山',
                        '7': '骑行',
                        '8': '健身',
                        '9': '瑜伽'
                    }
                    return config[data];
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday',
                width: 120
            },
            {
                title: '生日',
                dataIndex: 'birthday',
                width: 120
            },
            {
                title: '生日',
                dataIndex: 'birthday',
                width: 120
            },
            {
                title: '生日',
                dataIndex: 'birthday',
                width: 120
            },
            {
                title: '生日',
                dataIndex: 'birthday',
                width: 120
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 80
            },
            {
                title: '时间',
                dataIndex: 'time',
                width: 80,
                fixed: "right"
            }
        ];
        const columns3 = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80,
                sorter: (a, b) => {
                    return a.userName < b.userName;
                },
                sortOrder: this.state.sortOrder
            },
            {
                title: '性别',
                dataIndex: 'sex',
                width: 80,
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                width: 120,
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '江南才子',
                        '5': '东北汉子'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                dataIndex: 'hoppy',
                width: 80,
                render(data) {
                    let config = {
                        '1': '游泳',
                        '2': '篮球',
                        '3': '足球',
                        '4': '跑步',
                        '5': '喝茶',
                        '6': '爬山',
                        '7': '骑行',
                        '8': '健身',
                        '9': '瑜伽'
                    }
                    return config[data];
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday',
                width: 120
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 80
            },
            {
                title: '时间',
                dataIndex: 'time',
                width: 80
            }
        ];
        return (
            <div>
                <Card title="头部固定" className="card-wrap">
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        bordered
                        pagination={false}
                        loading={this.state.loading}
                        scroll={{ y: 200 }}
                    />
                </Card>
                <Card title="两侧固定" className="card-wrap">
                    <Table
                        columns={columns2}
                        dataSource={this.state.dataSource2}
                        bordered
                        pagination={false}
                        loading={this.state.loading}
                        scroll={{ x: 1240 }}
                    />
                </Card>
                <Card title="表格排序" className="card-wrap">
                    <Table
                        columns={columns3}
                        dataSource={this.state.dataSource2}
                        bordered
                        pagination={false}
                        loading={this.state.loading}
                        onChange={this.handleChange}
                    />
                </Card>
            </div>
        );
    }
}

export default HighTable;
