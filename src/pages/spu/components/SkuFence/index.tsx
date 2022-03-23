import React from 'react';
import './index.scss';
import SkuCell, { CellType } from '../SkuCell';

interface SkuFencePropsType {
  className?: string;
  fenceData?: CellType[];
  x?: number;
}

const SkuFence: React.FC = () => {
  return (
    <div className="sku-fence">
      <SkuCell className="active"></SkuCell>
      <SkuCell></SkuCell>
      <SkuCell></SkuCell>
    </div>
  );
};

export default SkuFence;
