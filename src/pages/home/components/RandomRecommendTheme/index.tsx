import { ThemeModel } from '@/api/theme';
import ImageWrapper from '@/components/ImageWrapper';
import React from 'react';
import './index.scss';

interface RandomRecommendThemePropsType {
  theme: ThemeModel;
}

const RandomRecommendTheme: React.FC<RandomRecommendThemePropsType> = ({ theme }) => {
  return (
    <div className="random-recommend">
      <div className="random-recommend__title"></div>
      <ul className="masonry-list">
        {theme.spus.map((item) => (
          <li className="masonry-item">
            <ImageWrapper className="masonry-item__img" rate={1.059} url={item.img} />
            <p className="masonry-item__title">{item.title}</p>
            <p className="masonry-item__price">¥{item.price}</p>
            <p className="masonry-item__subtitle">{item.subtitle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RandomRecommendTheme;
