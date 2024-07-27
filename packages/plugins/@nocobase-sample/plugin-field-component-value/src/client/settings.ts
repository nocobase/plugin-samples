import { createModalSettingsItem, createSelectSchemaSettingsItem, createSwitchSettingsItem, SchemaSettings } from "@nocobase/client";

import { generatePluginTranslationTemplate, usePluginTranslation } from './locale';

export const qrCodeComponentFieldSettings = new SchemaSettings({
  name: 'fieldSettings:component:QRCode',
  items: [
    createSelectSchemaSettingsItem({
      name: 'size',
      title: generatePluginTranslationTemplate('Size'),
      schemaKey: 'x-component-props.size',
      defaultValue: 160,
      useOptions() {
        const { t } = usePluginTranslation();
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
      title: generatePluginTranslationTemplate('Bordered'),
      defaultValue: true,
    }),
    createModalSettingsItem({
      name: 'color',
      title: generatePluginTranslationTemplate('Color'),
      parentSchemaKey: 'x-component-props',
      schema({ color }) {
        return {
          type: 'object',
          title: generatePluginTranslationTemplate('Color'),
          properties: {
            color: {
              type: 'string',
              title: generatePluginTranslationTemplate('Color'),
              default: color,
              'x-component': 'ColorPicker',
            }
          }
        }
      },
    }),
  ],
});
