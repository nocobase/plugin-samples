import { useApp } from '@nocobase/client';

// @ts-ignore
import pkg from './../../package.json';

export function useT() {
  const app = useApp();
  return (str: string) => app.i18n.t(str, { ns: pkg.name });
}

export function tStr(key: string) {
  return `{{t('${key}', { ns: '${pkg.name}', nsMode: 'fallback' })}}`;
}
