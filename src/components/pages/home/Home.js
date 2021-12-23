import React, { useEffect, useState} from 'react';
import { Row, Col } from 'antd'
import axios from 'axios';
import Header from "../../header/header";



const Home = () => {
  const [dataBanner, setDataBanner] = useState();

  useEffect(() => {
    axios.get(`https://gardien.tokodistributor.co.id/api-web/v2/utility/home/banner-web`)
      .then((ress) => {
        setDataBanner(ress.data.data)
      }).catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div >
      <Header />
      <Row type='flex' justify='center' gutter={[16]} style={{marginTop:'60px'}}>
        {dataBanner?.map((data,index)=>{
          return (
            <Col sm={11} xs={11} md={11} key={index}>
            <div className='card-image'>
              <img src={data.url_mobile} alt='food' className='image-size' />
              <label className='text-image'>{data.title}</label>
            </div>
        </Col>
          )
        })}
      </Row>
    </div>
  );
}

export default Home;