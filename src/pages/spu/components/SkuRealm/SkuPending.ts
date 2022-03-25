import { SkuModel } from '@/api/sku';
import SkuCell, { SkuCellInterface } from '../SkuCell/skuCell';
import SkuJoiner from './SkuJoiner';

export interface SkuPendingInterface {
  pending: SkuCellInterface[] | null[];
  size: number;
  findNoSelectedSpecIndex: () => number[];
  getSkuCode: () => void;
  getSkuSpecName: () => string;
  addDefaultSku: (sku: SkuModel) => void;
  removeCell: (index: number) => void;
  insertCell: (cell: SkuCellInterface, index: number) => void;
  isSelected: (cell: SkuCellInterface, x: number) => boolean;
  findSelectedCellByIndex: (index: number) => SkuCellInterface | null;
  intact: () => boolean;
}

class SkuPending implements SkuPendingInterface {
  /**
   * 承装用户已经选择的规格cell
   * @type {*[]}
   */
  pending: SkuCellInterface[] | null[] = [];

  /**
   * 当前skuPending需要承装的规格数量
   */
  size;

  constructor(size: number) {
    this.size = size;
  }
  /**
   * 将用户已选中的cell添加到pending[]中
   * @param cell
   */
  insertCell(cell: SkuCellInterface, index: number) {
    this.pending[index] = cell;
  }

  /**
   * 当用户反选时，删除pending[]中的cell
   * @param index 当前cell在pending[]中的索引
   */
  removeCell(index: number) {
    this.pending[index] = null;
  }

  /**
   * 获取每一行中，已经选择的cell，也有可能返回空
   * @param index
   * @returns {*}
   */
  findSelectedCellByIndex(index: number): SkuCellInterface | null {
    return this.pending[index];
  }

  isSelected(cell: SkuCellInterface, x: number) {
    let selectedCell = this.pending[x];
    if (!selectedCell) {
      return false;
    }
    return selectedCell.id === cell.id;
  }

  /**
   * 添加默认的sku规格
   * @param sku
   */
  addDefaultSku(sku: SkuModel) {
    for (let i = 0; i < sku.specs.length; i++) {
      let cell = new SkuCell(sku.specs[i]);

      this.insertCell(cell, i);
    }
  }

  /**
   * 判断用户选择的sku规格是否完整，不完整则会给它提示
   * false: 表示规格未选择完整
   * true:  表示规格已经选择完整
   * @returns {boolean}
   */
  intact() {
    for (let i = 0; i < this.size; i++) {
      if (this._isEmptyPart(i)) {
        return false;
      }
    }
    return true;
  }

  /**
   * 判断pending[]中，是否有空元素
   * @param index
   * @returns {boolean} true：表示有空元素，false：表示没有空元素
   * @private
   */
  _isEmptyPart(index: number) {
    return !this.pending[index];
  }

  /**
   * 当用户选择了完整的商品规格时，获取当前商品的skuCode码，但是当前的code不是完整的，还需要加上spu_id
   * @returns {string}
   */
  getSkuCode() {
    let joiner = new SkuJoiner('#');
    this.pending.forEach((cell) => {
      if (cell) {
        let code = cell.spec.keyId + '-' + cell.spec.valueId;
        // console.log(code);
        joiner.join(code);
      }
    });
    return joiner.getStr();
  }

  /**
   * 获取用户已选择的规格名集合
   * @returns {string}
   */
  getSkuSpecName() {
    let joiner = new SkuJoiner(' ,');
    this.pending.forEach((cell) => {
      if (cell) {
        let specName = cell.spec.value;
        joiner.join(specName);
      }
    });
    return joiner.getStr();
  }

  /**
   * 查找用户未选择的规格，在pending[]中的索引
   * @returns {[]}
   */
  findNoSelectedSpecIndex() {
    let specIndex = [];
    for (let i = 0; i < this.size; i++) {
      if (!this.pending[i]) {
        specIndex.push(i);
      }
    }
    return specIndex;
  }
}

export default SkuPending;
