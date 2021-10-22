import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery  } from '../service//CryptoApi';

const { Title } = Typography;

const Homepage = () => {

  const { data, isFetching } = useGetCryptosQuery();
  const globalStat = data?.data?.stats;
  console.log(data);

  if(isFetching) return 'Loading ..'

  return (
    <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStat.total} /></Col>
        <Col span={12}><Statistic title="Total Exchange" value={millify(globalStat.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStat.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStat.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStat.totalMarkets)} /></Col>
      </Row>
    </>
  )
}

export default Homepage;