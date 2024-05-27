import { SchemaComponent, useApp } from "@nocobase/client";
import React, { FC, useState } from "react";
import { uid } from "@formily/shared";
import { SelectProps } from 'antd';

export interface TimelineConfigFormProps {
    collection: string;
    dataSource?: string;
    onSubmit?: (values: { timeField: string; titleField: string }) => void;
}


const createSchema = (options: SelectProps['options']) => {
    return {
        type: 'void',
        name: uid(),
        'x-component': 'Form',
        properties: {
            titleField: {
                type: 'string',
                title: 'Title Field',
                required: true,
                enum: options,
                'x-decorator': 'FormItem',
                'x-component': 'Select',
            },
            timeField: {
                type: 'string',
                title: 'Time Field',
                required: true,
                enum: options,
                'x-decorator': 'FormItem',
                'x-component': 'Select',
            },
        }
    };
}


export const TimelineInitializerConfigForm: FC<TimelineConfigFormProps> = ({ collection, dataSource, onSubmit }) => {
    const app = useApp();
    const fields: SelectProps['options']  = app.getCollectionManager(dataSource).getCollection(collection).getFields().map(item => ({ label: item.uiSchema?.title || item.name, value: item.name }))
    const [visible, setVisible] = useState(false);

    return  <SchemaComponent schema={createSchema(fields)} />
}