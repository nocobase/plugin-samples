import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'emailTemplates',
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
