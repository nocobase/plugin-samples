import { SchemaSettings, SchemaSettingsBlockTitleItem, } from "@nocobase/client";
import { schemaSettingsHeightItem } from "./SchemaSettingsItems/height";
import { schemaSettingsSrcItem } from "./SchemaSettingsItems/src";
import { schemaSettingsObjectFitItem } from "./SchemaSettingsItems/objectFit";
import { schemaSettingsLazyItem } from "./SchemaSettingsItems/lazy";

export const imageSettings = new SchemaSettings({
  name: 'blockSettings:image2',
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
