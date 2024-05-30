import { SchemaSettings } from "@nocobase/client";

export const documentActionModalSettings = new SchemaSettings({
  name: 'actionSettings:documentModal',
  items: [
    {
      name: 'remove',
      type: 'remove',
    }
  ]
});
