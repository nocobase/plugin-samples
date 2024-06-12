// @ts-ignore
import pkg from './../../package.json';
import { useTranslation } from 'react-i18next';

export function useDocumentTranslation() {
  return useTranslation([pkg.name, 'client'], { nsMode: 'fallback' });
}

export function generateNTemplate(key: string) {
  return `{{t('${key}', { ns: '${pkg.name}', nsMode: 'fallback' })}}`;
}

export function generateCommonTemplate(key: string) {
  return `{{t('${key}')}}`;
}
