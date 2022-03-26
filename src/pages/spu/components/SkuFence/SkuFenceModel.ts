import { SkuModel, SkuSpecModel } from '@/api/sku';
import SkuCellModel from '../SkuCell/skuCellModel';

class SkuFenceModel {
  cells: SkuCellModel[] = [];
  //当前行规格名ID
  specId;
  //当前行规格名
  specName;
  constructor(specs?: SkuSpecModel[]) {
    if (specs) {
      this.specName = specs[0].key;
      this.specId = specs[0].keyId;
    }
  }

  /**
   * 向栅栏中添加规格
   * @param specs  同一规格名下不同规格值组成的数组
   *
   */
  addSpecToFence(specs: SkuSpecModel[]) {
    specs.forEach((spec) => {
      const existed = this.cells.some((cell) => {
        return spec.valueId === cell.id;
      });
      if (existed) return;
      let cell = new SkuCellModel(spec);
      this.cells.push(cell);
    });
  }

  /**
   * 向cell中添加可视化规格,sku图片
   * @param skuList
   * @param cells
   */
  addVisualSpecificationsToCell(skuList: SkuModel[], cells: SkuCellModel[]) {
    cells.forEach((cell) => {
      const specCode = cell.appendSkuCode();
      skuList.forEach((sku) => {
        let matchCode = sku.code.indexOf(specCode);
        if (matchCode !== -1) {
          cell.img = sku.img;
        }
      });
    });
  }

  /**
   * 向每一行规格数组中，添加元素名
   * @param title
   * @returns {number}
   */
  addFenceTitleValue(element: SkuSpecModel) {
    let cell = new SkuCellModel(element);
    return this.cells.push(cell);
  }
}

export default SkuFenceModel;
