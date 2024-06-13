import { ISchema } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';
import { imageSettings } from "../settings";
import { BlockName, BlockNameLowercase } from "../constants";

import { ImageV2Props } from "../component";

export function useImageV2Props(): ImageV2Props {
  const fieldSchema = useFieldSchema();
  return fieldSchema.parent?.['x-decorator-props']?.[BlockNameLowercase];
}

export const imageSchema: ISchema = {
  type: 'void',
  'x-component': 'CardItem',
  'x-decorator-props': {
    [BlockNameLowercase]: {}
  },
  properties: {
    [BlockNameLowercase]: {
      'x-component': BlockName,
      'x-use-component-props': 'useImageV2Props'
    }
  },
  'x-settings': imageSettings.name
};

