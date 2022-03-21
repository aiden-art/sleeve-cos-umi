import React, { useState, useEffect } from 'react';
import './index.scss';
import { useParams } from 'umi';
import { getSpuDetailApi, SpuModel } from '@/api/spu';
import Carousel from './components/Carousel';

type routeParamsType = {
  spuId: string;
};

const Spu: React.FC = () => {
  const params = useParams<routeParamsType>();
  const [spuData, setSpuData] = useState<SpuModel>();
  const CarouselRender = () => (spuData?.spuImgs ? <Carousel carouselList={spuData.spuImgs} /> : <div></div>);

  useEffect(() => {
    const fetchSpuDetail = async () => {
      const result = await getSpuDetailApi(params.spuId);
      setSpuData(result.data);
    };
    fetchSpuDetail();
  }, []);

  return (
    <div className="spu-page">
      <CarouselRender />
    </div>
  );
};

export default Spu;
