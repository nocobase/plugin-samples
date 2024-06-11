import { SchemaSettings } from "@nocobase/client";

export const timelineSettings = new SchemaSettings({
  name: 'blockSettings:info',
  items: [
    {
      type: 'remove',
      name: 'remove',
      componentProps: {
        removeParentsIfNoChildren: true,
        breakRemoveOn: {
          'x-component': 'Grid',
        },
      }
    }
  ]
})
