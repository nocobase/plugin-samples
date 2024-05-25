import { useFieldSchema } from '@formily/react';
import { ISchema, SchemaInitializerItemType, SchemaSettings, useSchemaInitializer } from "@nocobase/client"

export function useDocumentActionProps() {
  const fieldSchema = useFieldSchema();
  return {
    type: 'primary',
    onClick() {
      window.open(fieldSchema['x-doc-url'])
    }
  }
}

export const createDocumentActionSchema = (blockComponent: string): ISchema & { 'x-doc-url': string } => {
  return {
    type: 'void',
    'x-component': 'Action',
    'x-settings': documentActionSettings.name,
    title: 'Document',
    'x-doc-url': `https://client.docs.nocobase.com/components/${blockComponent}`,
    'x-component-props': {
      type: 'primary',
    },
    'x-use-component-props': 'useDocumentActionProps',
  }
}

export const documentActionSettings = new SchemaSettings({
  name: 'actionSettings:document',
  items: [
    {
      name: 'remove',
      type: 'remove',
    }
  ]
});

export const createDocumentActionInitializerItem = (blockComponent: string): SchemaInitializerItemType => ({
  type: 'item',
  title: 'Document',
  name: 'document',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      title: 'Document',
      onClick: () => {
        insert(createDocumentActionSchema(blockComponent));
      },
    };
  },
})
