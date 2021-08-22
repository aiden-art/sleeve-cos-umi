import React from 'react';
import './index.scss';

type ImageWrapperPropsType = {
  rate: number;
  url: string;
  onPress?: () => void;
};

const ImageWrapper: React.FC<ImageWrapperPropsType> = (props) => {
  return (
    <div
      className="image-wrapper"
      style={{
        paddingTop: `${props.rate * 100}%`,
        backgroundImage: `url(${props.url})`,
      }}
      onClick={props.onPress}
    ></div>
  );
};

export default ImageWrapper;
