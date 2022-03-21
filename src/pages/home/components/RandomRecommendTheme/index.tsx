import React from 'react';
import './index.scss';
import { ThemeModel } from '@/api/theme';
import ImageWrapper from '@/components/ImageWrapper';
import LazyLoad from 'react-lazyload';
import { Link } from 'umi';

interface RandomRecommendThemePropsType {
  theme: ThemeModel;
}

const RandomRecommendTheme: React.FC<RandomRecommendThemePropsType> = ({ theme }) => {
  return (
    <div className="random-recommend">
      <div className="random-recommend__title"></div>
      <ul className="masonry-list">
        {theme.spus.map((item) => (
          <LazyLoad className="masonry-item" key={item.id}>
            <li>
              <Link to={`/spu/${item.id}`}>
                <ImageWrapper className="masonry-item__img" rate={1.059} url={item.img} />
                <div className="masonry-item__box">
                  <p className="masonry-item__title">{item.title}</p>
                  <p className="masonry-item__price">
                    <span className="masonry-item__price-rprefix">¥</span>
                    {item.price}
                  </p>
                  <p className="masonry-item__subtitle">{item.subtitle}</p>
                </div>
              </Link>
            </li>
          </LazyLoad>
        ))}
      </ul>
    </div>
  );
};

export default RandomRecommendTheme;
