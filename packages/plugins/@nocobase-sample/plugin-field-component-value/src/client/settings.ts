import { createModalSettingsItem, createSelectSchemaSettingsItem, createSwitchSettingsItem, SchemaSettings } from "@nocobase/client";

import { tStr, useT } from './locale';

export const qrCodeComponentFieldSettings = new SchemaSettings({
  name: 'fieldSettings:component:QRCode',
  items: [
    createSelectSchemaSettingsItem({
      name: 'size',
      title: tStr('Size'),
      schemaKey: 'x-component-props.size',
      defaultValue: 160,
      useOptions() {
        const t = useT();
        return [
          {
            label: t('Small'),
            value: 100,
          },
          {
            label: t('Middle'),
            value: 160,
          },
          {
            label: t('Large'),
            value: 200,
          }
        ]
      }
    }),
    createSwitchSettingsItem({
      name: 'bordered',
      schemaKey: 'x-component-props.bordered',
      title: tStr('Bordered'),
      defaultValue: true,
    }),
    createModalSettingsItem({
      name: 'color',
      title: tStr('Color'),
      parentSchemaKey: 'x-component-props',
      schema({ color }) {
        return {
          type: 'object',
          title: tStr('Color'),
          properties: {
            color: {
              type: 'string',
              title: tStr('Color'),
              default: color,
              'x-component': 'ColorPicker',
            }
          }
        }
      },
    }),
  ],
});
