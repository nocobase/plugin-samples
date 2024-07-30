import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import { SchemaInitializerActionModal, SchemaInitializerItemType, SelectProps, useCollection, useCompile, useSchemaInitializer } from "@nocobase/client"

import { FieldNameLowercase } from "../constants";
import { useT } from "../locale";
import { getOrderDetailsSchema } from '../schema'

export function useFieldOptions(): SelectProps['options'] {
  const collection = useCollection();

  const compile = useCompile();
  return collection
    .getFields()
    .map(field => ({ label: field.uiSchema?.title ? compile(field.uiSchema.title) : field.name, value: field.name }));
}

const OrderDetailsSchemaInitializer = () => {
  const t = useT();
  const { insert, setVisible } = useSchemaInitializer();
  const options = useFieldOptions();
  return <SchemaInitializerActionModal
    buttonText={t("Order Details")}
    icon={<MenuOutlined />}
    title={t("Select Order Field")}
    isItem
    onSubmit={({ orderField }) => {
      insert(getOrderDetailsSchema(orderField));
      setVisible(false);
    }}
    schema={{
      orderField: {
        type: 'string',
        title: 'orderField',
        required: true,
        'x-component': 'Select',
        'x-decorator': 'FormItem',
        enum: options
      },
    }}
  ></SchemaInitializerActionModal>
}

export const orderDetailsInitializerItem: SchemaInitializerItemType = {
  name: FieldNameLowercase,
  Component: OrderDetailsSchemaInitializer
};
