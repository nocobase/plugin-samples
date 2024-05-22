import { ActionProps, ISchema, SchemaInitializer, SchemaSettings, useDataBlockRequest, useSchemaInitializer } from "@nocobase/client";

export const customRequestActionSettings = new SchemaSettings({
  name: 'actionSettings:customRefresh',
  items: [
    {
      name: 'remove',
      type: 'remove',
    }
  ]
})

export const useCustomRequestActionProps = (): ActionProps => {
  const { runAsync } = useDataBlockRequest();
  return {
    type: 'primary',
    async onClick() {
      await runAsync();
    },
  }
}

const refreshActionSchema: ISchema = {
  type: 'void',
  'x-component': 'Action',
  "x-settings": customRequestActionSettings.name,
  title: 'Custom Refresh',
  'x-use-component-props': 'useCustomRequestActionProps'
}

export const configureActions = new SchemaInitializer({
  name: 'info:configureActions',
  title: 'Configure actions',
  icon: 'SettingOutlined',
  style: {
    marginLeft: 8,
  },
  items: [
    {
      name: 'customRequest',
      title: '{{t("Custom request")}}',
      Component: 'CustomRequestInitializer',
      'x-align': 'right',
    },
    {
      type: 'item',
      name: 'custom refresh',
      title: 'Custom Refresh',
      useComponentProps() {
        const { insert } = useSchemaInitializer();
        return {
          onClick() {
            insert(refreshActionSchema)
          },
        };
      },
    },
  ]
});
