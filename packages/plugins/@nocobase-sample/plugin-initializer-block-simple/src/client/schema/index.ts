import { ISchema } from "@nocobase/client";
import { imageSettings } from "../settings";
import { BlockName, BlockNameLowercase } from "../constants";

export const imageSchema: ISchema = {
  type: 'void',
  'x-component': 'CardItem',
  properties: {
    [BlockNameLowercase]: {
      'x-component': BlockName,
    }
  },
  'x-settings': imageSettings.name
};
