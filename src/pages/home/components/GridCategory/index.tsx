import { GridCategoryModel } from '@/api/gridCategory';
import React from 'react';
import './index.scss';

interface GridCategoryPropsType {
  gridCategotyList: GridCategoryModel[];
}

const GridCategory: React.FC<GridCategoryPropsType> = (props) => {
  return (
    <ul className="grid-category">
      {props.gridCategotyList.map((item) => (
        <li className="grid-category__item">
          <img className="grid-category__img" src={item.img} alt="" />
          <p className="grid-category__title">{item.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default GridCategory;
