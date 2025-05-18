// import { User } from "../models/userModel.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// export const Login = async(req,res)=>{
//     try{
//         const {email,password}=req.body;
//         if(!email || !password){
//             return res.status(401).json({
//                 message:"Invailed data",
//                 success:false
//             })
//         };
//         const user = await User.findOne({email});
//         if(!user){
//             return res.status(401).json({
//                 message:"Invailed email or password",
//                 success:false
//             });
//         }
//         const isMatch = await bcryptjs.compare(password,user.password);
//         if(!isMatch){
//             return res.status(401).json({
//                 message:"Invailed email or password",
//                 success:false
//             });
//         }
//         const token=await jwt.sign("token","fjknvjsnjnsjnvsjfjvnwnvf",{expiresIn:"1d"});
//         return res.status(200).cookie("token",token,{httpOnly:true}).json({
//             message:"welcome back ${user.fullName}",
//             success:true
//         });
//     }catch(error){
// console.log(error);
//     }
// }

// export const Register = async (req, res) => {
//     try {
//         const { fullName, email, password } = req.body;

//         // Validate input
//         if (!fullName || !email || !password) {
//             return res.status(400).json({
//                 message: "Invalid data",
//                 success: false,
//             });
//         }

//         // Check if user already exists
//         const user = await User.findOne({ email });
//         if (user) {
//             return res.status(409).json({
//                 message: "This email already exists",
//                 success: false,
//             });
//         }

//         // Hash the password
//         const hashedPassword = await bcryptjs.hash(password, 16);

//         // Create a new user
//         await User.create({
//             fullName,
//             email,
//             password: hashedPassword,
//         });

//         // Return success response
//         return res.status(201).json({
//             message: "Account created successfully.",
//             success: true,
//         });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({
//             message: "Server error",
//             success: false,
//         });
//     }
// };



// import { User } from "../models/userModel.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// export const Login = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Validate input
//         if (!email || !password) {
//             return res.status(401).json({
//                 message: "Invalid data",
//                 success: false,
//             });
//         }

