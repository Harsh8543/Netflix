// import express from "express";
// import dotenv from "dotenv";
// import databaseConnection from "./utils/database.js";
// import cookieParser from "cookie-parser";
// import userRoute from "./routes/userRoute.js";
// import cors from "cors";
// dotenv.config({
//     path:".env"
// })
// databaseConnection();
// const app= express();
// //middlewares
// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// app.use(cookieParser());

// const corsOptions={
//     origin:'http://localhost:3000',
// }
// app.use(cors(corsOptions));


// //api
// app.use("/api/v1/user",userRoute);
// //http://localhost:8080/api/v1/user/register
// app.listen(process.env.PORT,()=>{
//     console.log(`Server listen at port ${process.env.PORT}`);
// });





// import express from "express";
// import dotenv from "dotenv";
// import databaseConnection from "./utils/database.js";
// import cookieParser from "cookie-parser";
// import userRoute from "./routes/userRoute.js";
// import cors from "cors";

// dotenv.config({
//   path: ".env",
// });

// // Database Connection
// databaseConnection()
//   .then(() => console.log("Database connected successfully"))
//   .catch((err) => {
//     console.error("Database connection failed:", err.message);
//     process.exit(1); // Exit if DB connection fails
//   });

// const app = express();

// // Middlewares
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cookieParser());

// const corsOptions = {
//   origin: "http://localhost:3000",
// };
// app.use(cors(corsOptions));

// // API Routes
// app.use("/api/v1/user", userRoute);

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server listening at port ${PORT}`);
// });



import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

dotenv.config({
  path: ".env",
});

// Database Connection
databaseConnection(); // Call the function (no need for `.then()`)

// Create Express app
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials:true
};
app.use(cors(corsOptions));

// API Routes
app.use("/api/v1/user", userRoute);

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server listening at port ${PORT}`);
// });
app.listen(process.env.PORT,()=>{
    console.log(`Server listen at port ${process.env.PORT}`);
});
   