import React from 'react';
import { useFieldSchema } from '@formily/react'
import { uid } from '@formily/shared';
import { CollectionFieldOptions, ISchema, SchemaInitializer, SchemaInitializerItemType, SchemaSettings, useCollection, useDesignable, useSchemaInitializer } from "@nocobase/client";

export const InfoItem = () => {
  const fieldSchema = useFieldSchema();
  const collection = useCollection();
  const collectionFieldName = fieldSchema.name;
  return <pre>{JSON.stringify(collection.getField(collectionFieldName), null, 2)}</pre>
}

export const infoItemSettings = new SchemaSettings({
  name: 'fieldSettings:info3',
  items: [
    {
      name: 'remove',
      type: 'remove',
      componentProps: {
        removeParentsIfNoChildren: true,
        breakRemoveOn(s) {
          return s['x-component'] === 'Grid';
        },
      },
    }
  ]
})

function getInfoItemSchema(collectionFieldName: string) {
  return {
    type: 'void',
    'x-component': 'Grid.Row',
    'x-collection-field': collectionFieldName,
    properties: {
      [uid()]: {
        type: 'void',
        'x-component': 'Grid.Col',
        properties: {
          [collectionFieldName]: {
            type: 'void',
            'x-component': 'InfoItem',
            'x-decorator': 'CardItem',
            'x-settings': infoItemSettings.name,
          },
        },
      },
    },
  } as ISchema;
}

interface GetFieldInitializerItemOptions {
  collectionField: CollectionFieldOptions;
  schema: ISchema;
  remove: (schema: ISchema) => void;
  insert: (schema: ISchema) => void;
}

function getFieldInitializerItem(options: GetFieldInitializerItemOptions) {
  const { collectionField, schema, remove, insert } = options;
  const title = collectionField.uiSchema?.title || collectionField.name;
  const name = collectionField.name;
  const collectionFieldSchema = Object.values(schema.properties || {}).find((item) => item['x-collection-field'] === name);
  return {
    name,
    type: 'switch',
    title,
    checked: !!collectionFieldSchema,
    onClick() {
      if (collectionFieldSchema) {
        remove(collectionFieldSchema)
        return;
      }
      insert(getInfoItemSchema(name))
    }
  } as SchemaInitializerItemType;
}

export const configureFields = new SchemaInitializer({
  name: 'info:configureFields',
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

        const schemaItems = collection
          .getFields()
          .map<SchemaInitializerItemType>((collectionField) => getFieldInitializerItem({
            collectionField,
            schema,
            remove,
            insert
          }))

        return schemaItems;
      },
    }
  ]
});