//         // Check if user exists
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(401).json({
//                 message: "Invalid email or password",
//                 success: false,
//             });
//         }

//         // Compare passwords
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(401).json({
//                 message: "Invalid email or password",
//                 success: false,
//             });
//         }

//         // Generate JWT token
//         const token = jwt.sign(
//             { id: user._id }, // Payload should contain user data
//             process.env.JWT_SECRET || "default_secret", // Use an environment variable for security
//             { expiresIn: "1d" }
//         );

//         // Send token in a cookie
//         return res.status(200)
//             .cookie("token", token, {
//                 httpOnly: true,
//                 secure: process.env.NODE_ENV === "production", // Secure only in production
//                 sameSite: "strict", // Prevent CSRF attacks
//                 expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day expiration
//             })
//             .json({
//                 message: `Welcome back ${user.fullName}`,
//                 success: true,
//             });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({
//             message: "Server error",
//             success: false,
//         });
//     }
// };

// export const Register = async (req, res) => {
//     try {
//         const { fullName, email, password } = req.body;

//         // Validate input
//         if (!fullName || !email || !password) {
//             return res.status(400).json({
//                 message: "Invalid data",
//                 success: false,
//             });
//         }

//         // Check if user already exists
//         const user = await User.findOne({ email });
//         if (user) {
//             return res.status(409).json({
//                 message: "This email already exists",
//                 success: false,
//             });
//         }

//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 16);

//         // Create a new user
//         await User.create({
//             fullName,
//             email,
//             password: hashedPassword,
//         });

//         // Return success response
//         return res.status(201).json({
//             message: "Account created successfully.",
//             success: true,
//         });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({
//             message: "Server error",
//             success: false,
//         });
//     }
// };



// import { User } from "../models/userModel.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// export const Login = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Validate input
//         if (!email || !password) {
//             return res.status(400).json({
//                 message: "Invalid data",
//                 success: false,
//             });
//         }

//         // Check if user exists
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(401).json({
//                 message: "Invalid email or password",
//                 success: false,
//             });
//         }

//         // Compare passwords
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(401).json({
//                 message: "Invalid email or password",
//                 success: false,
//             });
//         }

//         // Generate JWT token
//         const token = jwt.sign(
//             { id: user._id },
//             "fjknvjsnjnsjnvsjfjvnwnvf", // Use a secure, environment-stored secret in production
//             { expiresIn: "1d" }
//         );

//         // Send response with token in cookie
//         return res
//             .status(200)
//             .cookie("token", token, {
//                 httpOnly: true,
//                 secure: process.env.NODE_ENV === "production", // Ensure secure in production
//                 sameSite: "strict",
//             })
//             .json({
//                 message: `Welcome back ${user.fullName}`,
//                 success: true,
//             });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({
//             message: "Server error",
//             success: false,
//         });
//     }
// };

// export const Logout = async (req,res)=>{
//     return res.status(200).cookie ("token","",{expiresIn:new Date(Date.now()),httpOnly:true}).json({
//         message:"User logged out successfully.",
//         sucess:true,
//     });
// }


// export const Register = async (req, res) => {
//     try {
//         const { fullName, email, password } = req.body;

//         // Validate input
//         if (!fullName || !email || !password) {
//             return res.status(400).json({
//                 message: "Invalid data",
//                 success: false,
//             });
//         }

//         // Check if user already exists
//         const user = await User.findOne({ email });
//         if (user) {
//             return res.status(409).json({
//                 message: "This email already exists",
//                 success: false,
//             });
//         }

//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 16);
//         await User.create({
//             fullName,
//             email,
//             password: hashedPassword,
//         });

//         // Return success response
//         return res.status(201).json({
//             message: "Account created successfully.",
//             success: true,
//         });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({
//             message: "Server error",
//             success: false,
//         });
//     }
// };







// import { User } from "../models/userModel.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// export const Login = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Validate input
//         if (!email || !password) {
//             return res.status(400).json({
//                 message: "Invalid data",
//                 success: false,
//             });
//         }

//         // Check if user exists
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(401).json({
//                 message: "Invalid email or password",
//                 success: false,
//             });
//         }

//         // Compare passwords
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(401).json({
//                 message: "Invalid email or password",
//                 success: false,
//             });
//         }

//         // Generate JWT token
//         const token = jwt.sign(
//             { id: user._id },
//             process.env.JWT_SECRET || "default_secret", // Use an env variable
//             { expiresIn: "1d" }
//         );

//         // Send response with token in cookie
//         return res
//             .status(200)
//             .cookie("token", token, {
//                 httpOnly: true,
//                 secure: process.env.NODE_ENV === "production", // Secure in production
//                 sameSite: "strict",
//                 expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day expiration
//             })
//             .json({
//                 message: `Welcome back ${user.fullName}`,
//                 success: true,
//             });
//     } catch (error) {
//         console.error("Login Error: ", error);
//         return res.status(500).json({
//             message: "Server error",
//             success: false,
//         });
//     }
// };

// export const Logout = async (req, res) => {
//     return res
//         .status(200)
//         .cookie("token", "", {
//             expires: new Date(Date.now()), // Proper expiration
//             httpOnly: true,
//         })
//         .json({
//             message: "User logged out successfully.",
//             success: true,
//         });
// };

// export const Register = async (req, res) => {
//     try {
       
//         const { fullName, email, password } = req.body;

//         // Validate input
//         if (!fullName || !email || !password) {
//             return res.status(401).json({
//                 message: "Invalid data",
//                 success: false,
//             });
//         }

//         // Check if user already exists
//         const user = await User.findOne({ email });
//         if (user) {
//             return res.status(401).json({
//                 message: "This email already exists",
//                 success: false,
//             });
//         }

//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 16); // Use appropriate salt rounds

//         // Create a new user
//         await User.create({
//             fullName,
//             email,
//             password: hashedPassword,
//         });

//         // Return success response
//         return res.status(201).json({
//             message: "Account created successfully.",
//             success: true,
//         });
//     } catch (error) {

//         console.error("Register Error: ", error);
//         return res.status(500).json({
//             message: "Server error",
//            sucess:false,
//         }
//     };




import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({
                message: "Invalid data",
                success: false,
            });
        }

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password",
                success: false,
            });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password",
                success: false,
            });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET || "default_secret", // Use an env variable
            { expiresIn: "1d" }
        );

        // Send response with token in cookie
        return res
            .status(200)
            .cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production", // Secure in production
                sameSite: "strict",
                expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day expiration
            })
            .json({
                message: `Welcome back ${user.fullName}`,
                success: true,
            });
    } catch (error) {
        console.error("Login Error: ", error);
        return res.status(500).json({
            message: "Server error",
            success: false,
        });
    }
};

export const Logout = async (req, res) => {
    return res
        .status(200)
        .cookie("token", "", {
            expires: new Date(Date.now()), // Proper expiration
            httpOnly: true,
        })
        .json({
            message: "User logged out successfully.",
            success: true,
        });
};

export const Register = async (req, res) => {
    try {
        console.log(req.body);
        const { fullName, email, password } = req.body;
        console.log(fullName,email,password);
        // Validate input
        if (!fullName || !email || !password) {
            return res.status(401).json({
                message: "Invalid data",
                success: false,
            });
        }

        // Check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(401).json({
                message: "This email already exists",
                success: false,
            });
        }
        const hashedPassword = await bcrypt.hash(password, 16); 
        await User.create({
            fullName,
            email,
            password: hashedPassword,
        });
        return res.status(201).json({
            message: "Account created successfully.",
            success: true,
        });
    } catch (error) {
        console.error("Register Error: ", error);
        return res.status(500).json({
            message: "Server error",
            success: false,
        });
    }
};
