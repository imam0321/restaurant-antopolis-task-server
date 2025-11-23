import { model, Schema, Types } from "mongoose";

export interface IDish {
  id?: string;
  name: string;
  category_id: Types.ObjectId;
  thumbnail: string
}

const dishSchema = new Schema<IDish>(
  {
    name: { type: String, required: true },
    category_id: { type: Schema.Types.ObjectId, ref: "Category" },
    thumbnail: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export const Dish = model<IDish>("Dish", dishSchema)