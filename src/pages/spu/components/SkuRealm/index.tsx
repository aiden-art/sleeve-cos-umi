import React, { useEffect, useState } from 'react';
import './index.scss';
import { Stepper } from 'antd-mobile';
import { SpuModel } from '@/api/spu';
import { SpecKeyModel } from '@/api/spec';
import { SkuModel } from '@/api/sku';
import SkuFence from '../SkuFence';
import SkuRealmClass from './SkuRealmClass';
import SkuJudger from './SkuJudger';
import { SkuFenceInterface } from '../SkuFence/SkuFence';
import { SkuCellInterface } from '../SkuCell/skuCell';
import SkuJoiner from './SkuJoiner';

interface SkuRealmPropsType {
  spu?: SpuModel;
  specList?: SpecKeyModel[];
  skuList?: SkuModel[];
  flag: string;
  onSpecNameChange: (intact: boolean, specName: string) => void;
}

interface SkuRealmInfoType {
  img: string;
  title: string;
  price: string | number;
  stock?: number;
}

const SkuRealm: React.FC<SkuRealmPropsType> = ({ spu, specList, flag, onSpecNameChange }) => {
  const [skuRealmInfo, setSkuRealmInfo] = useState<SkuRealmInfoType>({
    img: '',
    title: '',
    price: '',
  });
  //未选择任何规格时提示选择规格值
  const [noSelectedName, setNoSelectedName] = useState('');
  //已选择规格
  const [specName, setSpecName] = useState('');
  //数量
  const [count, setCount] = useState(0);
  //规格是否选择完整
  const [intact, setIntact] = useState(false);
  //库存是否充足,true表示充足
  const [whetherProductFlag, setWhetherProductFlag] = useState(true);
  const [judger, setJudger] = useState<SkuJudger | null>(null);
  const [skuFenceData, setSkuFenceData] = useState<SkuFenceInterface[]>([]);
  useEffect(() => {
    if (spu) {
      let skuRealm = new SkuRealmClass(spu);
      if (spu.skus) {
        skuRealm.initFencesBytransPosition(spu.skus);
        let judger = new SkuJudger(skuRealm);
        setJudger(judger);
        //如果有默认sku,那么需要在详情页显示默认sku，如果没有，那么需要显示spu信息
        let defaultSku = skuRealm.getDefaultSku();
        if (defaultSku) {
          //显示sku
          showDefaultSku(defaultSku);
          //需要判断当前的sku库存是否大于0，如果等于0，那么将显示无货
          if (defaultSku.stock > 0) {
            setWhetherProductFlag(true);
          }
          let intact = judger.skuPending?.intact();
          if (intact) {
            let specName = judger.getSpecName();
            setIntact(intact);
            if (specName) {
              setSpecName(specName);
              onSpecNameChange(intact, specName);
            }
          }
        } else {
          //如果没有默认sku，则显示spu
          showSpu(spu);
          //提示用户哪一个规格还没有选择
          let noSelectedSpecName = judger?.findNoSelectedSpec();
          let joiner = new SkuJoiner(' ,');
          if (noSelectedSpecName) {
            noSelectedSpecName.forEach((name) => {
              joiner.join(name);
            });
            let specName = joiner.getStr();
            setNoSelectedName(specName);
            onSpecNameChange(intact, specName);
          }
        }
        setSkuFenceData(judger.fenceGroup.fences);
      }
    }
  }, []);

  const showSpu = (spu: SpuModel) => {
    setSkuRealmInfo({
      img: spu.img,
      title: spu.title,
      price: spu.price,
    });
  };
  const showDefaultSku = (sku: SkuModel) => {
    setSkuRealmInfo({
      img: sku.img,
      title: sku.title,
      price: sku.price,
      stock: sku.stock,
    });
  };

  const whetherOutofStock = (stock: number, currentCount: number) => {
    return stock >= currentCount;
  };

  const handleCountChange = (value: number | null) => {
    if (value) {
      setCount(value);
      if (skuRealmInfo.stock) {
        if (skuRealmInfo.stock >= value) {
          setWhetherProductFlag(true);
        } else {
          setWhetherProductFlag(false);
        }
      }
    }
  };

  const onCellClick = (cell: SkuCellInterface, x: number, y: number) => {
    if (judger) {
      judger.changeStatus(cell, x, y);
      let intact = judger.skuPending?.intact();
      //如果用户已经将规格选择完整，那么需要更新sku数据，将用户选择的最新的sku数据绑定上
      if (intact) {
        let matchSku = judger.getSku();
        let specName = judger.getSpecName();
        if (matchSku) {
          showDefaultSku(matchSku);
          //判断当前sku库存是否大于用户选择的购买数量，如果小于则显示暂时无货
          let flag = whetherOutofStock(matchSku.stock, count);
          if (specName) {
            setSpecName(specName);
            onSpecNameChange(intact, specName);
          }
          setNoSelectedName('');
          setWhetherProductFlag(flag);
        }
      } else {
        //提示用户哪一个规格还没有选择
        let noSelectedName = judger.findNoSelectedSpec();
        let joiner = new SkuJoiner(' ,');
        if (noSelectedName) {
          noSelectedName.forEach((name) => {
            joiner.join(name);
          });
          let noSelectedSpec = joiner.getStr();
          setNoSelectedName(noSelectedSpec);
          onSpecNameChange(intact!, noSelectedSpec);
        }
      }
      setSkuFenceData(judger.fenceGroup.fences.slice());
      setIntact(intact!);
    }
  };

  const FooterButton = () => {
    return flag === 'cartFlag' ? (
      <div className="sku-realm__footer is-cart">加入购物车</div>
    ) : (
      <div className="sku-realm__footer is-buy">立即购买</div>
    );
  };
  return (
    <div className="sku-realm">
      <div className="sku-info">
        <div className="sku-info__img">
          <img src={skuRealmInfo.img} alt="" />
        </div>
        <div className="sku-info__right">
          <div className="sku-info__title">{skuRealmInfo.title}</div>
          <div className="sku-info__right-bottom">
            <div className="sku-info__price-box">
              <div className="sku-info__price">
                <span className="sku-info__price-prefix">¥</span>
                {skuRealmInfo.price}
              </div>
              {skuRealmInfo.stock ? <div className="sku-info__stock">库存：{skuRealmInfo.stock}件</div> : ''}
            </div>
            {intact ? (
              <div className="sku-info__spec">
                {specName ? <span className="sku-info__label">已选：</span> : ''}
                {specName}
              </div>
            ) : (
              <div className="sku-info__spec">
                {noSelectedName ? <span className="sku-info__label">请选择：</span> : ''}
                {noSelectedName}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="sku-fence-list">
        {skuFenceData.map((fence, index) => {
          return (
            <div className="sku-fence-item" key={index}>
              <p className="sku-fence-item__spec-name">{fence.specName}</p>
              <SkuFence fenceData={fence.cells} x={index} onCellClick={onCellClick} />
            </div>
          );
        })}
      </div>
      <div className="sku-realm__step">
        <p className="sku-realm__label">购物数量</p>
        <Stepper inputReadOnly={true} value={count} onChange={handleCountChange} />
      </div>
      {whetherProductFlag ? <FooterButton /> : <div className="sku-realm__footer no-stock">暂时无货</div>}
    </div>
  );
};

export default SkuRealm;
