import React, { Component } from 'react';
import { Card, Button, Form, Input, message, Icon, Checkbox } from 'antd';

const FormItem = Form.Item;

class LoginForm extends Component {
    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, value) => {
            if (!err) {
                message.success(`${userInfo.userName} 成功！`)
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Card title="登陆行内表单" className="card-wrap">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登陆</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登陆水平表单" className="card-wrap">
                    <Form layout="horizontal" style={{ width: 300 }}>
                        <FormItem>
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
                                })(<Input prefix={<Icon type="user" />} placeholder="请输入用户名" />)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('password', {
                                    initialValue: '',
                                    rules: [{
                                        required: true,
                                        message: '密码不能为空'
                                    }]
                                })(<Input prefix={<Icon type="lock" />} placeholder="请输入密码" />)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                    rules: []
                                })(<Checkbox>记住密码</Checkbox>)
                            }
                            <a style={{ float: 'right' }}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>登陆</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Form.create()(LoginForm);
