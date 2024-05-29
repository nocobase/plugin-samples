import React, { FC } from 'react';
import { Timeline, TimelineProps, Spin } from 'antd';
import { withDynamicSchemaProps } from "@nocobase/client";

export interface TimelineBlockProps {
  data?: TimelineProps['items'];
  loading?: boolean;
}

export const TimelineBlock: FC<TimelineBlockProps> = withDynamicSchemaProps((props) => {
  const { data, loading } = props;
  if (loading) return <div style={{ height: 100, textAlign: 'center' }}><Spin /></div>
  return <Timeline mode='left' items={data}></Timeline>
}, { displayName: 'TimelineBlock' });
