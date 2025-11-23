import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import httpStatus from "http-status-codes";
import { sendResponse } from "../../utils/sendResponse";
import { DishesService } from "./dishes.controller";

const createDish = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await DishesService.createDish()

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Create Dish successfully",
      data: null,
    });
  }
);

export const DishesController = {
  createDish
} 