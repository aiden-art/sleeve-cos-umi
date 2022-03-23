import React from 'react';
import './index.scss';

export type CellType = {
  img: string;
  title: string;
};

interface SkuCellPropsType {
  className?: string;
  cell?: CellType;
  x?: number;
  y?: number;
}

const SkuCell: React.FC<SkuCellPropsType> = (props) => {
  return (
    <div className={`sku-cell ${props.className}`}>
      <div className="sku-cell__inner">
        <img
          className="sku-cell__img"
          src="http://fx-go-upload.oss-cn-shanghai.aliyuncs.com/73284029-1c57-40b6-8a8d-0270e8a714a9.png"
          alt=""
        />
        <p className="sku-cell__title">藏青色</p>
      </div>
    </div>
  );
};

export default SkuCell;
