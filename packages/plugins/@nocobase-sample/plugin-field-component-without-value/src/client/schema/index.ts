
import { ISchema } from "@nocobase/client"
import { FieldComponentName } from '../constants';
import { orderDetailsSettings } from '../settings';

export const getOrderDetailsSchema = (orderField: string): ISchema => ({
  type: 'void',
  'x-decorator': 'FormItem',
  'x-toolbar': 'FormItemSchemaToolbar',
  'x-settings': orderDetailsSettings.name,
  'x-component': FieldComponentName,
  'x-component-props': {
    'orderField': orderField,
  }
})
