import { date, integer, pgTable, text, varchar } from "drizzle-orm/pg-core";

export const blogsTable = pgTable("blogs", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  author: varchar({ length: 255 }).notNull(),
  title: varchar({length: 100}).notNull(),
  shortNote: varchar({ length: 255 }).notNull(),
  content: text().notNull(),
  image: varchar("image", { length: 1024 }),
  publishedDate: date()
});
