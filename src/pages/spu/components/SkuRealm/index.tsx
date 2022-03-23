import React from 'react';
import './index.scss';
import { Stepper } from 'antd-mobile';
import { SpuModel } from '@/api/spu';
import { SpecKeyModel } from '@/api/spec';
import { SkuModel } from '@/api/sku';
import SkuFence from '../SkuFence';

interface SkuRealmPropsType {
  spu?: SpuModel;
  specList?: SpecKeyModel[];
  skuList?: SkuModel[];
}

const SkuRealm: React.FC<SkuRealmPropsType> = ({ spu, specList }) => {
  return (
    <div className="sku-realm">
      <div className="sku-info">
        <div className="sku-info__img">
          <img src="http://fx-go-upload.oss-cn-shanghai.aliyuncs.com/73284029-1c57-40b6-8a8d-0270e8a714a9.png" alt="" />
        </div>
        <div className="sku-info__right">
          <div className="sku-info__title">双色可选，经典青黄两色</div>
          <div className="sku-info__right-bottom">
            <div className="sku-info__price-box">
              <div className="sku-info__price">
                <span className="sku-info__price-prefix">¥</span>
                3999.00
              </div>
              <div className="sku-info__stock">库存：56件</div>
            </div>
            <div className="sku-info__spec">
              <span className="sku-info__label">请选择：</span>
              颜色
            </div>
          </div>
        </div>
      </div>
      <div className="sku-fence-list">
        <div className="sku-fence-item">
          <p className="sku-fence-item__spec-name">颜色</p>
          <SkuFence />
        </div>
      </div>
      <div className="sku-realm__step">
        <p className="sku-realm__label">购物数量</p>
        <Stepper
          style={{
            '--button-text-color': '#157658',
          }}
        />
      </div>
      <div className="sku-realm__footer">加入购物车</div>
    </div>
  );
};

export default SkuRealm;
