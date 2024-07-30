import { CollectionFieldsToFormInitializerItems, gridRowColWrap, SchemaInitializer } from "@nocobase/client";
import { FormV3BlockNameLowercase } from '../constants';
import { tStr } from '../locale'

export const formV3ConfigureFieldsInitializer = new SchemaInitializer({
  name: `${FormV3BlockNameLowercase}:configureFields`,
  icon: 'SettingOutlined',
  wrap: gridRowColWrap,
  title: tStr('Configure fields'),
  items: [
    {
      name: 'collectionFields',
      Component: CollectionFieldsToFormInitializerItems,
    },
    {
      name: 'divider',
      type: 'divider',
    },
    {
      name: 'addText',
      title: tStr('Add text'),
      Component: 'MarkdownFormItemInitializer',
    },
  ]
});
