import 'dotenv/config';
import { drizzle } from "drizzle-orm/node-postgres"
import { users } from "./schema/users"

const db = drizzle(process.env.DATABASE_URL as string);

async function getUsersCount() {
  const usersCount = await db.$count(users);
  return usersCount;
}

getUsersCount().then(count => {
  // You can use the count here if needed
  console.log('Users count:', count);
}).catch(err => {
  console.error('Error getting users count:', err);
});
