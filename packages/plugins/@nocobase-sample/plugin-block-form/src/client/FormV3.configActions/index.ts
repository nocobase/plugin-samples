
import { SchemaInitializer } from "@nocobase/client";
import { FormV3BlockNameLowercase } from "../constants";
import { submitActionInitializerItem } from "./items/submit";
import { tStr } from '../locale'

export const formV3ConfigureActionsInitializer = new SchemaInitializer({
  name: `${FormV3BlockNameLowercase}:configureActions`,
  icon: 'SettingOutlined',
  title: tStr('Configure actions'),
  style: {
    marginLeft: 8,
  },
  items: [
    submitActionInitializerItem,
    {
      name: 'customRequest',
      title: tStr('Custom request'),
      Component: 'CustomRequestInitializer',
    },
  ]
});
