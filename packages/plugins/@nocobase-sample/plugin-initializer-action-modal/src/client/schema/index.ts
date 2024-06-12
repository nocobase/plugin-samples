import { ISchema } from "@nocobase/client"
import { documentActionModalSettings } from "../settings"
import { useOpenDocumentTranslation } from "../locale";
import { ActionName } from "../constants";

export function useOpenDocumentActionProps() {
  const { t } = useOpenDocumentTranslation();
  return {
    title: t(ActionName),
    type: 'primary'
  }
}

export const createDocumentActionModalSchema = (blockComponent: string): ISchema => {
  return {
    type: 'void',
    'x-component': 'Action',
    'x-settings': documentActionModalSettings.name,
    'x-use-component-props': 'useOpenDocumentActionProps',
    properties: {
      drawer: {
        type: 'void',
        'x-component': 'Action.Drawer',
        'x-component-props': {
          size: 'large'
        },
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
