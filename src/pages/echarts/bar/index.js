import React from 'react';
import { Card } from 'antd';
//import echarts from 'echarts';
//按需加载
import echarts from 'echarts/lib/echarts';
//导入柱形图
import 'echarts/lib/chart/bar';
import ReactEcharts from 'echarts-for-react';

export default class Bar extends React.Component {
    getOption = () => {
        let option = {
            title: {
                text: '用户订单'
            },
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日',]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '订单量',
                    type: 'bar',
                    data: [1000, 2000, 3000, 4000, 2000, 1000, 800]
                }
            ]
        };
        return option;
    }
    getOption2 = () => {
        let option = {
            title: {
                text: '用户订单'
            },
            legend:{
                data:['OFO','摩拜','悟空']
            },
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日',]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'OFO',
                    type: 'bar',
                    data: [2000, 3000, 5000, 7000, 8000, 12000, 20000]
                },
                {
                    name: '摩拜',
                    type: 'bar',
                    data: [1000, 2000, 3000, 4000, 8000, 10000, 18000]
                },
                {
                    name: '悟空',
                    type: 'bar',
                    data: [1000, 1500, 2000, 4000, 6000, 8000, 10000]
                }
            ]
        };
        return option;
    }
    render() {
        return (
            <div>
                <Card title="柱形图一" className="card-wrap">
                    <ReactEcharts option={this.getOption()} />
                </Card>
                <Card title="柱形图二" className="card-wrap">
                    <ReactEcharts option={this.getOption2()} />
                </Card>
            </div>
        )
    }
}