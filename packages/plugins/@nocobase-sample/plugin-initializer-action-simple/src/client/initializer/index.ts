import { SchemaInitializerItemType, useSchemaInitializer } from "@nocobase/client"
import { createDocumentActionSchema } from '../schema';
import { ActionNameLowercase, ActionName } from "../constants";
import { usePluginTranslation } from "../locale";

export const createDocumentActionInitializerItem = (blockComponent: string): SchemaInitializerItemType => ({
  type: 'item',
  name: ActionNameLowercase,
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const { t } = usePluginTranslation();
    return {
      title: t(ActionName),
      onClick: () => {
        insert(createDocumentActionSchema(blockComponent));
      },
    };
  },
})
