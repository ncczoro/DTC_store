
import React, { Component } from 'react';
import '../css/header.css';
import '../App.css';
import { Menu, Layout, Row, Col, Select, Input, Space, Avatar, Badge } from 'antd';
import { UserOutlined, HeartOutlined, ShoppingOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Option } = Select;
const { Search } = Input;
const onSearch = value => console.log(value);
class HeaderDTC extends Component {

    render() {
        return (
            <div>
                <Row className="container-header-search">
                    <Col span={6}>
                        <div className="fl-r">
                            <strong>DTC Boy</strong>
                        </div>
                    </Col>
                    <Col span={12} style={{ textAlign: "center" }}>
                        <Space align="center" size="0">
                            <Select size="large" defaultValue="Option1" >
                                <Option value="Option1">All</Option>
                                <Option value="Option2">Option2</Option>
                            </Select>
                            <Search
                                placeholder="I'm shopping for..."
                                allowClear
                                enterButton="Search"
                                size="large"
                                onSearch={onSearch}
                            />
                        </Space>
                    </Col>
                    <Col span={6}>
                        <div className="fl-l">
                            <Space size="large">
                                <Badge color="blue" count={1} offset={[0, 30]}>
                                    <Avatar size="large" icon={<HeartOutlined />} />
                                </Badge>
                                <Badge color="blue" count={1} offset={[0, 30]}>
                                    <Avatar size="large" icon={<ShoppingOutlined />} />
                                </Badge>
                                <Avatar size="large" icon={<UserOutlined />} />
                            </Space>
                        </div>
                    </Col>
                </Row>
                <Header className="header-menu">

                    <img className="logo" alt="ncc" src="https://s120-ava-talk.zadn.vn/c/a/e/7/18/120/671a305890b70992d360283fb5bae3c7.jpg"></img>

                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
            </div>
        )
    }
}

export default HeaderDTC;

