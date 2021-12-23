import React, { useState } from 'react';
import { Row, Col } from 'antd'
import axios from 'axios';
import Header from "../../header/header";
import InfiniteScroll from 'react-infinite-scroller'


const Products = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [hasMoreItems, setHasMoreItems] = useState(true);



  const loadUserList = (page) => {
    setTimeout(() => {
      axios.get(`https://gardien.tokodistributor.co.id/api-web/v2/product-recommendation?page=${page}`)
        .then((ress) => {
          const newList = dataProducts.concat(ress.data.data);
          setDataProducts(newList)
          if (ress.data.data.length === 0) {
            setHasMoreItems(false);
          } else {
            setHasMoreItems(true);
          }
        }).catch((err) => {
          console.log(err)
        })
        .finally(() => {
        })
    }, 1500);
  }
  return (
    <div>
      <Header />
      <InfiniteScroll
        threshold={0}
        pageStart={0}
        loadMore={loadUserList}
        hasMore={hasMoreItems}
        loader={<div>loading data ...</div>}>
        <Row type='flex' justify='center' gutter={[16]} style={{ marginTop: '60px' }}>
          {dataProducts?.map((data, index) => {
            return (
              <Col sm={11} xs={11} md={11} key={index}>
                <div className='card-image'>
                  <img src={data.image_uri} alt='food' className='image-size' />
                  <label className='text-image'>{data.submenu_category_slug}</label>
                </div>
              </Col>
            )
          })}
        </Row>
      </InfiniteScroll>
      {hasMoreItems ? "" : <div>no data anymore ...</div>}
    </div>
  );
}

export default Products;