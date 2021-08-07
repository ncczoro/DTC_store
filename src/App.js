
import React, { Component } from 'react';
import './App.css';
import HeaderDTC from './components/header';
import ContentDTC from './components/content';
import FooterDTC from './components/footer';
import TopBar from './components/topbar';
import { Layout } from 'antd';
import jsonData from './data.json';
class App extends Component {

  onReceiContent(params){
    console.log(params)
  }

  render() {
    return (
      <Layout>
        <TopBar x="xx">noi dung children</TopBar>
        <HeaderDTC></HeaderDTC>
        <ContentDTC data={jsonData.Testimonials} onReceiContent={this.onReceiContent} ></ContentDTC>
        <FooterDTC></FooterDTC>
      </Layout>
    );

  }
}

export default App;

