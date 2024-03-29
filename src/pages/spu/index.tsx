import React, { useState, useEffect } from 'react';
import './index.scss';
import { useParams } from 'umi';
import { getSpuDetailApi, getSpuSpecApi, SpuModel } from '@/api/spu';
import Carousel from './components/Carousel';
import { RightOutline } from 'antd-mobile-icons';
import FooterBar from './components/FooterBar';
import SkuRealm from './components/SkuRealm';
import { Popup } from 'antd-mobile';
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
  const [skuRealmVisible, setSkuRealmVisible] = useState(false);

  const [realmFlag, setRealmFlag] = useState('');

  const [intact, setIntact] = useState(false);

  const [specName, setSpecName] = useState('');

  const [specKeys, setSpecKeys] = useState<SpecKeyModel[]>([]);

  const CarouselRender = () => (spuData?.spuImgs ? <Carousel carouselList={spuData.spuImgs} /> : <div></div>);

  const onSpecNameChange = (intact: boolean, specName: string) => {
    setIntact(intact);
    setSpecName(specName);
  };

  useEffect(() => {
    const fetchSpuDetail = async () => {
      const result = await getSpuDetailApi(params.spuId);
      setSpuData(result.data);
    };

    const fetchSpuSpec = async () => {
      const result = await getSpuSpecApi(params.spuId);
      const specKeys = result.data.specKeys;
      setSpecKeys(specKeys);
      const specName = specKeys.map((e) => e.name).join(' ,');
      setSpecName(specName);
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
      {specKeys.length > 0 ? (
        <div className="spu-page-spec-box">
          {intact ? (
            <div
              className="spu-page-spec-box__left"
              onClick={() => {
                setSkuRealmVisible(true);
              }}
            >
              <p>已选：</p>
              <p className="spu-page-spec-box__name">{specName}</p>
            </div>
          ) : (
            <div
              className="spu-page-spec-box__left"
              onClick={() => {
                setSkuRealmVisible(true);
              }}
            >
              <p>请选择：</p>
              <p className="spu-page-spec-box__name">{specName}</p>
            </div>
          )}
          <RightOutline fontSize="14" color="#157658" />
        </div>
      ) : (
        ''
      )}

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
          spuData.spuDetailImgs.map((url, index) => (
            <img key={index} className="spu-page-imgs__item" src={url} alt="" />
          ))}
      </div>
      <FooterBar
        onAddCartClick={() => {
          setSkuRealmVisible(true);
          setRealmFlag('cartFlag');
        }}
        onBuyClick={() => {
          setSkuRealmVisible(true);
          setRealmFlag('buyFlag');
        }}
      />
      {/* sku */}
      <Popup
        visible={skuRealmVisible}
        position="bottom"
        onMaskClick={() => {
          setSkuRealmVisible(false);
        }}
        bodyStyle={{
          minHeight: '50vh',
        }}
      >
        <SkuRealm spu={spuData} specKeys={specKeys} flag={realmFlag} onSpecNameChange={onSpecNameChange} />
      </Popup>
    </div>
  );
};

export default Spu;
