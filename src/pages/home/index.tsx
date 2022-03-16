import React, { useEffect, useState } from 'react';
import ImageWrapper from '@/components/ImageWrapper';
import BannerCarousel from './components/BannerCarousel';
import { BannerItemModel, getBannerDetail } from '@/api/banner';
import './index.scss';

const Home: React.FC = () => {
  const [carouselList, setCarouselList] = useState<BannerItemModel[]>([]);

  useEffect(() => {
    const fetchCarouselList = async () => {
      const bannerName = '32';
      const result = await getBannerDetail(bannerName);
      setCarouselList(result.data.bannerItems || []);
    };
    fetchCarouselList();
  }, []);

  return (
    <div className="home">
      <ImageWrapper rate={0.346} url={'https://vowui.oss-cn-shanghai.aliyuncs.com/fx-umi/home/theme-sale.png'} />
      <div className="home-carousel">
        <BannerCarousel carouselList={carouselList} />
      </div>
    </div>
  );
};

export default Home;
