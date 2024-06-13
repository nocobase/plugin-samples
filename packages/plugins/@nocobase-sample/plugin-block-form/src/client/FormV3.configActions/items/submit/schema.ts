import { useForm } from '@formily/react';
import { App } from 'antd';
import { ActionProps, useDataBlockResource } from "@nocobase/client";
import { formV3SubmitActionSettings } from './settings';

export const useFormV3SubmitActionProps = (): ActionProps => {
  const resource = useDataBlockResource();
  const form = useForm();
  const { message } = App.useApp();
  return {
    async onClick() {
      await form.submit();
      const values = form.values;
      await resource.create(values)
      message.success('Created successfully');
    },
  }
}

export const submitActionSchema = {
  type: 'void',
  title: 'Submit',
  'x-component': 'Action',
  'x-settings': formV3SubmitActionSettings.name,
  'x-component-props': {
    type: 'primary',
    htmlType: 'submit',
  },
  'x-use-component-props': useFormV3SubmitActionProps.name,
  'x-toolbar': 'ActionSchemaToolbar'
};
