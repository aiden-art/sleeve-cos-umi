import React from 'react';
import { SkuFenceInterface } from '../SkuFence/SkuFence';
import './index.scss';
import { SkuCellInterface } from './skuCell';

export type CellType = {
  img: string;
  title: string;
};

interface SkuCellPropsType {
  className?: string;
  cell: SkuCellInterface;
  x: number;
  y: number;
  onCellClick: (cell: SkuCellInterface, x: number, y: number) => void;
}

const SkuCell: React.FC<SkuCellPropsType> = (props) => {
  console.log('cell', props.cell);
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
