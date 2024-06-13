import { SchemaInitializerItemType, useSchemaInitializer } from "@nocobase/client"

import { FieldTitle, FieldNameLowercase } from "../constants";
import { usePluginTranslation } from "../locale";
import { orderDetailsSchema } from "../schema";

export const orderDetailsInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: FieldNameLowercase,
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const { t } = usePluginTranslation();
    return {
      title: t(FieldTitle),
      icon: 'MenuOutlined',
      onClick: () => {
        insert(orderDetailsSchema);
      },
    };
  },
};
