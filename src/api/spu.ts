export interface SpuModel {
  id: number;
  title: string;
  subtitle: string;
  categoryId: number;
  rootCategoryId: number;
  online: number;
  price: string;
  sketchSpecId: number;
  defaultSkuId: number;
  img: string;
  discountPrice: string;
  description: string;
  tags: string;
  isTest: number;
  spuThemeImg: string;
  forThemeImg: string;
  spuImgs?: string[];
  spuDetailImgs?: string[];
  specKeys?: number[];
}
