import { SkuSpecModel } from '@/api/sku';
import { SkuStatus } from '@/enum/skuStatus';

export interface SkuCellInterface {
  title: string;
  id: number;
  img?: string;
  status: string;
  spec: SkuSpecModel;
  appendSkuCode: () => string;
}

class SkuCell implements SkuCellInterface {
  //规格值
  title: string;
  //规格值ID
  id: number;
  //可视化规格图片
  img?: string;
  //当前cell状态，默认初始状态为waiting
  status: string;
  //skuSpecItem代表一个cell
  spec: SkuSpecModel;

  constructor(skuSpecItem: SkuSpecModel) {
    this.title = skuSpecItem.value;
    this.id = skuSpecItem.valueId;
    this.status = SkuStatus.WAITING;
    this.spec = skuSpecItem;
  }

  appendSkuCode() {
    return `${this.spec.keyId}-${this.spec.valueId}`;
  }
}

export default SkuCell;
