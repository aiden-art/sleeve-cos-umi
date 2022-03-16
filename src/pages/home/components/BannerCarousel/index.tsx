import React from 'react';
import { Swiper } from 'antd-mobile';
import { history } from 'umi';
import ImageWrapper from '@/components/ImageWrapper';
import type { BannerItemModel } from '@/api/banner';

interface CarouselPropsType {
  carouselList: BannerItemModel[];
}

const Carousel: React.FC<CarouselPropsType> = (props) => {
  return (
    <Swiper
      className="home-carousel__inner"
      autoplay={true}
      loop
      indicatorProps={{
        style: {
          '--dot-color': 'rgba(0, 0, 0, 0.4)',
          '--active-dot-color': '#157658',
          '--dot-size': '8px',
          '--active-dot-size': '8px',
          '--dot-border-radius': '50%',
          '--dot-spacing': '8px',
        },
      }}
    >
      {props.carouselList.map((item, index) => (
        <Swiper.Item key={index}>
          <ImageWrapper
            key={item.id}
            rate={0.48}
            url={item.img}
            onPress={() => {
              history.push('/cart');
            }}
          ></ImageWrapper>
        </Swiper.Item>
      ))}
    </Swiper>
  );
};

export default Carousel;
