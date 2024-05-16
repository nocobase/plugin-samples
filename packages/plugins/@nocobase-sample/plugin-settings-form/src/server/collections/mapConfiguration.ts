import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'samplesMapConfiguration',
  fields: [
    {
      type: 'string',
      name: 'key',
    },
    {
      type: 'string',
      name: 'secret',
    },
  ],
});
