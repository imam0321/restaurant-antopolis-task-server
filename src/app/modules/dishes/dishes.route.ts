import { Router } from "express";
import { fileUploader } from "../../config/cloudinary.config";
import { DishesController } from "./dishes.controller";

const router = Router();

router.post("/", fileUploader.upload.single("file"), DishesController.createDish);
router.get("/", DishesController.getAllDishes)


export const DishesRoutes = router;