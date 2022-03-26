import React from 'react';
import './index.scss';
import SkuCell from '../SkuCell';
import SkuCellModel from '../SkuCell/skuCellModel';

interface SkuFencePropsType {
  className?: string;
  fenceData: SkuCellModel[];
  x: number;
  onCellClick: (cell: SkuCellModel, x: number, y: number) => void;
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
