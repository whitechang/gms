import React, { Component } from 'react';
import { Card, Button, Form, Input, Checkbox, Radio, Select, Switch, TimePicker, Upload, InputNumber, DatePicker } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const Option = Select.Option;
const TextArea = Input.TextArea;

class RegisterForm extends Component {
    handleSubmit = () => {
        let info = this.props.form.getFieldsValue();
        console.log(info);
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const fromItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 12
            }
        }
        const offsetLayout = {
            wrapperCol: {
                xs: 24,
                sm: {
                    span: 12,
                    offset: 4
                }
            }
        }
        return (
            <div>
                <Card title="注册表单" className="card-wrap">
                    <Form>
                        <FormItem label="用户名" {...fromItemLayout}>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空'
                                        }, {
                                            min: 5,
                                            max: 10,
                                            message: '长度不在范围内'
                                        }, {
                                            pattern: new RegExp('^\\w+$', 'g'),
                                            message: '用户名必须为英文字母或数字'
                                        }
                                    ]
                                })(<Input placeholder="请输入用户名" />)
                            }
                        </FormItem>
                        <FormItem label="密码" {...fromItemLayout}>
                            {
                                getFieldDecorator('password', {
                                    initialValue: '',
                                    rules: [{
                                        required: true,
                                        message: '密码不能为空'
                                    }]
                                })(<Input placeholder="请输入密码" />)
                            }
                        </FormItem>
                        <FormItem label="性别" {...fromItemLayout}>
                            {
                                getFieldDecorator('sex', {
                                    initialValue: '1',
                                    rules: []
                                })(<Radio.Group>
                                    <Radio value="1">男</Radio>
                                    <Radio value="2">女</Radio>
                                </Radio.Group>)
                            }
                        </FormItem>
                        <FormItem label="年龄" {...fromItemLayout}>
                            {
                                getFieldDecorator('age', {
                                    initialValue: 18,
                                    rules: []
                                })(<InputNumber />)
                            }
                        </FormItem>
                        <FormItem label="当前状态" {...fromItemLayout}>
                            {
                                getFieldDecorator('state', {
                                    initialValue: '3',
                                    rules: []
                                })(<Select>
                                    <Option value="1">咸鱼一条</Option>
                                    <Option value="2">风华浪子</Option>
                                    <Option value="3">北大才子</Option>
                                    <Option value="4">江南才子</Option>
                                    <Option value="5">东北汉子</Option>
                                </Select>)
                            }
                        </FormItem>
                        <FormItem label="爱好" {...fromItemLayout}>
                            {
                                getFieldDecorator('hoppy', {
                                    initialValue: ['2', '5'],
                                    rules: []
                                })(<Select mode="multiple">
                                    <Option value="1">游泳</Option>
                                    <Option value="2">篮球</Option>
                                    <Option value="3">足球</Option>
                                    <Option value="4">跑步</Option>
                                    <Option value="5">喝茶</Option>
                                    <Option value="6">爬山</Option>
                                    <Option value="7">骑行</Option>
                                    <Option value="8">健身</Option>
                                    <Option value="9">瑜伽</Option>
                                </Select>)
                            }
                        </FormItem>
                        <FormItem label="是否已婚" {...fromItemLayout}>
                            {
                                getFieldDecorator('isMarried', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Switch />)
                            }
                        </FormItem>
                        <FormItem label="生日" {...fromItemLayout}>
                            {
                                getFieldDecorator('birthday', {
                                    initialValue: moment('2019-03-02')
                                })(<DatePicker />)
                            }
                        </FormItem>
                        <FormItem label="联系地址" {...fromItemLayout}>
                            {
                                getFieldDecorator('address', {
                                    initialValue: '苏州市奥体中心'
                                })(<TextArea />)
                            }
                        </FormItem>
                        <FormItem label="早期时间" {...fromItemLayout}>
                            {
                                getFieldDecorator('time', {
                                })(<TimePicker />)
                            }
                        </FormItem>
                        <FormItem label="头像" {...fromItemLayout}>
                            {
                                getFieldDecorator('img', {
                                })(<Upload
                                    listType="picture-card"
                                    showUploadList={false}
                                    action="">

                                </Upload>)
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('text', {
                                })(<Checkbox>我已阅读过<a href="localhost:3000">协议</a></Checkbox>)
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('reg', {
                                })(<Button type='primary' onClick={this.handleSubmit}>注册</Button>)
                            }
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Form.create()(RegisterForm);
