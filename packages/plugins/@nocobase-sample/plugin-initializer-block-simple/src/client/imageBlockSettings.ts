import { SchemaSettings } from "@nocobase/client";

export const imageBlockSettings = new SchemaSettings({
  name: 'blockSettings:image',
  items: [
    {
      type: 'remove',
      name: 'remove',
    }
  ]
});
