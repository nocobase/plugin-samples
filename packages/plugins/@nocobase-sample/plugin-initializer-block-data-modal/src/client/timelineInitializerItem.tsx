import React, { useCallback, useState } from 'react';
import { FieldTimeOutlined } from '@ant-design/icons';
import { DataBlockInitializer, SchemaInitializerItemType, useSchemaInitializer } from "@nocobase/client";

import { getTimelineBlockSchema } from './timelineSchema';
import { TimelineConfigFormProps, TimelineInitializerConfigForm } from './TimelineInitializerConfigForm';

export const TimelineInitializerComponent = () => {
  const { insert } = useSchemaInitializer();
  const [collection, setCollection] = useState<string>();
  const [dataSource, setDataSource] = useState<string>();
  const [showConfigForm, setShowConfigForm] = useState(false);

  const onSubmit: TimelineConfigFormProps['onSubmit'] = useCallback((values) => {
    const schema = getTimelineBlockSchema({ collection, dataSource, timeField: values.timeField, titleField: values.titleField });
    insert(schema);
  }, [collection, dataSource])

  return <>
    {showConfigForm && <TimelineInitializerConfigForm
      visible={showConfigForm}
      setVisible={setShowConfigForm}
      onSubmit={onSubmit}
      collection={collection}
      dataSource={dataSource}
    />}
    <DataBlockInitializer
      name='timeline'
      title='Timeline'
      icon={<FieldTimeOutlined />}
      componentType='Timeline'
      onCreateBlockSchema={({ item }) => {
        const { name: collection, dataSource } = item;
        setCollection(collection);
        setDataSource(dataSource);
        setShowConfigForm(true);
      }}>

    </DataBlockInitializer>
  </>
}

export const timelineInitializerItem: SchemaInitializerItemType = {
  name: 'TimelineBlock',
  Component: TimelineInitializerComponent,
}
