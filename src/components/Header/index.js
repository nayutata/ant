import React, { Component } from 'react';
import { Row,Col } from "antd"
import './index.less'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col>
            <span>欢迎，大萨达</span>
            <a href="#test">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span="4" className="breadcrumb-title">首页</Col>
          <Col span="20" className="info">
            <span className="sys-time">2018-10-26 9:3:57</span>
            <span className="weather">阴转晴</span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;