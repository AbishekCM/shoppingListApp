import * as requestUtils from "../utils/requestUtils.js";
import * as ShoppingListItemService from "../services/ShoppingListItemService.js";

const addItem = async (request) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const url = new URL(request.url);
  const urlPart = url.pathname.split("/");

  await ShoppingListItemService.create(urlPart[2], name);

  return requestUtils.redirectTo(`/lists/${urlPart[2]}`);
};

const collectIteam = async (request) => {
  const url = new URL(request.url);
  const urlPart = url.pathname.split("/");

  await ShoppingListItemService.collectIteam(urlPart[4]);

  return requestUtils.redirectTo(`/lists/${urlPart[2]}`);
};

export { addItem, collectIteam };
