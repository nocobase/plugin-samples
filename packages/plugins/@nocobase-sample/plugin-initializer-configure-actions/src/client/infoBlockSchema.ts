import { useCollection, useDataBlockRequest } from "@nocobase/client";
import { infoBlockSettings } from "./infoBlockSettings";
import { InfoBlockProps } from "./InfoBlock";

export function useInfoBlockProps(): InfoBlockProps {
  const collection = useCollection();
  const { data, loading } = useDataBlockRequest<any[]>();

  return {
    collectionName: collection.name,
    data: data?.data,
    loading: loading
  }
}

export function getInfoBlockSchema({ dataSource = 'main', collection }) {
  return {
    type: 'void',
    'x-decorator': 'DataBlockProvider',
    'x-decorator-props': {
      dataSource,
      collection,
      action: 'list',
    },
    'x-settings': infoBlockSettings.name,
    'x-component': 'CardItem',
    properties: {
      info: {
        type: 'void',
        'x-component': 'InfoBlock2',
        'x-use-component-props': 'useInfoBlockProps',
        properties: {
          actions: {
            type: 'void',
            'x-component': 'ActionBar',
            'x-component-props': {
              layout: 'one-column',
              style: {
                marginBottom: 20
              }
            },
            'x-initializer': 'info:configureActions',
          }
        }
      }
    }
  }
}
