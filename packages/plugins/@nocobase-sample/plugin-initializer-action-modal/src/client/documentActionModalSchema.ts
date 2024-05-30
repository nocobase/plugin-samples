import { ISchema } from "@nocobase/client"
import { documentActionModalSettings } from "./documentActionModalSettings"

export const createDocumentActionModalSchema = (blockComponent: string): ISchema => {
  return {
    type: 'void',
    'x-component': 'Action',
    'x-settings': documentActionModalSettings.name,
    title: 'Open Document',
    'x-component-props': {
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
