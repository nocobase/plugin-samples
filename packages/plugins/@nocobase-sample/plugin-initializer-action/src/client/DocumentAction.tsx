import React, { FC } from 'react';
import { ISchema, SchemaComponent, SchemaInitializerItemType, SchemaSettings, useSchemaInitializer } from "@nocobase/client"

export const documentActionSettings = new SchemaSettings({
  name: 'actionSettings:document',
  items: [
    {
      name: 'remove',
      type: 'remove',
    }
  ]
});

export const DocumentAction: FC<{ blockComponent: string }> = ({ blockComponent }) => {
  const documentActionSchema = {
    type: 'void',
    name: 'document',
    'x-component': 'Action',
    'x-settings': documentActionSettings.name,
    title: 'Document',
    'x-component-props': {
      type: 'primary',
      onClick() {
        window.open(`https://client.docs.nocobase.com/components/${blockComponent}`)
      }
    }
  }
  return <SchemaComponent schema={documentActionSchema} />
}

export const createDocumentActionInitializerItem = (blockComponent: string): SchemaInitializerItemType => ({
  type: 'item',
  title: 'Document',
  name: 'document',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      title: 'Document',
      onClick: () => {
        const documentActionSchema: ISchema = {
          type: 'void',
          'x-component': 'DocumentAction',
          'x-component-props': {
            blockComponent: blockComponent
          }
        };

        insert(documentActionSchema);
      },
    };
  },
})
