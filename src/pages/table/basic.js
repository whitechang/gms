import React, { Component } from 'react';
import { Card, Table } from 'antd';
import axios from './../../axios';
import Utils from './../../utils/utils';

class BasicTable extends Component {

    state = {
        dataSource2: [],
        loading: false,
        selectedRowKeys: []
    }

    params = {
        page: 1
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
                    page: this.params.page
                }
            }
        }).then((res) => {
            if (res.code === 0) {
                this.setState({
                    dataSource2: res.result,
                    loading: false,
                    selectedRowKeys: [],
                    selectedIds: [],
                    pagination: Utils.pagination(res, (current) => {
                        me.params.page = current;
                        this.request();
                    })
                });
            }
        })
    }

    onRowClick = (record, index) => {
        let selectKey = [index];
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
    }

    render() {
        const { selectedRowKeys, pagination } = this.state;
        const columns = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
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
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '时间',
                dataIndex: 'time'
            }
        ];
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        }

        const rowCheckSelection = {
            type: 'checkbox',
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                let ids = [];
                selectedRows.map((item) => {
                    ids.push(item.id)
                })
                this.setState({
                    selectedRowKeys,
                    selectedIds: ids
                })
            }
        }
        return (
            <div>
                <Card title="基础表格" className="card-wrap">
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource}
                        bordered
                        pagination={false}
                    />
                </Card>
                <Card title="动态数据渲染表格" className="card-wrap">
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        bordered
                        pagination={false}
                        loading={this.state.loading}
                    />
                </Card>
                <Card title="单选表格" className="card-wrap">
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        bordered
                        pagination={false}
                        rowSelection={rowSelection}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record, index);
                                },
                            };
                        }}
                        loading={this.state.loading}
                    />
                </Card>
                <Card title="复选表格" className="card-wrap">
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        bordered
                        pagination={false}
                        rowSelection={rowCheckSelection}
                        loading={this.state.loading}
                    />
                </Card>
                <Card title="表格分页" className="card-wrap">
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        bordered
                        pagination={pagination}
                        loading={this.state.loading}
                    />
                </Card>
            </div>
        );
    }
}

export default BasicTable;
