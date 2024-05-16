import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'samplesFileStorages',
  fields: [
    {
      type: 'string',
      name: 'type',
    },
    {
      type: 'jsonb',
      name: 'options',
      defaultValue: {},
    },
  ],
});
