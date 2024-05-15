import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'sampleTables1',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
  ],
});
