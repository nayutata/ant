import React, { Component } from 'react';
import {Row, Col} from 'antd';
import Header from './components/Header';
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
          <Col span={20}>
            <Header></Header>
            <Row>contete</Row>
            <Row>footer</Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Admin;