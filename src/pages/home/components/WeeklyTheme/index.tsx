import React from 'react';
import './index.scss';
import { ThemeModel } from '@/api/theme';

interface WeeklyThemePropsType {
  theme: ThemeModel;
}

const WeeklyTheme: React.FC<WeeklyThemePropsType> = (props) => (
  <div className="weekly-theme">
    <div
      className="weekly-theme__title-img"
      style={{
        backgroundImage: `url('${props.theme.titleImg}')`,
      }}
    ></div>
    <ul className="weekly-theme__spu-list">
      {props.theme.spus &&
        props.theme.spus.map((spu) => (
          <li className="weekly-theme__spu-item" key={spu.id}>
            <div
              className="weekly-theme__spu-img"
              style={{
                backgroundImage: `url('${spu.img}')`,
              }}
            ></div>
            <p className="weekly-theme__spu-title">{spu.title}</p>
            <p className="weekly-theme__spu-price">¥{spu.price}</p>
          </li>
        ))}
    </ul>
  </div>
);

export default WeeklyTheme;
