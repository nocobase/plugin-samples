import { SchemaInitializer } from "@nocobase/client";
import { customRefreshActionInitializerItem } from "./items/customRefreshAction/customRefreshActionInitializerItem";

export const configureActionsInitializer = new SchemaInitializer({
  name: 'info:configureActions',
  title: 'Configure actions',
  icon: 'SettingOutlined',
  style: {
    marginLeft: 8,
  },
  items: [
    {
      name: 'customRequest',
      title: '{{t("Custom request")}}',
      Component: 'CustomRequestInitializer',
    },
    customRefreshActionInitializerItem
  ]
});
