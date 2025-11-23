import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import httpStatus from "http-status-codes";
import { sendResponse } from "../../utils/sendResponse";
import { DishesService } from "./dishes.service";

const createDish = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const payload = {
      ...JSON.parse(req.body.data),
      thumbnail: req.file as Express.Multer.File
    }
    const result = await DishesService.createDish(payload)

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Create dish successfully",
      data: result,
    });
  }
);

export const DishesController = {
  createDish
} 