import { SchemaInitializerItemType, useSchemaInitializer } from "@nocobase/client";
import { customRefreshActionSchema } from "./schema";
import { ActionName } from "./constants";
import { usePluginTranslation } from "../../../../locale";

export const customRefreshActionInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: ActionName,
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const { t } = usePluginTranslation();
    return {
      title: t(ActionName),
      onClick() {
        insert(customRefreshActionSchema)
      },
    };
  },
};
