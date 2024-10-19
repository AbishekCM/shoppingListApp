import { sql } from "../database/database.js";

const findShoppingListIteams = async (listId) => {
  return await sql`SELECT * FROM shopping_list_items WHERE shopping_list_id = ${listId} ORDER BY collected ASC, name ASC`;
};

const create = async (listId, name) => {
  await sql`INSERT INTO shopping_list_items (shopping_list_id, name) VALUES (${listId}, ${name})`;
};

const collectIteam = async (iteamId) => {
  await sql`UPDATE shopping_list_items SET collected = true WHERE id = ${iteamId}`;
};

export { collectIteam, create, findShoppingListIteams };
