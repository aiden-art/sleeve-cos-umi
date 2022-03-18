import React, { useEffect, useState } from 'react';
import ImageWrapper from '@/components/ImageWrapper';
import BannerCarousel from './components/BannerCarousel';
import GridCategory from './components/GridCategory';
import { BannerItemModel, getBannerDetail } from '@/api/banner';
import './index.scss';
import { getGridCategoryListApi, GridCategoryModel } from '@/api/gridCategory';

const Home: React.FC = () => {
  const [carouselList, setCarouselList] = useState<BannerItemModel[]>([]);
  const [gridCategoryList, setGridCategoryList] = useState<GridCategoryModel[]>([]);

  useEffect(() => {
    // 获取首页轮播图
    const fetchCarouselList = async () => {
      const bannerName = '32';
      const result = await getBannerDetail(bannerName);
      setCarouselList(result.data.bannerItems || []);
    };

    //获取六宫格分类
    const fetchGridCategoryList = async () => {
      const result = await getGridCategoryListApi();
      setGridCategoryList(result.data.list || []);
    };

    fetchCarouselList();
    fetchGridCategoryList();
  }, []);

  return (
    <div className="home">
      <ImageWrapper rate={0.346} url={'https://vowui.oss-cn-shanghai.aliyuncs.com/fx-umi/home/theme-sale.png'} />
      <div className="home-carousel">
        <BannerCarousel carouselList={carouselList} />
      </div>
      <div className="home-grid-category">
        <GridCategory gridCategotyList={gridCategoryList} />
      </div>
    </div>
  );
};

export default Home;
