import React from 'react';
const LoadComments = () => {
     return (
          <div className='my-5 '>
              <h1 className='text-xl font-bold border border-primary p-1 rounded'>Total Comments:01</h1>
              <div className='flex gap-5 border border-primary p-4 rounded-lg mt-3'>
               <img className='h-12 w-12 rounded-lg object-cover' src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
               <div>
                    <h5 className='font-semibold'>Abdullah al mahfuz</h5>
                    <p className='text-gray-500'>Very good</p>
               </div>
              </div>
          </div>
     );
};
export default LoadComments;