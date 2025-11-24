import { Router } from "express";
import { CommonController } from "./common.controller";

const router = Router();

router.get("/feedbacks", CommonController.getAllFeedbacks);
router.get("/members", CommonController.getAllMembers);


export const CommonRoutes = router;