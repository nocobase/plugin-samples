import React, { FC } from 'react';
import { withDynamicSchemaProps } from '@nocobase/client';

export interface ImageBlockProps {
  src?: { url: string; title?: string };
  /**
   * @default 500
   */
  height?: number;
  /**
   * @default 'cover'
   */
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  /**
   * @default false
   */
  lazy?: boolean;
}

export const ImageBlock2: FC<ImageBlockProps> = withDynamicSchemaProps((props) => {
  const { src, height = 500, objectFit = 'cover', lazy = false } = props;
  return <div style={{ height }}>
    {
      src ? <img
        loading={lazy ? 'lazy' : 'eager'}
        style={{ width: '100%', height: '100%', objectFit }}
        src={src.url}
        alt={src.title}
      /> : null
    }
  </div>
}, { displayName: 'ImageBlock' })