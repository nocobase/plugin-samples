import { useDataBlockProps, useDataBlockRequest } from "@nocobase/client";
import { timelineSettings } from './timelineSettings';
import { TimelineBlockProps } from './TimelineBlock';

interface GetTimelineBlockSchemaOptions {
  dataSource?: string;
  collection: string;
  titleField: string;
  timeField: string;
}

export function getTimelineBlockSchema(options: GetTimelineBlockSchemaOptions) {
  const { dataSource, collection, titleField, timeField } = options;
  return {
    type: 'void',
    'x-decorator': 'DataBlockProvider',
    'x-settings': timelineSettings.name,
    'x-decorator-props': {
      dataSource,
      collection,
      action: 'list',
      params: {
        sort: `-${timeField}`
      },
      timeline: {
        titleField,
        timeField,
      }
    },
    'x-component': 'CardItem',
    properties: {
      timeline: {
        type: 'void',
        'x-component': 'TimelineBlock',
        'x-use-component-props': 'useTimelineBlockProps',
      }
    }
  }
}

export function useTimelineBlockProps(): TimelineBlockProps {
  const { timeline } = useDataBlockProps();
  const { loading, data } = useDataBlockRequest<any[]>();
  return {
    loading,
    data: data?.data?.map((item) => ({
      label: item[timeline.timeField],
      children: item[timeline.titleField],
    }))
  }
}
