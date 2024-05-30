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
        'x-component': 'InfoBlock',
        'x-use-component-props': 'useInfoBlockProps',
      }
    }
  }
}
