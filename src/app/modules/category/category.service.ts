import { Category } from "./category.model"


const createCategory = async (name: string) => {
  return await Category.create({
    name
  });
};

const getAllCategory = async () => {
  return await Category.find();
};


export const CategoryService = {
  createCategory,
  getAllCategory
}