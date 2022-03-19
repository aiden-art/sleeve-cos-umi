import request from '@/utils/request';
import { BaseResponseType } from './apiBaseTypes';
import { SpuModel } from './spu';

export interface ThemeModel {
  id: number;
  title: string;
  description: string;
  name: string;
  tplName: string;
  entranceImg: string;
  extend: string;
  internalTopImg: string;
  titleImg: string;
  online: number;
  spus: SpuModel[];
}

export const getThemeDetailApi = (themeId: string) => {
  return request<BaseResponseType<ThemeModel>>(`/v1/theme/${themeId}`);
};
