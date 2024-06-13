import React, { FC } from 'react';
import { Form, FormProps } from '@formily/antd-v5';
import { withDynamicSchemaProps } from '@nocobase/client';
import { FormV3BlockName } from './constants'

export interface FormV3Props extends FormProps {
  children?: React.ReactNode;
}

export const FormV3: FC<FormV3Props> = withDynamicSchemaProps((props) => {
  return <Form {...props} layout={props.layout || 'vertical'} />
}, { displayName: FormV3BlockName });
