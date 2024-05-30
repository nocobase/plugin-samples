import { ActionProps, useDataBlockRequest, ISchema } from "@nocobase/client";
import { customRefreshActionSettings } from "./customRefreshActionSettings";

export const useCustomRefreshActionProps = (): ActionProps => {
  const { runAsync } = useDataBlockRequest();
  return {
    type: 'primary',
    async onClick() {
      await runAsync();
    },
  }
}

export const customRefreshActionSchema: ISchema = {
  type: 'void',
  'x-component': 'Action',
  "x-settings": customRefreshActionSettings.name,
  title: 'Custom Refresh',
  'x-use-component-props': 'useCustomRefreshActionProps'
}
