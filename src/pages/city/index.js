import React, { Component } from 'react';
import { Card, Form, Select, Button, Table, Modal, message } from 'antd';
import axios from './../../axios';
import Utils from './../../utils/utils';

const FormItem = Form.Item;
const Option = Select.Option;
class City extends Component {
    state = {
        list: [],
        loading: false,
        isShowOpenCity: false
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
            url: '/open_city',
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
    // 开通城市
    handleOpenCity = () => {
        this.setState({
            isShowOpenCity: true
        });
    }
    //城市表单提交
    handleSubmit = () => {
        let cityInfo = this.cityForm.props.form.getFieldsValue();
        console.log(cityInfo);
        axios.ajax({
            url: '/city/open',
            data: {
                params: cityInfo
            }
        }).then((res) => {
            if (res.code === 0) {
                message.success(res.result);
                this.setState({
                    isShowOpenCity: false
                });
                this.requestList();
            }
        })
    }
    render() {
        const columns = [
            {
                title: '城市Id',
                dataIndex: 'id'
            },
            {
                title: '城市名称',
                dataIndex: 'name'
            },
            {
                title: '用车模式',
                dataIndex: 'mode',
                render(data) {
                    return data === 1 ? '指定停车点模式' : '禁停区模式'
                }
            },
            {
                title: '营运模式',
                dataIndex: 'op_mode',
                render(state) {
                    let config = {
                        '1': '自营',
                        '2': '加盟',
                    }
                    return config[state];
                }
            },
            {
                title: '授权加盟商',
                dataIndex: 'franchisee_name'
            },
            {
                title: '城市管理员',
                dataIndex: 'city_admins',
                render(data) {
                    return data.map((item) => {
                        return item.user_name
                    }).join(',');
                }
            },
            {
                title: '城市开通时间',
                dataIndex: 'open_time'
            },
            {
                title: '操作时间',
                dataIndex: 'update_time',
                render(data) {
                    return Utils.formateDate(data);
                }
            },
            {
                title: '操作人',
                dataIndex: 'sys_user_name'
            },
        ];
        return (
            <div>
                <Card className="card-wrap">
                    <FilterForm />
                </Card>
                <Card className="card-wrap">
                    <Button type="primary" onClick={this.handleOpenCity}>开通城市</Button>
                </Card>
                <div className="content-wrap">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.list}
                        loading={this.state.loading}
                    />
                </div>
                <Modal
                    title="开通城市"
                    visible={this.state.isShowOpenCity}
                    onCancel={() => {
                        this.setState({
                            isShowOpenCity: false
                        });
                    }}
                    onOk={this.handleSubmit}
                >
                    <OpenCityForm wrappedComponentRef={(inst) => { this.cityForm = inst; }} />
                </Modal>
            </div>
        );
    }
}

export default City;

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
                <FormItem label="用车模式">
                    {
                        getFieldDecorator('mode')(
                            <Select placeholder="请选择" style={{ width: 200 }} >
                                <Option value="0">全部</Option>
                                <Option value="1">指定停车点模式</Option>
                                <Option value="2">禁停区模式</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="营运模式">
                    {
                        getFieldDecorator('op_mode')(
                            <Select placeholder="请选择" style={{ width: 120 }} >
                                <Option value="0">全部</Option>
                                <Option value="1">自营</Option>
                                <Option value="2">加盟</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="加盟商授权状态">
                    {
                        getFieldDecorator('auth_status')(
                            <Select placeholder="请选择" style={{ width: 120 }} >
                                <Option value="0">全部</Option>
                                <Option value="1">已授权</Option>
                                <Option value="2">未授权</Option>
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

class OpenCityForm extends React.Component {
    render() {
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 19 }
        }
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="horizontal">
                <FormItem label="选择城市" {...formItemLayout}>
                    {
                        getFieldDecorator('city_id', {
                            initialValue: '0'
                        })(
                            <Select placeholder="请选择" style={{ width: 120 }}>
                                <Option value="0">全部</Option>
                                <Option value="1">苏州市</Option>
                                <Option value="2">杭州市</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="营运模式" {...formItemLayout}>
                    {
                        getFieldDecorator('op_mode', {
                            initialValue: '0'
                        })(
                            <Select placeholder="请选择" style={{ width: 120 }} >
                                <Option value="0">全部</Option>
                                <Option value="1">自营</Option>
                                <Option value="2">加盟</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="用车模式" {...formItemLayout}>
                    {
                        getFieldDecorator('mode', {
                            initialValue: '0'
                        })(
                            <Select placeholder="请选择" style={{ width: 200 }} >
                                <Option value="0">全部</Option>
                                <Option value="1">指定停车点模式</Option>
                                <Option value="2">禁停区模式</Option>
                            </Select>
                        )
                    }
                </FormItem>
            </Form>
        )
    }
}

OpenCityForm = Form.create()(OpenCityForm);