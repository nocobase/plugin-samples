import { ButtonEditor, SchemaSettings, useSchemaToolbar } from "@nocobase/client";

export const formV3SubmitActionSettings = new SchemaSettings({
  name: `actionSettings:formV3Submit`,
  items: [
    {
      name: 'editButton',
      Component: ButtonEditor,
      useComponentProps() {
        const { buttonEditorProps } = useSchemaToolbar();
        return buttonEditorProps;
      },
    },
    {
      name: 'remove',
      type: 'remove',
    }
  ]
})
