import React, { useState } from 'react'
import Button from '../component/Button'
import Signup from './Signup'
import { Link } from 'react-router-dom'

const Login = () => {
    const [loginFormData , setLoginFormData] = useState({email: "", password: "" });
    const [loginErrorFormData, setLoginErrorFormData] = useState({});
    const changeHandle = (e)=>{
        const {name, value } = e.target;
        setLoginFormData({
            ...loginFormData,
            [name ] : value
        })

    }
   
    const loginSubmitHandle =(e)=>{
         e.preventDefault();

        // setLoginErrorFormData({ ...loginFormData, [e.target.name]: e.target.value })


}
    return (

        <div className="flex justify-center items-center h-screen ">
            <div className="w-[50%] p-4 ">
              <div className='  <h1 className=" text-yellow-400 flex justify-center items-center mb-6">Login</h1>'>
                <h1>Login</h1>
              </div>
                <form action="" onSubmit={loginSubmitHandle}>
                    <div className="grid gap-6  mb-6 md:grid-rows-2">

                        <div className="mb-1">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                            <input type="email" id="email" value={loginFormData.email} onChange={changeHandle} name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" id="password" value={loginFormData.password}  
                            onChange={changeHandle} name='password'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" required />
                        </div>
                        <Link to={"/"}>
                        <Button text="Login" type="submit" />
                        </Link>
                      
                    </div>
                   
                </form>
                <div className='flex justify-center items-center flex-col'>

                <p> do not have an account? <Link to={'/signup'}><span> /signup </span></Link></p>
                </div>
                
                        

            </div>
             
        </div>


    )
}

export default Login