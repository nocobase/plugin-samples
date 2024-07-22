
import { SchemaInitializer } from "@nocobase/client";
import { FormV3BlockNameLowercase } from "../constants";
import { submitActionInitializerItem } from "./items/submit";
import { generatePluginTranslationTemplate } from '../locale'

export const formV3ConfigureActionsInitializer = new SchemaInitializer({
  name: `${FormV3BlockNameLowercase}:configureActions`,
  icon: 'SettingOutlined',
  title: generatePluginTranslationTemplate('Configure actions'),
  style: {
    marginLeft: 8,
  },
  items: [
    submitActionInitializerItem,
    {
      name: 'customRequest',
      title: generatePluginTranslationTemplate('Custom request'),
      Component: 'CustomRequestInitializer',
    },
  ]
});
