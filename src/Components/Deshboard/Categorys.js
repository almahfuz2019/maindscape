import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
const Categorys = () => {
     return (
       <div className='mx-2 sm:mx-10 mt-10'>
      <section className='border-2 border-primary p-2 rounded-lg'>
        <h1 className='font-bold text-3xl'>Createa category</h1>
        <form>
          <label className='text-gray-600 text-sm' htmlFor="">Category Name</label>
          <div>
          <input className='mt-1 mb-3 text-base w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8' placeholder='Type here' type="text" name="" id="" />
          <input className='btn btn-primary sm:btn-md btn-sm font-bold' type="submit" value="submit" />
          </div>
        </form>
      </section>
      <section>
        <br />
      <div className="overflow-x-auto my-5">
   <table className="table w-full">
     {/* head */}
     <thead>
       <tr>
         <th>No</th>
         <th className='text-center'>Category</th>
         <th className='text-end'>Action</th>
       </tr>
     </thead>
     <tbody>
       {/* row 1 */}
       <tr>
         <th>1</th>
 <td className='text-center'>JavaScript</td>
 <td><div className='flex gap-3 text-2xl justify-end'>
 <BiEdit/> <RiDeleteBin5Line/>
 </div></td>
       </tr>
       <tr>
         <th>2</th>
 <td className='text-center'>JavaScript</td>
 <td><div className='flex gap-3 text-2xl justify-end'>
 <BiEdit/> <RiDeleteBin5Line/>
 </div></td>
       </tr>
       <tr>
         <th>3</th>
 <td className='text-center'>JavaScript</td>
 <td><div className='flex gap-3 text-2xl justify-end'>
 <BiEdit/> <RiDeleteBin5Line/>
 </div></td>
       </tr>
       <tr>
         <th>4</th>
 <td className='text-center'>JavaScript</td>
 <td><div className='flex gap-3 text-2xl justify-end'>
 <BiEdit/> <RiDeleteBin5Line/>
 </div></td>
       </tr>
       <tr>
         <th>5</th>
 <td className='text-center'>JavaScript</td>
 <td><div className='flex gap-3 text-2xl justify-end'>
 <BiEdit/> <RiDeleteBin5Line/>
 </div></td>
       </tr>
       
     </tbody>
   </table>
 </div>
      </section>
       </div>
     );
};
export default Categorys;