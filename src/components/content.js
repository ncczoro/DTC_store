import React, { Component } from 'react';

import { Layout, Menu, Breadcrumb, Button, Card, Space } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

class ContentDTC extends Component {

  constructor(props) {
    super(props);
    console.log('content', props);
    this.onAddToCart3 = this.onAddToCart3.bind(this);
  }

  _content = this.props.data.map(e => {
    return <div key={e.name}>
      <Card >
        <img src={e.img} style={{ height: '200px', width: '200px' }}></img>
        <p>{e.name}</p>
        <Button type="primary" onClick={this.onAddToCart1}>Add to cart1</Button>
        <Button type="primary" onClick={() => this.onAddToCart2(e.name)}>Add to cart2</Button>
        <Button type="primary" onClick={this.onAddToCart3}>Add to cart3</Button>
        <Button type="primary" onClick={(ev) => { this.onAddToCart4(e.name, ev) }}>Add to cart4</Button>
        <Button type="primary" onClick={this.onAddToCart5.bind(this, e.name)}>Add to cart5</Button>
      </Card>
    </div>
  })



  onAddToCart1() {
    alert('cach 1 khong truyen tham so ' + this);
  }

  onAddToCart2(a) { // cu phap ES6, arrow do the dung this nhu global variable
    alert('cach 2 arrow function js' + a + this);
    this.props.onReceiContent('from content');
  }
  onAddToCart3() {
    alert('cach 3 dugn .bind(this) de thay arrow funtion js' + this);
  }

  onAddToCart4 = (name, event) => {
    alert('cach truyen tham so 1: dung arrow function' + name + event.type + this);
  }

  onAddToCart5(a) {
    alert('cach truyen tham so 2 dung .bind' + a + this)
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

