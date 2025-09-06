import React from 'react'
import Button from '../component/Button'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
            <div className="w-[50%] p-4 ">
              <div className='  <h1 className=" text-yellow-400 flex justify-center items-center mb-6">Login</h1>'>
                <h1>sign up</h1>
              </div>
                <form action="">
                    <div className="grid gap-2 mb-3 md:grid-rows-6">
                        <div className="mb-1">
                            <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">first name</label>
                            <input type="text" id="firstName" name='firstName' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="first name" required />
                        </div><div className="mb-1">
                            <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">last name</label>
                            <input type="text" id="lastName" name='lastName' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required />
                        </div>


                        <div className="mb-1">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" required />
                        </div>
                        <div className="flex gap-6 items-center">
                        <div className="flex items-center ">
                 <input id="female" type="radio" value="female" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                 <label htmlFor="female" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">female</label>
             </div>
             <div className="flex items-center">
                 <input  id="male" type="radio" value="male" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700"/>
                 <label htmlFor="male" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">male</label>
             </div>
             </div>
                        <Link to={"/login"}>
                        <Button text="sign up" />
                        </Link>
                      
                    </div>
                   
                </form>
                <div className='flex justify-center items-center flex-col'>

                <p> already have an account? <Link to={'/login'}><span> /login </span></Link></p>
                </div>
                
                        

            </div>
             
        </div>
  )
}

export default Signup