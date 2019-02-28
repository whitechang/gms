import React, { Component } from 'react';
import { Card, Carousel } from 'antd';
import '../ui.less';

class Carousels extends Component {

    render() {
        return (
            <div>
                <Card title="文字背景轮播" className="card-wrap">
                    <Carousel autoplay effect="fade">
                        <div><h3>Ant Motion Banner -React</h3></div>
                        <div><h3>Ant Motion Banner -Vue</h3></div>
                        <div><h3>Ant Motion Banner -Angular</h3></div>
                        <div><h3>Ant Motion Banner -Little</h3></div>
                    </Carousel>
                </Card>
            </div>
        );
    }
}

export default Carousels;
