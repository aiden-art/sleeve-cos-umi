import React from 'react';
import { history } from 'umi';
import ImageWrapper from '@/components/ImageWrapper';
import { Carousel } from 'antd-mobile';
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
        <Carousel
          className="home-carousel__inner"
          autoplay={true}
          infinite
          dotStyle={{
            background: 'rgba(0,0,0,0.4)',
          }}
          dotActiveStyle={{
            background: '#157658',
          }}
        >
          {carouselList.map((item) => {
            return (
              <ImageWrapper
                key={item.id}
                rate={0.48}
                url={item.url}
                onPress={() => {
                  history.push('/cart');
                }}
              ></ImageWrapper>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default home;
