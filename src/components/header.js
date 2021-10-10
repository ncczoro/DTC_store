
import React, { Component } from 'react';
import '../css/header.css';
import '../App.css';
import { Menu, Layout, Row, Col, Select, Input, Space, Avatar, Badge, Tooltip } from 'antd';
import { UserOutlined, HeartOutlined, ShoppingOutlined } from '@ant-design/icons';
const { Header } = Layout;
const { Option } = Select;
const { Search } = Input;
const onSearch = value => console.log(value);
class HeaderDTC extends Component {
    constructor(props) {
        super(props)
    }
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
                        <Input.Group style={{ width: "100%" }} compact>
                            <Select size="large" defaultValue="Option1" style={{ width: '10%' }}>
                                <Option value="Option1">All</Option>
                                <Option value="Option2">Option2</Option>
                            </Select>
                            <Search style={{ width: '50%' }}
                                placeholder="I'm shopping for..."
                                allowClear
                                enterButton="Search"
                                size="large"
                                onSearch={onSearch}
                            />
                        </Input.Group>
                    </Col>
                    <Col span={6}>
                        <div className="fl-l">
                            <Space size="large">
                                <Tooltip placement="bottom" title="Tài khoản">
                                    <Avatar size="large" icon={<UserOutlined />} />
                                </Tooltip>
                                <Tooltip placement="bottom" title="Yêu thích">
                                    <Badge color="blue" count={1} offset={[0, 30]}>
                                        <Avatar size="large" icon={<HeartOutlined />} />
                                    </Badge>
                                </Tooltip>
                                <Tooltip placement="bottom" title="Giỏ hàng">
                                    <Badge color="blue" count={this.props.product} offset={[0, 30]}>
                                        <Avatar size="large" icon={<ShoppingOutlined />} />
                                    </Badge>
                                </Tooltip>
                            </Space>
                        </div>
                    </Col>
                </Row>
                <Header style={{ background: '#f0f2f5' }}>

                    {/* <img className="logo" alt="ncc" src="https://s120-ava-talk.zadn.vn/c/a/e/7/18/120/671a305890b70992d360283fb5bae3c7.jpg"></img> */}

                    <Menu className="header-menu" mode="horizontal" defaultSelectedKeys={['5']}>
                        <Menu.Item key="1">HOT DEALS</Menu.Item>
                        <Menu.Item key="2">ĐIỆN THOẠI</Menu.Item>
                        <Menu.Item key="3">MÁY TÍNH BẢNG</Menu.Item>
                        <Menu.Item key="4">ÂM THANH</Menu.Item>
                        <Menu.Item key="5">LINH KIỆN ĐIÊN TỬ</Menu.Item>
                        <Menu.Item key="6">ĐỒ CHƠI CÔNG NGHỆ</Menu.Item>
                        <Menu.Item key="7">PHỤ KIỆN</Menu.Item>
                    </Menu>
                </Header>
            </div >
        )
    }
}

export default HeaderDTC;

