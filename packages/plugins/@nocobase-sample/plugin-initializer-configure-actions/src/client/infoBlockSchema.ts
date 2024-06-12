import { useCollection, useDataBlockRequest } from "@nocobase/client";
import { infoSettings } from "./infoBlockSettings";
import { InfoProps } from "./InfoBlock";

export function useInfoProps(): InfoProps {
  const collection = useCollection();
  const { data, loading } = useDataBlockRequest<any[]>();

  return {
    collectionName: collection.name,
    data: data?.data,
    loading: loading
  }
}

export function getInfoSchema({ dataSource = 'main', collection }) {
  return {
    type: 'void',
    'x-decorator': 'DataBlockProvider',
    'x-decorator-props': {
      dataSource,
      collection,
      action: 'list',
    },
    'x-settings': infoSettings.name,
    'x-component': 'CardItem',
    properties: {
      info: {
        type: 'void',
        'x-component': 'Info2',
        'x-use-component-props': 'useInfoProps',
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
