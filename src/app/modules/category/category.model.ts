import { model, Schema } from "mongoose"


export interface ICategory {
  id?: string
  name: string
}

const categorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true }
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export const Category = model<ICategory>("Category", categorySchema)