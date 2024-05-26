import { ISchema, SchemaInitializerItemType, SchemaSettings, useSchemaInitializer } from "@nocobase/client"

export const createDocumentModalActionSchema = (blockComponent: string): ISchema => {
  return {
    type: 'void',
    'x-component': 'Action',
    'x-settings': documentModalActionSettings.name,
    title: 'Open Document',
    'x-component-props':{ 
      type: 'primary',
    },
    properties: {
      drawer: {
        type: 'void',
        'x-component': 'Action.Drawer',
        'x-component-props': {
          size: 'large'
        },
        title: 'Block Document',
        properties: {
          iframe: {
            type: 'void',
            'x-component': 'iframe',
            'x-component-props': {
              src: `https://client.docs.nocobase.com/components/${blockComponent}`,
              style: {
                border: 'none',
                width: '100%',
                height: '100%'
              }
            },
          }
        }
      },
    },
  }
}

export const documentModalActionSettings = new SchemaSettings({
  name: 'actionSettings:documentModal',
  items: [
    {
      name: 'remove',
      type: 'remove',
    }
  ]
});

export const createDocumenModaltActionInitializerItem = (blockComponent: string): SchemaInitializerItemType => ({
  type: 'item',
  title: 'Open Document',
  name: 'open-document',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      title: 'Open Document',
      onClick: () => {
        insert(createDocumentModalActionSchema(blockComponent));
      },
    };
  },
})