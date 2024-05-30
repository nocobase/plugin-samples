import { SchemaSettings } from "@nocobase/client";

export const documentActionSettings = new SchemaSettings({
  name: 'actionSettings:document',
  items: [
    {
      name: 'remove',
      type: 'remove',
    }
  ]
});
