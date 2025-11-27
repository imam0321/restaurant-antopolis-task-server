# Restaurant Antopolis Task Server

Restaurant Antopolis Server is a clean, fast, and efficient backend for managing restaurant dishes, categories, members, and feedbacks.  
It supports creating and retrieving dishes with image uploads using Cloudinary, searching & filtering dishes, managing categories, and providing common data endpoints.

## 🔗 Live Link

- **Frontend**: [https://restaurant-antopolis-task-client.vercel.app](https://restaurant-antopolis-task-client.vercel.app/)
- **Frontend Repository**: [https://github.com/imam0321/restaurant-antopolis-task-client](https://github.com/imam0321/restaurant-antopolis-task-client)
- **Backend**: [https://restaurant-antopolis-task-server.vercel.app](https://restaurant-antopolis-task-server.vercel.app)

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js, TypeScript
- **Database**: MongoDB with Mongoose
- **File Uploads**: Multer, Cloudinary
- **Environment & Config**: dotenv, cors
- **Utilities**: http-status-codes,ts-node-dev

## ▶️ Getting Started

Follow these steps to run the project locally:

1️⃣ **Clone the repository**

```
git clone https://github.com/imam0321/restaurant-antopolis-task-server.git
cd restaurant-antopolis-task-server
```

2️⃣ Install dependencies

```
bun install
```

3️⃣ Create a .env file in the project root with the necessary keys:

```
PORT=
DB_URL=
NODE_ENV=
FRONTEND_URL=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_CLOUD_API_KEY=
CLOUDINARY_CLOUD_API_SECRET=
```

4️⃣ Run the development server

```
bun run dev
```

📂 API Endpoints

| Method | Endpoint                   | Description                                    | Query / Body                                     |
| ------ | -------------------------- | ---------------------------------------------- | ------------------------------------------------ |
| POST   | `/api/v1/dishes`           | Create a new dish (supports image upload)      | Body: `name`, `category_id`, `thumbnail`         |
| GET    | `/api/v1/dishes`           | Get all dishes with search, filter, pagination | Query: `searchTerm`, `category`, `page`, `limit` |
| POST   | `/api/v1/category`         | Create a new category                          | Body: `name`                                     |
| GET    | `/api/v1/category`         | Get all categories                             | -                                                |
| GET    | `/api/v1/common/members`   | Get all members                                | -                                                |
| GET    | `/api/v1/common/feedbacks` | Get all feedbacks                              | -                                                |
