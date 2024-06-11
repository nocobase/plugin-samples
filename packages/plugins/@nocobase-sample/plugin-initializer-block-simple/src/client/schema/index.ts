import { ISchema } from "@nocobase/client";
import { imageSettings } from "../settings";
import { BlockName } from "../constants";

export const imageSchema: ISchema = {
  type: 'void',
  'x-component': 'CardItem',
  properties: {
    image: {
      'x-component': BlockName,
    }
  },
  'x-settings': imageSettings.name
};
