import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import httpStatus from "http-status-codes";
import { sendResponse } from "../../utils/sendResponse";
import { CategoryService } from "./category.service";

const createCategory = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await CategoryService.createCategory(req.body.name)

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Create category successfully",
      data: result,
    });
  }
);

const getAllCategory = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await CategoryService.getAllCategory()

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Categories retrieve successfully",
      data: result,
    });
  }
);

export const CategoryController = {
  createCategory,
  getAllCategory
} 