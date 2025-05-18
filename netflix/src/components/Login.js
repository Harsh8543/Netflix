// import React, { useState } from 'react'
// import Header from './Header'
// import axios from "axios";
// import { API_END_POINT } from '../utils/constant';
// import toast from "react-hot-toast";
// import { useNavigate } from 'react-router-dom';
// import {useDispatch} from "react-redux";

// const Login = () => {
//     const [isLogin,setIsLogin]= useState(false);
//     const [fullName,setFullName]=useState("");
//     const [email,setEmail]= useState("");
//     const [password,setPassword]= useState("");
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const loginHandler=()=>{
//         setIsLogin(!isLogin);
//     }
//     const getInputData=async (e)=>{
//         e.preventDefault();
//         if(isLogin){
//          //login
//          const user = {email,password};
//          try{
//               const res=await axios.post(`${API_END_POINT}/login`,user,{
//                 headers:{
//                'Content-Type':'application/json'
//                 },
//                 withCredentials:true
//               });
 
//               console.log(res);
// if(res.data.success){
//     toast.success(res.data.message);
// }
// dispatch(setUser(res.data.user));
// navigate("/browse");
//          }catch (error){
//             toast.error(error.response.data.message);
//        console.log(error);
//          }
//         } else{
//             //register
//             const user = {fullName,email,password};
//             try{
//                  const res=await axios.post(`${API_END_POINT}/register`,user,{
//                     headers:{
//                   'Content-Type':'application/json'
//                     },
//                     withCredentials:true
//                   });
//                  if(res.data.success){
//                     toast.success(res.data.message);
//                  }
//                 setIsLogin(true);
//             }catch (error){
//                 toast.error(error.response.data.message);
//           console.log(error);
//             }
//         }
    
//         setFullName("");
//         setEmail("");
//         setPassword("");
//     }
//   return (
//     <div>
//    <Header/>
//    <div className='absolute'>
//     <img className='w-[100vw] h-[100vh]' src="https://wallpapers.com/images/file/netflix-background-gs7hjuwvv2g0e9fj.jpg" alt="banner"/>
//    </div>
//    <form onSubmit={getInputData}className='flex flex-col w-3/12 p-12 my-36 left-0 right-0 mx-auto items-center justify-center absolute rounded-md bg-black opacity-80'>
// <h1 className='text-2xl text-white mb-5 font-bold'>{isLogin ? "Login" : "Signup"}</h1>
//     <div className='flex flex-col'>
//         {
//     !isLogin && <input value={fullName} onChange={(e)=>setFullName(e.target.value)} type='text' placeholder='Username' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/>
//         }
// <input  value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/>
// <input value={password}  onChange={(e)=>setPassword(e.target.value)}type='text' placeholder='Password'className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/>
// <button className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'>{isLogin?"Login":"Signup"}</button>
// <p className='text-white mt-2'>{isLogin ? "New to Netflix?": "Already have an account?"}<span onClick={loginHandler} className='ml-1 text-blue-900 font-medium cursor-pointer'>{isLogin?"Signup":"Login"}</span></p>
//     </div>
//    </form>
//     </div>
//   )
// }

// export default Login









// import React, { useState } from 'react';
// import Header from './Header';
// import axios from 'axios';
// import { API_END_POINT } from '../utils/constant';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../actions/userActions'; // Updated import path

// const Login = () => {
//   const [isLogin, setIsLogin] = useState(false);
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const loginHandler = () => {
//     setIsLogin(!isLogin);
//   };

//   const getInputData = async (e) => {
//     e.preventDefault();

//     if (isLogin) {
//       // Login
//       const user = { email, password };
//       try {
//         const res = await axios.post(`${API_END_POINT}/login`, user, {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           withCredentials: true,
//         });

//         if (res.data.success) {
//           toast.success(res.data.message);
//           dispatch(setUser(res.data.user)); // Dispatch user data to Redux store
//           navigate('/browse');
//         }
//       } catch (error) {
//         toast.error(error.response?.data?.message || 'An error occurred');
//         console.error(error);
//       }
//     } else {
//       // Register
//       const user = { fullName, email, password };
//       try {
//         const res = await axios.post(`${API_END_POINT}/register`, user, {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           withCredentials: true,
//         });

//         if (res.data.success) {
//           toast.success(res.data.message);
//           setIsLogin(true); // Switch to login mode
//         }
//       } catch (error) {
//         toast.error(error.response?.data?.message || 'An error occurred');
//         console.error(error);
//       }
//     }

//     // Clear inputs
//     setFullName('');
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <div>
//       <Header />
//       <div className="absolute">
//         <img
//           className="w-[100vw] h-[100vh]"
//           src="https://wallpapers.com/images/file/netflix-background-gs7hjuwvv2g0e9fj.jpg"
//           alt="banner"
//         />
//       </div>
//       <form
//         onSubmit={getInputData}
//         className="flex flex-col w-3/12 p-12 my-36 left-0 right-0 mx-auto items-center justify-center absolute rounded-md bg-black opacity-80"
//       >
//         <h1 className="text-2xl text-white mb-5 font-bold">
//           {isLogin ? 'Login' : 'Signup'}
//         </h1>
//         <div className="flex flex-col">
//           {!isLogin && (
//             <input
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               type="text"
//               placeholder="Username"
//               className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
//             />
//           )}
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="Email"
//             className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
//           />
//           <input
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             placeholder="Password"
//             className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
//           />
//           <button className="bg-red-600 mt-6 p-3 text-white rounded-sm font-medium">
//             {isLogin ? 'Login' : 'Signup'}
//           </button>
//           <p className="text-white mt-2">
//             {isLogin ? 'New to Netflix?' : 'Already have an account?'}
//             <span
//               onClick={loginHandler}
//               className="ml-1 text-blue-900 font-medium cursor-pointer"
//             >
//               {isLogin ? 'Signup' : 'Login'}
//             </span>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;




// import React, { useState } from 'react'
// import Header from './Header';
// import axios from "axios";
// import { API_END_POINT } from '../utils/constant';
// import toast from "react-hot-toast"
// import {useNavigate} from "react-router-dom"
// import {useDispatch, useSelector} from "react-redux";
// import { setLoading, setUser } from '../redux/userSlice';


// const Login = () => {
//     const [isLogin, setIsLogin] = useState(false);
//     const [fullName, setFullName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const isLoading = useSelector(store=>store.app.isLoading);
 
//     const loginHandler = () => {
//         setIsLogin(!isLogin);
//     }
//     const getInputData = async (e)=>{
//         e.preventDefault();
//         dispatch(setLoading(true));
//         if(isLogin){
//             //login
//             const user = {email,password}; 
//             try {
//                 const res = await axios.post(`${API_END_POINT}/login`, user,{
//                     headers:{
//                         'Content-Type':'application/json'
//                     },
//                     withCredentials:true
//                 });
//                 if(res.data.success){
//                     toast.success(res.data.message);
//                 }
//                 dispatch(setUser(res.data.user));
//                 navigate("/browse");
//             } catch (error) {
//                 toast.error(error.response.data.message);
//                 console.log(error);
//             } finally {
//                 dispatch(setLoading(false));
//             }
//         }else{
//             //register
//             dispatch(setLoading(true));
//             const user = {fullName, email, password};
//             try {
//                 const res = await axios.post(`${API_END_POINT}/register`,user,{
//                     headers:{
//                         'Content-Type':'application/json'
//                     },
//                     withCredentials:true
//                 });
//                 if(res.data.success){
//                     toast.success(res.data.message);
//                 }
//                 setIsLogin(true);
//             } catch (error) {
//                 toast.error(error.response.data.message);
//                 console.log(error);
//             } finally{
//                 dispatch(setLoading(false));
//             }
//         }
//         setFullName("");
//         setEmail("");
//         setPassword("");
//     }
//     return (
//         <div>
//             <Header />
//             <div className='absolute'>
//                 <img className='w-[100vw] h-[100vh] bg-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="banner" />
//             </div>
//             <form onSubmit={getInputData} className='flex flex-col w-3/12 p-12 my-36 left-0 right-0  mx-auto items-center justify-center absolute rounded-md bg-black opacity-90'>
//                 <h1 className='text-3xl text-white mb-5 font-bold'>{isLogin ? "Login" : "Signup"}</h1>
//                 <div className='flex flex-col'>
//                     {
//                         !isLogin && <input value={fullName} onChange={(e)=>setFullName(e.target.value)} type='text' placeholder='Fullname' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
//                     }
//                     <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
//                     <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
//                     <button type='submit' className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'>{`${isLoading ? "loading...":(isLogin?"Login":"Signup")}`}</button>
//                     <p className='text-white mt-2'>{isLogin ? "New to Netflix?" : "Already have an account?"}<span onClick={loginHandler} className='ml-1 text-blue-900 font-medium cursor-pointer'>{isLogin ? "Signup" : "Login"}</span></p>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default Login












// import React, { useState } from 'react';
// import Header from './Header';


// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../redux/actions/userActions'; // Updated path

// const Login = () => {
//   const [isLogin, setIsLogin] = useState(false);
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const toggleLoginMode = () => {
//     setIsLogin(!isLogin);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const user = isLogin
//         ? { email, password } // Login payload
//         : { fullName, email, password }; // Signup payload

//       const endpoint = isLogin ? '/login' : '/register';
//       const res = await axios.post(`${API_END_POINT}${endpoint}`, user, {
//         headers: { 'Content-Type': 'application/json' },
//         withCredentials: true,
//       });

//       if (res.data.success) {
//         toast.success(res.data.message);

//         if (isLogin) {
//           dispatch(setUser(res.data.user)); // Set user in Redux store
//           navigate('/browse'); // Redirect to browse
//         } else {
//           setIsLogin(true); // Switch to login mode after signup
//         }
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || 'An error occurred');
//       console.error(error);
//     }

//     // Clear inputs
//     setFullName('');
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <div>
//       <Header />
//       <div className="absolute">
//         <img
//           className="w-[100vw] h-[100vh]"
//           src="https://wallpapers.com/images/file/netflix-background-gs7hjuwvv2g0e9fj.jpg"
//           alt="banner"
//         />
//       </div>
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col w-3/12 p-12 my-36 left-0 right-0 mx-auto items-center justify-center absolute rounded-md bg-black opacity-80"
//       >
//         <h1 className="text-2xl text-white mb-5 font-bold">
//           {isLogin ? 'Login' : 'Signup'}
//         </h1>
//         <div className="flex flex-col">
//           {!isLogin && (
//             <input
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               type="text"
//               placeholder="Username"
//               className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
//             />
//           )}
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="Email"
//             className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
//           />
//           <input
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             placeholder="Password"
//             className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
//           />
//           <button className="bg-red-600 mt-6 p-3 text-white rounded-sm font-medium">
//             {isLogin ? 'Login' : 'Signup'}
//           </button>
//           <p className="text-white mt-2">
//             {isLogin ? 'New to Netflix?' : 'Already have an account?'}
//             <span
//               onClick={toggleLoginMode}
//               className="ml-1 text-blue-900 font-medium cursor-pointer"
//             >
//               {isLogin ? 'Signup' : 'Login'}
//             </span>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;












// import React, { useState } from 'react'
// import Header from './Header';
// import axios from "axios";
// import { API_END_POINT } from '../utils/constant';
// import toast from "react-hot-toast"
// import {useNavigate} from "react-router-dom"
// import {useDispatch, useSelector} from "react-redux";
// import { setLoading, setUser } from '../redux/userSlice';


// const Login = () => {
//     const [isLogin, setIsLogin] = useState(false);
//     const [fullName, setFullName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const isLoading = useSelector(store=>store.app.isLoading);
 
//     const loginHandler = () => {
//         setIsLogin(!isLogin);
//     }
//     const getInputData = async (e)=>{
//         e.preventDefault();
//         dispatch(setLoading(true));
//         if(isLogin){
//             //login
//             const user = {email,password}; 
//             try {
//                 const res = await axios.post(`${API_END_POINT}/login`, user,{
//                     headers:{
//                         'Content-Type':'application/json'
//                     },
//                     withCredentials:true
//                 });
//                 if(res.data.success){
//                     toast.success(res.data.message);
//                 }
//                 dispatch(setUser(res.data.user));
//                 navigate("/browse");
//             } catch (error) {
//                 toast.error(error.response.data.message);
//                 console.log(error);
//             } finally {
//                 dispatch(setLoading(false));
//             }
//         }else{
//             //register
//             dispatch(setLoading(true));
//             const user = {fullName, email, password};
//             try {
//                 const res = await axios.post(`${API_END_POINT}/register`,user,{
//                     headers:{
//                         'Content-Type':'application/json'
//                     },
//                     withCredentials:true
//                 });
//                 if(res.data.success){
//                     toast.success(res.data.message);
//                 }
//                 setIsLogin(true);
//             } catch (error) {
//                 toast.error(error.response.data.message);
//                 console.log(error);
//             } finally{
//                 dispatch(setLoading(false));
//             }
//         }
//         setFullName("");
//         setEmail("");
//         setPassword("");
//     }
    
//     return (
//         <div>
//             <Header />
//             <div className='absolute'>
//                 <img className='w-[100vw] h-[100vh] bg-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="banner" />
//             </div>
//             <form onSubmit={getInputData} className='flex flex-col w-3/12 p-12 my-36 left-0 right-0  mx-auto items-center justify-center absolute rounded-md bg-black opacity-90'>
//                 <h1 className='text-3xl text-white mb-5 font-bold'>{isLogin ? "Login" : "Signup"}</h1>
//                 <div className='flex flex-col'>
//                     {
//                         !isLogin && <input value={fullName} onChange={(e)=>setFullName(e.target.value)} type='text' placeholder='Fullname' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
//                     }
//                     <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
//                     <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
//                     <button type='submit' className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'>{`${isLoading ? "loading...":(isLogin?"Login":"Signup")}`}</button>
//                     <p className='text-white mt-2'>{isLogin ? "New to Netflix?" : "Already have an account?"}<span onClick={loginHandler} className='ml-1 text-blue-900 font-medium cursor-pointer'>{isLogin ? "Signup" : "Login"}</span></p>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default Login





// import React, { useState, useEffect } from 'react';
// import Header from './Header';
// import axios from "axios";
// import { API_END_POINT } from '../utils/constant';
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setLoading, setUser } from '../redux/userSlice';

// const Login = () => {
//     const [isLogin, setIsLogin] = useState(false);
//     const [fullName, setFullName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const { user } = useSelector(store => store.app);

//     const isLoading = useSelector(store => store.app.isLoading);

//     useEffect(() => {
//         // Redirect to /browse if user is already logged in
//         if (user) {
//             navigate("/browse");
//         }
//     }, [user, navigate]);

//     const toggleLoginMode = () => {
//         setIsLogin(!isLogin);
//     };

//     const handleFormSubmit = async (e) => {
//         e.preventDefault();
//         dispatch(setLoading(true));

//         try {
//             const userPayload = isLogin
//                 ? { email, password }
//                 : { fullName, email, password };

//             const endpoint = isLogin ? "/login" : "/register";

//             const res = await axios.post(`${API_END_POINT}${endpoint}`, userPayload, {
//                 headers: { 'Content-Type': 'application/json' },
//                 withCredentials: true
//             });

//             if (res.data.success) {
//                 toast.success(res.data.message);

//                 if (isLogin) {
//                     dispatch(setUser(res.data.user));
//                     navigate("/browse"); // Redirect on successful login
//                 } else {
//                     setIsLogin(true); // Switch to login mode after successful signup
//                 }
//             }
//         } catch (error) {
//             const errorMessage = error.response?.data?.message || "An error occurred.";
//             toast.error(errorMessage);
//             console.error(errorMessage);
//         } finally {
//             dispatch(setLoading(false));
//             setFullName("");
//             setEmail("");
//             setPassword("");
//         }
//     };

//     return (
//         <div>
//             <Header />
//             <div className='absolute'>
//                 <img
//                     className='w-[100vw] h-[100vh] bg-cover'
//                     src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
//                     alt="banner"
//                 />
//             </div>
//             <form
//                 onSubmit={handleFormSubmit}
//                 className='flex flex-col w-3/12 p-12 my-36 left-0 right-0 mx-auto items-center justify-center absolute rounded-md bg-black opacity-90'
//             >
//                 <h1 className='text-3xl text-white mb-5 font-bold'>
//                     {isLogin ? "Login" : "Signup"}
//                 </h1>
//                 <div className='flex flex-col'>
//                     {!isLogin && (
//                         <input
//                             value={fullName}
//                             onChange={(e) => setFullName(e.target.value)}
//                             type='text'
//                             placeholder='Full Name'
//                             className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'
//                         />
//                     )}
//                     <input
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         type='email'
//                         placeholder='Email'
//                         className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'
//                     />
//                     <input
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         type='password'
//                         placeholder='Password'
//                         className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'
//                     />
//                     <button
//                         type='submit'
//                         className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'
//                     >
//                         {isLoading ? "Loading..." : isLogin ? "Login" : "Signup"}
//                     </button>
//                     <p className='text-white mt-2'>
//                         {isLogin ? "New to Netflix?" : "Already have an account?"}
//                         <span
//                             onClick={toggleLoginMode}
//                             className='ml-1 text-blue-900 font-medium cursor-pointer'
//                         >
//                             {isLogin ? "Signup" : "Login"}
//                         </span>
//                     </p>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Login;




import React, { useState } from 'react'
import Header from './Header';
import axios from "axios";
import { API_END_POINT } from '../utils/constant';
import toast from "react-hot-toast"
import {useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import { setLoading, setUser } from '../redux/userSlice';


const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isLoading = useSelector(store=>store.app.isLoading);
 
    const loginHandler = () => {
        setIsLogin(!isLogin);
    }
    const getInputData = async (e)=>{
        e.preventDefault();
        dispatch(setLoading(true));
        if(isLogin){
            //login
            const user = {email,password}; 
            try {
                const res = await axios.post(`${API_END_POINT}/login`, user,{
                    headers:{
                        'Content-Type':'application/json'
                    },
                    withCredentials:true
                });
                if(res.data.success){
                    toast.success(res.data.message);
                }
                dispatch(setUser(res.data.user));
                navigate("/browse");
            } catch (error) {
                toast.error(error.response.data.message);
                console.log(error);
            } finally {
                dispatch(setLoading(false));
            }
        }else{
            //register
            dispatch(setLoading(true));
            const user = {fullName, email, password};
            try {
                const res = await axios.post(`${API_END_POINT}/register`,user,{
                    headers:{
                        'Content-Type':'application/json'
                    },
                    withCredentials:true
                });
                if(res.data.success){
                    toast.success(res.data.message);
                }
                setIsLogin(true);
            } catch (error) {
                toast.error(error.response.data.message);
                console.log(error);
            } finally{
                dispatch(setLoading(false));
            }
        }
        setFullName("");
        setEmail("");
        setPassword("");
    }
    
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img className='w-[100vw] h-[100vh] bg-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="banner" />
            </div>
            <form onSubmit={getInputData} className='flex flex-col w-3/12 p-12 my-36 left-0 right-0  mx-auto items-center justify-center absolute rounded-md bg-black opacity-90'>
                <h1 className='text-3xl text-white mb-5 font-bold'>{isLogin ? "Login" : "Signup"}</h1>
                <div className='flex flex-col'>
                    {
                        !isLogin && <input value={fullName} onChange={(e)=>setFullName(e.target.value)} type='text' placeholder='Fullname' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
                    }
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
                    <button type='submit' className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'>{`${isLoading ? "loading...":(isLogin?"Login":"Signup")}`}</button>
                    <p className='text-white mt-2'>{isLogin ? "New to Netflix?" : "Already have an account?"}<span onClick={loginHandler} className='ml-1 text-blue-900 font-medium cursor-pointer'>{isLogin ? "Signup" : "Login"}</span></p>
                </div>
            </form>
        </div>
    )
}

export default Login