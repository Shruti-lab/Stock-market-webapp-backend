import { pgTable, varchar, serial, timestamp, pgSchema, text } from "drizzle-orm/pg-core"

export const userSchema = pgSchema('user_schema') 
// columns.helpers.ts
const timestamps = {
  created_at: timestamp().defaultNow().notNull(),
  updated_at: timestamp().defaultNow().notNull(),
}


export const users = userSchema.table('users', {
  id: serial('id').primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: text().notNull(),
  refreshToken: text().notNull(),


  ...timestamps
});
