import { SchemaSettings, SchemaSettingsBlockTitleItem, } from "@nocobase/client";

import { BlockNameLowercase } from "../constants";

import { schemaSettingsHeightItem } from "./items/height";
import { schemaSettingsLazyItem } from "./items/lazy";
import { schemaSettingsObjectFitItem } from "./items/objectFit";
import { schemaSettingsSrcItem } from "./items/src";

export const imageSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
    {
      name: 'divider1',
      type: 'divider'
    },
    schemaSettingsSrcItem,
    schemaSettingsHeightItem,
    schemaSettingsObjectFitItem,
    schemaSettingsLazyItem,
    {
      name: 'divider2',
      type: 'divider'
    },
    {
      type: 'remove',
      name: 'remove',
    }
  ]
});
