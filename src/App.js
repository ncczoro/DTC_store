
import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import HeaderDTC from './page/header';
import ContentDTC from './page/content';
import FooterDTC from './page/footer';
import { Layout, Menu, Breadcrumb } from 'antd';
class App extends Component {
  render() {
    return (
      <Layout>
        <HeaderDTC></HeaderDTC>
        <ContentDTC></ContentDTC>
        <FooterDTC></FooterDTC>
      </Layout>
    );

  }
}

export default App;

