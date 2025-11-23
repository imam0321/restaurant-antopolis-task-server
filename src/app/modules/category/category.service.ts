import { Category } from "./category.model"


const createCategory = async (name: string) => {
  const result =  await Category.create({
    name
  });
  return result;
};

const getAllCategory = async () => {
  return await Category.find();
};


export const CategoryService = {
  createCategory,
  getAllCategory
}