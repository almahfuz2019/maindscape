import React from 'react';
const SignInWithGoogle = () => {
     return (
          <div>
               <button className='flex w-full justify-center mt-4 rounded-lg shadow-md hover:bg-gray-100 border border-primary border-opacity-30 px-4 py-3'>
                    <div>
                         <img className='h-6 w-6' src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="" />
                    </div>
                    <div>
                         <h1 className='ms-3 font-bold text-xl'>Sing up with google</h1>
                    </div>
               </button>
          </div>
     );
};
export default SignInWithGoogle;