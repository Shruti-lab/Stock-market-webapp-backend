import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema/',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
  verbose: true,
    // migrationsFolder: './drizzle/migrations',
    strict: true,
});

//user signup create row - check for email uniqueness
// user login - check for email and password match
// user logout - clear session or token
// user profile - fetch user details by ID
// user sign in check if user exists