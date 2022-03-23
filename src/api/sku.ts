export interface SkuSpecModel {
  key: string;
  keyId: undefined | number;
  valueId: undefined | number;
}

export interface SkuModel {
  id: number;
  price: number;
  discountPrice: number;
  img: string;
  title: string;
  specs: SkuSpecModel[];
  code: string;
  stock: number;
}
