import React, { useState } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
const AddBlog = () => {
     const [value, setValue] = useState('');
     return (
          <div className='md:w-1/2 mx-auto'>
              <div className='my-10 sm:my-24 border-2 border-primary rounded-lg p-4'>
               <h1 className='font-bold mb-1 text-lg'>Add a blog</h1>
               <form action="">
                 <div>
                 <label className='text-sm text-gray-600'>Blog title</label>
                 <input className='mt-1 mb-3 text-base w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8' type="text" />
                 </div>
                 <div>
                 <label className='text-sm text-gray-600'>Author Name</label>
                 <input className='mt-1 mb-3 text-base w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8' type="text" />
                 </div>
                 <div>
                 <label className='text-sm text-gray-600'>Author Email</label>
                 <input className='mt-1 mb-3 text-base w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8' type="text" />
                 </div>
                 <div>
                 <label className='text-sm text-gray-600'>Keywords</label>
                 <input className='mt-1 mb-3 text-base w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8' type="text" />
                 </div>
                 <div>
                 <label className='text-sm text-gray-600'>Description</label>
                 <ReactQuill className='h-32 mb-5' theme="snow" value={value} onChange={setValue} />
                 </div>
                 <br />
                 <br />
                 <div>
                 <label className='text-sm  text-gray-600 '>Select a category</label>
                 <br />
                 <select className='select select-bordered w-full mt-2'>
                    <option selected className='font-bold ' value="">Java</option>
                    <option className='font-bold ' value="">React</option>
                 </select>
                 </div>
                 <br />
                 <div>
                 <label className='text-sm  text-gray-600 '>Select status</label>
                 <br />
                 <select className='select select-bordered w-full mt-2'>
                    <option selected className='font-bold ' value="">Active</option>
                    <option className='font-bold ' value="">Active</option>
                 </select>
                 </div>
                 <div>
                 <label className='text-sm  text-gray-600 '>Select status</label>
                 <input className='mt-1 mb-3 text-base w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8' type="file" name="" id="" />
                 </div>
                 <input className='w-full mt-2 text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg' type="submit" value="submit" />
               </form>
               <p className='text-xs text-gray-500 mt-3'>This is very important for your blog.So,be careful.</p>
              </div>
          </div>
     );
};
export default AddBlog;