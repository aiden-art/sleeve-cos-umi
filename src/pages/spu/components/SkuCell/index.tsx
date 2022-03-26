import React from 'react';
import './index.scss';
import SkuCellModel from './skuCellModel';

export type CellType = {
  img: string;
  title: string;
};

interface SkuCellPropsType {
  className?: string;
  cell: SkuCellModel;
  x: number;
  y: number;
  onCellClick: (cell: SkuCellModel, x: number, y: number) => void;
}

const SkuCell: React.FC<SkuCellPropsType> = (props) => {
  return (
    <div
      className={`sku-cell ${props.className} ${props.cell.status}`}
      onClick={() => {
        props.onCellClick(props.cell, props.x, props.y);
      }}
    >
      <div className="sku-cell__inner">
        {props.cell?.img ? <img className="sku-cell__img" src={props.cell?.img} alt="" /> : ''}
        <p className="sku-cell__title">{props.cell?.title}</p>
      </div>
    </div>
  );
};

export default SkuCell;
