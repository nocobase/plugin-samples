/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { SelectProps, createSelectSchemaSettingsItem, useCollection, useCompile } from "@nocobase/client";
import { generateNTemplate } from "../../locale";

function useOptions(): SelectProps['options'] {
  const collection = useCollection();

  const compile = useCompile();
  return collection
    .getFields()
    .map(field => ({ label: field.uiSchema?.title ? compile(field.uiSchema.title) : field.name, value: field.name }));
}

export const orderFieldSchemaSettingsItem = createSelectSchemaSettingsItem({
  name: 'titleField',
  title: generateNTemplate('Order field'),
  useOptions,
  schemaKey: `x-component-props.orderField`,
});
