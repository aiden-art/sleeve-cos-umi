import request from '@/utils/request';
import { BaseListResponseType } from './apiBaseTypes';

export interface GridCategoryModel {
  id: number;
  title: string;
  img: string;
  categoryId: number;
  rootCategoryId: number;
  index: number;
}

export const getGridCategoryListApi = () => {
  return request<BaseListResponseType<GridCategoryModel>>('/v1/grid-category/list');
};
