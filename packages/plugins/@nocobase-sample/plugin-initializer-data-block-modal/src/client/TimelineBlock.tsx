import React, { FC } from 'react';
import { Timeline, TimelineProps, Spin } from 'antd';
import { ActionContextProvider, DataBlockInitializer, SchemaComponent, SchemaInitializerItemType, useDataBlockProps, useDataBlockRequest, useSchemaInitializer, withDynamicSchemaProps } from "@nocobase/client";
import { FieldTimeOutlined } from '@ant-design/icons';

export interface TimelineBlockProps {
    data?: TimelineProps['items'];
    loading?: boolean;
}

export const TimelineBlock: FC<TimelineBlockProps> = withDynamicSchemaProps((props) => {
    const { data, loading } = props;
    if (loading) return <div style={{ height: 100, textAlign: 'center' }}> <Spin /></div>
    return <div>
        <Timeline mode='left' items={data}></Timeline>
    </div>
}, { displayName: 'TimelineBlock' })

export function getTimelineBlockSchema({ dataSource = 'main', collection }) {
    return (options: { titleField: string, timeField: string }) => {
        const { titleField, timeField } = options;
        return {
            type: 'void',
            'x-decorator': 'DataBlockProvider',
            'x-decorator-props': {
                dataSource,
                collection,
                action: 'list',
                params: {
                    sort: `-${timeField}`
                },
                timeline: {
                    titleField,
                    timeField,
                }
            },
            'x-component': 'CardItem',
            properties: {
                timeline: {
                    type: 'void',
                    'x-component': 'TimelineBlock',
                    'x-use-component-props': 'useTimelineBlockProps',
                }
            }
        }
    }
}

export function useTimelineBlockProps(): TimelineBlockProps {
    const { timeline } = useDataBlockProps();
    const { loading, data } = useDataBlockRequest<any[]>();
    return {
        loading,
        data: data?.data?.map((item) => ({
            label: item[timeline.timeField],
            children: item[timeline.titleField],
        }))
    }
}


export const TimelineInitializerComponent = () => {
    const { insert } = useSchemaInitializer();
    const [collection, setCollection] = React.useState<string>();
    const [dataSource, setDataSource] = React.useState<string>();
    const [showModal, setShowModal] = React.useState(false);

    return <>
        {showModal && <ActionContextProvider>Modal</ActionContextProvider>}
        <DataBlockInitializer
            name='timeline'
            title='Timeline'
            icon={<FieldTimeOutlined />}
            componentType='Timeline'
            onCreateBlockSchema={({ item }) => {
                const { name: collection, dataSource } = item;
                setCollection(collection);
                setDataSource(dataSource);
            }}>

        </DataBlockInitializer>
    </>
}

export const timelineInitializerItem: SchemaInitializerItemType = {
    name: 'TimelineBlock',
    Component: 'DataBlockInitializer',
    useComponentProps() {
        const { insert } = useSchemaInitializer();
        return {
            title: 'Timeline',
            icon: <FieldTimeOutlined />,
            componentType: 'Timeline',
            onCreateBlockSchema({ item }) {
                const { name: collection, dataSource } = item;

            },
        };
    },
}