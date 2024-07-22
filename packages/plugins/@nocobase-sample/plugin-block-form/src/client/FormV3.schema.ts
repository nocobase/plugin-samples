import { ISchema, useDataBlockProps } from "@nocobase/client";

import { FormV3BlockName, FormV3BlockNameLowercase } from "./constants";
import { FormV3Props } from "./FormV3";
import { formV3Settings } from "./FormV3.settings";
import { formV3ConfigureActionsInitializer } from "./FormV3.configActions";
import { formV3ConfigureFieldsInitializer } from "./FormV3.configFields";

export function useFormV3Props(): FormV3Props {
  const blockProps = useDataBlockProps();
  return blockProps[FormV3BlockNameLowercase];
}

interface GetFormV3SchemaOptions {
  dataSource?: string;
  collection: string;
  properties?: ISchema['properties'];
}

export function getFormV3Schema(options: GetFormV3SchemaOptions): ISchema {
  const { dataSource, collection, properties = {} } = options;
  return {
    type: 'void',
    'x-component': 'CardItem',
    'x-decorator': 'DataBlockProvider',
    'x-decorator-props': {
      dataSource,
      collection,
      [FormV3BlockNameLowercase]: {},
    },
    'x-settings': formV3Settings.name,
    "x-toolbar": "BlockSchemaToolbar",
    properties: {
      [FormV3BlockNameLowercase]: {
        type: 'void',
        'x-component': FormV3BlockName,
        'x-use-component-props': 'useFormV3Props',
        properties: {
          ...properties as any,
          fields: {
            "type": "void",
            "x-component": "Grid",
            "x-initializer": formV3ConfigureFieldsInitializer.name
          },
          actionBar: {
            type: 'void',
            "x-initializer": formV3ConfigureActionsInitializer.name,
            "x-component": "ActionBar",
            "x-component-props": {
              "layout": "one-column",
              "style": {
                "marginTop": 24
              }
            },
          },
        }
      }
    }
  }
}
