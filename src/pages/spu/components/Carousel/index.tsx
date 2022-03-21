import React from 'react';
import { Swiper } from 'antd-mobile';
import ImageWrapper from '@/components/ImageWrapper';

interface CarouselPropsType {
  carouselList: string[];
}

const Carousel: React.FC<CarouselPropsType> = (props) => {
  return (
    <Swiper
      className="spu-page-carousel__inner"
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
      {props.carouselList.map((url, index) => (
        <Swiper.Item key={index}>
          <ImageWrapper key={index} rate={0.906} url={url}></ImageWrapper>
        </Swiper.Item>
      ))}
    </Swiper>
  );
};

export default Carousel;
