import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'samplesEmailTemplates',
  fields: [
    {
      type: 'string',
      name: 'subject',
    },
    {
      type: 'string',
      name: 'content',
    },
  ],
});
