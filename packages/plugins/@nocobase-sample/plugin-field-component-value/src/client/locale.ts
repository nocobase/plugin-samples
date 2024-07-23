// @ts-ignore
import pkg from './../../package.json';
import { useTranslation } from 'react-i18next';

export function usePluginTranslation() {
  return useTranslation([pkg.name, 'client'], { nsMode: 'fallback' });
}

export function generatePluginTranslationTemplate(key: string) {
  return `{{t('${key}', { ns: ['${pkg.name}', 'client'], nsMode: 'fallback' })}}`;
}
