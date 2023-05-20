import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
const WaitingBlog = () => {
     return (
          <section>
          <div className='text-center my-5'>
           <span className='text-white text-3xl font-bold bg-primary rounded p-2'>Total Blogs: 6</span>
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
         <th>Image</th>
         <th>Title</th>
         <th>Category</th>
         <th>Status</th>
         <th>Action</th>
       </tr>
     </thead>
     <tbody>
       {/* row 1 */}
       <tr>
         <th>1</th>
         <td className=''><div className="avatar border-2 border-primary  rounded">
   <div className="w-12 mask mask-squircle">
     <img src="https://images.pexels.com/photos/773760/pexels-photo-773760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
   </div>
 </div></td>
 <td>Iure voluptatem occaecat</td>
 <td>Java <br />
 Author: Al Mahfuz</td>
 <td>Available</td>
 <td><div className='flex gap-3 text-2xl'>
 <BiEdit/> <RiDeleteBin5Line/>
 </div></td>
       </tr>
       <tr>
         <th>1</th>
         <td className=''><div className="avatar border-2 border-primary  rounded">
   <div className="w-12 mask mask-squircle">
     <img src="https://images.pexels.com/photos/773760/pexels-photo-773760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
   </div>
 </div></td>
 <td>Iure voluptatem occaecat</td>
 <td>Java <br />
 Author: Al Mahfuz</td>
 <td>Available</td>
 <td><div className='flex gap-3 text-2xl'>
 <BiEdit/> <RiDeleteBin5Line/>
 </div></td>
       </tr>
       <tr>
         <th>1</th>
         <td className=''><div className="avatar border-2 border-primary  rounded">
   <div className="w-12 mask mask-squircle">
     <img src="https://images.pexels.com/photos/773760/pexels-photo-773760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
   </div>
 </div></td>
 <td>Iure voluptatem occaecat</td>
 <td>Java <br />
 Author: Al Mahfuz</td>
 <td>Available</td>
 <td><div className='flex gap-3 text-2xl'>
 <BiEdit/> <RiDeleteBin5Line/>
 </div></td>
       </tr>
       <tr>
         <th>1</th>
         <td className=''><div className="avatar border-2 border-primary  rounded">
   <div className="w-12 mask mask-squircle">
     <img src="https://images.pexels.com/photos/773760/pexels-photo-773760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
   </div>
 </div></td>
 <td>Iure voluptatem occaecat</td>
 <td>Java <br />
 Author: Al Mahfuz</td>
 <td>Available</td>
 <td><div className='flex gap-3 text-2xl'>
 <BiEdit/> <RiDeleteBin5Line/>
 </div></td>
       </tr>
       <tr>
         <th>1</th>
         <td className=''><div className="avatar border-2 border-primary  rounded">
   <div className="w-12 mask mask-squircle">
     <img src="https://images.pexels.com/photos/773760/pexels-photo-773760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
   </div>
 </div></td>
 <td>Iure voluptatem occaecat</td>
 <td>Java <br />
 Author: Al Mahfuz</td>
 <td>Available</td>
 <td><div className='flex gap-3 text-2xl'>
 <BiEdit/> <RiDeleteBin5Line/>
 </div></td>
       </tr>
       <tr>
         <th>1</th>
         <td className=''><div className="avatar border-2 border-primary  rounded">
   <div className="w-12 mask mask-squircle">
     <img src="https://images.pexels.com/photos/773760/pexels-photo-773760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
   </div>
 </div></td>
 <td>Iure voluptatem occaecat</td>
 <td>Java <br />
 Author: Al Mahfuz</td>
 <td>Available</td>
 <td><div className='flex gap-3 text-2xl'>
 <BiEdit/> <RiDeleteBin5Line/>
 </div></td>
       </tr>
     </tbody>
   </table>
 </div>
           </section>
     );
};
export default WaitingBlog;