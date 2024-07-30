import { CollectionFieldInterface, defaultProps } from '@nocobase/client';
import { uid } from '@nocobase/utils/client';
import { tStr } from './locale';

export class EncryptionFieldInterface extends CollectionFieldInterface {
  name = 'encryption';
  type = 'object';
  group = 'advanced';
  order = 10;
  title = tStr('Encryption');
  default = {
    type: 'encryption',
    iv: uid(16),
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
    operators: [
      { label: '{{t("is")}}', value: '$encryptionEq', selected: true },
      { label: '{{t("is not")}}', value: '$encryptionNe' },
      { label: '{{t("exists")}}', value: '$exists', noValue: true },
      { label: '{{t("not exists")}}', value: '$notExists', noValue: true },
    ],
  };
}
