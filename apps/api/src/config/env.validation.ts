import { z } from 'zod';

// Chuyển đổi rõ ràng các chuỗi boolean trong .env vì Boolean('false') vẫn là true.
// Giá trị true hợp lệ: true, 1, yes, on. Giá trị false hợp lệ: false, 0, no, off.
const booleanSchema = z.preprocess((value) => {
  if (typeof value === 'boolean') {
    return value;
  }

  if (typeof value === 'string') {
    const normalizedValue = value.trim().toLowerCase();

    if (['true', '1', 'yes', 'on'].includes(normalizedValue)) {
      return true;
    }

    if (['false', '0', 'no', 'off'].includes(normalizedValue)) {
      return false;
    }
  }

  return value;
}, z.boolean());

export const envValidationSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z.coerce.number().int().positive().default(3000),

  DB_HOST: z.string().default('localhost'),
  DB_PORT: z.coerce.number().int().min(1).max(65535).default(3306),
  DB_USERNAME: z.string().default('root'),
  DB_PASSWORD: z.string().default(''),
  DB_DATABASE: z.string().min(1),
  DB_SYNCHRONIZE: booleanSchema.default(true),
  DB_LOGGING: booleanSchema.default(true),
});
