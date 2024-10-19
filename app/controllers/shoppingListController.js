import { renderFile } from "https://deno.land/x/eta@v2.2.0/mod.ts";
import * as requestUtils from "../utils/requestUtils.js";
import * as shoppingListService from "../services/shoppingListService.js";
import * as ShoppingListItemService from "../services/ShoppingListItemService.js";

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const addList = async (request) => {
  const formData = await request.formData();
  const name = formData.get("name");

  await shoppingListService.create(name);

  return requestUtils.redirectTo("/lists");
};

const viewLists = async () => {
  const data = {
    lists: await shoppingListService.findAllActiveShoppingLists(),
  };

  return new Response(
    await renderFile("../app/views/shoppingLists.eta", data),
    responseDetails
  );
};

const viewList = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  const data = {
    items: await ShoppingListItemService.findShoppingListIteams(urlParts[2]),
    list: await shoppingListService.findShoppingList(urlParts[2]),
  };

  return new Response(
    await renderFile("../app/views/shoppingList.eta", data),
    responseDetails
  );
};

const deactivateList = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  await shoppingListService.deactivateById(urlParts[2]);

  return await requestUtils.redirectTo("/lists");
};

export { addList, deactivateList, viewList, viewLists };
