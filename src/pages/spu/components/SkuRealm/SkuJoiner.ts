class SkuJoiner {
  _str = '';
  _symbol = '-'; //拼接字符串所用的拼接字符
  _cutCharNum = 1;
  constructor(symbol: string, cutCharNum?: number) {
    if (symbol) {
      this._symbol = symbol;
    }
    if (cutCharNum) {
      this._cutCharNum = cutCharNum;
    }
  }
  join(part: string | undefined | number) {
    if (part) {
      //在当前字符串的基础上+“abcd”+"#"
      this._str += `${part}${this._symbol}`;
    }
  }
  getStr() {
    return this._str.substring(0, this._str.length - this._cutCharNum);
  }
}
export default SkuJoiner;
