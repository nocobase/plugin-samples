import { useFieldSchema } from '@formily/react';
import { ISchema } from "@nocobase/client"
import { documentActionSettings } from './documentActionSettings';

export function useDocumentActionProps() {
  const fieldSchema = useFieldSchema();
  return {
    type: 'primary',
    onClick() {
      window.open(fieldSchema['x-doc-url'])
    }
  }
}

export const createDocumentActionSchema = (blockComponent: string): ISchema & { 'x-doc-url': string } => {
  return {
    type: 'void',
    'x-component': 'Action',
    'x-settings': documentActionSettings.name,
    title: 'Document',
    'x-doc-url': `https://client.docs.nocobase.com/components/${blockComponent}`,
    'x-use-component-props': 'useDocumentActionProps',
  }
}
