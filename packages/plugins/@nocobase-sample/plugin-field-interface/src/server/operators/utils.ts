import { encryptSync } from '../utils';

export function getFieldOptions(ctx: any) {
  const fieldPathArr = ctx.fieldPath.split('.');
  const collectionName = fieldPathArr[fieldPathArr.length - 2];
  const fieldName = ctx.fieldName;

  return ctx.db.collections.get(collectionName).fields.get(fieldName).options;
}

export function encryptSearchValueSync(str: any, ctx: any) {
  const { iv } = getFieldOptions(ctx);
  let encrypted;
  if (Array.isArray(str)) {
    encrypted = str.map((item) => encryptSync(item, iv));
  } else {
    encrypted = encryptSync(str, iv);
  }
  return encrypted;
}
