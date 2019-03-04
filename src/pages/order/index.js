import React, { Component } from 'react';
import { Card, Form, Select, Button, Table, Modal, message, DatePicker } from 'antd';
import axios from './../../axios';
import Utils from './../../utils/utils';

const FormItem = Form.Item;
const Option = Select.Option;
class Order extends Component {
    state = {
        list: [],
        loading: false,
        selectedRowKeys: []
    }
    params = {
        page: 1
    }
    componentDidMount() {
        this.requestList();
    }
    // 默认请求接口数据
    requestList = () => {
        let _this = this;
        this.setState({
            loading: true
        });
        axios.ajax({
            url: '/order/list',
            data: {
                params: {
                    page: this.params.page
                }
            }
        }).then((res) => {
            this.setState({
                list: res.result.item_list,
                loading: false,
                pagination: Utils.pagination(res, (current) => {
                    _this.params.page = current;
                    _this.requestList();
                })
            });
        });
    }
    // 订单详情
    openOrderDetail = () => {
        console.log(this.state.selectedItem);
        let item = this.state.selectedItem;
        if (!item) {
            Modal.info({
                title: '信息',
                content: '请选择一条订单'
            })
            return;
        }
        window.open(`/#/common/order/detail/${item.id}`, '_blank');
    }

    onRowClick = (record, index) => {
        let selectKey = [index];
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
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
        const { selectedRowKeys } = this.state;
        const columns = [
            {
                title: '订单编号',
                dataIndex: 'order_sn'
            },
            {
                title: '车辆编号',
                dataIndex: 'bike_sn'
            },
            {
                title: '用户名',
                dataIndex: 'user_name'
            },
            {
                title: '手机号',
                dataIndex: 'mobile'
            },
            {
                title: '里程',
                dataIndex: 'distance'
            },
            {
                title: '行驶时长',
                dataIndex: 'total_time'
            },
            {
                title: '状态',
                dataIndex: 'status'
            },
            {
                title: '开始时间',
                dataIndex: 'start_time'
            },
            {
                title: '结束时间',
                dataIndex: 'end_time'
            },
            {
                title: '订单金额',
                dataIndex: 'total_fee'
            },
            {
                title: '实付金额',
                dataIndex: 'user_pay'
            },
        ];

        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        }

        return (
            <div>
                <Card className="card-wrap">
                    <FilterForm />
                </Card>
                <Card className="card-wrap">
                    <Button type="primary" onClick={this.openOrderDetail}>订单详情</Button>
                    <Button type="primary">结束订单</Button>
                </Card>
                <div className="content-wrap">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.list}
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
                </div>
            </div>
        );
    }
}

export default Order;

class FilterForm extends React.Component {
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <Form layout="inline">
                <FormItem label="城市">
                    {
                        getFieldDecorator('city_id')(
                            <Select placeholder="请选择" style={{ width: 120 }} >
                                <Option value="0">全部</Option>
                                <Option value="1">苏州市</Option>
                                <Option value="2">杭州市</Option>
                                <Option value="3">上海市</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="订单时间">
                    {
                        getFieldDecorator('start_time')(
                            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                        )
                    }
                </FormItem>
                ~
                <FormItem>
                    {
                        getFieldDecorator('end_time')(
                            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                        )
                    }
                </FormItem>
                <FormItem label="订单状态">
                    {
                        getFieldDecorator('status')(
                            <Select placeholder="请选择" style={{ width: 120 }} >
                                <Option value="0">全部</Option>
                                <Option value="1">进行中</Option>
                                <Option value="2">结束行程</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button type="primary" style={{ margin: '0 20px' }}>查询</Button>
                    <Button>重置</Button>
                </FormItem>
            </Form>
        )
    }
};

FilterForm = Form.create()(FilterForm);