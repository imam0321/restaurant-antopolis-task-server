import { Router } from "express";
import { DishesRoutes } from "../modules/dishes/dishes.route";
import { CategoryRoutes } from "../modules/category/category.route";

export const router = Router();

const moduleRoutes = [
  {
    path: "/dishes",
    route: DishesRoutes,
  },
  {
    path: "/category",
    route: CategoryRoutes,
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});