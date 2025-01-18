import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  DATABASE_URL: process.env.DATABASE_URL,
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  BCRYPT_SALT_ROUND: process.env.BCRYPT_SALT_ROUND,
  JWT_SECRET_ACCESS_KE: process.env.JWT_SECRET_ACCESS_KEY,
  JWT_SECRET_ACCESS_TIME: process.env.JWT_SECRET_ACCESS_TIME,
  JWT_SECRET_REFRESH_KEY: process.env.JWT_SECRET_REFRESH_KEY,
  JWT_SECRET_REFRESH_TIME: process.env.JWT_SECRET_REFRESH_TIME,
};
