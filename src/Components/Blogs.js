import React from 'react';
import { Link } from 'react-router-dom';
import {  HiOutlineArrowRight} from "react-icons/hi";
import Advertisement from './Shared/Advertisement';
const Blogs = () => {
     return (
          <div className='mx-2'>
               <h1 className='text-center text-3xl my-5 mx-5 font-bold'>For Engineers, Developers and Server Admins.</h1>
               <form className='flex  justify-center mb-10'>
                    <input className='input input-bordered w-ful' type="text" placeholder='Search...' />
                    <input type="submit" value="Search" className='btn btn-primary ml-1' />
               </form>
               <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
               <div className="bg-secondary shadow-xl">
  <figure><img src="https://images.pexels.com/photos/773760/pexels-photo-773760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
  <div className="px-2">
     <p className='font-bold text-primary mt-3'>Java, Foor Loop</p>
    <h2 className="text-2xl font-bold hover:text-primary cursor-pointer my-2">This is a title</h2>
    <p className='text-xs'>By <span className='font-bold'>Al Mahfuz</span> , Published on 12 May 2023</p>
    <p className='text-xl mt-1'>et iusto sed quo iure voluptatem occae...</p>
    <Link className='hover:font-bold text-primary mt-3 hover:ease-in duration-300 flex items-end text-xl mb-5'>Continue Reading <HiOutlineArrowRight className='text-xl font-extrabold'/> </Link>
    
  </div>
</div>
               <div className="bg-secondary shadow-xl">
  <figure><img src="https://images.pexels.com/photos/773760/pexels-photo-773760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
  <div className="px-2">
     <p className='font-bold text-primary mt-3'>Java, Foor Loop</p>
    <h2 className="text-2xl font-bold hover:text-primary cursor-pointer my-2">This is a title</h2>
    <p className='text-xs'>By <span className='font-bold'>Al Mahfuz</span> , Published on 12 May 2023</p>
    <p className='text-xl mt-1'>et iusto sed quo iure voluptatem occae...</p>
    <Link className='hover:font-bold text-primary mt-3 hover:ease-in duration-300 flex items-end text-xl mb-5'>Continue Reading <HiOutlineArrowRight className='text-xl font-extrabold'/> </Link>
    
  </div>
</div>
               <div className="bg-secondary shadow-xl">
  <figure><img src="https://images.pexels.com/photos/773760/pexels-photo-773760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
  <div className="px-2">
     <p className='font-bold text-primary mt-3'>Java, Foor Loop</p>
    <h2 className="text-2xl font-bold hover:text-primary cursor-pointer my-2">This is a title</h2>
    <p className='text-xs'>By <span className='font-bold'>Al Mahfuz</span> , Published on 12 May 2023</p>
    <p className='text-xl mt-1'>et iusto sed quo iure voluptatem occae...</p>
    <Link className='hover:font-bold text-primary mt-3 hover:ease-in duration-300 flex items-end text-xl mb-5'>Continue Reading <HiOutlineArrowRight className='text-xl font-extrabold'/> </Link>
    
  </div>
</div>
               <div className="bg-secondary shadow-xl">
  <figure><img src="https://images.pexels.com/photos/773760/pexels-photo-773760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
  <div className="px-2">
     <p className='font-bold text-primary mt-3'>Java, Foor Loop</p>
    <h2 className="text-2xl font-bold hover:text-primary cursor-pointer my-2">This is a title</h2>
    <p className='text-xs'>By <span className='font-bold'>Al Mahfuz</span> , Published on 12 May 2023</p>
    <p className='text-xl mt-1'>et iusto sed quo iure voluptatem occae...</p>
    <Link className='hover:font-bold text-primary mt-3 hover:ease-in duration-300 flex items-end text-xl mb-5'>Continue Reading <HiOutlineArrowRight className='text-xl font-extrabold'/> </Link>
    
  </div>
</div>
               </div>
              <div className='mx-auto text-center mt-10'>
              <button className='btn btn-primary w-64 btn-md'>Load More</button>
              <Advertisement/>
              </div>
          </div>
     );
};
export default Blogs;