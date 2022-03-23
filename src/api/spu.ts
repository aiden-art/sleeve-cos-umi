import request from '@/utils/request';
import { BaseListResponseType, BaseResponseModel, BaseResponseType } from './apiBaseTypes';
import { SkuModel } from './sku';
import { SpecKeyModel } from './spec';

export interface SpuModel {
  id: number;
  title: string;
  subtitle: string;
  online: number;
  price: string;
  sketchSpecId: number;
  defaultSkuId: number;
  img: string;
  discountPrice: string;
  description: string;
  tags: string;
  spuThemeImg: string;
  forThemeImg: string;
  spuImgs?: string[];
  spuDetailImgs?: string[];
  specKeys?: number[];
  skus?: SkuModel[];
}

export type SpuSpecResponseType = {
  id: number;
  specKeys: SpecKeyModel[];
};

export const getSpuDetailApi = (spuId: string) => {
  return request<BaseResponseType<SpuModel>>(`/v1/spu/${spuId}`);
};

export const getSpuSpecApi = (spuId: string) => {
  return request<BaseResponseModel<SpuSpecResponseType>>(`/v1/spu/spec/${spuId}`);
};
