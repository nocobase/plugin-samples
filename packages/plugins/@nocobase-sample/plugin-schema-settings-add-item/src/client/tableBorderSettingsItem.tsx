import { SchemaSettingsItemType, useDesignable } from '@nocobase/client';
import { useFieldSchema } from '@formily/react';

export const tableBorderedSettingsItem: SchemaSettingsItemType = {
  name: 'border',
  type: 'switch',
  useComponentProps() {
    const fieldSchema = useFieldSchema();
    const dn = useDesignable();
    return {
      title: 'Bordered',
      checked: !!fieldSchema['x-decorator-props'].bordered,
      onChange(v: boolean) {
        dn.deepMerge({
          'x-decorator-props': {
            ...fieldSchema['x-decorator-props'],
            bordered: v,
          },
        });
      },
    };
  },
};
