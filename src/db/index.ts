import { drizzle } from 'drizzle-orm/neon-http';     //ye driver Neon DB ko Drizzle ORM ke saath connect karne ka bridge hai

export const db = drizzle(process.env.DATABASE_URL!)