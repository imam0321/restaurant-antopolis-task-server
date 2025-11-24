import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import httpStatus from "http-status-codes";
import { sendResponse } from "../../utils/sendResponse";
import { CommonService } from "./common.service";


const getAllFeedbacks = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await CommonService.getAllFeedbacks()

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Feedbacks retrieve successfully",
      data: result,
    });
  }
);

const getAllMembers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await CommonService.getAllMembers()

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Members retrieve successfully",
      data: result,
    });
  }
);

export const CommonController = {
  getAllFeedbacks,
  getAllMembers
}