import { SchemaSettings } from "@nocobase/client";
import { FieldNameLowercase } from '../constants';
import { orderFieldSchemaSettingsItem } from "./items/orderField";

export const orderDetailsSettings = new SchemaSettings({
  name: `blockSettings:${FieldNameLowercase}`,
  items: [
    orderFieldSchemaSettingsItem,
    {
      name: 'remove',
      type: 'remove',
      componentProps: {
        removeParentsIfNoChildren: true,
        breakRemoveOn: {
          'x-component': 'Grid',
        },
      }
    },
  ]
});
