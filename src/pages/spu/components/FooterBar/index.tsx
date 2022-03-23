import React from 'react';
import './index.scss';

const FooterBar: React.FC = (props) => {
  return (
    <div className="spu-footerbar">
      <div className="spu-footerbar__left">
        <div className="spu-footerbar__nav-item">
          <div className="spu-footerbar__nav-icon index-icon"></div>
          <div className="spu-footerbar__nav-title">首页</div>
        </div>
        <div className="spu-footerbar__nav-item">
          <div className="cart-dot">11</div>
          <div className="spu-footerbar__nav-icon cart-icon"></div>
          <div className="spu-footerbar__nav-title">购物车</div>
        </div>
      </div>
      <div className="spu-footerbar__right">
        <div className="spu-footerbar__btn black-color">加入购物车</div>
        <div className="spu-footerbar__btn brand-color">立即购买</div>
      </div>
    </div>
  );
};

export default FooterBar;
