import React, { Component } from 'react';
import { Card, Spin, Icon, Alert } from 'antd';

class Loadings extends Component {
  render() {
    const icon = <Icon type="loading" style={{ fontSize: 24 }} />
    return (
      <div>
        <Card title="Spin用法" className="card-wrap">
          <Spin size="small" />
          <Spin style={{ marginLeft: 10 }} />
          <Spin style={{ marginLeft: 10 }} size="large" />
          <Spin style={{ marginLeft: 10 }} indicator={icon} />
        </Card>
        <Card title="内容遮罩" className="card-wrap">
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
          <Spin>
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="warning"
            />
          </Spin>
          <Spin tip="加载中...">
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="success"
            />
          </Spin>
          <Spin indicator={icon}>
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="error"
            />
          </Spin>
        </Card>
      </div>
    );
  }
}

export default Loadings;
