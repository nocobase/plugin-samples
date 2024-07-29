import { useForm } from '@formily/react';
import { App } from 'antd';
import { ActionProps, useDataBlockResource } from "@nocobase/client";
import { formV3SubmitActionSettings } from './settings';
import { tStr } from '../../../locale'

export const useFormV3SubmitActionProps = (): ActionProps => {
  const resource = useDataBlockResource();
  const form = useForm();
  const { message } = App.useApp();
  return {
    type: 'primary',
    htmlType: 'submit',
    async onClick() {
      await form.submit();
      const values = form.values;
      await resource.create({ values })
      await form.reset();
      message.success('Created successfully');
    },
  }
}

export const submitActionSchema = {
  type: 'void',
  title: tStr('Submit'),
  'x-component': 'Action',
  'x-settings': formV3SubmitActionSettings.name,
  'x-use-component-props': 'useFormV3SubmitActionProps',
  'x-toolbar': 'ActionSchemaToolbar'
};
