import { SchemaSettings } from "@nocobase/client";
import { ActionNameLowercase } from "./constants";

export const customRefreshActionSettings = new SchemaSettings({
  name: `actionSettings:${ActionNameLowercase}`,
  items: [
    {
      name: 'remove',
      type: 'remove',
    }
  ]
})
