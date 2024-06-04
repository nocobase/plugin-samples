import { useFieldSchema } from '@formily/react'
import { SchemaInitializer, SchemaInitializerItemType, useCollection, useDesignable, useSchemaInitializer } from "@nocobase/client";
import { FormV3BlockNameLowercase } from '../constants';

export const configureFields = new SchemaInitializer({
  name: `${FormV3BlockNameLowercase}:configureFields`,
  icon: 'SettingOutlined',
  title: 'Configure fields',
  items: [
    {
      type: 'itemGroup',
      name: 'fields',
      title: 'Display fields',
      useChildren() {
        const { insert } = useSchemaInitializer();
        const { remove } = useDesignable();
        const schema = useFieldSchema();
        const collection = useCollection();
        // const schemaItems = collection
        //   .getFields()
        //   .map<SchemaInitializerItemType>((collectionField) => getFieldInitializerItem({
        //     collectionField,
        //     schema,
        //     remove,
        //     insert
        //   }))

        // return schemaItems;
        return [];
      },
    },
    {
      name: 'divider',
      type: 'divider',
    },
    {
      name: 'addText',
      title: 'Add text',
      Component: 'MarkdownFormItemInitializer',
    },
  ]
});
