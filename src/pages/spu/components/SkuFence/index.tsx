import React from 'react';
import './index.scss';
import SkuCell, { CellType } from '../SkuCell';
import { SkuCellInterface } from '../SkuCell/skuCell';

interface SkuFencePropsType {
  className?: string;
  fenceData: SkuCellInterface[];
  x: number;
  onCellClick: (cell: SkuCellInterface, x: number, y: number) => void;
}

const SkuFence: React.FC<SkuFencePropsType> = ({ fenceData, x, onCellClick }) => {
  return (
    <div className="sku-fence">
      {fenceData.map((cell, index) => {
        return <SkuCell cell={cell} x={x} y={index} key={cell.id} onCellClick={onCellClick}></SkuCell>;
      })}
    </div>
  );
};

export default SkuFence;
