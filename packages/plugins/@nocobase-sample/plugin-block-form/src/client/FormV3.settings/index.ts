import { SchemaSettings, SchemaSettingsBlockTitleItem } from "@nocobase/client";
import { FormV3BlockNameLowercase } from "../constants";

export const formV3Settings = new SchemaSettings({
  name: `blockSettings:${FormV3BlockNameLowercase}`,
  items: [
    {
      name: 'blockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
    {
      type: 'remove',
      name: 'remove',
      componentProps: {
        removeParentsIfNoChildren: true,
        breakRemoveOn: {
          'x-component': 'Grid',
        },
      }
    },
  ]
})
