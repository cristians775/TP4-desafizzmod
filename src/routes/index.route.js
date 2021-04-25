import { MailRouter } from "./mail.route.js";
import { NotFoundRouter } from "./notFound.route.js";
import { ProductsRouter } from "./products.route.js";
import { ImgRouter } from "./img.route.js";
export const Routes = [
  { route: ProductsRouter, path: "" },
  { route: MailRouter, path: "" },
  { route: ImgRouter, path: "/img" },
  { route: NotFoundRouter, path: "" },
];
