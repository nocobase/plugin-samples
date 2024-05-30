import { SchemaInitializerItemType, useSchemaInitializer } from "@nocobase/client";
import { customRefreshActionSchema } from "./customRefreshActionSchema";

export const customRefreshActionInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: 'custom refresh',
  title: 'Custom Refresh',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      onClick() {
        insert(customRefreshActionSchema)
      },
    };
  },
};
