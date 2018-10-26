import React, { Component } from 'react';
import {Row, Col} from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import './style/commom.less'

class Admin extends Component {
  render() {
    return (
      <div>
        <Row className="container">
          <Col span={4} className='nav-left'>
            <NavLeft className='nav-left'></NavLeft>
          </Col>
          <Col span={20} className="main">
            <Header></Header>
            <Row className="content">{this.props.children}</Row>
            <Footer>footer</Footer>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Admin;