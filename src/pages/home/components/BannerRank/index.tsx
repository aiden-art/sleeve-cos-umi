import React from 'react';
import './index.scss';
import { BannerModel } from '@/api/banner';
import ImageWrapper from '@/components/ImageWrapper';

interface BannerRankPropsType {
  banner: BannerModel;
}

const BannerRank: React.FC<BannerRankPropsType> = ({ banner }) => {
  const leftBannerItem = banner.bannerItems?.find((e) => e.name === 'left');
  const rightTopBannerItem = banner.bannerItems?.find((e) => e.name === 'right-top');
  const rightBottomBannerItem = banner.bannerItems?.find((e) => e.name === 'right-bottom');
  return (
    <div className="banner-rank">
      <div
        className="banner-rank__title"
        style={{
          backgroundImage: `url('${banner.img}')`,
        }}
      ></div>
      <div className="banner-rank-wrapper">
        <div className="banner-rank-wrapper__left">
          <ImageWrapper rate={1.53} url={leftBannerItem ? leftBannerItem.img : ''} />
        </div>
        <div className="banner-rank-wrapper__right">
          <div className="banner-rank-wrapper__right-top">
            <ImageWrapper rate={0.65} url={rightTopBannerItem ? rightTopBannerItem.img : ''} />
          </div>
          <div className="banner-rank-wrapper__right-bottom">
            <ImageWrapper rate={0.65} url={rightBottomBannerItem ? rightBottomBannerItem.img : ''} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerRank;
