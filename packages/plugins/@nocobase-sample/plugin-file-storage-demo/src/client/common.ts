/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

export default {
  title: {
    'x-component': 'CollectionField',
    'x-decorator': 'FormItem',
  },
  name: {
    'x-component': 'CollectionField',
    'x-decorator': 'FormItem',
    'x-disabled': '{{ !createOnly }}',
    required: true,
    default: '{{ useNewId("s_") }}',
    description:
      '{{t("Randomly generated and can be modified. Support letters, numbers and underscores, must start with an letter.")}}',
  },
  baseUrl: {
    'x-component': 'CollectionField',
    'x-decorator': 'FormItem',
    description: `{{t('Base URL for file access, could be your CDN base URL. For example: "https://cdn.nocobase.com".')}}`,
  },
  path: {
    'x-component': 'CollectionField',
    'x-decorator': 'FormItem',
    description: `{{t('Relative path the file will be saved to. Left blank as root path. The leading and trailing slashes "/" will be ignored. For example: "user/avatar".')}}`,
  },
  rules: {
    type: 'object',
    'x-component': 'fieldset',
    properties: {
      size: {
        type: 'number',
        title: `{{t("File size limit")}}`,
        description: `{{t("Minimum from 1 byte, maximum up to 1GB.")}}`,
        'x-decorator': 'FormItem',
        'x-component': 'FileSizeField',
        required: true,
        default: 20971520,
      },
      mimetype: {
        type: 'string',
        title: `{{t("File type (in MIME type format)")}}`,
        description: `{{t('Multi-types seperated with comma, for example: "image/*", "image/png", "image/*, application/pdf" etc.')}}`,
        'x-decorator': 'FormItem',
        'x-component': 'Input',
        'x-component-props': {
          placeholder: '*',
        },
      },
    },
  },
  default: {
    'x-component': 'CollectionField',
    'x-decorator': 'FormItem',
    'x-content': `{{t("Default storage")}}`,
  },
  paranoid: {
    'x-component': 'CollectionField',
    'x-decorator': 'FormItem',
    'x-content': `{{t("Keep file in storage when destroy record")}}`,
  },
};
