import { sql } from "../database/database.js";

const findAllShoppingLists = async () => {
  const row = await sql`SELECT COUNT(*) AS total_lists FROM shopping_lists;`;

  if (row && row.length > 0) {
    return row[0].total_lists;
  }

  return 0;
};

const findAllShoppingListIteams = async () => {
  const row =
    await sql`SELECT COUNT(*) AS total_lists FROM shopping_list_items;`;

  if (row && row.length > 0) {
    return row[0].total_lists;
  }
  return 0;
};

export { findAllShoppingListIteams, findAllShoppingLists };
