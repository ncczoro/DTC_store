
import React, { Component } from 'react';
import './App.css';
import HeaderDTC from './components/header';
import ContentDTC from './components/content';
import FooterDTC from './components/footer';
import TopBar from './components/topbar';
import { Layout } from 'antd';
class App extends Component {
  render() {
    return (
      <Layout>
        <TopBar></TopBar>
        <HeaderDTC></HeaderDTC>
        <ContentDTC></ContentDTC>
        <FooterDTC></FooterDTC>
      </Layout>
    );

  }
}

export default App;

