import { renderFile } from "https://deno.land/x/eta@v2.2.0/mod.ts";
import * as mainStatisticService from "../services/mainStatisticService.js";

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const viewMain = async () => {
  const data = {
    lists: await mainStatisticService.findAllShoppingLists(),
    iteams: await mainStatisticService.findAllShoppingListIteams(),
  };

  return new Response(
    await renderFile("../app/views/main.eta", data),
    responseDetails,
  );
};

export { viewMain };
