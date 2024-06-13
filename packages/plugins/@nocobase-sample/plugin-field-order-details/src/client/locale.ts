import { useTranslation } from 'react-i18next';

// @ts-ignore
import pkg from './../../package.json';

export function usePluginTranslation() {
  return useTranslation([pkg.name, 'client'], { nsMode: 'fallback' });
}

export function generateNTemplate(key: string) {
  return `{{t('${key}', { ns: '${pkg.name}', nsMode: 'fallback' })}}`;
}

export function generateCommonTemplate(key: string) {
  return `{{t('${key}')}}`;
}
