import { ActionProps, useDataBlockRequest, ISchema } from "@nocobase/client";
import { customRefreshActionSettings } from "./settings";
import { usePluginTranslation } from "../../../../locale";

export const useCustomRefreshActionProps = (): ActionProps => {
  const { runAsync } = useDataBlockRequest();
  const { t } = usePluginTranslation();
  return {
    type: 'primary',
    title: t('Custom Refresh'),
    async onClick() {
      await runAsync();
    },
  }
}

export const customRefreshActionSchema: ISchema = {
  type: 'void',
  'x-component': 'Action',
  'x-toolbar': 'ActionSchemaToolbar',
  "x-settings": customRefreshActionSettings.name,
  'x-use-component-props': 'useCustomRefreshActionProps'
}
