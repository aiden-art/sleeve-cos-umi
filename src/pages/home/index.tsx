import React, { useEffect, useState } from 'react';
import './index.scss';
import ImageWrapper from '@/components/ImageWrapper';
import BannerCarousel from './components/BannerCarousel';
import GridCategory from './components/GridCategory';
import WeeklyTheme from './components/WeeklyTheme';
import BannerRank from './components/BannerRank';
import RandomRecommendTheme from './components/RandomRecommendTheme';
import PageLoading from '@/components/PageLoading';
import { BannerItemModel, BannerModel, getBannerDetailApi } from '@/api/banner';
import { getThemeDetailApi, ThemeModel } from '@/api/theme';
import { getGridCategoryListApi, GridCategoryModel } from '@/api/gridCategory';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [carouselList, setCarouselList] = useState<BannerItemModel[]>([]);
  const [gridCategoryList, setGridCategoryList] = useState<GridCategoryModel[]>([]);
  const [weeklyThemeData, setWeeklyThemeData] = useState<ThemeModel>();
  const [recommendThemeData, setRecommendThemeData] = useState<ThemeModel>();
  const [rankBannerData, setRankBannerData] = useState<BannerModel>();
  const [fashionThemeData, setFashionThemeData] = useState<ThemeModel>();
  const [randomRecommendThemeData, setRandomRecommendThemeData] = useState<ThemeModel>();

  useEffect(() => {
    setLoading(true);
    // 获取首页轮播图
    const fetchCarouselList = async () => {
      const bannerName = '32';
      const result = await getBannerDetailApi(bannerName);
      setCarouselList(result.data.bannerItems || []);
    };

    //获取六宫格分类
    const fetchGridCategoryList = async () => {
      const result = await getGridCategoryListApi();
      setGridCategoryList(result.data.list || []);
    };

    //获取每周上新主题数据
    const fetchWeeklyThemeData = async () => {
      const themeId = '4';
      const result = await getThemeDetailApi(themeId);
      setWeeklyThemeData(result.data);
    };

    //获取风袖臻选主题数据
    const fetchRecommendThemeData = async () => {
      const themeId = '5';
      const result = await getThemeDetailApi(themeId);
      setRecommendThemeData(result.data);
    };

    //获取热卖榜单数据
    const fetchRankBannerData = async () => {
      const bannerId = '33';
      const result = await getBannerDetailApi(bannerId);
      setRankBannerData(result.data);
    };

    //获取时尚出街主题数据
    const fetchFashionThemeData = async () => {
      const themeId = '6';
      const result = await getThemeDetailApi(themeId);
      setFashionThemeData(result.data);
    };

    //获取为你推荐数据
    const fetchRandomRecommendThemeData = async () => {
      const themeId = '8';
      const result = await getThemeDetailApi(themeId);
      setRandomRecommendThemeData(result.data);
      setLoading(false);
    };

    fetchCarouselList();
    fetchGridCategoryList();
    fetchWeeklyThemeData();
    fetchRecommendThemeData();
    fetchRankBannerData();
    fetchFashionThemeData();
    fetchRandomRecommendThemeData();
  }, []);

  const WeeklyThemeRender = () => (weeklyThemeData ? <WeeklyTheme theme={weeklyThemeData} /> : <div></div>);
  const RecommendThemeRender = () =>
    recommendThemeData ? (
      <div className="home-recommend-theme">
        <img className="home-recommend-theme__img" src={recommendThemeData.entranceImg} alt="" />
      </div>
    ) : (
      <div></div>
    );
  const RankBannerRender = () => (rankBannerData ? <BannerRank banner={rankBannerData} /> : <div></div>);
  const FashionThemeRender = () =>
    fashionThemeData ? (
      <div className="home-recommend-theme">
        <img className="home-recommend-theme__img" src={fashionThemeData.entranceImg} alt="" />
      </div>
    ) : (
      <div></div>
    );
  const RandomRecommendThemeRender = () => {
    return randomRecommendThemeData ? <RandomRecommendTheme theme={randomRecommendThemeData} /> : <div></div>;
  };
  const HomePage = () => {
    return (
      <div className="home">
        <a href="tapbooster://booster/to?url=http%3A%2F%2Fzgf.dev.taptap.com%3A3000%2Faccelerated-experience-card%3Ftab%3Dnormal">
          <h3>跳转加速器页面</h3>
        </a>
        <ImageWrapper
          className="home-top-banner"
          rate={0.346}
          url={'https://vowui.oss-cn-shanghai.aliyuncs.com/fx-umi/home/theme-sale.png'}
        />
        {/* 轮播图 */}
        <div className="home-carousel">
          <BannerCarousel carouselList={carouselList} />
        </div>
        {/* 宫格分类 */}
        <div className="home-grid-category">
          <GridCategory gridCategotyList={gridCategoryList} />
        </div>
        {/* 每周上新 */}
        <div className="home-weekly-theme">
          <WeeklyThemeRender />
        </div>
        {/* 风袖臻选 */}
        <RecommendThemeRender />
        {/* 热卖榜单 */}
        <RankBannerRender />
        {/* 时尚出街 */}
        <FashionThemeRender />
        {/* 为你推荐 */}
        <RandomRecommendThemeRender />
      </div>
    );
  };
  return loading ? <PageLoading /> : <HomePage />;
};

export default Home;
