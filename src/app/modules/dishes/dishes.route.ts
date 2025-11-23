import { Router } from "express";
import { DishesController } from "./dishes.service";

const router = Router();

router.post("/", DishesController.createDish);


export const DishesRoutes = router;