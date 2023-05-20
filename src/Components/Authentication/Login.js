import React from 'react';
import { Link } from 'react-router-dom';
import SignInWithGoogle from './SignInWithGoogle';
const Login = () => {
     return (
          <div className='py-10'>
               <div className='flex rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl border border-primary border-opacity-30'>
               <div className='hidden lg:block lg:w-1/2 bg-cover' style={{backgroundImage:"url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')"}}>
               </div>
               <div className='p-8 lg:w-1/2'>
               <h1 className='text-primary font-bold text-3xl text-center'>Mindspace</h1>
               <SignInWithGoogle/>
               <div className="divider">OR</div>
               <form action="">
                <div className='mt-4'>
                    <label className='text-gray-700 text-sm font-bold mb-2 block'>Email Address</label>
                    <input className='bg-gray-200 text-primary focus:outline-primary border border-gray-300 rounded py-2 px-4 w-full' type="text" placeholder='Type your email address' />
                </div>
                <div className='mt-4'>
                    <label className='text-gray-700 text-sm font-bold mb-2 block'>Password</label>
                    <input className='bg-gray-200 text-primary focus:outline-primary border border-gray-300 rounded py-2 px-4 w-full' type="text" placeholder='Type your password' />
                </div>
                <div className='text-end mt-4'>
                <Link className='underline hover:text-primary hover:font-semibold'>forget password</Link>
                </div>
                <input className='bg-primary font-bold  text-white w-full py-2 px-4 rounded cursor-pointer mt-8' type="submit" value="Login" />
               </form>
               <p className='text-gray-500 text-xs mt-4 text-center'>Don’t have an account? <Link to="/registration" className='underline text-primary font-bold'>Sign Up</Link></p>
               </div>
               
               </div>
          </div>
     );
};
export default Login;