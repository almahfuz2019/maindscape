import React from 'react';
const Advertisement = () => {
     return (
     <div>
          <div className='px-6 py-12 bg-primary rounded my-10'>
               <div className='flex justify-between items-center'>
                   <h1 className='text-5xl font-bold text-white'>Up to 50% Off</h1>
                   <p className='text-xl text-white'>Plus free shipping! Use code: <span className='font-bold'>MAAMA MIA</span></p> 
                   <button className='text-white rounded-md border border-white py-3 px-5'>Shop Now</button>
               </div>
          </div>
     </div>
     );
};
export default Advertisement;