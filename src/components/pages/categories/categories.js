import React, { useEffect, useState} from 'react';
import { Row, Col } from 'antd'
import axios from 'axios';
import Header from "../../header/header";


const Categories = () => {
  const [dataCategories, setDataCategories] = useState();
  
  useEffect(() => {
    axios.get(`https://gardien.tokodistributor.co.id/api-web/v2/utility/home/box-category?with_staple=true`)
      .then((ress) => {
        setDataCategories(ress.data.data)
      }).catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div >
      <Header />
      <Row type='flex' justify='center' gutter={[16]} style={{marginTop:'60px'}}>
        {dataCategories?.map((data,index)=>{
          return (
            <Col sm={11} xs={11} md={11} key={index}>
            <div className='card-image'>
              <img src={data.icon} alt='food' className='image-size' />
              <label className='text-image'>{data.category_name}</label>
            </div>
        </Col>
          )
        })}
      </Row>
    </div>
  );
}

export default Categories;