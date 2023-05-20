import React from 'react';
import Advertisement from './Shared/Advertisement';
import LoadCategories from './LoadCategories';
import CommentForm from './CommentForm';
import LoadComments from './LoadComments';
const BlogDetails = () => {
     return (
          <div className='mx-3 mt-10'>
               <div className='flex'>
             <div className='text-center'>
               <h1 className='text-xl sm:text-3xl font-bold'>Acusantium quis pariatur molestiae porro eius</h1>
               <p className='font-bold'>12 May 2023 <span className='text-primary'> Java, For Loop</span></p>
               <div className='flex justify-center my-8'> 
               <img className='rounded md:h-96' src="https://images.pexels.com/photos/5887839/pexels-photo-5887839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
               </div>
               <p className='text-justify'>et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit autet iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit autet iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit autet iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut</p>
               <Advertisement/>
               <div className='text-start'>
               <CommentForm/>
               <LoadComments/>
               </div>
               </div>
               <div>
                    <LoadCategories/>
               </div> 
               </div>
               <div>
                   
               </div>
          </div>
     );
};
export default BlogDetails;