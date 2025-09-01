import { column, defineDb, defineTable } from 'astro:db';

// https://astro.build/db/config

const User = defineTable({
  columns: {
    id: column.text(({ primaryKey: true })),
    icon: column.text({ optional: true }),
    username: column.text(),
    months: column.json()
  }
})

export default defineDb({
  tables: {
    User
  }
});
