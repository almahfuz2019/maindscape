import React from 'react';
const LoadCategories = () => {
     return (
          <div className='w-48 hidden md:block border-2 rounded-lg p-3  border-primary m-5'>
               <h1 className='text-xl border-b-4 border-primary pb-1 font-bold'>Categories</h1>
               <div>
                    <p className='font-bold mt-3 '>#JavaScript</p>
                    <p className='font-bold mt-3 '>#Java</p>
                    <p className='font-bold mt-3 '>#HTML</p>
                    <p className='font-bold mt-3 '>#Python</p>
                    <p className='font-bold mt-3 '>#PHP</p>
               </div>
          </div>
     );
};
export default LoadCategories;