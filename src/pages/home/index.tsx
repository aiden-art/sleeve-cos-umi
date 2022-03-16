import React from 'react';
import { history } from 'umi';
import ImageWrapper from '@/components/ImageWrapper';
import { Swiper } from 'antd-mobile';
import './index.scss';
const carouselList = [
  {
    url: 'https://vowui.oss-cn-shanghai.aliyuncs.com/fx-umi/home/banner.png',
    id: 'banner',
  },
  {
    url: 'https://vowui.oss-cn-shanghai.aliyuncs.com/fx-umi/home/banner1.png',
    id: 'banner1',
  },
  {
    url: 'https://vowui.oss-cn-shanghai.aliyuncs.com/fx-umi/home/banner2.png',
    id: 'banner2',
  },
  {
    url: 'https://vowui.oss-cn-shanghai.aliyuncs.com/fx-umi/home/banner3.png',
    id: 'banner3',
  },
];

const swiperItems = carouselList.map((item, index) => (
  <Swiper.Item key={index}>
    <ImageWrapper
      key={item.id}
      rate={0.48}
      url={item.url}
      onPress={() => {
        history.push('/cart');
      }}
    ></ImageWrapper>
  </Swiper.Item>
));

const home: React.FC = () => {
  return (
    <div className="home">
      <ImageWrapper
        rate={0.346}
        url={
          'https://vowui.oss-cn-shanghai.aliyuncs.com/fx-umi/home/theme-sale.png'
        }
      ></ImageWrapper>
      <div className="home-carousel">
        <Swiper
          className="home-carousel__inner"
          autoplay={true}
          loop
          indicatorProps={{
            style: {
              '--dot-color': 'rgba(0, 0, 0, 0.4)',
              '--active-dot-color': '#157658',
            },
          }}
        >
          {swiperItems}
        </Swiper>
      </div>
    </div>
  );
};

export default home;
