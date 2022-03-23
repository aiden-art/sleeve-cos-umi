export interface SkuSpecModel {
  key: string; //规格名
  keyId: number; //规格名对应ID
  valueId: number; //规格值对应ID
  value: string; //规格值
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
