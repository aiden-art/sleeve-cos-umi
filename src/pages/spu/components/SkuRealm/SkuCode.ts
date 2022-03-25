/**
 * js计算组合的方法
 * @param arr 需要计算组合的数据集合
 * @param size 在所有的数据中，需要选取多少个进行组合 例如：C31,C32,三个里面选1个，三个里面选2个
 * @returns {[]}
 */
const combination = function (arr: any, size: any) {
  var r: any = [];
  function _(t: any, a: any, n: any) {
    if (n === 0) {
      r[r.length] = t;
      return;
    }
    for (var i = 0, l = a.length - n; i <= l; i++) {
      var b = t.slice();
      b.push(a[i]);
      _(b, a.slice(i + 1), n - 1);
    }
  }
  _([], arr, size);
  return r;
};

class SkuCode {
  /**
   * 用于承装单个sku所有组合生成的sku可选路径
   * @type {*[]}
   */
  codes = [];
  /**
   * 当前sku所拥有的
   */
  skuCode;
  /**
   * 当前sku的id
   */
  skuId: string = '';

  strArr: string[] = [];

  constructor(skuCode: string) {
    this.skuCode = skuCode;
  }

  //拆分skucode  code: "2$1-45#3-9#4-14"
  splitSkuCode() {
    this.strArr = this.skuCode.split('$');
    this.skuId = this.strArr[0];
    //获取到当前sku各个规格码
    const codeArr = this.strArr[1].split('#');
    const length = codeArr.length;
    //根据规格码进行组合
    for (let i = 1; i <= length; i++) {
      //每次执行组合会生成一个数组,combination是一个工具方法，将数组中的元素进行组合
      const arrs = combination(codeArr, i);
      const segment = arrs.map((arr: any) => {
        return arr.join('#');
      });
      //将每次生成的数组，追加到codes[]中
      this.codes = this.codes.concat(segment);
      // console.log("单个sku组合后生成的数组");
      // console.log(this.codes);
    }
  }
}
export default SkuCode;
