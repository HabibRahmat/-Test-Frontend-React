import React from 'react';
import { Row, Col } from 'antd'
import { Link } from "react-router-dom";
import { EditOutlined } from "@ant-design/icons";

const Header = () => {

  return (
    <div >
      <Row>
        <Col sm={24} md={24} xs={24}>
          <div className='background-header'>
            <div className='text-header'>
              <h2>
                Details Information Product <EditOutlined />
              </h2>
            </div>
          </div>
          <div className='card-style'>
            <Row >
              <Col sm={8} md={8} xs={8} className='menu-item'  >
                <Link to='/' as='/' className='link-menu'>
                  Course Banner
                </Link>
              </Col>
              <Col sm={8} md={8} xs={8} className='menu-item'>
                <Link to='/categories' as='/categories' className='link-menu'>
                  Kategori
                </Link>
              </Col>
              <Col sm={8} md={8} xs={8} className='menu-item'>
                <Link to='/products' as='/products' className='link-menu'>
                  Product
                </Link>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Header;