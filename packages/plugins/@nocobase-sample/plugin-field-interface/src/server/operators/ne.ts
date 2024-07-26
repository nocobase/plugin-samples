import { encryptSearchValueSync } from './utils';

export const $encryptionNe = (str, ctx) => {
  const eq = ctx.db.operators.get('$ne');
  if (!str) return eq(str, ctx);
  const encrypted = encryptSearchValueSync(str, ctx);
  return eq(encrypted, ctx);
};
