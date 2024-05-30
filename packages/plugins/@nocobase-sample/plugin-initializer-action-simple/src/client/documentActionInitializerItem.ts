import { SchemaInitializerItemType, useSchemaInitializer } from "@nocobase/client"
import { createDocumentActionSchema } from './documentActionSchema';

export const createDocumentActionInitializerItem = (blockComponent: string): SchemaInitializerItemType => ({
  type: 'item',
  title: 'Document',
  name: 'document',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      title: 'Document',
      onClick: () => {
        insert(createDocumentActionSchema(blockComponent));
      },
    };
  },
})
