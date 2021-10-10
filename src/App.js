
import React, { Component } from 'react';
import './App.css';
import HeaderDTC from './components/header';
import ContentDTC from './components/content';
import FooterDTC from './components/footer';
import TopBar from './components/topbar';
import { Layout } from 'antd';
import jsonData from './data.json';
class App extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0
    }
  }
  onReceiContent = (params) => {
    this.setState({ amount: this.state.amount + 1 });
    console.log(params)
  }

  render() {
    return (
      <Layout>
        <TopBar x="xx">noi dung children</TopBar>
        <HeaderDTC product={this.state.amount}></HeaderDTC>
        <ContentDTC data={jsonData.Testimonials} onReceiContent={this.onReceiContent} ></ContentDTC>
        <FooterDTC></FooterDTC>
      </Layout>
    );

  }
}

export default App;

