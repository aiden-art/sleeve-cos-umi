import React, { useState, useEffect } from 'react';
import './index.scss';
import { useParams } from 'umi';
import { getSpuDetailApi, getSpuSpecApi, SpuModel } from '@/api/spu';
import Carousel from './components/Carousel';
import { RightOutline } from 'antd-mobile-icons';
import { SpecKeyModel } from '@/api/spec';

type routeParamsType = {
  spuId: string;
};

const Spu: React.FC = () => {
  const params = useParams<routeParamsType>();
  const [spuData, setSpuData] = useState<SpuModel>({
    id: 0,
    title: '',
    subtitle: '',
    online: 0,
    price: '',
    sketchSpecId: 0,
    defaultSkuId: 0,
    img: '',
    discountPrice: '',
    description: '',
    tags: '',
    spuThemeImg: '',
    forThemeImg: '',
  });
  const [spuSpecList, setSpeSpecList] = useState<SpecKeyModel[]>([]);

  const spuSpecNameList = spuSpecList.map((spec) => spec.name);

  const CarouselRender = () => (spuData?.spuImgs ? <Carousel carouselList={spuData.spuImgs} /> : <div></div>);

  useEffect(() => {
    const fetchSpuDetail = async () => {
      const result = await getSpuDetailApi(params.spuId);
      setSpuData(result.data);
    };

    const fetchSpuSpec = async () => {
      const result = await getSpuSpecApi(params.spuId);
      setSpeSpecList(result.data.specKeys);
    };

    fetchSpuDetail();
    fetchSpuSpec();
  }, []);

  return (
    <div className="spu-page">
      <div className="spu-page-carousel">
        <CarouselRender />
      </div>
      <div className="spu-page-info">
        <p className="spu-page-info__title">{spuData.title}</p>
        <p className="spu-page-info__subtitle">{spuData.subtitle}</p>
        <p className="spu-page-info__price-box">
          <span className="spu-page-info__price-prefix">¥</span>
          <span className="spu-page-info__price">{spuData.price}</span>
        </p>
      </div>
      <div className="spu-page-spec-box">
        <div className="spu-page-spec-box__left">
          <p>请选择：</p>
          <p className="spu-page-spec-box__name">{spuSpecNameList.join(', ')}</p>
        </div>
        <RightOutline fontSize="14" color="#157658" />
      </div>
      <div className="spu-page-rules">
        <ul className="spu-page-rules__list">
          <li className="spu-page-rules__item">演示：本商品为演示数据，不可支付</li>
          <li className="spu-page-rules__item">特点：你可以添加进购物车，下单，但无法支付</li>
          <li className="spu-page-rules__item">发货地：上海</li>
          <li className="spu-page-rules__item">物流：顺丰</li>
          <li className="spu-page-rules__item">发货时间：七个工作日</li>
          <li className="spu-page-rules__item">售后：不支持7天无理由退货</li>
        </ul>
      </div>
      <div className="spu-page-imgs">
        {spuData.spuDetailImgs &&
          spuData.spuDetailImgs.map((url) => <img className="spu-page-imgs__item" src={url} alt="" />)}
      </div>
    </div>
  );
};

export default Spu;
