import { SchemaSettings, SchemaSettingsBlockTitleItem, } from "@nocobase/client";

import { BlockNameLowercase } from "../constants";

import { heightSchemaSettingsItem } from "./items/height";
import { imageSchemaSettingsItem } from "./items/image";
import { lazySchemaSettingsItem } from "./items/lazy";
import { objectFitSchemaSettingsItem } from "./items/objectFit";

export const imageSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
    // {
    //   name: 'divider1',
    //   type: 'divider'
    // },
    imageSchemaSettingsItem,
    // heightSchemaSettingsItem,
    // objectFitSchemaSettingsItem,
    // lazySchemaSettingsItem,
    // {
    //   name: 'divider2',
    //   type: 'divider'
    // },
    {
      type: 'remove',
      name: 'remove',
    }
  ]
});
