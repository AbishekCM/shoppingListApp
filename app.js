import { serve } from "./app/deps.js";
import { configure } from "./app/deps.js";
import * as shoppingListController from "./app/controllers/shoppingListController.js";
import * as mainStatisticController from "./app/controllers/mainStatisticController.js";
import * as shoppingListItemController from "./app/controllers/shoppingListItemController.js";

configure({
  views: `${Deno.cwd()}/views/`,
});

const handleRequest = async (request) => {
  const url = new URL(request.url);

  if (url.pathname === "/" && request.method === "GET") {
    return await mainStatisticController.viewMain(request);
  } else if (url.pathname === "/lists" && request.method === "POST") {
    return await shoppingListController.addList(request);
  } else if (url.pathname === "/lists" && request.method === "GET") {
    return await shoppingListController.viewLists(request);
  } else if (url.pathname.match("/lists/[0-9]+") && request.method === "GET") {
    return await shoppingListController.viewList(request);
  } else if (
    url.pathname.match("lists/[0-9]+/items/[0-9]+") && request.method === "POST"
  ) {
    return await shoppingListItemController.collectIteam(request);
  } else if (
    url.pathname.match("lists/[0-9]+/items") && request.method === "POST"
  ) {
    return await shoppingListItemController.addItem(request);
  } else if (
    url.pathname.match("lists/[0-9]+/deactivate") && request.method === "POST"
  ) {
    return await shoppingListController.deactivateList(request);
  } else {
    return new Response("Not found", { status: 404 });
  }
};

serve(handleRequest, { port: 7777 });
