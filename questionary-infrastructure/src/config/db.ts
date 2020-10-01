import dotenv from 'dotenv';

dotenv.config();

export const dbConfig = {
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  logging: process.env.NODE_ENV !== 'production',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
}