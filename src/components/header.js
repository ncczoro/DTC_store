
import React, { Component } from 'react';
import '../css/header.css';
import { Menu, Layout } from 'antd';

const { Header } = Layout;

class HeaderDTC extends Component {

    render() {
        return (
            <Header className="header">

                <img className="logo" alt="ncc" src="https://s120-ava-talk.zadn.vn/c/a/e/7/18/120/671a305890b70992d360283fb5bae3c7.jpg"></img>

                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
        )
    }
}

export default HeaderDTC;

