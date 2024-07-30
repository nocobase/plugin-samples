import { SchemaInitializerItemType, useSchemaInitializer } from "@nocobase/client";
import { submitActionSchema } from "./schema";
import { tStr } from '../../../locale';

export const submitActionInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: 'submit',
  title: tStr('Submit'),
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      onClick() {
        insert(submitActionSchema)
      },
    };
  },
};
