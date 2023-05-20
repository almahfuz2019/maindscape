import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
const Users = () => {
     return (
          <section>
          <div className='text-center my-5'>
           <span className='text-white text-3xl font-bold bg-primary rounded p-2'>Total Users: 6</span>
          </div>
          <div className='text-center'>
          <input type="text" placeholder="Type here" className="input w-full max-w-xs input-primary" />
          </div>
          <div className="overflow-x-auto my-5">
   <table className="table w-full">
     {/* head */}
     <thead>
       <tr>
         <th>No</th>
         <th className='text-center'>Email</th>
         <th className='text-center'>Role</th>
         <th className='text-end'>Action</th>
       </tr>
     </thead>
     <tbody>
       {/* row 1 */}
       <tr>
         <th>1</th>
 <td className='text-center'>almahfuz342@gmail.com</td>
 <td className='text-center'>Admin</td>
 <td><div className='flex gap-3 text-2xl justify-end'>
 <BiEdit/>
 </div></td>
       </tr>
       <tr>
         <th>2</th>
 <td className='text-center'>almahfuz342@gmail.com</td>
 <td className='text-center'>Admin</td>
 <td><div className='flex gap-3 text-2xl justify-end'>
 <BiEdit/>
 </div></td>
       </tr>
       <tr>
         <th>3</th>
 <td className='text-center'>almahfuz342@gmail.com</td>
 <td className='text-center'>Admin</td>
 <td><div className='flex gap-3 text-2xl justify-end'>
 <BiEdit/>
 </div></td>
       </tr>
       <tr>
         <th>4</th>
 <td className='text-center'>almahfuz342@gmail.com</td>
 <td className='text-center'>Admin</td>
 <td><div className='flex gap-3 text-2xl justify-end'>
 <BiEdit/>
 </div></td>
       </tr>
       <tr>
         <th>5</th>
 <td className='text-center'>almahfuz342@gmail.com</td>
 <td className='text-center'>Admin</td>
 <td><div className='flex gap-3 text-2xl justify-end'>
 <BiEdit/>
 </div></td>
       </tr>
     </tbody>
   </table>
 </div>
           </section>
     );
};
export default Users;