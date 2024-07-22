import { useCollection, useDataBlockRequest } from "@nocobase/client";

import { infoSettings } from "../settings";
import { InfoV2Props } from "../component";
import { BlockName, BlockNameLowercase } from "../constants";
import { configureActionsInitializer } from "../initializer";

export function useInfoProps(): InfoV2Props {
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
    "x-toolbar": "BlockSchemaToolbar",
    'x-component': 'CardItem',
    properties: {
      [BlockNameLowercase]: {
        type: 'void',
        'x-component': BlockName,
        'x-use-component-props': 'useInfoProps',
        properties: {
          actions: {
            type: 'void',
            'x-component': 'ActionBar',
            'x-component-props': {
              layout: 'two-column',
              style: {
                marginBottom: 20
              }
            },
            'x-initializer': configureActionsInitializer.name,
          }
        }
      }
    }
  }
}
