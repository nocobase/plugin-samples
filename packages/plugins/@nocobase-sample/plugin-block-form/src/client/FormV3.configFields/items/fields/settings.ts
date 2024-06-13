import { SchemaSettings } from "@nocobase/client";
import { FormV3BlockNameLowercase } from "../../../constants";

export const formItemItemSettings = new SchemaSettings({
  name: `fieldSettings:${FormV3BlockNameLowercase}`,
  items: [
    {
      name: 'remove',
      type: 'remove',
      componentProps: {
        removeParentsIfNoChildren: true,
        breakRemoveOn(s) {
          return s['x-component'] === 'Grid';
        },
      },
    }
  ]
})
