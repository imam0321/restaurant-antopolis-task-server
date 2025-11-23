import { fileUploader } from "../../config/cloudinary.config";
import AppError from "../../errorHelpers/AppError";
import { Dish, IDish } from "./dishes.model"
import httpStatus from "http-status-codes";

const createDish = async (payload: Partial<IDish> & { thumbnail?: Express.Multer.File }) => {
  if (!payload?.name) throw new AppError(httpStatus.NOT_FOUND, "Dish name is required");
  if (!payload?.category_id) throw new AppError(httpStatus.NOT_FOUND, "Category is required");

  let thumbnailUrl: string = "";
  if (payload?.thumbnail) {
    const uploadResult = await fileUploader.uploadToCloudinary(payload?.thumbnail);
    thumbnailUrl = uploadResult.secure_url
  }

  const result = await Dish.create({
    ...payload,
    thumbnail: thumbnailUrl
  })

  return result
}

export const DishesService = {
  createDish
}