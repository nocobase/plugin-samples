import { encryptSearchValueSync } from './utils';

export const $encryptionEq = (str, ctx) => {
  const eq = ctx.db.operators.get('$eq');
  if (!str) return eq(str, ctx);
  const encrypted = encryptSearchValueSync(str, ctx);
  return eq(encrypted, ctx);
};
