import { ISchema } from "@nocobase/client";
import { imageBlockSettings } from "./imageBlockSettings";

export const imageBlockSchema: ISchema = {
  type: 'void',
  'x-component': 'CardItem',
  properties: {
    image: {
      'x-component': 'ImageBlock',
    }
  },
  'x-settings': imageBlockSettings.name
};
