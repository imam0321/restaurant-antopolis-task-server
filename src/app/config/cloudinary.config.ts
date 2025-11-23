import multer from "multer";
import { Readable } from "stream";
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import { envVars } from "../config/env";
import AppError from "../errorHelpers/AppError";
import httpStatus from "http-status-codes";

const upload = multer({ storage: multer.memoryStorage() });

cloudinary.config({
  cloud_name: envVars.CLOUDINARY.CLOUDINARY_CLOUD_NAME,
  api_key: envVars.CLOUDINARY.CLOUDINARY_CLOUD_API_KEY,
  api_secret: envVars.CLOUDINARY.CLOUDINARY_CLOUD_API_SECRET
});

const uploadToCloudinary = async (file: Express.Multer.File): Promise<UploadApiResponse> => {
  if (!file?.buffer) {
    throw new AppError(httpStatus.BAD_REQUEST, "No file buffer found for upload");
  }

  try {
    const result = await new Promise<UploadApiResponse>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "restaurant-task",
          resource_type: "auto"
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result as UploadApiResponse);
        }
      );

      const bufferStream = Readable.from(file.buffer);
      bufferStream.pipe(uploadStream);
    });

    return result;
  } catch (error) {
    console.error("Cloudinary upload failed:", error);
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `Failed to upload file to Cloudinary: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
};

export const fileUploader = {
  upload,
  uploadToCloudinary,
};
