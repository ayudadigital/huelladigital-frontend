import * as React from 'react';
import './Image.scss';
import { ImageProps } from './types';

export const Image: React.FC<ImageProps> = ({
  source,
  description = 'image',
  width,
  cssClass,
}) => <img src={source} alt={description} width={width} className={cssClass} />;

Image.displayName = 'Image';
