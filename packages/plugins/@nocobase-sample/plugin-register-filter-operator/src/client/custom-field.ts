/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { CollectionFieldInterface, defaultProps } from '@nocobase/client';

export class CustomFieldInterface extends CollectionFieldInterface {
  name = 'customField';
  type = 'object';
  group = 'advanced';
  order = 1;
  title = '{{t("Custom field")}}';
  sortable = true;
  titleUsable = true;
  description = '{{t("Custom field description")}}';
  default = {
    interface: 'input',
    type: 'string',
    uiSchema: {
      type: 'string',
      'x-component': 'Input',
    },
  };
  availableTypes = ['string'];
  hasDefaultValue = true;
  properties = {
    ...defaultProps,
  };
  filterable = {
    operators: [{ label: '{{t("Custom operator")}}', value: '$customOperator', selected: true }],
  };
}
