import { SchemaSettings } from "@nocobase/client";

export const customRefreshActionSettings = new SchemaSettings({
  name: 'actionSettings:customRefresh',
  items: [
    {
      name: 'remove',
      type: 'remove',
    }
  ]
})
