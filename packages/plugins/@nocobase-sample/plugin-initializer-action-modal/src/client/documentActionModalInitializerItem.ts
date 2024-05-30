import { SchemaInitializerItemType, useSchemaInitializer } from "@nocobase/client"
import { createDocumentActionModalSchema } from './documentActionModalSchema';

export const createDocumentActionModalInitializerItem = (blockComponent: string): SchemaInitializerItemType => ({
  type: 'item',
  title: 'Open Document',
  name: 'open-document',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      title: 'Open Document',
      onClick: () => {
        insert(createDocumentActionModalSchema(blockComponent));
      },
    };
  },
})
