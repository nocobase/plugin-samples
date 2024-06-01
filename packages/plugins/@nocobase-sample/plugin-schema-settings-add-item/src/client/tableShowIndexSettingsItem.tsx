import { SchemaSettingsItemType, useDesignable } from '@nocobase/client';
import { useFieldSchema } from '@formily/react';

export const tableShowIndexSettingsItem: SchemaSettingsItemType = {
  name: 'showIndex',
  type: 'switch',
  useComponentProps() {
    const fieldSchema = useFieldSchema();
    const dn = useDesignable();
    return {
      title: 'Show Index',
      checked: !!fieldSchema['x-decorator-props'].showIndex,
      onChange(v: boolean) {
        dn.deepMerge({
          'x-uid': fieldSchema['x-uid'],
          'x-decorator-props': {
            ...fieldSchema['x-decorator-props'],
            showIndex: v,
          },
        });
      },
    };
  },
};
