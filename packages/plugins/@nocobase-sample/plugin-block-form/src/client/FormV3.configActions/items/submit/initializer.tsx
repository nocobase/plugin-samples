import { SchemaInitializerItemType, useSchemaInitializer } from "@nocobase/client";
import { submitActionSchema } from "./schema";
import { generatePluginTranslationTemplate } from '../../../locale';

export const submitActionInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: 'submit',
  title: generatePluginTranslationTemplate('Submit'),
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      onClick() {
        insert(submitActionSchema)
      },
    };
  },
};
