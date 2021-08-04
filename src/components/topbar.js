import React, { Component } from 'react';
import { Row, Col, Menu, Dropdown, Button, message, Divider  } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import '../css/topbar.css';
import '../App.css';
function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
}
const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1" icon={<UserOutlined />}>
            1st menu item
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
            2nd menu item
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
            3rd menu item
        </Menu.Item>
    </Menu>
);

class TopBar extends Component {
    render() {
        return (
            <div id='topbar'>
                <Row>
                    <Col span={6}>
                        <div className="fl-r">
                            HOT LINE: <strong>(+84) 966116865</strong>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="khuyen-mai">
                            Hot sale hôm nay, Free ship mọi miền tổ quốc
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="fl-l">
                            <Dropdown overlay={menu} placement="bottomCenter" icon={<UserOutlined />}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    English <DownOutlined />
                                </a>
                            </Dropdown>
                            <Divider  type="vertical"/>
                            <Dropdown overlay={menu} placement="bottomCenter" icon={<UserOutlined />}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    Track Your Order <DownOutlined />
                                </a>
                            </Dropdown>
                            <Divider  type="vertical"/>
                            <Dropdown overlay={menu} placement="bottomCenter" icon={<UserOutlined />}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    Store Location <DownOutlined />
                                </a>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
            </div>
        );

    }
}

export default TopBar;

