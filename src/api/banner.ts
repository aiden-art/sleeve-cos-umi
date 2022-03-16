import type { BaseListResponseType, BaseResponseType } from './apiBaseTypes';
import request from '@/utils/request';

export interface BannerModel {
  id: number;
  name: string;
  img: string;
  description: string;
  title: string;
  bannerItems?: BannerItemModel[];
}

export interface BannerItemModel {
  id: number;
  name: string;
  img: string;
  keyword: string;
  type: number;
  bannerId: number;
}

export const getBannerListApi = () => {
  return request<BaseListResponseType<BannerModel>>('/v1/banner/list');
};

export const getBannerDetail = (id: string) => {
  return request<BaseResponseType<BannerModel>>(`/v1/banner/${id}`);
};
