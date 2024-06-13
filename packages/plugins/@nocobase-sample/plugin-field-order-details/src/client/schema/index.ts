
import { ISchema } from "@nocobase/client"
import { FiledComponentName } from '../constants';
import { orderDetailsSettings } from '../settings';

export const orderDetailsSchema: ISchema = {
  type: 'void',
  'x-decorator': 'FormItem',
  'x-toolbar': 'FormItemSchemaToolbar',
  'x-settings': orderDetailsSettings.name,
  'x-component': FiledComponentName,
  'x-component-props': {
    'orderField': undefined,
  }
}
