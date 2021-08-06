
import React, { Component } from 'react';
import '../css/header.css';
import '../App.css';
import { Menu, Layout, Row, Col, Select, Input, Space } from 'antd';

const { Header } = Layout;
const { Option } = Select;
const { Search } = Input;
const onSearch = value => console.log(value);
class HeaderDTC extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col span={6}>
                        <div className="fl-r">
                            <strong>DTC Boys</strong>
                        </div>
                    </Col>
                    <Col span={12}>
                        <Space align="center">
                            <Select defaultValue="Option1">
                                <Option value="Option1">Option1</Option>
                                <Option value="Option2">Option2</Option>
                            </Select>
                            <Search
                                placeholder="input search text"
                                allowClear
                                enterButton="Search"
                                size="large"
                                onSearch={onSearch}
                            />
                        </Space>
                    </Col>
                    <Col span={6}>
                        <div className="fl-l">

                        </div>
                    </Col>
                </Row>
                <Header className="header">

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

