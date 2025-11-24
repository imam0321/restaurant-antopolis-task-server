import { fileUploader } from "../../config/cloudinary.config";
import AppError from "../../errorHelpers/AppError";
import { Category } from "../category/category.model";
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

const getAllDishes = async (query: Record<string, string>) => {
  const { searchTerm = "", category = "", page = "1", limit = "6" } = query;
  const pageNumber = Number(page);
  const limitNumber = Number(limit);
  const skip = (pageNumber - 1) * limitNumber;

  const filterQuery: Record<string, any> = {};

  if (searchTerm) {
    filterQuery.name = { $regex: searchTerm, $options: "i" };
  }

  if (category) {
    const matchedCategory = await Category.find({
      name: { $regex: category, $options: "i" }
    }).select("_id");

    const categoryIds = matchedCategory.map(cat => cat._id);

    filterQuery.category_id = { $in: categoryIds };
  }

  const dishes = await Dish.find(filterQuery)
    .populate("category_id")
    .sort("-createdAt")
    .skip(skip)
    .limit(limitNumber);

  return dishes;
}

export const DishesService = {
  createDish,
  getAllDishes
}