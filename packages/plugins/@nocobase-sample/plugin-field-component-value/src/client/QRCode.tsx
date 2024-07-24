import React, { FC } from 'react';
import { QRCode as AntdQRCode, Space, QRCodeProps as AntdQRCodeProps } from 'antd';
import { Input } from '@nocobase/client';
import { connect, mapReadPretty } from '@formily/react';

interface QRCodeProps extends AntdQRCodeProps {
  onChange: (value: string) => void;
  disabled?: boolean;
}

const EditableQRCode: FC<QRCodeProps> = ({ value, disabled, onChange, ...otherProps }) => {
  return <Space direction="vertical" align="center">
    <AntdQRCode value={value || '-'} {...otherProps} />
    <Input.URL
      maxLength={60}
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
    />
  </Space>;
}

const ReadPrettyQrCode: FC<QRCodeProps> = ({ value, ...otherProps }) => {
  if (!value) return null;
  return <AntdQRCode value={value} {...otherProps} />;
}

export const QRCode: FC<QRCodeProps> & {
  ReadPretty: typeof ReadPrettyQrCode;
} = Object.assign(connect(EditableQRCode, mapReadPretty(ReadPrettyQrCode)), {
    ReadPretty: ReadPrettyQrCode,
})

QRCode.displayName = 'QRCode'
