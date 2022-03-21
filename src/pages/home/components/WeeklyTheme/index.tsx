import React from 'react';
import './index.scss';
import { ThemeModel } from '@/api/theme';
import { history, Link } from 'umi';
import { SpuModel } from '@/api/spu';

interface WeeklyThemePropsType {
  theme: ThemeModel;
}

const WeeklyTheme: React.FC<WeeklyThemePropsType> = (props) => {
  return (
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
              <Link to={`/spu/${spu.id}`} key={spu.id}>
                <div
                  className="weekly-theme__spu-img"
                  style={{
                    backgroundImage: `url('${spu.img}')`,
                  }}
                ></div>
                <p className="weekly-theme__spu-title">{spu.title}</p>
                <p className="weekly-theme__spu-price">
                  <span className="weekly-theme__price-prefix">¥</span>
                  {spu.price}
                </p>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default WeeklyTheme;
