import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Button, Card, Space } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
// import ThanhToan from './studying/formThanhToan';

import Counter from './features/counter'

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

class ContentDTC extends Component {

  constructor(props) {
    super(props);
    console.log('content', props);
    this.state = {
      name: 'xx'
    }
  }


  _content = this.props.data.map(e => {
    return <div key={e.name}>
      <Card >
        <img src={e.img} style={{ height: '200px', width: '200px' }}></img>
        <p>{e.name}</p>
        <Button type="primary" onClick={(ev) => { this.onAddToCart(e.name, ev) }}>Add to cart</Button>
      </Card>
    </div>
  })

  onAddToCart = (name, event) => {
    this.props.onReceiContent(3)
    console.log('add', this.props,  this.props.children, name)
  }

  render() {
    return (
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Space>
              {this._content}

            </Space>
          </Content>
        </Layout>
      </Content>
    )
  }
}


export default ContentDTC;

