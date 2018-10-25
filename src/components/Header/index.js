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
            <a href="">退出</a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;