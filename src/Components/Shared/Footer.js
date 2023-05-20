import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineGoogle, AiOutlineInstagram } from "react-icons/ai";
import { ImPinterest2 } from "react-icons/im";
import { CiFacebook, CiTwitter } from "react-icons/ci";
const Footer = () => {
     let navItems=<>
     <li><NavLink className=" text-black text-xl" to="/">Home</NavLink></li>
     <li><NavLink className=" text-black text-xl" to="/authors">Authors</NavLink></li>
     <li><NavLink className=" text-black text-xl" to="/faq">FAQ</NavLink></li>
     <li><NavLink className=" text-black text-xl" to="/deshboard">Deshboard</NavLink></li>
     <li><NavLink className=" text-black text-xl" to="/contact">Contact</NavLink></li>
     </>
     return (
          <div>
               <footer className="footer items-center border-t-2 border-primary  p-14 bg-secondary text-neutral-content">
  <div className="items-center grid-flow-col">
   <ul className='flex items-center justify-center gap-5'>
     {navItems}
   </ul>
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <AiOutlineInstagram  className='text-xl p-2 text-white w-10 h-10 bg-primary rounded-full'/>
    <ImPinterest2 className='text-xl p-2 text-white w-10 h-10 bg-primary rounded-full'/>
    <CiTwitter className='text-xl p-2 text-white w-10 h-10 bg-primary rounded-full'/>
    <CiFacebook className='text-xl p-2 text-white w-10 h-10 bg-primary rounded-full'/>
    <AiOutlineGoogle className='text-xl p-2 text-white w-10 h-10 bg-primary rounded-full'/>
  </div>
</footer>
          </div>
     );
};
export default Footer;